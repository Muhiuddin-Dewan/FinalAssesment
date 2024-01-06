// publicApi.js

const express = require('express');
const diskspace = require('diskspace');
const { Pool } = require('pg');

const publicRouter = express.Router();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: false, // Disable SSL for local development (remove this line in a production environment)
});

publicRouter.get('/health', async (req, res) => {
  try {
    // Get disk space information
    diskspace.check('/', (err, total, free, status) => {
      if (err) {
        console.error('Error checking disk space:', err.message);
        return res.status(500).json({ status: 'DOWN', error: 'Error checking disk space' });
      }

      const diskSpaceStatus = {total, free, status};

      // Check database status
      pool.query('SELECT 1', (dbErr) => {
        if (dbErr) {
          console.error('Error querying database:', dbErr);
          return res.status(500).json({ status: 'DOWN', error: 'Error querying database' });
        }

        const dbStatus = {
          status: 'UP',
          database: 'PostgreSQL',
          ping: 'OK',
        };

        const healthStatus = {
          status: 'UP',
          version: 'v1.3.1',
          diskSpace: diskSpaceStatus,
          db: dbStatus,
        };

        res.json(healthStatus);
      });
    });
  } catch (error) {
    console.error('Unhandled error:', error);
    res.status(500).json({ status: 'DOWN', error: 'Internal Server Error' });
  }
});

module.exports = publicRouter;
