// user-controller.js
import {listAllUsers, findUserById, addUser} from '../models/user-model.js';

const getUsers = async (req, res) => {
  try {
    const users = await listAllUsers();

    // remove passwords before sending
    const safeUsers = users.map((u) => {
      const {password, ...rest} = u; // eslint-disable-line no-unused-vars
      return rest;
    });

    res.json(safeUsers);
  } catch (e) {
    res.status(500).json({error: e.message});
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await findUserById(req.params.id); // get ID from URL
    if (!user) {
      return res.status(404).json({error: 'User not found'});
    }

    // remove password before sending
    const {password: _, ...safeUser} = user;

    res.json(safeUser);
  } catch (e) {
    res.status(500).json({error: e.message});
  }
};

const postUser = async (req, res) => {
  const { username, password, email } = req.body;

  // simple validation
  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  try {
    const result = await addUser({ username, password, email });

    res.status(201).json({
      message: 'New user added',
      user_id: result.user_id
    });
  } catch (e) {
    // handle duplicate username/email errors
    if (e.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Username or email already exists' });
    }
    res.status(500).json({ error: e.message });
  }
};


export {getUsers, getUserById, postUser};
