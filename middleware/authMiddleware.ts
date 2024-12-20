import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1]; 
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return; 
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as { id: number };
    req.user = { id: decoded.id }; 
    next(); 
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
