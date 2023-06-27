import React from 'react';

function UserData({ username, age }) {
  return (
    <div>
      <h2>Submitted Data:</h2>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserData;