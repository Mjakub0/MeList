import { Request, Response } from 'express';
import { addItem, getItemsByList, updateItem, deleteItem } from '../models/itemModel';

export const addItemToList = async (req: Request, res: Response): Promise<void> => {
  try {
    const { text } = req.body;
    const { listId } = req.params;

    const item = await addItem(text, Number(listId));
    res.status(201).json({ item });
  } catch (error) {
    res.status(500).json({ message: 'Error adding item to list' });
  }
};

export const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const { listId } = req.params;

    const items = await getItemsByList(Number(listId));
    res.json({ items });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving items' });
  }
};

export const updateListItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { text, done } = req.body;

    const item = await updateItem(Number(id), text, done);
    res.json({ item });
  } catch (error) {
    res.status(500).json({ message: 'Error updating item' });
  }
};

export const deleteListItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await deleteItem(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
};


