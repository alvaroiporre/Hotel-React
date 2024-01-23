import { createClient } from '@supabase/supabase-js';
export const supabaseUrl: string = 'https://qubuskmtzumgefcphksh.supabase.co';
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1YnVza210enVtZ2VmY3Boa3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2NzgyMTYsImV4cCI6MjAyMTI1NDIxNn0.Mp1Po4NJFadTC6pD-gZ5moxvzvt8oSRQE6xMt6yiCXc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;