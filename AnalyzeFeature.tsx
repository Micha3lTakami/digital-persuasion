import React from 'react';
import { BarChart3Icon, BookOpenIcon, BrainIcon, CheckCircleIcon, LightbulbIcon, RotateCcwIcon, ShieldIcon, UsersIcon, ZapIcon } from 'lucide-react';
const AnalyzeFeature = () => {
  const interceptedPrompts = [{
    id: 1,
    original: 'Write a 500-word essay on Romeo and Juliet for me',
    reframed: 'What are the key themes in Romeo and Juliet I should explore in my essay?',
    subject: 'English Literature',
    outcome: 'Guided Analysis'
  }, {
    id: 2,
    original: 'Solve this quadratic equation: 3x² + 8x - 4 = 0',
    reframed: 'What steps should I follow to solve this quadratic equation: 3x² + 8x - 4 = 0?',
    subject: 'Mathematics',
    outcome: 'Process Learning'
  }, {
    id: 3,
    original: 'What are the causes of World War II? Just list them all',
    reframed: 'Can you help me understand how to research the major causes of World War II?',
    subject: 'History',
    outcome: 'Research Skills'
  }];
  return <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center">
            <BrainIcon className="mr-2" size={24} /> Guide
          </h2>
          <p className="text-purple-100 mt-1">
            Transforming off-task prompts into learning opportunities
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2">
            <LightbulbIcon size={20} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <ShieldIcon className="h-5 w-5 text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">
              Active Learning Guidance
            </h3>
          </div>
          <p className="text-gray-600 text-sm">
            GuardrAIl intercepts off-task prompts and transforms them into
            guided learning activities, helping students develop critical
            thinking skills instead of seeking shortcuts.
          </p>
        </div>
        <div className="space-y-6 mb-6">
          {interceptedPrompts.map(prompt => <div key={prompt.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 p-4 border-b border-red-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 rounded-full p-1.5">
                    <ZapIcon size={18} className="text-red-600" />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-red-800 bg-red-100 px-2 py-0.5 rounded">
                        Intercepted Prompt
                      </span>
                      <span className="text-xs text-gray-500">
                        {prompt.subject}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-800">
                      {prompt.original}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-indigo-50 border-b border-indigo-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-full p-1.5">
                    <RotateCcwIcon size={18} className="text-indigo-600" />
                  </div>
                  <div className="ml-3 flex-1">
                    <span className="text-xs font-medium text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded">
                      Recontextualized
                    </span>
                    <p className="mt-1 text-sm text-gray-800">
                      {prompt.reframed}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1.5">
                    <CheckCircleIcon size={18} className="text-green-600" />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between">
                      <span className="text-xs font-medium text-green-800 bg-green-100 px-2 py-0.5 rounded">
                        Learning Outcome
                      </span>
                      <span className="text-xs text-green-600 font-medium">
                        {prompt.outcome}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      Instead of doing the work for the student, GuardrAIl
                      guides them through the process of thinking about the
                      problem, developing research skills, and constructing
                      their own knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <BookOpenIcon className="h-5 w-5 text-indigo-600" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-medium text-indigo-900">
                Learning Process Over Answers
              </h4>
              <p className="mt-1 text-sm text-indigo-700">
                GuardrAIl functions like an online co-teacher, intercepting
                requests mid-air and transforming them into opportunities for
                students to learn the process of thinking through problems
                rather than seeking shortcuts.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="bg-white rounded p-2 border border-indigo-200">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                      <UsersIcon size={12} className="text-purple-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                      Personalized Guidance
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded p-2 border border-indigo-200">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <BarChart3Icon size={12} className="text-blue-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                      Progress Tracking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AnalyzeFeature;