import React from 'react';

const GrandChild = ({ message, updateMessage }) => {
  const handleClick = () => {
    updateMessage('Hello from GrandChild!');
  };

  return (
    <div className="bg-gray-600 text-white p-5 rounded-lg mt-4">
      <h4 className="text-lg mb-4">GrandChild Component</h4>
      <p className="mb-4">{message}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105"
        onClick={handleClick}
      >
        Update Message
      </button>
    </div>
  );
};

export default GrandChild;
