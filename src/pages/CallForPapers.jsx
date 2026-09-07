import React from 'react';
import { 
  Send, 
  Clock, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  UploadCloud, 
  ShieldAlert, 
  BookOpen, 
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PeerReviewWorkflow from '../components/PeerReviewWorkflow';
import { conferenceData } from '../data/conferenceData';

export default function CallForPapers() {
  const { callForPapers, links } = conferenceData;
  const hasPaperForm = Boolean(links.paperSubmission && links.paperSubmission.trim());

  return (
    <div className="py-12 md:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          tag="Scholarly Submissions"
          title="Call for Papers"
          subtitle={callForPapers.invitation}
        />

        {/* Status Callout Banner: Google Form Submission Portal */}
        <div className={`rounded-xl p-6 border transition-all ${
          hasPaperForm 
            ? 'bg-sky-50 border-sky-200' 
            : 'bg-amber-50/80 border-amber-200'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {hasPaperForm ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
                ) : (
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                )}
                <h3 className="font-bold text-base md:text-lg text-slate-900">
                  {hasPaperForm ? 'Paper Submission Portal is Open' : 'Paper Submission Portal'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                {hasPaperForm 
                  ? 'Official Google Form submission portal is currently accepting full manuscript submissions in PDF format.' 
                  : 'Paper submission portal will be announced soon. Please review the submission guidelines, tracks, and formatting requirements in preparation.'}
              </p>
            </div>

            <div className="shrink-0">
              {hasPaperForm ? (
                <a
                  href={links.paperSubmission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Submit Paper (Google Form)</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 rounded-lg border border-slate-200 cursor-not-allowed select-none">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Submission Portal Coming Soon</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Originality & Ethics Alert */}
        <div className="mt-8 bg-white border-l-4 border-navy-900 rounded-r-xl border-y border-r border-slate-200 p-5 shadow-2xs">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-navy-900 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Mandatory Originality Policy
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                {callForPapers.originalityNotice} Manuscripts undergoing concurrent review with other conferences, journals, or symposia are strictly prohibited. Plagiarism check will be conducted using automated screening tools before any manuscript is dispatched for peer review.
              </p>
            </div>
          </div>
        </div>

        {/* Submission Requirements Grid */}
        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
            Author Submission Requirements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {callForPapers.submissionRequirements.map((req, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-md bg-navy-50 text-navy-900 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900">
                    {req.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {req.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Google Form Submission Fields (For Author Reference) */}
        <div className="mt-14 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="max-w-3xl mb-6">
            <h3 className="font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-sky-600" />
              <span>Configured Submission Fields (Google Form)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Authors will be requested to provide the following information when the submission form opens:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {callForPapers.googleFormFieldsSuggested.map((field, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs font-semibold text-slate-700 flex items-center gap-2 shadow-2xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>{field}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <span>External Service Integration: Google Forms Portal</span>
            <span className="font-semibold text-slate-700">No User Account or Login Required</span>
          </div>
        </div>

        {/* Full Peer Review Workflow */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <SectionTitle
            tag="Scholarly Review"
            title="Double-Blind Peer Review Process"
            subtitle="Understand how manuscripts are evaluated from initial submission through final camera-ready processing."
          />
          <PeerReviewWorkflow />
        </div>

      </div>
    </div>
  );
}
