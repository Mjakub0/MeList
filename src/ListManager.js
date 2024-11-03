import React, { useState } from 'react';
import List from './List';
import Modal from './Modal';

function ListManager({ user }) {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');
  const [newListItems, setNewListItems] = useState(['']);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedList, setSelectedList] = useState(null);

  const addList = () => {
    if (newListName && newListItems.some(item => item)) {
      const newList = { 
        name: newListName, 
        items: newListItems.filter(item => item).map(item => ({ text: item, done: false })), 
        owner: user, 
        members: [user] 
      };
      setLists([...lists, newList]);
      setNewListName('');
      setNewListItems(['']);
      setIsModalOpen(false);
    }
  };

  const addNewItemField = () => {
    setNewListItems([...newListItems, '']);
  };

  const handleItemChange = (index, value) => {
    const updatedItems = [...newListItems];
    updatedItems[index] = value;
    setNewListItems(updatedItems);
  };

  const deleteList = (index) => {
    setLists(lists.filter((_, i) => i !== index));
    setSelectedList(null);
  };

  return (
    <div>
      <h2>Your Lists</h2>
      {selectedList === null ? (
        <>
          <button onClick={() => setIsModalOpen(true)}>Add List</button>

          {/* Zobrazenie zoznamu názvov zoznamov */}
          <div className="lists">
            {lists.map((list, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedList(index)} 
                className="list-name"
              >
                {list.name}
              </div>
            ))}
          </div>

          {/* Modálne okno s formulárom na pridanie nového zoznamu */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h3>Create New List</h3>
            <input
              type="text"
              placeholder="List Name"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
            />
            
            <h4>Items:</h4>
            {newListItems.map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Item ${index + 1}`}
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
                style={{ marginBottom: '8px' }}
              />
            ))}
            <button onClick={addNewItemField}>Add Item</button>
            <br />
            <button onClick={addList}>Add</button>
          </Modal>
        </>
      ) : (
        <List
          list={lists[selectedList]}
          deleteList={() => deleteList(selectedList)}
          user={user}
          onBack={() => setSelectedList(null)}
        />
      )}
    </div>
  );
}

export default ListManager;




