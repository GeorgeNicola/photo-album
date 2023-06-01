const pool = require("../../config/postgresql/postgreSQL");

const createUser = (req, res) => {
  const { name, email, age } = req.body;

  pool.query(
    "INSERT INTO Users (name, email, age) VALUES ($1, $2, $3)",
    [name, email, age],
    (err) => {
      if (err) {
        throw err;
      }
      res.status(201).json({ status: "success", message: "User added." });
    }
  );
};

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM Users", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  createUser: createUser,
  getAllUsers: getAllUsers,
};
