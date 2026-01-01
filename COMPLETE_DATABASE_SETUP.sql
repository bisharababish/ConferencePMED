-- ============================================
-- COMPLETE SUPABASE DATABASE SETUP
-- ============================================
-- Run this SQL in your Supabase SQL Editor (Dashboard > SQL Editor)
-- This will fix the 401 Permission Denied error
-- ============================================

-- ============================================
-- STEP 1: CREATE/UPDATE REGISTRATIONS TABLE
-- ============================================

-- Drop the table if it exists (WARNING: This deletes all data!)
-- Only run this if you don't have important data, or comment it out
-- DROP TABLE IF EXISTS public.registrations CASCADE;

-- Create the registrations table with the correct structure
CREATE TABLE IF NOT EXISTS public.registrations (
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
    registration_type TEXT NOT NULL,
    abstract_submitted TEXT NOT NULL,
    payment_method TEXT,
    payment_completed TEXT,
    id_upload_url TEXT,
    student_card_upload_url TEXT,
    payment_receipt_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- STEP 2: ENABLE ROW LEVEL SECURITY
-- ============================================

ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- ============================================
-- STEP 3: DROP EXISTING POLICIES (if any)
-- ============================================

DROP POLICY IF EXISTS "Allow public insert on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow public select on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow public update on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow public delete on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow public inserts on registrations" ON public.registrations;

-- ============================================
-- STEP 4: CREATE RLS POLICIES
-- ============================================

-- Policy 1: Allow INSERT (for registration form submissions)
-- This is the most important one for fixing the 401 error
CREATE POLICY "Allow public insert on registrations"
ON public.registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy 2: Allow SELECT (for viewing registrations)
-- Adjust this if you want to restrict who can view
CREATE POLICY "Allow public select on registrations"
ON public.registrations
FOR SELECT
TO anon, authenticated
USING (true);

-- Policy 3: Allow UPDATE (optional - for editing registrations)
CREATE POLICY "Allow public update on registrations"
ON public.registrations
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- ============================================
-- STEP 5: GRANT PERMISSIONS
-- ============================================

GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.registrations TO anon, authenticated;

-- ============================================
-- STEP 6: CREATE INDEXES (for better performance)
-- ============================================

CREATE INDEX IF NOT EXISTS idx_registrations_email ON public.registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON public.registrations(created_at);
CREATE INDEX IF NOT EXISTS idx_registrations_registration_type ON public.registrations(registration_type);

-- ============================================
-- STEP 7: SETUP OTHER TABLES (if needed)
-- ============================================

-- Submissions table
CREATE TABLE IF NOT EXISTS public.submissions (
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
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert on submissions" ON public.submissions;
DROP POLICY IF EXISTS "Allow public select on submissions" ON public.submissions;

CREATE POLICY "Allow public insert on submissions"
ON public.submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Allow public select on submissions"
ON public.submissions
FOR SELECT
TO anon, authenticated
USING (true);

GRANT ALL ON public.submissions TO anon, authenticated;

-- Contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
    id TEXT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert on contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow public select on contacts" ON public.contacts;

CREATE POLICY "Allow public insert on contacts"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Allow public select on contacts"
ON public.contacts
FOR SELECT
TO anon, authenticated
USING (true);

GRANT ALL ON public.contacts TO anon, authenticated;

-- ============================================
-- STEP 8: SETUP STORAGE BUCKET (for file uploads)
-- ============================================

-- Create the documents bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for file uploads
DROP POLICY IF EXISTS "Allow public uploads to documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read from documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow public updates to documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow public delete from documents" ON storage.objects;

CREATE POLICY "Allow public uploads to documents"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'documents');

CREATE POLICY "Allow public read from documents"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'documents');

CREATE POLICY "Allow public updates to documents"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id = 'documents')
WITH CHECK (bucket_id = 'documents');

CREATE POLICY "Allow public delete from documents"
ON storage.objects FOR DELETE
TO anon, authenticated
USING (bucket_id = 'documents');

-- ============================================
-- VERIFICATION
-- ============================================
-- After running this script, verify:

-- 1. Check table exists:
-- SELECT * FROM information_schema.tables WHERE table_name = 'registrations';

-- 2. Check RLS is enabled:
-- SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'registrations';

-- 3. Check policies exist:
-- SELECT policyname, cmd, roles FROM pg_policies WHERE tablename = 'registrations';

-- 4. Test insert (should work now):
-- INSERT INTO registrations (id, first_name, last_name, gender, email, registration_type, abstract_submitted)
-- VALUES ('test123', 'Test', 'User', 'Male', 'test@example.com', 'General Delegate', 'No');

-- ============================================
-- IMPORTANT NOTES:
-- ============================================
-- 1. The 'anon' role is for unauthenticated users (your registration form)
-- 2. The 'authenticated' role is for logged-in users
-- 3. If you want to restrict SELECT/UPDATE, modify those policies
-- 4. Make sure your Supabase project has RLS enabled (it should be by default)
-- 5. After running this, try submitting a registration form again
-- ============================================



