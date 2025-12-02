export const metadata = {
  title: "Accounting Software | Downloads",
  description: "Full accounting suite with stock/inventory. Download Lite (no AI) or AI-enabled on request.",
};

import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

function loadLatest() {
  try {
    const p = path.join(process.cwd(), "public", "accounting", "latest.json");
    const raw = fs.readFileSync(p, "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default function AccountingDownloads() {
  const latest = loadLatest();
  const lite = latest?.lite;
  const ai = latest?.ai;
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-semibold mb-6">Accounting Software (Windows)</h1>
      <p className="text-slate-600 mb-6">Full accounting suite including inventory/stock, invoicing, purchasing, general ledger and reports. The Lite build ships without AI; an optional AI assistant is available on request (large download, ~25 GB).</p>

      <section className="grid gap-6 sm:grid-cols-2">
        <article className="rounded-lg border p-5">
          <h2 className="text-xl font-medium">Lite Build</h2>
          <p className="text-slate-600">Core app, no AI runtime or models included.</p>
          <div className="mt-4">
            <form method="post" action="/api/download?app=accounting&variant=lite" className="flex gap-3">
              <input type="password" name="password" placeholder="Password" className="border rounded px-3 py-2" required />
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Download Lite</button>
            </form>
          </div>
          <p className="text-slate-500 text-sm mt-2">No password? <Link className="underline" href="/contact">Request access</Link>.</p>
          {lite && (
            <ul className="mt-4 text-sm text-slate-600">
              <li><strong>Version:</strong> {lite.version}</li>
              <li><strong>File:</strong> {lite.filename}</li>
              <li><strong>Size:</strong> {lite.size}</li>
              <li><strong>Date:</strong> {lite.date}</li>
            </ul>
          )}
        </article>

        <article id="ai" className="rounded-lg border p-5">
          <h2 className="text-xl font-medium">AI-enabled Option</h2>
          <p className="text-slate-600">Includes AI runtime and models. Large download (~25 GB). Recommended for advanced features.</p>
          <div className="mt-4">
            <form method="post" action="/api/download?app=accounting&variant=ai" className="flex gap-3">
              <input type="password" name="password" placeholder="Password" className="border rounded px-3 py-2" required />
              <button type="submit" className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded">Download AI-enabled</button>
            </form>
          </div>
          {ai && (
            <ul className="mt-4 text-sm text-slate-600">
              <li><strong>Version:</strong> {ai.version}</li>
              <li><strong>File:</strong> {ai.filename}</li>
              <li><strong>Size:</strong> {ai.size}</li>
              <li><strong>Date:</strong> {ai.date}</li>
            </ul>
          )}
        </article>
      </section>

      <section id="checksums" className="mt-8">
        <h3 className="text-lg font-medium">Checksums</h3>
        <div className="mt-2 grid gap-4 sm:grid-cols-2">
          <div className="rounded border p-4">
            <h4 className="font-medium">Lite</h4>
            <pre className="text-xs mt-2 bg-slate-50 p-2 rounded overflow-auto">{lite?.sha256 || "SHA256 pending"}</pre>
          </div>
          <div className="rounded border p-4">
            <h4 className="font-medium">AI-enabled</h4>
            <pre className="text-xs mt-2 bg-slate-50 p-2 rounded overflow-auto">{ai?.sha256 || "SHA256 pending"}</pre>
          </div>
        </div>
      </section>
    </main>
  );
}
