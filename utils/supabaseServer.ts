import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const supabaseServer = async () => {
    const cookieStore = await cookies();
    cookieStore.getAll();
    return createServerComponentClient<Database>({ 
        cookies: async () => {
            const cookieStore = await cookies();
            return cookieStore;
        }
    });
}
