"use client";
import { useEffect, useState } from "react";

type Manifest = {
  version: string;
  channel: string;
  filename: string;
  size: number;
  sha256: string;
  download_url: string;
  notes?: string | string[] | { value?: string };
  published_at?: string;
};

export function DownloadButton({ manifestPath, label }: { manifestPath: string; label?: string }) {
  const [m, setM] = useState<Manifest | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch(manifestPath, { cache: "no-store" })
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(j => { if (mounted) setM(j as Manifest); })
      .catch(e => { if (mounted) setErr(e.message); });
    return () => { mounted = false; };
  }, [manifestPath]);

  if (err) return <a className="inline-block bg-indigo-600 text-white px-4 py-2 rounded" href={manifestPath}>Download</a>;
  if (!m) return <button className="inline-block bg-indigo-400 text-white px-4 py-2 rounded" disabled>Loading</button>;

  const sizeMB = m.size ? (m.size / (1024 * 1024)).toFixed(1) : undefined;
  const btnText = label ?? (m.version ? `Download v${m.version}` : "Download");
  return (
    <a className="inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded font-medium" href={m.download_url || m.filename || manifestPath}>
      {btnText}{sizeMB ? `  ${sizeMB} MB` : ""}
    </a>
  );
}
