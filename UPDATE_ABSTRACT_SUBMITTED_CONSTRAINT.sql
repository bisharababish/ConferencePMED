-- ============================================
-- UPDATE ABSTRACT_SUBMITTED CONSTRAINT
-- ============================================
-- This SQL script updates the abstract_submitted constraint
-- to only allow 'Yes' and 'No' values (removes 'Other')
-- Run this in your Supabase SQL Editor
-- ============================================

-- Step 1: Drop the existing constraint if it exists
ALTER TABLE public.registrations 
DROP CONSTRAINT IF EXISTS abstract_submitted_check;

-- Step 2: Add the updated constraint to only allow 'Yes' and 'No'
ALTER TABLE public.registrations 
ADD CONSTRAINT abstract_submitted_check 
CHECK (abstract_submitted IN ('Yes', 'No'));

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
-- 1. This updates the constraint to only allow 'Yes' and 'No' (removes 'Other')
-- 2. If you're using SECURE_DATABASE_SETUP.sql, you'll need to update
--    line 35 in that file as well to match this constraint
-- 3. The "Other" option has been moved to the Topic of Abstract field
--    in the abstract submission form
-- ============================================


