import React from 'react';
import Parent from './components/Parent';
import './App.css';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <h1 className="text-center text-4xl font-bold py-10">Props Drilling Demo</h1>
      <div className="max-w-6xl mx-auto">
        <Parent />
      </div>
    </div>
  );
}

export default App;
