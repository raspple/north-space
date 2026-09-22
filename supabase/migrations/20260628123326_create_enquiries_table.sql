/*
# Create enquiries table for workspace referral service

1. New Tables
- `enquiries`
  - `id` (uuid, primary key) — unique identifier for each enquiry
  - `service_type` (text, not null) — type of workspace service: 'virtual_office', 'meeting_room', or 'serviced_office'
  - `location` (text) — preferred location or city
  - `name` (text, not null) — full name of the enquirer
  - `email` (text, not null) — contact email address
  - `phone` (text) — contact phone number
  - `company` (text) — company or organisation name
  - `message` (text) — additional details or requirements
  - `status` (text, default 'new') — enquiry status: 'new', 'contacted', 'converted', 'closed'
  - `created_at` (timestamptz) — timestamp when the enquiry was submitted

2. Security
- Enable RLS on `enquiries`.
- Allow anonymous (and authenticated) users to create enquiries — this is a lead-generation site with no sign-in required.
- Allow anonymous (and authenticated) users to read enquiries for confirmation/tracking purposes.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text NOT NULL,
  location text,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_enquiries" ON enquiries;
CREATE POLICY "anon_select_enquiries"
  ON enquiries FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
  ON enquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
