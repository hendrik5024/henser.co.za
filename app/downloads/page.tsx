import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
export const dynamic = "force-dynamic";
export const revalidate = 0;

function loadAccountingLatest() {
  try {
    const p = path.join(process.cwd(), "public", "accounting", "latest.json");
    return JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch {
    return null;
  }
}

async function fetchTaskflowLatest() {
  try {
    const res = await fetch("/taskflow/latest.json", { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
import { DownloadButton } from "@/components/DownloadButton";

export const metadata = {
  title: "Downloads | HenSer Innovations",
  description: "Get the latest versions of HenSer apps.",
};

export default async function DownloadsPage() {
  const acc = loadAccountingLatest();
  const accLite = acc?.lite;
  const tf = await fetchTaskflowLatest();
  const tfLatest = tf?.latest || tf; // support either {latest:{...}} or flat
  // no-op tweak to trigger redeploy and refresh caches
  // Normalize TaskFlow size: if numeric bytes, display MB
  let tfSizeLabel: string | undefined = undefined;
  if (tfLatest?.size) {
    if (typeof tfLatest.size === 'number') {
      const mb = (tfLatest.size / (1024 * 1024)).toFixed(1);
      tfSizeLabel = `${mb} MB`;
    } else if (typeof tfLatest.size === 'string') {
      tfSizeLabel = tfLatest.size;
    }
  }
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-semibold mb-6">Downloads</h1>
      <p className="text-slate-600 mb-8">
        Get the latest releases of our apps. Request a password via the Contact page to access downloads.
      </p>

      <section className="grid gap-6 sm:grid-cols-2">
        <article className="rounded-lg border p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium">TaskFlow Manager (Windows)</h2>
                {tfLatest?.version && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border">
                    {tfLatest.version}
                  </span>
                )}
              </div>
              <p className="text-slate-600">Portable build with in-app update checks.</p>
              {tfSizeLabel && (
                <p className="text-slate-500 text-xs mt-1">Size: {tfSizeLabel}</p>
              )}
            </div>
            <Link className="text-sm underline text-slate-600" href="/taskflow/">Details</Link>
          </div>
          <div className="mt-4">
            <form method="post" action="/api/download?app=taskflow" className="flex gap-3">
              <input type="password" name="password" placeholder="Password" className="border rounded px-3 py-2" required />
              <button type="submit" className="inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded font-medium">Download</button>
            </form>
          </div>
          <p className="text-slate-500 text-sm mt-2">No password? <Link className="underline" href="/contact">Request access</Link>.</p>
        </article>

        <article className="rounded-lg border p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium">Accounting Software (Windows)</h2>
                {accLite?.version && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border">
                    {accLite.version}
                  </span>
                )}
              </div>
              <p className="text-slate-600">Full accounting with stock/inventory. Lite build (no AI); AI assistant on request.</p>
              {accLite?.size && (
                <p className="text-slate-500 text-xs mt-1">Lite size: {accLite.size}</p>
              )}
            </div>
            <Link className="text-sm underline text-slate-600" href="/downloads/accounting">Details</Link>
          </div>
          <div className="mt-4">
            <form method="post" action="/api/download?app=accounting&variant=lite" className="flex gap-3">
              <input type="password" name="password" placeholder="Password" className="border rounded px-3 py-2" required />
              <button type="submit" className="inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded font-medium">Download Lite</button>
            </form>
          </div>
          <p className="text-slate-500 text-sm mt-2">No password? <Link className="underline" href="/contact">Request access</Link>. See <Link className="underline" href="/downloads/accounting#ai">AI-enabled option</Link>.</p>
        </article>
      </section>
    </main>
  );
}
