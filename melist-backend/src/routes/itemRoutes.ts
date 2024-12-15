import express from 'express';
import {
  addItemToList,
  getItems,
  updateListItem,
  deleteListItem,
} from '../controllers/itemController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/:listId', authenticate, addItemToList);
router.get('/:listId', authenticate, getItems);
router.put('/:id', authenticate, updateListItem);
router.delete('/:id', authenticate, deleteListItem);

export default router;
