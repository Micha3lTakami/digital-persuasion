import React, { useState } from 'react';
import { AlertTriangleIcon, CheckCircleIcon, FilterIcon, ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
const Monitoring = () => {
  const [timeRange, setTimeRange] = useState('7days');
  const [filterOpen, setFilterOpen] = useState(false);
  const activityLog = [{
    id: 1,
    type: 'blocked',
    platform: 'ChatGPT',
    time: '2 hours ago',
    description: 'Attempted to access information about creating dangerous materials',
    severity: 'high'
  }, {
    id: 2,
    type: 'warning',
    platform: 'Bing AI',
    time: '5 hours ago',
    description: 'Potentially inappropriate question about bypassing security systems',
    severity: 'medium'
  }, {
    id: 3,
    type: 'safe',
    platform: 'Claude',
    time: 'Yesterday',
    description: 'Homework help for mathematics',
    severity: 'none'
  }, {
    id: 4,
    type: 'blocked',
    platform: 'Google Bard',
    time: 'Yesterday',
    description: 'Attempted to ask about accessing adult content',
    severity: 'high'
  }, {
    id: 5,
    type: 'safe',
    platform: 'ChatGPT',
    time: '2 days ago',
    description: 'Questions about historical events',
    severity: 'none'
  }, {
    id: 6,
    type: 'warning',
    platform: 'Claude',
    time: '3 days ago',
    description: 'Ambiguous question that could lead to harmful information',
    severity: 'low'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Activity Monitoring
          </h2>
          <p className="text-gray-600">Track and review AI interactions</p>
        </div>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={timeRange} onChange={e => setTimeRange(e.target.value)}>
            <option value="24h">Last 24 hours</option>
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="all">All time</option>
          </select>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 relative" onClick={() => setFilterOpen(!filterOpen)}>
            <FilterIcon size={20} />
            {filterOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Filter by:
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">
                        Blocked
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">
                        Warnings
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Safe</span>
                    </label>
                  </div>
                </div>
              </div>}
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="flex space-x-4 text-sm font-medium text-gray-500">
            <button className="flex items-center">
              Type <ArrowDownIcon size={14} className="ml-1" />
            </button>
            <button className="flex items-center">Platform</button>
            <button className="flex items-center">
              Time <ArrowUpIcon size={14} className="ml-1" />
            </button>
          </div>
          <div>
            <input type="text" placeholder="Search activity..." className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {activityLog.map(activity => <div key={activity.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  {activity.type === 'blocked' && <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <AlertTriangleIcon size={18} className="text-red-600" />
                    </div>}
                  {activity.type === 'warning' && <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                      <AlertTriangleIcon size={18} className="text-yellow-600" />
                    </div>}
                  {activity.type === 'safe' && <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircleIcon size={18} className="text-green-600" />
                    </div>}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        ${activity.type === 'blocked' ? 'bg-red-100 text-red-800' : activity.type === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                        {activity.type === 'blocked' ? 'Blocked' : activity.type === 'warning' ? 'Warning' : 'Safe'}
                      </span>
                      <span className="ml-2 text-sm font-medium text-gray-900">
                        {activity.platform}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {activity.time}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {activity.description}
                  </p>
                  {activity.type !== 'safe' && <div className="mt-2">
                      <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                        View Details
                      </button>
                    </div>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default Monitoring;