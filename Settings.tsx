import React from 'react';
import { Save } from 'lucide-react';
const Settings = () => {
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
        <p className="text-gray-600">Manage your AI Guardian preferences</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Protection Level
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Choose the overall level of protection
        </p>
        <div className="space-y-4">
          <label className="flex items-start p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50">
            <input type="radio" name="protection-level" className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
            <div className="ml-3">
              <span className="block text-sm font-medium text-gray-900">
                High Protection
              </span>
              <span className="block text-sm text-gray-500">
                Strict filtering with maximum safety. Blocks most potentially
                harmful content.
              </span>
            </div>
          </label>
          <label className="flex items-start p-3 border border-blue-200 bg-blue-50 rounded-lg cursor-pointer">
            <input type="radio" name="protection-level" className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" defaultChecked />
            <div className="ml-3">
              <span className="block text-sm font-medium text-gray-900">
                Balanced (Recommended)
              </span>
              <span className="block text-sm text-gray-500">
                Moderate filtering that blocks harmful content while allowing
                educational discussions.
              </span>
            </div>
          </label>
          <label className="flex items-start p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50">
            <input type="radio" name="protection-level" className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
            <div className="ml-3">
              <span className="block text-sm font-medium text-gray-900">
                Low Protection
              </span>
              <span className="block text-sm text-gray-500">
                Basic filtering that only blocks the most harmful content. More
                permissive.
              </span>
            </div>
          </label>
          <label className="flex items-start p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50">
            <input type="radio" name="protection-level" className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
            <div className="ml-3">
              <span className="block text-sm font-medium text-gray-900">
                Custom
              </span>
              <span className="block text-sm text-gray-500">
                Personalized settings defined in the Configuration section.
              </span>
            </div>
          </label>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Account Settings
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="parent@example.com" />
            <p className="mt-1 text-sm text-gray-500">
              Used for alerts and notifications
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <button className="px-3 py-2 text-sm text-blue-600 hover:text-blue-800 font-medium">
              Change Password
            </button>
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
              <span className="ml-2 text-sm text-gray-700">
                Require password to change settings
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Advanced Settings
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data Collection
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Collect data to improve protection (Recommended)</option>
              <option>Minimal data collection</option>
              <option>No data collection</option>
            </select>
            <p className="mt-1 text-sm text-gray-500">
              Controls how AI Guardian uses data to improve protection
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Extension Behavior
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">
                  Start automatically when browser opens
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">
                  Show icon in toolbar
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">
                  Allow override with parent password
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="px-4 py-2 text-red-600 hover:text-red-800 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg">
          Reset All Settings
        </button>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Save size={18} className="mr-2" />
          Save Settings
        </button>
      </div>
    </div>;
};
export default Settings;