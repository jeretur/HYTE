import express from 'express';
import {
  deleteItemById,
  getItemById,
  getItems,
  postItem,
  putItemById,
} from '../controllers/item-controller.js';

const itemRouter = express.Router();

itemRouter
  .route('/')
  // Get all items
  .get(getItems)
  .post(postItem);

itemRouter
  .route('/:id')
  // Get item based on ID
  .get(getItemById)
  // Update item based on ID
  .put(putItemById)
  // Delete item based on ID
  .delete(deleteItemById);


export default itemRouter;
