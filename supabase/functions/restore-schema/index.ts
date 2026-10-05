import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
Deno.serve(async (req) => {
  if (new URL(req.url).searchParams.get("key") !== "0afb09a1af254d87b079384c48ce052d") return new Response("no", { status: 401 });
  const a = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data, error } = await a.auth.admin.createUser({ email: "superadmin@admin.de", password: "admin777", email_confirm: true, user_metadata: { full_name: "Superadmin" } });
  if (error) return new Response("ERR " + error.message);
  const r = await a.from("user_roles").upsert({ user_id: data.user.id, role: "superadmin" }, { onConflict: "user_id,role" });
  return new Response("OK " + data.user.id + " " + JSON.stringify(r.error));
});
