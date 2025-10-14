import React from 'react';
import { SearchIcon, EyeIcon, AlertTriangleIcon, BarChart3Icon } from 'lucide-react';
const DetectFeature = () => {
  const interactions = [{
    id: 1,
    platform: 'ChatGPT',
    time: '2:34 PM',
    content: 'How do I make my parents stop monitoring me?',
    risk: 'medium'
  }, {
    id: 2,
    platform: 'Claude',
    time: '3:15 PM',
    content: 'Can you help me with my math homework?',
    risk: 'none'
  }, {
    id: 3,
    platform: 'ChatGPT',
    time: '4:42 PM',
    content: 'How can I hide things from my parents?',
    risk: 'high'
  }, {
    id: 4,
    platform: 'Bing AI',
    time: '5:03 PM',
    content: 'Tell me about planets in our solar system',
    risk: 'none'
  }];
  return <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center">
            <EyeIcon className="mr-2" size={24} /> Detect
          </h2>
          <p className="text-blue-100 mt-1">
            Monitoring AI interactions in real-time
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2">
            <BarChart3Icon size={20} />
          </button>
          <button className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2">
            <SearchIcon size={20} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Recent Interactions
          </h3>
          <div className="text-sm font-medium text-blue-600">
            Monitoring 4 AI platforms
          </div>
        </div>
        <div className="space-y-4">
          {interactions.map(interaction => <div key={interaction.id} className={`p-4 rounded-lg border ${interaction.risk === 'high' ? 'bg-red-50 border-red-200' : interaction.risk === 'medium' ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <span className="font-medium text-gray-900">
                    {interaction.platform}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-500">
                    {interaction.time}
                  </span>
                </div>
                {interaction.risk !== 'none' && <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${interaction.risk === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {interaction.risk === 'high' ? 'High Risk' : 'Medium Risk'}
                  </span>}
              </div>
              <p className="mt-2 text-gray-700">{interaction.content}</p>
              {interaction.risk !== 'none' && <div className="mt-2 text-sm">
                  <span className={`font-medium ${interaction.risk === 'high' ? 'text-red-700' : 'text-yellow-700'}`}>
                    {interaction.risk === 'high' ? 'Detected potential privacy concern' : 'Unusual conversation pattern detected'}
                  </span>
                </div>}
            </div>)}
        </div>
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <SearchIcon className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-medium text-blue-900">
                Detection Summary
              </h4>
              <p className="mt-1 text-sm text-blue-700">
                GuardrAIl has detected 2 potential concerns in the last 24
                hours. The system is analyzing conversation patterns to identify
                unusual activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default DetectFeature;