
// import './App.css';
import React, { useState } from 'react';
import UserForm from './UserForm';
import UserData from './UserData';

function App() {
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (data) => {
    setSubmittedData((prevData) => [...prevData, data]);
  };

  return (
    <div className="App">
      <h1>My App</h1>
      <UserForm onSubmit={handleSubmit} />
      {submittedData.map((data, index) => (
        <UserData key={index} username={data.username} age={data.age} />
      ))}
    </div>
  );
}

export default App;