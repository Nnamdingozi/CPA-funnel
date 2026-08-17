"use server";

import pool from '@/lib/db';
import { QueryResult } from 'pg';

/**
 * CAPTURE CPA LEAD
 * Logic: Inserts business email into Neon DB and handles duplicates safely.
 */
export async function captureLead(email: string, source: string): Promise<{ success: boolean; error?: string }> {
  try {
    const query: string = `
      INSERT INTO leads (email, source) 
      VALUES ($1, $2) 
      ON CONFLICT (email) DO NOTHING
    `;
    
    await pool.query(query, [email.toLowerCase().trim(), source]);
    
    return { success: true };
  } catch (err: unknown) {
    console.error("[DATABASE_FAULT]:", err);
    // Silent fail: Don't stop the user from getting to the CPA offer
    return { success: false, error: "Sync failed" };
  }
}