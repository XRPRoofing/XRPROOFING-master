import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

const fallbackSupabaseUrl = "https://lcchocuoeettbryfwlwq.supabase.co";
const fallbackSupabaseAnonKey = "sb_publishable_W8F6R4IraBZIt79dC5y3qg_BqypPa9C";

export function getSupabaseUrl() {
  const value = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || fallbackSupabaseUrl;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `https://${value}.supabase.co`;
}

export function getSupabaseAnonKey() {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || fallbackSupabaseAnonKey;
}

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    getSupabaseUrl(),
    getSupabaseAnonKey(),
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {}
        },
      },
    }
  );
}
