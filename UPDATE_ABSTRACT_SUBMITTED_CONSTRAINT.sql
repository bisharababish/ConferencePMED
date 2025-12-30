-- ============================================
-- UPDATE ABSTRACT_SUBMITTED CONSTRAINT
-- ============================================
-- This SQL script updates the abstract_submitted constraint
-- to allow 'Yes', 'No', and 'Other' values
-- Run this in your Supabase SQL Editor
-- ============================================

-- Step 1: Drop the existing constraint if it exists
ALTER TABLE public.registrations 
DROP CONSTRAINT IF EXISTS abstract_submitted_check;

-- Step 2: Add the updated constraint to allow 'Yes', 'No', and 'Other'
ALTER TABLE public.registrations 
ADD CONSTRAINT abstract_submitted_check 
CHECK (abstract_submitted IN ('Yes', 'No', 'Other'));

-- ============================================
-- VERIFICATION
-- ============================================
-- After running this script, verify the constraint:
-- SELECT constraint_name, constraint_type, check_clause
-- FROM information_schema.table_constraints tc
-- JOIN information_schema.check_constraints cc 
--   ON tc.constraint_name = cc.constraint_name
-- WHERE tc.table_name = 'registrations' 
--   AND tc.constraint_name = 'abstract_submitted_check';

-- ============================================
-- NOTES:
-- ============================================
-- 1. This updates the constraint to allow 'Other' as a valid value
-- 2. If you're using SECURE_DATABASE_SETUP.sql, you'll need to update
--    line 35 in that file as well to match this constraint
-- 3. The form now supports Yes, No, and Other options
-- ============================================

