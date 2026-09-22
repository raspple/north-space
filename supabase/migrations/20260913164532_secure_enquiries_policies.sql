/*
# Secure enquiries table RLS policies

1. Purpose
   The previous policies allowed anyone (anon) to read ALL enquiries —
   a serious privacy leak since enquiries contain names, emails, and phone
   numbers. This migration locks down access so that:
   - Anyone can INSERT a new enquiry (the public contact form needs this).
   - Only authenticated users (the site owner via /admin) can SELECT enquiries.
   - Only authenticated users can DELETE enquiries.
   - No one can UPDATE enquiries (not needed for this app).

2. Changes
   - Drop existing `anon_select_enquiries` and `anon_insert_enquiries` policies.
   - Create `public_insert_enquiries` — INSERT for anon + authenticated, WITH CHECK (true).
   - Create `admin_select_enquiries` — SELECT for authenticated only, USING (true).
   - Create `admin_delete_enquiries` — DELETE for authenticated only, USING (true).
   - Revoke UPDATE and DELETE from anon role (keep INSERT + the new policies).

3. Security
   - anon can only INSERT — cannot read, modify, or delete any enquiry.
   - authenticated (the signed-in admin) can SELECT and DELETE all enquiries.
   - No UPDATE policy means no one can modify enquiries via the API.
*/

-- Drop old permissive policies
DROP POLICY IF EXISTS "anon_select_enquiries" ON public.enquiries;
DROP POLICY IF EXISTS "anon_insert_enquiries" ON public.enquiries;

-- Public can insert new enquiries (contact form)
CREATE POLICY "public_insert_enquiries" ON public.enquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (admin) can read enquiries
CREATE POLICY "admin_select_enquiries" ON public.enquiries
  FOR SELECT TO authenticated
  USING (true);

-- Only authenticated users (admin) can delete enquiries
CREATE POLICY "admin_delete_enquiries" ON public.enquiries
  FOR DELETE TO authenticated
  USING (true);

-- Revoke excess privileges from anon
REVOKE UPDATE ON public.enquiries FROM anon;
REVOKE DELETE ON public.enquiries FROM anon;
