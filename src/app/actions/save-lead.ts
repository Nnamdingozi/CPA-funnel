"use server";

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for CockroachDB/Render
  },
});

export async function saveLead(email: string, source: string) {
  try {
    const client = await pool.connect();
    const query = 'INSERT INTO leads (email, source) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING';
    await client.query(query, [email, source]);
    client.release();
    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: "Database operation failed" };
  }
}