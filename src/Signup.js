import React, { useState } from 'react';

function Signup({ onSignup, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && username && email) {
      // Na účely demo simulujeme registráciu
      onSignup({ name, username, email });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      <p>
        Already have an account? <button type="button" onClick={onSwitchToLogin}>Login</button>
      </p>
    </form>
  );
}

export default Signup;
