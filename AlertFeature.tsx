import React from 'react';
import { BellIcon, AlertCircleIcon, CheckCircleIcon, ClockIcon } from 'lucide-react';
const AlertFeature = () => {
  const alerts = [{
    id: 1,
    type: 'critical',
    title: 'Harmful Content Detected',
    description: 'Alex attempted to access instructions for dangerous activities on ChatGPT',
    time: '10 minutes ago',
    status: 'new'
  }, {
    id: 2,
    type: 'warning',
    title: 'Unusual Usage Pattern',
    description: 'Emma has used AI platforms 15 times in the last hour, significantly above normal',
    time: '1 hour ago',
    status: 'viewed'
  }, {
    id: 3,
    type: 'info',
    title: 'Weekly Usage Summary',
    description: 'Total AI interactions increased by 27% this week across all monitored children',
    time: 'Yesterday',
    status: 'resolved'
  }];
  return <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center">
            <BellIcon className="mr-2" size={24} /> Alert
          </h2>
          <p className="text-orange-50 mt-1">
            Real-time notifications for immediate action
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white/20 text-white text-sm py-1 px-3 rounded-full">
            2 New Alerts
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Recent Alerts</h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {alerts.map(alert => <div key={alert.id} className={`p-4 rounded-lg border ${alert.type === 'critical' ? 'bg-red-50 border-red-200' : alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' : 'bg-blue-50 border-blue-200'} ${alert.status === 'new' ? 'ring-2 ring-offset-2 ring-red-500' : ''}`}>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  {alert.type === 'critical' && <AlertCircleIcon className="h-5 w-5 text-red-500" />}
                  {alert.type === 'warning' && <AlertCircleIcon className="h-5 w-5 text-yellow-500" />}
                  {alert.type === 'info' && <CheckCircleIcon className="h-5 w-5 text-blue-500" />}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium text-gray-900">
                      {alert.title}
                    </h4>
                    <div className="flex items-center">
                      {alert.status === 'new' && <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 mr-2">
                          New
                        </span>}
                      <span className="text-xs text-gray-500 flex items-center">
                        <ClockIcon className="h-3 w-3 mr-1" />
                        {alert.time}
                      </span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {alert.description}
                  </p>
                  <div className="mt-2 flex">
                    {alert.status !== 'resolved' && <>
                        <button className="mr-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          Take Action
                        </button>
                        <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Dismiss
                        </button>
                      </>}
                    {alert.status === 'resolved' && <span className="text-xs text-green-600 font-medium">
                        Resolved
                      </span>}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <BellIcon className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-medium text-gray-900">
                Alert Delivery
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                Alerts are being sent to your email and mobile device. You'll
                receive instant notifications for critical alerts.
              </p>
              <div className="mt-2">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Configure notification preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AlertFeature;