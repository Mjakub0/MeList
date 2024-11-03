import React, { useState } from 'react';
import Item from './Item';
import './List.css';

function List({ list, deleteList, user, onBack }) {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState(list.items);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [newMember, setNewMember] = useState(''); // Nový stav pre vstup člena

  const addItem = () => {
    if (newItem) {
      setItems([...items, { text: newItem, done: false }]);
      setNewItem('');
    }
  };

  const toggleItemDone = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setItems(updatedItems);
  };

  const openMembersModal = () => setShowMembersModal(true);
  const closeMembersModal = () => setShowMembersModal(false);

  const addMember = () => {
    if (newMember && !list.members.includes(newMember)) {
      list.members = [...list.members, newMember];
      setNewMember(''); // Vyčistí vstup po pridaní člena
    }
  };

  const removeMember = (username) => {
    list.members = list.members.filter(member => member !== username);
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <button className="back-button" onClick={onBack}>Back to Lists</button>
        <button className="members-button" onClick={openMembersModal}>Members</button>
        {list.owner === user && (
          <button className="delete-button" onClick={deleteList}>Delete List</button>
        )}
      </div>
      <h3 className="list-title">{list.name}</h3>
      
      <div className="add-item">
        <input
          type="text"
          placeholder="New item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      
      <ul className="list-items">
        {items.map((item, index) => (
          <Item key={index} item={item} toggleDone={() => toggleItemDone(index)} />
        ))}
      </ul>

      {/* Modal pre členov */}
      {showMembersModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Members</h3>
            <ul className="members-list">
              {list.members.map((member, index) => (
                <li key={index} className="member-item">
                  <span>{member}</span>
                  {list.owner === user && member !== user && (
                    <button onClick={() => removeMember(member)} className="remove-member">
                      &times;
                    </button>
                  )}
                </li>
              ))}
            </ul>
            {list.owner === user && (
              <div className="add-member">
                <input
                  type="text"
                  placeholder="Enter username"
                  value={newMember}
                  onChange={(e) => setNewMember(e.target.value)}
                />
                <button onClick={addMember}>Add Member</button>
              </div>
            )}
            <button className="close-modal" onClick={closeMembersModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;





