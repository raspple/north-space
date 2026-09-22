/*
# Remove enquiry notification trigger

1. Purpose
   Remove the database trigger and function that attempted to call the edge
   function via pg_net. The edge function is now called directly from the
   frontend after a successful insert, which is simpler and more reliable.

2. Changes
   - Drop trigger `on_enquiry_insert` on `enquiries`.
   - Drop function `notify_enquiry()`.
*/

DROP TRIGGER IF EXISTS on_enquiry_insert ON public.enquiries;
DROP FUNCTION IF EXISTS public.notify_enquiry();
