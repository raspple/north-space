/*
# Create database trigger to notify edge function on new enquiry

1. Purpose
   When a new row is inserted into the `enquiries` table, a database trigger
   fires that calls the `send-enquiry-notification` edge function via the
   Supabase Edge Functions HTTP endpoint. The edge function sends an email
   notification to the site owner with the enquiry details.

2. New Objects
   - `notify_enquiry()` — a SECURITY DEFINER plpgsql function that constructs
     the payload from the NEW row and uses `net.http_post` (pg_net extension)
     to call the edge function.
   - Trigger `on_enquiry_insert` — AFTER INSERT trigger on `enquiries`
     that calls `notify_enquiry()`.

3. Security
   - The function runs as SECURITY DEFINER so it can use the service role
     to call the edge function endpoint.
   - The trigger only fires on INSERT, so existing data is unaffected.

4. Notes
   - The edge function URL is constructed from the Supabase project URL
     stored in the `supabase` schema or via the `SUPABASE_URL` env.
   - Uses pg_net extension for outbound HTTP from Postgres.
*/

-- Enable pg_net if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create the notification function
CREATE OR REPLACE FUNCTION public.notify_enquiry()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_url text;
  v_payload jsonb;
BEGIN
  v_url := current_setting('app.supabase_url', true) || '/functions/v1/send-enquiry-notification';

  v_payload := jsonb_build_object(
    'id', NEW.id,
    'name', NEW.name,
    'email', NEW.email,
    'phone', NEW.phone,
    'company', NEW.company,
    'service_type', NEW.service_type,
    'location', NEW.location,
    'message', NEW.message,
    'mail_handling', NEW.mail_handling,
    'people_count', NEW.people_count,
    'catering', NEW.catering,
    'office_size', NEW.office_size
  );

  PERFORM net.http_post(
    url := v_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.supabase_service_role_key', true)
    ),
    body := v_payload
  );

  RETURN NEW;
END;
$$;

-- Create the trigger
DROP TRIGGER IF EXISTS on_enquiry_insert ON public.enquiries;
CREATE TRIGGER on_enquiry_insert
  AFTER INSERT ON public.enquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_enquiry();
