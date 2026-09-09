import React, { useState } from 'react';
import { WorkflowStep } from '../types';

interface WorkflowVisualizerProps {
  type?: string;
  steps?: WorkflowStep[];
  title?: string;
  notes?: string;
  compact?: boolean;
}

export const WorkflowVisualizer: React.FC<WorkflowVisualizerProps> = ({
  steps,
  title,
}) => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const displaySteps = steps || [
    { title: 'Data Ingestion', description: 'Raw input data streams or documents ingested', type: 'input' },
    { title: 'Feature Extraction', description: 'Transformations and vector representations', type: 'process' },
    { title: 'Model Inference', description: 'Neural network or predictive algorithm execution', type: 'model' },
    { title: 'Output & Action', description: 'Structured response or automated webhook trigger', type: 'output' },
  ];

  return (
    <div className="rounded-2xl bg-[#F8F7FB] border border-[#E2E1EC] p-5 sm:p-6 shadow-2xs">
      {title && (
        <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-[#E2E1EC]">
          <span className="w-2 h-2 rounded-full bg-[#4B4FCF]"></span>
          <h4 className="text-xs font-mono font-medium uppercase text-[#2B2A3D] tracking-wider">
            {title}
          </h4>
        </div>
      )}

      {/* Grid of Steps */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(displaySteps.length, 4)} gap-3.5 relative`}>
        {displaySteps.map((step, idx) => {
          const isSelected = activeStepIdx === idx;
          return (
            <div
              key={step.title}
              onClick={() => setActiveStepIdx(idx)}
              className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                isSelected
                  ? 'bg-white border-[#4B4FCF] ring-2 ring-[#4B4FCF]/20 shadow-sm -translate-y-0.5'
                  : 'bg-white border-[#E2E1EC] hover:border-[#4B4FCF]/30 shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                  isSelected 
                    ? 'bg-[#4B4FCF] text-white border-[#4B4FCF] shadow-2xs' 
                    : 'bg-[#F8F7FB] text-[#2B2A3D] border-[#E2E1EC]'
                }`}>
                  Phase 0{idx + 1}
                </span>
                {step.type && (
                  <span className="text-[10px] font-mono text-[#2B2A3D]/50 uppercase">
                    {step.type}
                  </span>
                )}
              </div>

              <div className="text-xs sm:text-sm font-medium text-[#2B2A3D] mb-1">
                {step.title}
              </div>

              <p className="text-[11px] sm:text-xs text-[#2B2A3D]/70 leading-snug font-normal">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Active Phase Note */}
      {displaySteps[activeStepIdx] && (
        <div className="mt-4 p-3.5 rounded-xl bg-white border border-[#E2E1EC] text-xs text-[#2B2A3D] font-mono shadow-2xs">
          <span className="font-semibold text-[#4B4FCF]">Current Phase: {displaySteps[activeStepIdx].title}</span> — {displaySteps[activeStepIdx].description}
        </div>
      )}
    </div>
  );
};
