/*
# Add detail columns to enquiries table for service-specific lead qualification

1. New Columns on `enquiries`
- `mail_handling` (text) — for virtual office enquiries: 'forward' or 'collect'
- `people_count` (text) — for meeting room enquiries: approximate number of attendees
- `catering` (boolean) — for meeting room enquiries: whether catering is required
- `office_size` (text) — for serviced office enquiries: desired office size e.g. '1-2', '3-5', '6-10', '10+'

2. Rationale
These fields help qualify leads by service type so the workspace referral team can provide accurate pricing and availability.
*/

ALTER TABLE enquiries
ADD COLUMN IF NOT EXISTS mail_handling text,
ADD COLUMN IF NOT EXISTS people_count text,
ADD COLUMN IF NOT EXISTS catering boolean,
ADD COLUMN IF NOT EXISTS office_size text;
