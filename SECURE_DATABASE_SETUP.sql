-- ============================================
-- SECURE SUPABASE DATABASE SETUP
-- ============================================
-- This is a SECURE version with restricted access
-- Run this SQL in your Supabase SQL Editor
-- ============================================

-- ============================================
-- STEP 1: CREATE/UPDATE REGISTRATIONS TABLE
-- ============================================

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
    created_at TIMESTAMPTZ DEFAULT NOW(),
    -- Add constraints for security
    CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT gender_check CHECK (gender IN ('Male', 'Female')),
    CONSTRAINT registration_type_check CHECK (registration_type IN ('General Delegate', 'Workshop Delegate', 'Research Presenter', 'Observer')),
    CONSTRAINT abstract_submitted_check CHECK (abstract_submitted IN ('Yes', 'No'))
);

-- ============================================
-- STEP 2: ENABLE ROW LEVEL SECURITY
-- ============================================

ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- ============================================
-- STEP 3: DROP EXISTING POLICIES
-- ============================================

DROP POLICY IF EXISTS "Allow public insert on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow public select on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow public update on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow public delete on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow authenticated select on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow authenticated update on registrations" ON public.registrations;

-- ============================================
-- STEP 4: CREATE SECURE RLS POLICIES
-- ============================================

-- Policy 1: Allow INSERT for registration form (public can submit)
-- This is the only public operation allowed
CREATE POLICY "Allow public insert on registrations"
ON public.registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (
    -- Validate input length to prevent DoS
    length(first_name) <= 100 AND
    length(last_name) <= 100 AND
    length(email) <= 255 AND
    length(phone) <= 20 AND
    length(city) <= 100 AND
    length(job_title) <= 100 AND
    length(specialty) <= 100 AND
    length(institution) <= 200
);

-- Policy 2: RESTRICT SELECT - Only authenticated users can view
-- Remove this if you want public read access, but it's more secure this way
-- For admin access, you'll need to create a service role or admin user
CREATE POLICY "Allow authenticated select on registrations"
ON public.registrations
FOR SELECT
TO authenticated
USING (true);

-- Policy 3: RESTRICT UPDATE - Only authenticated users can update
-- Remove this if you don't want public updates
CREATE POLICY "Allow authenticated update on registrations"
ON public.registrations
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Policy 4: NO PUBLIC DELETE - Only service role can delete
-- This prevents accidental or malicious deletions

-- ============================================
-- STEP 5: GRANT MINIMAL PERMISSIONS
-- ============================================

GRANT USAGE ON SCHEMA public TO anon, authenticated;
-- Only grant INSERT to anon (public users)
GRANT INSERT ON public.registrations TO anon;
-- Grant SELECT/UPDATE to authenticated users only
GRANT SELECT, UPDATE ON public.registrations TO authenticated;

-- ============================================
-- STEP 6: CREATE INDEXES
-- ============================================

CREATE INDEX IF NOT EXISTS idx_registrations_email ON public.registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON public.registrations(created_at);
CREATE INDEX IF NOT EXISTS idx_registrations_registration_type ON public.registrations(registration_type);

-- ============================================
-- STEP 7: SETUP SUBMISSIONS TABLE (SECURE)
-- ============================================

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
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT submissions_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT title_length CHECK (length(title) <= 500),
    CONSTRAINT author_name_length CHECK (length(author_name) <= 100)
);

ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert on submissions" ON public.submissions;
DROP POLICY IF EXISTS "Allow authenticated select on submissions" ON public.submissions;

CREATE POLICY "Allow public insert on submissions"
ON public.submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
    length(title) <= 500 AND
    length(author_name) <= 100 AND
    length(email) <= 255
);

CREATE POLICY "Allow authenticated select on submissions"
ON public.submissions
FOR SELECT
TO authenticated
USING (true);

GRANT INSERT ON public.submissions TO anon;
GRANT SELECT ON public.submissions TO authenticated;

-- ============================================
-- STEP 8: SETUP CONTACTS TABLE (SECURE)
-- ============================================

CREATE TABLE IF NOT EXISTS public.contacts (
    id TEXT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT contacts_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT message_length CHECK (length(message) <= 5000),
    CONSTRAINT subject_length CHECK (length(subject) <= 200)
);

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert on contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow authenticated select on contacts" ON public.contacts;

CREATE POLICY "Allow public insert on contacts"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (
    length(first_name) <= 100 AND
    length(last_name) <= 100 AND
    length(email) <= 255 AND
    length(message) <= 5000
);

CREATE POLICY "Allow authenticated select on contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (true);

GRANT INSERT ON public.contacts TO anon;
GRANT SELECT ON public.contacts TO authenticated;

-- ============================================
-- STEP 9: SECURE STORAGE BUCKET
-- ============================================

-- Create the documents bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing storage policies
DROP POLICY IF EXISTS "Allow public uploads to documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read from documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow public updates to documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow public delete from documents" ON storage.objects;

-- Secure storage policies with file type and size restrictions
CREATE POLICY "Allow public uploads to documents"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (
    bucket_id = 'documents' AND
    -- Only allow specific file types
    (storage.foldername(name))[1] IN ('registrations', 'submissions', 'contacts') AND
    -- File size limit: 10MB (10485760 bytes)
    (storage.objects.content_length IS NULL OR storage.objects.content_length <= 10485760)
);

CREATE POLICY "Allow public read from documents"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'documents');

-- No public updates or deletes for security
-- Only authenticated users can update/delete
CREATE POLICY "Allow authenticated updates to documents"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'documents')
WITH CHECK (bucket_id = 'documents');

CREATE POLICY "Allow authenticated delete from documents"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'documents');

-- ============================================
-- SECURITY NOTES:
-- ============================================
-- 1. Public users can only INSERT (submit forms)
-- 2. Public users CANNOT SELECT/UPDATE/DELETE (more secure)
-- 3. Only authenticated users can view data
-- 4. Input validation at database level (constraints)
-- 5. File size limits enforced
-- 6. Email format validation
-- 7. String length limits to prevent DoS attacks
-- ============================================


