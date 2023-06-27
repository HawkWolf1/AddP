import React, { useState } from 'react';
import './UserForm.css';

function UserForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label>
          USERNAME:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          AGE:
          <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default UserForm;