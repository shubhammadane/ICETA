import React from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  AlertTriangle, 
  FileCheck2, 
  Award, 
  Presentation, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PeerReviewWorkflow from '../components/PeerReviewWorkflow';
import { conferenceData } from '../data/conferenceData';

export default function Publication() {
  const { publication } = conferenceData;

  return (
    <div className="py-12 md:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          tag="Proceedings & Dissemination"
          title="Publication Framework"
          subtitle="Scholarly publication ethics, peer-review standards, and proceedings routing for presented manuscripts."
        />

        {/* Proposed Publication Route Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
                Official Publication Arrangement
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Proposed Publication Route
              </h3>
            </div>
            <div className="shrink-0 bg-sky-50 border border-sky-200 text-sky-900 px-3.5 py-1.5 rounded-lg text-xs font-bold">
              Springer Nature (Proposed)
            </div>
          </div>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p className="font-semibold text-slate-900">
              {publication.proposedRoute}
            </p>
            <p>
              To ensure all accepted research upholds rigorous academic rigor, papers submitted to {conferenceData.shortName} must pass strict double-blind evaluation by domain experts. Only papers officially registered, presented by an author during the technical sessions, and satisfying editorial benchmarks will be forwarded for proceedings inclusion.
            </p>
          </div>

          {/* Explicit Ethical & Editorial Disclaimer */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl border-y border-r border-amber-200 p-5 space-y-2">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Editorial Evaluation Policy Notice</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              <strong>{publication.disclaimer}</strong> No paper is guaranteed publication or indexing without completing the full peer-review process, presentation at the conference, and final approval by the publisher's editorial board. In accordance with publication ethics, indexation (such as Scopus or Web of Science) is solely at the discretion of the respective database indexing bodies and is never promised prior to official proceedings release.
            </p>
          </div>
        </div>

        {/* Author Publication Conditions Grid */}
        <div className="mt-14">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
            Author Publication Conditions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {publication.guidelines.map((guideline, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-3.5 shadow-2xs hover:bg-white hover:border-sky-300 transition-all"
              >
                <div className="w-6 h-6 rounded-md bg-navy-900 text-sky-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {guideline}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Presentation & Camera-Ready Protocol */}
        <div className="mt-14 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="max-w-3xl space-y-3">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Presentation className="w-5 h-5 text-sky-600" />
              <span>Mandatory Conference Presentation</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In strict accordance with international scientific conference standards, “no-show” papers will not be forwarded to the publisher. At least one designated author must register for the conference and deliver either an in-person or synchronous online oral presentation during the allocated track session.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-4 text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <FileCheck2 className="w-4 h-4 text-sky-600" />
                <span>Originality Verification</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Publishing Agreement Consent</span>
              </span>
            </div>

            <Link
              to="/call-for-papers"
              className="inline-flex items-center gap-1.5 font-bold text-navy-900 hover:text-sky-700"
            >
              <span>Review Call for Papers Guidelines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Peer Review Stepper */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <SectionTitle
            tag="Verification Workflow"
            title="Peer Review & Acceptance Journey"
            subtitle="From initial submission to final editorial volume delivery."
          />
          <PeerReviewWorkflow />
        </div>

      </div>
    </div>
  );
}
