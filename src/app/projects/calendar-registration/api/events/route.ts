import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function GET() {
  const result = await pool.query("SELECT * FROM events ORDER BY event_from ASC");

  const events = result.rows.map((event) => ({
    id: event.id,
    title: event.title,
    note: event.note,
    start: event.event_from,
    end: event.event_to,
  }));

  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, note, start, end } = body;

  if (!title || !note || !start || !end) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const result = await pool.query(
    "INSERT INTO events (title, note, event_from, event_to) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, note, start, end]
  );

  return NextResponse.json(result.rows[0]);
}
