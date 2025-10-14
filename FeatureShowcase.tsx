import React from 'react';
import DetectFeature from './DetectFeature';
import AlertFeature from './AlertFeature';
import AnalyzeFeature from './AnalyzeFeature';
const FeatureShowcase = () => {
  return <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            GuardrAIl Features
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI safety tools to protect children and empower
            parents and educators
          </p>
        </div>
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Detect</h2>
            <p className="text-gray-600 max-w-3xl mb-6">
              GuardrAIl quietly analyses a child's AI interactions, identifying
              unusual frequency, tone, or topics that might indicate risk. It
              helps parents and teachers see what's really happening — before it
              becomes a problem.
            </p>
            <DetectFeature />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Alert</h2>
            <p className="text-gray-600 max-w-3xl mb-6">
              Send real-time alerts when usage frequency or conversation tone
              crosses a safety threshold, so parents or teachers can act
              instantly.
            </p>
            <AlertFeature />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Guide</h2>
            <p className="text-gray-600 max-w-3xl mb-6">
              Prevents unsafe or off-task AI prompts in the moment and
              recontextualizes them into guided learning activities — enabling
              students to construct knowledge rather than seeking workarounds.
              GuardrAIl acts like an online co-teacher, intercepting requests
              mid-air and helping students learn the process of thinking through
              problems.
            </p>
            <AnalyzeFeature />
          </div>
        </div>
      </div>
    </div>;
};
export default FeatureShowcase;