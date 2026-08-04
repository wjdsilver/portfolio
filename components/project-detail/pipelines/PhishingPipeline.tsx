import React from 'react';

export default function PhishingPipeline() {
  return (
    <div className="flex items-center justify-start md:justify-center gap-3 p-4 md:p-6 bg-white rounded-lg overflow-x-auto font-sans">
      {/* Step 1: HTML Webpage */}
      <div className="flex flex-col items-center min-w-[110px] shrink-0">
        <div className="text-xs font-semibold text-slate-700 text-center h-[38px] flex items-center justify-center mb-2 leading-tight">
          HTML Webpage
        </div>
        <div className="w-[110px] h-[130px] border-2 border-[#2B72B9] rounded-xl bg-[#F0F6FF] flex items-center justify-center shadow-sm">
          <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="6" y="10" width="52" height="44" rx="4" fill="#F8FAFC" stroke="#2B72B9" />
            <path d="M6 20h52" stroke="#2B72B9" />
            <circle cx="12" cy="15" r="1.5" fill="#2B72B9" />
            <circle cx="17" cy="15" r="1.5" fill="#2B72B9" />
            <circle cx="22" cy="15" r="1.5" fill="#2B72B9" />
            <rect x="12" y="26" width="22" height="22" fill="#3B82F6" opacity="0.8" rx="2" />
            <line x1="38" y1="28" x2="52" y2="28" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
            <line x1="38" y1="34" x2="50" y2="34" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
            <line x1="38" y1="40" x2="46" y2="40" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="text-[#2B72B9] text-lg font-bold shrink-0 mt-[38px]">➔</div>

      {/* Step 2: DOM Parsing */}
      <div className="flex flex-col items-center min-w-[110px] shrink-0">
        <div className="text-xs font-semibold text-slate-700 text-center h-[38px] flex items-center justify-center mb-2 leading-tight">
          DOM Parsing
        </div>
        <div className="w-[110px] h-[130px] border-2 border-[#2B72B9] rounded-xl bg-[#F0F6FF] flex items-center justify-center shadow-sm">
          <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="12" y="8" width="40" height="48" rx="4" fill="#F8FAFC" stroke="#2B72B9" />
            <path d="M22 22l-5 5 5 5M42 22l5 5-5 5M34 20l-4 14" stroke="#2B72B9" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="42" cy="42" r="8" fill="#3B82F6" />
            <path d="M42 37v2m0 6v2m-5-5h2m6 0h2" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <div className="text-[#2B72B9] text-lg font-bold shrink-0 mt-[38px]">➔</div>

      {/* Step 3: DOM Tree */}
      <div className="flex flex-col items-center min-w-[110px] shrink-0">
        <div className="text-xs font-semibold text-slate-700 text-center h-[38px] flex items-center justify-center mb-2 leading-tight">
          DOM Tree
        </div>
        <div className="w-[110px] h-[130px] border-2 border-[#2B72B9] rounded-xl bg-[#F0F6FF] flex items-center justify-center shadow-sm">
          <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#2B72B9" strokeWidth="2">
            <line x1="32" y1="18" x2="18" y2="34" />
            <line x1="32" y1="18" x2="46" y2="34" />
            <line x1="18" y1="34" x2="12" y2="50" />
            <line x1="18" y1="34" x2="24" y2="50" />
            <line x1="46" y1="34" x2="40" y2="50" />
            <line x1="46" y1="34" x2="52" y2="50" />
            <circle cx="32" cy="16" r="5" fill="#3B82F6" />
            <circle cx="18" cy="34" r="4" fill="#94A3B8" />
            <circle cx="46" cy="34" r="4" fill="#94A3B8" />
            <circle cx="12" cy="50" r="3.5" fill="#94A3B8" />
            <circle cx="24" cy="50" r="3.5" fill="#94A3B8" />
            <circle cx="40" cy="50" r="3.5" fill="#94A3B8" />
            <circle cx="52" cy="50" r="3.5" fill="#94A3B8" />
          </svg>
        </div>
      </div>

      <div className="text-[#2B72B9] text-lg font-bold shrink-0 mt-[38px]">➔</div>

      {/* Step 4: WL Subtree Feature Extraction */}
      <div className="flex flex-col items-center min-w-[110px] shrink-0">
        <div className="text-xs font-semibold text-slate-700 text-center h-[38px] flex items-center justify-center mb-2 leading-tight">
          WL Subtree
          <br />
          Feature Extraction
        </div>
        <div className="w-[110px] h-[130px] border-2 border-[#2B72B9] rounded-xl bg-[#F0F6FF] flex items-center justify-center shadow-sm">
          <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#2B72B9" strokeWidth="2">
            <line x1="18" y1="20" x2="42" y2="32" />
            <line x1="18" y1="32" x2="42" y2="32" />
            <line x1="18" y1="44" x2="42" y2="32" />
            <circle cx="18" cy="20" r="4" fill="#3B82F6" />
            <circle cx="18" cy="32" r="4" fill="#94A3B8" />
            <circle cx="18" cy="44" r="4" fill="#94A3B8" />
            <circle cx="42" cy="32" r="7" fill="#3B82F6" />
            <path d="M40 29l4 3-4 3" stroke="#FFFFFF" />
          </svg>
        </div>
      </div>

      <div className="text-[#2B72B9] text-lg font-bold shrink-0 mt-[38px]">➔</div>

      {/* Step 5: Feature Vector Representation */}
      <div className="flex flex-col items-center min-w-[110px] shrink-0">
        <div className="text-xs font-semibold text-slate-700 text-center h-[38px] flex items-center justify-center mb-2 leading-tight">
          Feature Vector
          <br />
          Representation
        </div>
        <div className="w-[110px] h-[130px] border-2 border-[#2B72B9] rounded-xl bg-[#F0F6FF] flex items-center justify-center shadow-sm">
          <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
            <path d="M14 12H10V52H14M50 12H54V52H50" stroke="#2B72B9" strokeWidth="2" />
            <rect x="18" y="16" width="7" height="7" fill="#3B82F6" rx="1" />
            <rect x="28" y="16" width="7" height="7" fill="#3B82F6" rx="1" />
            <rect x="38" y="16" width="7" height="7" fill="#CBD5E1" rx="1" />
            <rect x="18" y="26" width="7" height="7" fill="#CBD5E1" rx="1" />
            <rect x="28" y="26" width="7" height="7" fill="#3B82F6" rx="1" />
            <rect x="38" y="26" width="7" height="7" fill="#3B82F6" rx="1" />
            <rect x="18" y="36" width="7" height="7" fill="#3B82F6" rx="1" />
            <rect x="28" y="36" width="7" height="7" fill="#CBD5E1" rx="1" />
            <rect x="38" y="36" width="7" height="7" fill="#CBD5E1" rx="1" />
          </svg>
        </div>
      </div>

      <div className="text-[#2B72B9] text-lg font-bold shrink-0 mt-[38px]">➔</div>

      {/* Step 6: Random Forest Classifier */}
      <div className="flex flex-col items-center min-w-[110px] shrink-0">
        <div className="text-xs font-semibold text-slate-700 text-center h-[38px] flex items-center justify-center mb-2 leading-tight">
          Random Forest
          <br />
          Classifier
        </div>
        <div className="w-[110px] h-[130px] border-2 border-[#2B72B9] rounded-xl bg-[#F0F6FF] flex items-center justify-center shadow-sm">
          <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#2B72B9" strokeWidth="2">
            <line x1="22" y1="12" x2="15" y2="22" />
            <line x1="22" y1="12" x2="29" y2="22" />
            <circle cx="22" cy="12" r="3" fill="#3B82F6" />
            <circle cx="15" cy="22" r="2.5" fill="#3B82F6" />
            <circle cx="29" cy="22" r="2.5" fill="#94A3B8" />
            <line x1="42" y1="12" x2="35" y2="22" />
            <line x1="42" y1="12" x2="49" y2="22" />
            <circle cx="42" cy="12" r="3" fill="#3B82F6" />
            <circle cx="35" cy="22" r="2.5" fill="#94A3B8" />
            <circle cx="49" cy="22" r="2.5" fill="#3B82F6" />
            <line x1="32" y1="36" x2="22" y2="48" />
            <line x1="32" y1="36" x2="42" y2="48" />
            <circle cx="32" cy="36" r="3" fill="#3B82F6" />
            <circle cx="22" cy="48" r="2.5" fill="#3B82F6" />
            <circle cx="42" cy="48" r="2.5" fill="#3B82F6" />
          </svg>
        </div>
      </div>

      <div className="text-[#2B72B9] text-lg font-bold shrink-0 mt-[38px]">➔</div>

      {/* Step 7: Output */}
      <div className="flex flex-col items-center min-w-[110px] shrink-0">
        <div className="text-xs font-semibold text-slate-700 text-center h-[38px] flex items-center justify-center mb-2 leading-tight">
          Output:
          <br />
          Phishing vs Benign
        </div>
        <div className="w-[110px] h-[130px] border-2 border-[#2B72B9] rounded-xl bg-[#F0F6FF] flex flex-col items-center justify-center p-2 gap-2 shadow-sm">
          {/* Phishing Badge */}
          <div className="flex items-center justify-between w-[88%] px-2 py-1.5 rounded-full text-[11px] font-semibold bg-blue-600 text-white">
            <span>Phishing</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          {/* Benign Badge */}
          <div className="flex items-center justify-between w-[88%] px-2 py-1.5 rounded-full text-[11px] font-semibold bg-slate-400 text-white">
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
            <span>Benign</span>
          </div>
        </div>
      </div>
    </div>
  );
}