// user-model.js
import promisePool from '../utils/database.js';

const listAllUsers = async () => {
  const [rows] = await promisePool.query('SELECT * FROM Users');
  return rows;
};

const findUserById = async (id) => {
  const [rows] = await promisePool.execute(
    'SELECT * FROM Users WHERE user_id = ?',
    [id]
  );
  return rows[0];
};

const addUser = async (user) => {
  const { username, password, email } = user;

  // Insert into Users table
  const [result] = await promisePool.execute(
    'INSERT INTO Users (username, password, email) VALUES (?, ?, ?)',
    [username, password, email]
  );

  return { user_id: result.insertId }; // return the new user's ID
};

export { listAllUsers, findUserById, addUser };

