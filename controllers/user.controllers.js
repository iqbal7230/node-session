import pool from "../config/db.js";


export const createUser = async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;

    const result = await pool.query(
      `INSERT INTO users1(username,password,first_name,last_name)
       VALUES($1,$2,$3,$4) RETURNING *`,
      [username, password, firstName, lastName]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getUsers = async (req, res) => {
  const result = await pool.query("SELECT * FROM users1");
  res.json(result.rows);
};


export const searchUsers = async (req, res) => {
  const { username } = req.query;

  const result = await pool.query(
    `SELECT * FROM users1 WHERE username ILIKE $1 LIMIT 10`,
    [`${username}%`]
  );

  res.json(result.rows);
};