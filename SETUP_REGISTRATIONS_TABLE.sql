-- ============================================
-- SUPABASE DATABASE SETUP FOR REGISTRATIONS
-- ============================================
-- This SQL script sets up the registrations table with proper RLS policies
-- Run this in your Supabase SQL Editor
-- ============================================

-- Step 1: Create the registrations table if it doesn't exist
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

-- Step 2: Enable Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Step 3: Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public insert on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow public select on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow public update on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow public delete on registrations" ON public.registrations;

-- Step 4: Create RLS policies to allow public access
-- Policy 1: Allow anyone to INSERT (for registration form submissions)
CREATE POLICY "Allow public insert on registrations"
ON public.registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy 2: Allow anyone to SELECT (for viewing registrations - adjust if you want to restrict)
CREATE POLICY "Allow public select on registrations"
ON public.registrations
FOR SELECT
TO anon, authenticated
USING (true);

-- Policy 3: Allow updates (optional - remove if you don't want public updates)
CREATE POLICY "Allow public update on registrations"
ON public.registrations
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Policy 4: Allow deletes (optional - remove if you don't want public deletes)
-- Uncomment the following if you want to allow public deletes:
-- CREATE POLICY "Allow public delete on registrations"
-- ON public.registrations
-- FOR DELETE
-- TO anon, authenticated
-- USING (true);

-- Step 5: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_registrations_email ON public.registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON public.registrations(created_at);
CREATE INDEX IF NOT EXISTS idx_registrations_registration_type ON public.registrations(registration_type);

-- Step 6: Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.registrations TO anon, authenticated;

-- ============================================
-- VERIFICATION QUERIES
-- ============================================
-- Run these to verify the setup:

-- Check if table exists and has correct structure
-- SELECT column_name, data_type, is_nullable 
-- FROM information_schema.columns 
-- WHERE table_name = 'registrations' AND table_schema = 'public';

-- Check RLS is enabled
-- SELECT tablename, rowsecurity 
-- FROM pg_tables 
-- WHERE schemaname = 'public' AND tablename = 'registrations';

-- Check policies
-- SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
-- FROM pg_policies 
-- WHERE tablename = 'registrations';

-- ============================================
-- NOTES:
-- ============================================
-- 1. The 'anon' role is used for unauthenticated users (your registration form)
-- 2. The 'authenticated' role is for logged-in users
-- 3. If you want to restrict SELECT/UPDATE/DELETE, modify or remove those policies
-- 4. The table uses TEXT for id because your code generates string IDs
-- 5. All optional fields allow NULL values
-- ============================================



