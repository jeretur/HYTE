import express from 'express';
import {
  getUsers,
  postUser,
  postLogin,
  getUserById,
  putUserById,
  deleteUserById,
} from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter
  .route('/')
  // Get all users
  .get(getUsers)
  .post(postUser);

userRouter
  .route('/:id')
  // Get user based on ID
  .get(getUserById)
  // Update user based on ID
  .put(putUserById)
  // Delete user based on ID
  .delete(deleteUserById);

userRouter.post('/login', postLogin);

export default userRouter;
