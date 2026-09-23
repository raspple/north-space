/*
# Restore enquiry access policies

1. Purpose
   Keep public submissions working while protecting enquiry data. The public
   website may create enquiries, but only an authenticated administrator may
   view or delete them.

2. Modified table
   - `enquiries`: restores authenticated SELECT and DELETE policies.

3. Security
   - `anon` can INSERT only.
   - `authenticated` can SELECT and DELETE all enquiries for the private admin
     dashboard.
   - No public SELECT policy is created, so contact details remain private.

4. Important notes
   - The forms intentionally do not request the inserted row back, because a
     public insert must not require public read access.
   - Policies are recreated idempotently by dropping only these policy names.
*/

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public inserts" ON public.enquiries;
DROP POLICY IF EXISTS "public_insert_enquiries" ON public.enquiries;
DROP POLICY IF EXISTS "admin_select_enquiries" ON public.enquiries;
DROP POLICY IF EXISTS "admin_delete_enquiries" ON public.enquiries;

CREATE POLICY "public_insert_enquiries" ON public.enquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "admin_select_enquiries" ON public.enquiries
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "admin_delete_enquiries" ON public.enquiries
  FOR DELETE TO authenticated
  USING (true);

REVOKE SELECT, UPDATE, DELETE ON public.enquiries FROM anon;
GRANT INSERT ON public.enquiries TO anon;
GRANT SELECT, INSERT, DELETE ON public.enquiries TO authenticated;
