import React from 'react';

function Item({ item, toggleDone }) {
  return (
    <li className={item.done ? 'done' : ''} onClick={toggleDone}>
      {item.text}
    </li>
  );
}

export default Item;
