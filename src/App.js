import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import ListManager from './ListManager';

function App() {
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false); // Pridávame stav na prepínanie medzi loginom a signup

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <>
          <h1>Welcome, {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
          <ListManager user={user.username} />
        </>
      ) : (
        isSignup ? (
          <Signup onSignup={handleLogin} onSwitchToLogin={() => setIsSignup(false)} />
        ) : (
          <Login onLogin={handleLogin} onSwitchToSignup={() => setIsSignup(true)} />
        )
      )}
    </div>
  );
}

export default App;


