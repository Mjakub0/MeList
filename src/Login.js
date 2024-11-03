import React, { useState } from 'react';

function Login({ onLogin, onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && username) {
      // Odosielame základné prihlasovacie údaje, na účely demo tu simulujeme prihlasenie
      onLogin({ name: username, email, username });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
      <p>
        Don't have an account? <button type="button" onClick={onSwitchToSignup}>Sign up</button>
      </p>
    </form>
  );
}

export default Login;

