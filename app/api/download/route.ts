import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const app = url.searchParams.get("app") || "taskflow";
  const variant = url.searchParams.get("variant") || "";

  // Accept multiple body formats: JSON, urlencoded, multipart/form-data
  let password: string | undefined;
  const contentType = req.headers.get("content-type") || "";

  try {
    if (contentType.includes("application/json")) {
      const body = await req.json();
      password = (body as any)?.password;
    } else if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      const p = form.get("password");
      if (typeof p === "string") password = p;
    } else {
      // Handle application/x-www-form-urlencoded and other text bodies
      const raw = await req.text();
      const params = new URLSearchParams(raw);
      password = params.get("password") ?? undefined;
    }
  } catch {
    // fall through; password remains undefined
  }

  const expected = process.env.DOWNLOAD_PASSWORD;
  if (!expected || !password || password !== expected) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Prefer env-based URLs for flexibility; fallback to public paths
  const fileMap: Record<string, string> = {
    taskflow:
      process.env.TASKFLOW_URL || 
      "/taskflow/TaskFlow_Manager_win_portable_noarchive_2025.12.01.1.zip",
    "accounting:lite":
      process.env.ACCOUNTING_LITE_URL || 
      "/accounting/HenSer_Accounting_Lite_v0.9.0_portable.exe",
    "accounting:ai":
      process.env.ACCOUNTING_AI_URL || 
      "/accounting/HenSer_Accounting_AI_v0.9.0_portable.exe",
  };
  const key = app === "accounting" && variant ? `${app}:${variant}` : app;
  const target = fileMap[key];
  if (!target) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.redirect(new URL(target, url.origin), { status: 302 });
}

export const dynamic = "force-dynamic";
