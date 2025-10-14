import React from 'react';
import { ShieldIcon, AlertTriangleIcon, CheckCircleIcon, BarChart3Icon } from 'lucide-react';
const Dashboard = () => {
  const stats = [{
    id: 1,
    name: 'Protected Platforms',
    value: '4',
    icon: <ShieldIcon />,
    color: 'bg-blue-500'
  }, {
    id: 2,
    name: 'Blocked Interactions',
    value: '27',
    icon: <AlertTriangleIcon />,
    color: 'bg-red-500'
  }, {
    id: 3,
    name: 'Safe Interactions',
    value: '143',
    icon: <CheckCircleIcon />,
    color: 'bg-green-500'
  }, {
    id: 4,
    name: 'Weekly Activity',
    value: '+12%',
    icon: <BarChart3Icon />,
    color: 'bg-purple-500'
  }];
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <p className="text-gray-600">
          Monitor and manage AI safety for your family
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => <div key={stat.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center text-white mb-4`}>
              {stat.icon}
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.name}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">
              {stat.value}
            </p>
          </div>)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Protected Platforms
          </h3>
          <div className="space-y-4">
            {['ChatGPT', 'Google Bard', 'Bing AI', 'Claude'].map(platform => <div key={platform} className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">{platform}</span>
                <span className="ml-auto text-sm text-gray-500">Active</span>
              </div>)}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Alerts
          </h3>
          <div className="space-y-4">
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
              <div className="flex items-center">
                <AlertTriangleIcon className="text-red-500 mr-2" size={16} />
                <span className="text-red-700 font-medium">
                  Harmful content blocked
                </span>
                <span className="ml-auto text-xs text-gray-500">2h ago</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Attempt to bypass content filters on ChatGPT
              </p>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg">
              <div className="flex items-center">
                <AlertTriangleIcon className="text-yellow-500 mr-2" size={16} />
                <span className="text-yellow-700 font-medium">
                  Suspicious activity
                </span>
                <span className="ml-auto text-xs text-gray-500">Yesterday</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Multiple attempts to access restricted topics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;