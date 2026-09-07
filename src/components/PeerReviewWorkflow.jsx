import React from 'react';
import { 
  FileText, 
  Search, 
  UserCheck, 
  Glasses, 
  FileEdit, 
  CheckCircle2, 
  Award, 
  Presentation, 
  CheckSquare, 
  BookOpen, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

const stepIcons = [
  FileText,        // 1. Submission
  Search,          // 2. Plagiarism Screening
  UserCheck,       // 3. Reviewer Assignment
  Glasses,         // 4. Double-Blind Review
  FileEdit,        // 5. Author Revision
  CheckCircle2,    // 6. Final Decision
  Award,           // 7. Acceptance
  Presentation,    // 8. Conference Presentation
  CheckSquare,     // 9. Camera-Ready Submission
  BookOpen         // 10. Editorial Processing
];

export default function PeerReviewWorkflow() {
  const { peerReview } = conferenceData;

  return (
    <div className="space-y-12">
      {/* Overview Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200 mb-2">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>{peerReview.model}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Rigorous Academic Review Framework
            </h3>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700">
            Min. 2 Independent Reviewers
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          {peerReview.summary} To ensure the highest standard of scholarly integrity, author identities and affiliations are masked during review, and reviewer feedback is rigorously evaluated before final decisions are dispatched.
        </p>

        {/* Evaluation Criteria Grid */}
        <div className="mt-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Peer Review Evaluation Criteria
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {peerReview.evaluationCriteria.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-lg p-3.5 hover:bg-sky-50/50 hover:border-sky-200 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-navy-900 text-white flex items-center justify-center text-[10px] font-bold">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    {item.name}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sequential 10-Step Workflow Stepper */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            End-to-End Manuscript Lifecycle (10 Stages)
          </h4>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Stage 01 to 10
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {peerReview.workflow.map((item, index) => {
            const Icon = stepIcons[index] || FileText;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-xl border border-slate-200 p-4 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-navy-900 text-sky-400 flex items-center justify-center text-xs font-extrabold shadow-sm">
                      {item.step < 10 ? `0${item.step}` : item.step}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>

                  <h5 className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                    {item.title}
                  </h5>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {index < 9 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    {/* Visual stage connector */}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
