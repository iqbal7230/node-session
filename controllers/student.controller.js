import pool from "../config/db.js";


export const getStudents = async (req, res) => {
  try {
    const { branch } = req.query;

    let query = "SELECT * FROM students";
    let values = [];

    if (branch) {
      query += " WHERE branch = $1";
      values.push(branch);
    }

    const result = await pool.query(query, values);

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM students WHERE id=$1", [id]);

    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};