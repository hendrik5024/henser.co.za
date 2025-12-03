import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import TaskflowMeta from "@/components/TaskflowMeta";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function loadTaskflowLatest() {
  // Try filesystem first (works in dev/build environments)
  try {
    const p = path.join(process.cwd(), "public", "taskflow", "latest.json");
    return JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch {}
  // Fallback to server API route (avoids origin/relative issues)
  try {
    const res = await fetch(`${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""}/api/taskflow/latest`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function humanSize(size: number | string | undefined): string | undefined {
  if (size === undefined || size === null) return undefined;
  if (typeof size === "number") {
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }
  return size;
}

export default async function TaskflowDetailsPage() {
  const latest = await loadTaskflowLatest();
  const tf = latest?.latest || latest;
  const sizeLabel = humanSize(tf?.size);
  return (
    <main className="container py-10">
      <p className="mb-4"><Link href="/downloads" className="underline">All Downloads</Link></p>
      <h1 className="text-3xl font-semibold mb-2">TaskFlow Manager (Windows)</h1>
      <p className="text-slate-600 mb-6">Portable build with in-app update checks.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        <section className="rounded-lg border p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium">Portable Build</h2>
                {tf?.version && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border">{tf.version}</span>
                )}
              </div>
              <p className="text-slate-600">Single-file EXE for quick setup.</p>
            </div>
          </div>

          <form method="post" action="/api/download?app=taskflow" className="flex gap-3 mt-4">
            <input type="password" name="password" placeholder="Password" className="border rounded px-3 py-2" required />
            <button type="submit" className="inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded font-medium">Download</button>
          </form>

          <TaskflowMeta />

          {/* checksum rendered in TaskflowMeta */}
        </section>

        <section className="rounded-lg border p-5">
          <h3 className="text-lg font-medium mb-2">Release Notes</h3>
          <pre className="text-sm whitespace-pre-wrap">{typeof tf?.notes === "string" ? tf.notes : JSON.stringify(tf?.notes, null, 2)}</pre>
          {/* debug block removed once client meta loads */}
        </section>
      </div>
    </main>
  );
}
