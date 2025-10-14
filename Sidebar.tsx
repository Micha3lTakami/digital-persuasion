import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, SlidersIcon, EyeIcon, SettingsIcon, ShieldAlertIcon, LayoutIcon } from 'lucide-react';
const Sidebar = () => {
  const navItems = [{
    path: '/',
    icon: <HomeIcon size={20} />,
    label: 'Dashboard'
  }, {
    path: '/configuration',
    icon: <SlidersIcon size={20} />,
    label: 'Configuration'
  }, {
    path: '/monitoring',
    icon: <EyeIcon size={20} />,
    label: 'Monitoring'
  }, {
    path: '/settings',
    icon: <SettingsIcon size={20} />,
    label: 'Settings'
  }, {
    path: '/features',
    icon: <LayoutIcon size={20} />,
    label: 'Features'
  }];
  return <div className="w-16 md:w-64 bg-white border-r border-gray-200 flex-shrink-0">
      <div className="flex items-center justify-center md:justify-start h-16 border-b border-gray-200 px-4">
        <ShieldAlertIcon className="h-8 w-8 text-blue-600" />
        <span className="ml-2 text-lg font-semibold text-gray-800 hidden md:block">
          AI Guardian
        </span>
      </div>
      <nav className="mt-5">
        <ul>
          {navItems.map(item => <li key={item.path} className="mb-2 px-2">
              <NavLink to={item.path} className={({
            isActive
          }) => `flex items-center p-2 rounded-lg ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                <span className="min-w-[24px]">{item.icon}</span>
                <span className="ml-3 hidden md:block">{item.label}</span>
              </NavLink>
            </li>)}
        </ul>
      </nav>
    </div>;
};
export default Sidebar;