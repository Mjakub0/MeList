import pool from '../config/db';

export const addItem = async (text: string, listId: number) => {
  const result = await pool.query(
    'INSERT INTO items (text, list_id) VALUES ($1, $2) RETURNING *',
    [text, listId]
  );
  return result.rows[0];
};

export const getItemsByList = async (listId: number) => {
  const result = await pool.query('SELECT * FROM items WHERE list_id = $1', [listId]);
  return result.rows;
};

export const updateItem = async (id: number, text: string, done: boolean) => {
  const result = await pool.query(
    'UPDATE items SET text = $1, done = $2 WHERE id = $3 RETURNING *',
    [text, done, id]
  );
  return result.rows[0];
};

export const deleteItem = async (id: number) => {
  await pool.query('DELETE FROM items WHERE id = $1', [id]);
};
