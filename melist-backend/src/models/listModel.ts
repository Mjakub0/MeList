import pool from '../config/db';

export const createList = async (name: string, ownerId: number) => {
  const result = await pool.query(
    'INSERT INTO lists (name, owner_id) VALUES ($1, $2) RETURNING *',
    [name, ownerId]
  );
  return result.rows[0];
};

export const getListsByUser = async (userId: number) => {
  const result = await pool.query('SELECT * FROM lists WHERE owner_id = $1', [userId]);
  return result.rows;
};

export const deleteList = async (id: number) => {
  await pool.query('DELETE FROM lists WHERE id = $1', [id]);
};
