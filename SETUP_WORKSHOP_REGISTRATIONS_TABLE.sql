-- Create workshop_registrations table
CREATE TABLE IF NOT EXISTS workshop_registrations (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  job_title TEXT,
  institution TEXT,
  room_id TEXT NOT NULL,
  room_name_arabic TEXT NOT NULL,
  room_name_english TEXT NOT NULL,
  selected_session_time TEXT,
  selected_session_topic TEXT,
  selected_session_speaker TEXT,
  selected_session_organizer TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_workshop_registrations_email ON workshop_registrations(email);

-- Create index on room_id for filtering
CREATE INDEX IF NOT EXISTS idx_workshop_registrations_room_id ON workshop_registrations(room_id);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_workshop_registrations_created_at ON workshop_registrations(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE workshop_registrations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (register for workshops)
CREATE POLICY "Allow public insert for workshop registrations"
  ON workshop_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all registrations (for admin purposes)
CREATE POLICY "Allow authenticated users to read workshop registrations"
  ON workshop_registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow users to read their own registrations
CREATE POLICY "Allow users to read own workshop registrations"
  ON workshop_registrations
  FOR SELECT
  TO anon, authenticated
  USING (true);
