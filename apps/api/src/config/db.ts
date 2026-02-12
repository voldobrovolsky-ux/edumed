import { Pool } from 'pg';
import { config } from './env';
import { logger } from '../utils/logger';

let pool: Pool;

export const connectDB = async (): Promise<Pool> => {
  if (pool) {
    return pool;
  }

  try {
    pool = new Pool({
      host: config.database.host,
      port: config.database.port,
      database: config.database.name,
      user: config.database.user,
      password: config.database.password,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });

    // Test connection
    await pool.query('SELECT NOW()');
    logger.info('PostgreSQL connection established');

    return pool;
  } catch (error) {
    logger.error('Database connection failed:', error);
    throw error;
  }
};

export const getDB = (): Pool => {
  if (!pool) {
    throw new Error('Database not initialized. Call connectDB first.');
  }
  return pool;
};

export const closeDB = async (): Promise<void> => {
  if (pool) {
    await pool.end();
    logger.info('Database connection closed');
  }
};

export default { connectDB, getDB, closeDB };
