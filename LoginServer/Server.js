const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const crypto = require('crypto');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to the SQLite database
const db = new sqlite3.Database('my_database.db', (err) => {
  if (err) {
    console.error('Failed to connect to database:', err);
  } else {
    console.log('Connected to SQLite database.');
    // create DB if it does not exist
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL
      )
    `);
  }
});

/**
 * Uses nodes crypto library to hash passwords with SHA256.
 * Hashs will be a 64 digit hexadecimal number.
 * May need to look into using a more secure hashing method.
 */
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

/**
 * POST /register
 * Expects JSON: { email, password }
 * Inserts a new user record in the database.
 */
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required.',
    });
  }

  const hashed = hashPassword(password);

  // Insert the user into the database
  const sql = `INSERT INTO users (email, password_hash) VALUES (?, ?)`;
  db.run(sql, [email, hashed], function (err) {
    if (err) {
      // If the email is already taken, sqlite will throw an error
      // because "email" is UNIQUE in the schema.
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(409).json({
          success: false,
          message: 'Email is already in use.',
        });
      }
      console.error('Database insert error:', err);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }

    return res.json({
      success: true,
      message: 'Registration successful',
      userId: this.lastID,
    });
  });
});

/**
 * POST /login
 * Expects JSON: { email, password }
 */
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const hashed = hashPassword(password);

  // Query user by email
  db.get(
    `SELECT user_id, email, password_hash FROM users WHERE email = ?`,
    [email],
    (err, row) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({
          success: false,
          message: 'Server error',
        });
      }
      if (!row) {
        // No user found with that email
        return res.json({
          success: false,
          message: 'Incorrect email or password.',
        });
      }

      // Compare the provided password hash with the stored hash
      if (row.password_hash === hashed) {
        return res.json({
          success: true,
          message: 'Login successful.',
        });
      } else {
        return res.json({
          success: false,
          message: 'Incorrect email or password.',
        });
      }
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
