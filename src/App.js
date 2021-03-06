import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
