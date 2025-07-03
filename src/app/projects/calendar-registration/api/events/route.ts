import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

// ⛑️ Zabezpeč, že DB URL existuje
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing DATABASE_URL in environment variables");
}

// 🔁 Reuse pool pre optimalizáciu (dôležité hlavne pre Vercel)
let pool: Pool;
if (!(global as any).pgPool) {
  pool = new Pool({ connectionString });
  (global as any).pgPool = pool;
} else {
  pool = (global as any).pgPool;
}

// 🟢 GET /events – načítanie eventov
export async function GET() {
  try {
    const result = await pool.query(
      "SELECT * FROM events ORDER BY event_from ASC"
    );

    const events = result.rows.map((event) => ({
      id: event.id,
      title: event.title,
      note: event.note,
      start: event.event_from,
      end: event.event_to,
    }));

    return NextResponse.json(events);
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json(
      { error: "Chyba pri načítaní udalostí" },
      { status: 500 }
    );
  }
}

// 🟢 POST /events – uloženie eventu
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, note, start, end } = body;

    if (!title || !note || !start || !end) {
      return NextResponse.json(
        { error: "Chýbajúce údaje (názov, poznámka, čas)" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "INSERT INTO events (title, note, event_from, event_to) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, note, start, end]
    );

    return NextResponse.json({
      id: result.rows[0].id,
      title: result.rows[0].title,
      note: result.rows[0].note,
      start: result.rows[0].event_from,
      end: result.rows[0].event_to,
    });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json(
      { error: "Chyba pri ukladaní udalosti" },
      { status: 500 }
    );
  }
}
