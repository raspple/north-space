/*
# Align enquiries table with website forms

1. Purpose
   Add the field names used by the current website to the existing enquiries
   table without removing or changing any existing data.

2. New columns on `enquiries`
   - `service_type`: selected workspace service.
   - `location`: preferred workspace location.
   - `name`: visitor's name.
   - `phone`: visitor's phone number.
   - `company`: visitor's company.
   - `status`: internal enquiry status.
   - `mail_handling`: virtual office mail preference.
   - `people_count`: meeting room attendee range.
   - `catering`: meeting room catering choice.
   - `office_size`: serviced office size preference.

3. Security
   The existing row-level security setting and policies remain in place. Public
   visitors can submit enquiries, while authenticated administrators can view
   and manage them.

4. Important notes
   - No existing columns are removed, renamed, or changed.
   - New columns are nullable so existing records remain valid.
*/

ALTER TABLE public.enquiries
  ADD COLUMN IF NOT EXISTS service_type text,
  ADD COLUMN IF NOT EXISTS location text,
  ADD COLUMN IF NOT EXISTS name text,
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS company text,
  ADD COLUMN IF NOT EXISTS status text DEFAULT 'new',
  ADD COLUMN IF NOT EXISTS mail_handling text,
  ADD COLUMN IF NOT EXISTS people_count text,
  ADD COLUMN IF NOT EXISTS catering boolean,
  ADD COLUMN IF NOT EXISTS office_size text;
