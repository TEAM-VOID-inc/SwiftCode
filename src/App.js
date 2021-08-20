import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import Navbar from './UiComponent/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LandingPage />
    </div>
  );
}

export default App;
