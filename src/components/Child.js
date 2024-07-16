import React from 'react';
import GrandChild from './Grandchild';

const Child = ({ message, updateMessage }) => {
  return (
    <div className="bg-gray-700 text-white p-5 rounded-lg mt-4">
      <h3 className="text-xl mb-4">Child Component</h3>
      <p className="mb-4">{message}</p>
      <GrandChild message={message} updateMessage={updateMessage} />
    </div>
  );
};

export default Child;
