// "use server";

// import pool from '@/lib/db';
// import { QueryResult } from 'pg';

// /**
//  * CAPTURE CPA LEAD
//  * Logic: Inserts business email into Neon DB and handles duplicates safely.
//  */
// export async function captureLead(email: string, source: string): Promise<{ success: boolean; error?: string }> {
//   try {
//     const query: string = `
//       INSERT INTO leads (email, source) 
//       VALUES ($1, $2) 
//       ON CONFLICT (email) DO NOTHING
//     `;
    
//     await pool.query(query, [email.toLowerCase().trim(), source]);
    
//     return { success: true };
//   } catch (err: unknown) {
//     console.error("[DATABASE_FAULT]:", err);
//     // Silent fail: Don't stop the user from getting to the CPA offer
//     return { success: false, error: "Sync failed" };
//   }
// }


"use server";

import pool from '@/lib/db';

export async function captureVaultLead(email: string, slug: string): Promise<{ success: boolean }> {
  try {
    const query = `INSERT INTO leads (email, offer_slug) VALUES ($1, $2)`;
    await pool.query(query, [email.toLowerCase().trim(), slug]);
    return { success: true };
  } catch (err) {
    console.error("[DB_ERROR]:", err);
    return { success: false };
  }
}