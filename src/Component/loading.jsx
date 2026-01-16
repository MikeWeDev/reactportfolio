import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black w-full">
      <div className="flex space-x-4">
        {/* These use Tailwind's arbitrary value syntax for delays */}
        <div className="w-8 h-8 rounded-full bg-red-500 animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-8 h-8 rounded-full bg-green-500 animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-8 h-8 rounded-full bg-blue-500 animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;