import { useEffect } from 'react';
import './App.css';
import { OnInit } from './Utilities/AppInit';
import { TestComponent } from './components/TestComponent/TestComponent';
import NavBar from './components/NavBar/NavBar';
import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';
function App() {
  useEffect(() => {
    const start = async () => {
      await OnInit();
    };
    start();
  });
  return (
    <div className="App">
      <NavBar />
      <TestComponent />
      <LeftPanel>
        <h1>Panel Title</h1>
        <p>Panel content goes here</p>
      </LeftPanel>
      <RightPanel>
        <h1>Panel Title</h1>
        <p>Panel content goes here</p>
      </RightPanel>
    </div>
  );
}

export default App;
