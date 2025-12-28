import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://nzjjemfrfgpnmjpxrmsx.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56amplbWZyZmdwbm1qcHhybXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyOTU0OTIsImV4cCI6MjA4MTg3MTQ5Mn0.CLWj9UPu_OzjjQGKs1OzKZa_lzMsYPuBJPvCJXmyrNg';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL and Anon Key must be set in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface RegistrationData {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  phone?: string;
  city?: string;
  job_title?: string;
  specialty?: string;
  institution?: string;
  workshops?: string[];
  registration_type: string;
  abstract_submitted: string;
  payment_method?: string;
  payment_completed?: string;
  id_upload_url?: string;
  student_card_upload_url?: string;
  payment_receipt_url?: string;
  created_at?: string;
}

export interface SubmissionData {
  id: string;
  title: string;
  topics: string[];
  keywords?: string;
  author_name: string;
  author_job_title: string;
  coauthors?: Array<{ name: string; job_title: string }> | null;
  email: string;
  phone?: string;
  abstract_document_url?: string;
  created_at?: string;
}

export interface ContactData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  created_at?: string;
}

