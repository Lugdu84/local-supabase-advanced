import { Database } from '@/supabase';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
	process.env.SUPABASE_URL as string,
	process.env.SUPABASE_KEY as string
);
