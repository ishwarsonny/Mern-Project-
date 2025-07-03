import { useState } from 'react';

export const Tabs = ({ children }) => {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  );
};

export const Tab = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mb-4">
      <button 
        className={`text-left font-medium ${isActive ? 'text-pink-500' : 'text-gray-700'}`}
        onClick={() => setIsActive(!isActive)}
      >
        {title}
      </button>
      {isActive && (
        <div className="mt-2 text-sm text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};
