import React from 'react';
import { BellIcon, UserIcon } from 'lucide-react';
const Header = () => {
  return <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6">
      <h1 className="text-xl font-semibold text-gray-800">AI Safety Tools</h1>
      <div className="flex items-center space-x-4">
        <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
          <BellIcon size={20} />
        </button>
        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
          <UserIcon size={16} />
        </div>
      </div>
    </header>;
};
export default Header;