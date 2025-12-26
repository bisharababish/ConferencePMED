-- ============================================
-- FIX DATABASE SCHEMA - Update existing tables
-- ============================================
-- This updates your existing tables to use TEXT IDs instead of UUID
-- Run this if you already have tables created

-- First, check if you have data. If you do, you'll need to migrate it.
-- If you DON'T have important data, you can drop and recreate:

-- Option 1: Drop and recreate (DELETES ALL DATA)
DROP TABLE IF EXISTS registrations CASCADE;
DROP TABLE IF EXISTS submissions CASCADE;
DROP TABLE IF EXISTS contacts CASCADE;

-- Recreate with TEXT ID
CREATE TABLE registrations (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  gender TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  job_title TEXT,
  specialty TEXT,
  institution TEXT,
  workshops TEXT[],
  registration_type TEXT NOT NULL,
  abstract_submitted TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  payment_completed TEXT NOT NULL,
  id_upload_url TEXT,
  student_card_upload_url TEXT,
  payment_receipt_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE submissions (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  topics TEXT[] NOT NULL,
  keywords TEXT,
  author_name TEXT NOT NULL,
  author_job_title TEXT NOT NULL,
  coauthors JSONB,
  email TEXT NOT NULL,
  phone TEXT,
  abstract_document_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE contacts (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public inserts on registrations"
ON registrations FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public inserts on submissions"
ON submissions FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public inserts on contacts"
ON contacts FOR INSERT
TO public
WITH CHECK (true);




