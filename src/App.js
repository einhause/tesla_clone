import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      {/* header 
      1. Logo
      2. Car links (to go to certain area on page)
      3. additional links
        1) shop
        2) account
        3) hamburger
    */}
      <Header />
      {/* car section - x4
      1) text component
      2) button components x2
      3) bouncing arrow component
      4) bg of cars
     */}
    </div>
  );
}

export default App;
