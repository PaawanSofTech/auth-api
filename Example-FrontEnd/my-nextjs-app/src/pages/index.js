// src/pages/index.js

import React from 'react';
import Button from '../components/button';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Button onClick={() => alert('Button clicked')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </Button>
    </div>
  );
};

export default Home;
