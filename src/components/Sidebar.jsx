import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`fixed top-16 left-0 h-full bg-gradient-to-r from-gray-100 to-yellow-200 shadow-lg transition-width duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-3 m-2 text-gray-700 hover:text-gray-900 transition-colors"
      >
        {isCollapsed ? '→' : '←'}
      </button>

      <div className={`flex items-center justify-center ${isCollapsed ? 'hidden' : 'block'}`}>
        <span>Your Sidebar Content</span>
      </div>

      <ul className="space-y-4 mt-10">
        <li className="group relative">
          <NavLink to="/" className="flex items-center gap-4 px-4 py-2 text-gray-700 hover:text-gray-900">
            <AiOutlineHome className="text-2xl" />
            {!isCollapsed && <span>Home</span>}
          </NavLink>
        </li>
        <li className="group relative">
          <NavLink to="/register" className="flex items-center gap-4 px-4 py-2 text-gray-700 hover:text-gray-900">
            <AiOutlineUserAdd className="text-2xl" />
            {!isCollapsed && <span>Register</span>}
          </NavLink>
        </li>
        <li className="group relative">
          <NavLink to="/login" className="flex items-center gap-4 px-4 py-2 text-gray-700 hover:text-gray-900">
            <AiOutlineLogin className="text-2xl" />
            {!isCollapsed && <span>Login</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
