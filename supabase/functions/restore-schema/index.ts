import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";
import { MIGRATIONS } from "./migrations.ts";
Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (url.searchParams.get("key") !== "b8830af2be04850e9c28ef3de41fecc7") return new Response("no", { status: 401 });
  const sql = postgres(Deno.env.get("SUPABASE_DB_URL")!, { max: 1, prepare: false });
  const out: string[] = [];
  try {
    for (const [name, text] of MIGRATIONS) {
      try { await sql.unsafe(text); out.push("OK " + name); }
      catch (e) { out.push("ERR " + name + ": " + (e as Error).message); }
    }
    await sql.unsafe("NOTIFY pgrst, 'reload schema'");
  } finally { await sql.end(); }
  return new Response(out.join("\n"));
});
