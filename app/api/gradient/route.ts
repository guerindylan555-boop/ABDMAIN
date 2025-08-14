import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CONFIG_PATH = path.join(process.cwd(), "config", "gradient.json");

export async function GET() {
  try {
    const file = await fs.readFile(CONFIG_PATH, "utf8");
    return NextResponse.json(JSON.parse(file));
  } catch {
    return NextResponse.json({ error: "Missing gradient config" }, { status: 404 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Basic validation
    if (!body || typeof body !== "object" || !Array.isArray(body.stops)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    await fs.mkdir(path.dirname(CONFIG_PATH), { recursive: true });
    await fs.writeFile(CONFIG_PATH, JSON.stringify(body, null, 2), "utf8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
