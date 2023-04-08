import React, { useState, useEffect } from 'react';
import './App.css';
import { OnInit } from './Utilities/AppInit';
import { TestComponent } from './components/TestComponent/TestComponent';
import NavBar from './components/NavBar/NavBar';
import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';
import axios from 'axios';
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const start = async () => {
      await OnInit();

      await axios.get('http://localhost:3001/users').then((response) => {
        setUsers(response.data);
      });
    };
    start();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <LeftPanel>
        <h1>Panel Title</h1>
        <p>Panel content goes here</p>
      </LeftPanel>
      <RightPanel>
        <h1>Panel Title</h1>
        <p>Panel content goes here</p>
      </RightPanel>
      <TestComponent />

      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
