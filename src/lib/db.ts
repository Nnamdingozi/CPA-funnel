import { Pool } from 'pg';

/**
 * DATABASE CONNECTION POOL
 * Rule 15: Strict Registry Types
 */
let pool: Pool;

if (!global.pgPool) {
  global.pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true, // Neon requires SSL
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });
}

pool = global.pgPool;

export default pool;

// TypeScript global declaration for hot-reloading
declare global {
  var pgPool: Pool | undefined;
}