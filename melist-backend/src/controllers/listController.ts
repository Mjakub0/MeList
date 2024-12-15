import { Request, Response } from 'express';
import { createList, getListsByUser, deleteList } from '../models/listModel';

export const addList = async (req: Request, res: Response) => {
  const { name } = req.body;
  const userId = req.user?.id;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  const list = await createList(name, userId);
  res.status(201).json({ list });
};

export const getLists = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  const lists = await getListsByUser(userId);
  res.json({ lists });
};

export const removeList = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteList(Number(id));
  res.status(204).send();
};


