import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState('Hello from Parent!');

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div className="bg-gray-800 text-white p-5 rounded-lg mt-10 max-w-2xl mx-auto">
      <h2 className="text-2xl mb-4">Parent Component</h2>
      <p className="mb-4">{message}</p>
      <Child message={message} updateMessage={updateMessage} />
    </div>
  );
};

export default Parent;
