import React, { useState } from 'react';
import { Save, Plus, X } from 'lucide-react';
const Configuration = () => {
  const [platforms, setPlatforms] = useState([{
    id: 1,
    name: 'ChatGPT',
    enabled: true
  }, {
    id: 2,
    name: 'Google Bard',
    enabled: true
  }, {
    id: 3,
    name: 'Bing AI',
    enabled: true
  }, {
    id: 4,
    name: 'Claude',
    enabled: true
  }]);
  const [blockedTopics, setBlockedTopics] = useState(['Violence', 'Adult content', 'Dangerous activities', 'Illegal activities']);
  const [newTopic, setNewTopic] = useState('');
  const togglePlatform = id => {
    setPlatforms(platforms.map(platform => platform.id === id ? {
      ...platform,
      enabled: !platform.enabled
    } : platform));
  };
  const addBlockedTopic = () => {
    if (newTopic && !blockedTopics.includes(newTopic)) {
      setBlockedTopics([...blockedTopics, newTopic]);
      setNewTopic('');
    }
  };
  const removeTopic = topic => {
    setBlockedTopics(blockedTopics.filter(t => t !== topic));
  };
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Configuration</h2>
        <p className="text-gray-600">Customize AI safety settings</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Protected Platforms
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Select which AI platforms to monitor and protect
        </p>
        <div className="space-y-3">
          {platforms.map(platform => <div key={platform.id} className="flex items-center">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input type="checkbox" className="sr-only" checked={platform.enabled} onChange={() => togglePlatform(platform.id)} />
                  <div className={`block w-10 h-6 rounded-full ${platform.enabled ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                  <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${platform.enabled ? 'transform translate-x-4' : ''}`}></div>
                </div>
                <span className="ml-3 text-gray-700">{platform.name}</span>
              </label>
            </div>)}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Blocked Topics & Content
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Add topics or content types that should be blocked
        </p>
        <div className="flex mb-4">
          <input type="text" className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Add new topic to block" value={newTopic} onChange={e => setNewTopic(e.target.value)} onKeyPress={e => e.key === 'Enter' && addBlockedTopic()} />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={addBlockedTopic}>
            <Plus size={20} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {blockedTopics.map(topic => <div key={topic} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <span className="text-sm text-gray-700">{topic}</span>
              <button className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => removeTopic(topic)}>
                <X size={14} />
              </button>
            </div>)}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Response Handling
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Configure how to handle potentially harmful AI responses
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              When harmful content is detected:
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Block completely and notify</option>
              <option>Redact harmful portions only</option>
              <option>Show warning but allow viewing</option>
              <option>Log only (no blocking)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notification preferences:
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                <span className="ml-2 text-gray-700">
                  Email alerts for blocked content
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                <span className="ml-2 text-gray-700">
                  Browser notifications
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-gray-700">
                  Weekly safety reports
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Save size={18} className="mr-2" />
          Save Configuration
        </button>
      </div>
    </div>;
};
export default Configuration;