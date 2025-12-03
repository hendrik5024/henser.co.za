"use client";
import { useEffect, useState } from "react";

type Latest = {
  version?: string;
  filename?: string;
  size?: number | string;
  published_at?: string;
  sha256?: string;
  notes?: string | any;
  latest?: Latest;
};

function humanSize(size: number | string | undefined): string | undefined {
  if (size === undefined || size === null) return undefined;
  if (typeof size === "number") return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  return size;
}

export default function TaskflowMeta() {
  const [data, setData] = useState<Latest | null>(null);
  const tf = (data?.latest as Latest) || data || null;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/taskflow/latest.json", { cache: "no-store" });
        if (!res.ok) return;
        const json = await res.json();
        setData(json);
      } catch {
        // ignore
      }
    })();
  }, []);

  const sizeLabel = humanSize(tf?.size);

  return (
    <div className="mt-4 text-sm text-slate-700 space-y-1">
      {tf?.version && (<p><span className="text-slate-500">Version:</span> {tf.version}</p>)}
      {tf?.filename && (<p><span className="text-slate-500">File:</span> {tf.filename}</p>)}
      {sizeLabel && (<p><span className="text-slate-500">Size:</span> {sizeLabel}</p>)}
      {tf?.published_at && (<p><span className="text-slate-500">Date:</span> {tf.published_at}</p>)}
      {!tf && (
        <p className="text-red-600">Unable to load latest.json</p>
      )}
      <div className="mt-3">
        <p className="text-slate-500 text-sm mb-1">Checksum (SHA-256)</p>
        <code className="block p-2 bg-slate-50 border rounded text-xs break-words">{tf?.sha256 || ""}</code>
      </div>
    </div>
  );
}
