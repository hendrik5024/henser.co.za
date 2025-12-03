import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const p = path.join(process.cwd(), "public", "taskflow", "latest.json");
    const raw = fs.readFileSync(p, "utf-8");
    const json = JSON.parse(raw);
    return NextResponse.json(json, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "latest.json not found" }, { status: 404 });
  }
}
