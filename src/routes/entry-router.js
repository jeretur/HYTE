import express from 'express';
import {
  getEntries,
  getEntryById,
  postEntry,
  deleteEntry
} from '../controllers/entry-controller.js';

const entryRouter = express.Router();

entryRouter.route('/').get(getEntries).post(postEntry);

entryRouter.route('/:id').get(getEntryById);

entryRouter.route('/:id').delete(deleteEntry)

export default entryRouter;
