import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.BUN_SUPABASE_URL!; // Supabase 프로젝트 URL
const supabaseKey = process.env.BUN_SUPABASE_ANON_KEY!; // Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;