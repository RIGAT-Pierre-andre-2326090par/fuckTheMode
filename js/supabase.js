import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-anon-or-service-role-key';
export const supabase = createClient(supabaseUrl, supabaseKey);

function getAllTypes() {
  return supabase.from('types').select('*');
}

export { getAllTypes };

function getAllProducts() {
  return supabase.from('products').select('*');
}

export { getAllProducts };

function getAllProductsById(typeID) {
  return supabase.from('orders').select('*, ');
}