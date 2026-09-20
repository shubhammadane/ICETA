import React from 'react';
import { 
  Send, 
  Clock, 
  FileText, 
  CheckCircle2, 
  UploadCloud, 
  ShieldAlert, 
  BookOpen, 
  ExternalLink,
  Layers,
  ArrowRight,
  Glasses,
  UserCheck,
  Cpu,
  FileEdit,
  Award,
  Target,
  Percent,
  Sparkles,
  FlaskConical,
  BarChart3,
  Info,
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PeerReviewWorkflow from '../components/PeerReviewWorkflow';
import { conferenceData } from '../data/conferenceData';

const reviewProcessSteps = [
  {
    step: "01",
    title: "Double-Blind Peer Review",
    desc: "Manuscripts will be reviewed using a double-blind peer-review process where applicable.",
    icon: Glasses
  },
  {
    step: "02",
    title: "Independent Reviewers",
    desc: "Each eligible manuscript will be evaluated by at least two independent reviewers.",
    icon: UserCheck
  },
  {
    step: "03",
    title: "Technical Evaluation",
    desc: "Papers will be assessed based on relevance to the conference scope, technical quality, originality, methodology, results, clarity, and overall contribution.",
    icon: Cpu
  },
  {
    step: "04",
    title: "Revision",
    desc: "Authors may be requested to revise their manuscripts based on reviewer comments before final acceptance.",
    icon: FileEdit
  },
  {
    step: "05",
    title: "Final Selection",
    desc: "Final acceptance will depend on the peer-review outcome and the conference's selection criteria.",
    icon: Award
  }
];

const paperSelectionCriteria = [
  { title: "Relevance to ICETAQC 2027", icon: Target },
  { title: "Originality and Novelty", icon: Sparkles },
  { title: "Technical Quality", icon: Cpu },
  { title: "Methodological Soundness", icon: Layers },
  { title: "Experimental Evaluation", icon: FlaskConical },
  { title: "Quality of Results and Discussion", icon: BarChart3 },
  { title: "Clarity and Organization", icon: FileText },
  { title: "Research Contribution", icon: CheckCircle2 },
  { title: "Quality and Relevance of References", icon: BookOpen }
];

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
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm transition-colors"
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

        {/* Technical Tracks / Topics Quick Link */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs hover:border-sky-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Conference Scope & Technical Tracks
              </h4>
              <p className="text-xs text-slate-600">
                Explore all 6 research tracks across Artificial Intelligence, Quantum Computing, Cybersecurity, and Intelligent Systems.
              </p>
            </div>
          </div>
          <Link
            to="/tracks"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-navy-900 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors shrink-0"
          >
            <span>View Technical Tracks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
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

        {/* ========================================================= */}
        {/* NEW SECTION: Peer Review & Paper Selection                */}
        {/* ========================================================= */}
        <div className="mt-16 pt-12 border-t border-slate-200 space-y-12">
          
          {/* Section Header */}
          <SectionTitle
            tag="Academic Quality & Standards"
            title="Peer Review & Paper Selection"
            subtitle="ICETAQC 2027 follows a rigorous peer-review and paper-selection process to ensure the technical and academic quality of accepted papers."
          />

          {/* 1. Review Process (5 Stage Cards) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Review Process
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Every manuscript undergoes structured academic evaluation through five systematic stages:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviewProcessSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.step}
                    className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-academic-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-lg bg-navy-900 text-sky-400 flex items-center justify-center font-bold text-xs shadow-sm">
                          {step.step}
                        </span>
                        <IconComponent className="w-5 h-5 text-slate-400" />
                      </div>
                      <h4 className="font-bold text-base text-slate-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Target Acceptance Rate Card */}
          <div className="bg-gradient-to-br from-navy-900 via-navy-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-academic">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  <Percent className="w-3.5 h-3.5 text-sky-400" />
                  <span>Target Acceptance Rate</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Target Acceptance Rate: Approximately 20%
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Approximately 20% of submitted papers are targeted for acceptance, subject to submission quality and the peer-review process.
                </p>
              </div>

              <div className="shrink-0 text-center bg-white/5 border border-white/10 rounded-xl px-8 py-5 backdrop-blur-xs min-w-[140px]">
                <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
                  ~20%
                </div>
                <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase mt-1 block">
                  Target Acceptance Rate
                </span>
              </div>
            </div>
          </div>

          {/* 3. Paper Selection Criteria */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Paper Selection Criteria
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Manuscripts are evaluated against the following core academic dimensions:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {paperSelectionCriteria.map((criterion, idx) => {
                const IconComponent = criterion.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:border-sky-300 hover:shadow-xs transition-all flex items-center gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-xs sm:text-sm text-slate-800 leading-snug">
                      {criterion.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Publication Note */}
          <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-5 text-slate-800 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-sky-900 mb-1">
                Publication Note
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Selected high-quality, peer-reviewed and presented papers will be considered for publication in Springer Nature proceedings/edited volume, subject to Springer Nature's editorial evaluation and publication policies.
              </p>
            </div>
          </div>

        </div>

        {/* Full Peer Review Workflow Stepper */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <SectionTitle
            tag="Review Stages"
            title="Double-Blind Peer Review Process"
            subtitle="Understand how manuscripts are evaluated from initial submission through final camera-ready processing."
          />
          <PeerReviewWorkflow />
        </div>

        {/* Important Dates / Submission CTA */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                <span>Upcoming Deadlines</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Ready to Submit Your Research?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Review key conference deadlines and submit your full manuscript before the submission deadline. All submissions undergo our double-blind peer-review framework.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                to="/important-dates"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Important Dates</span>
              </Link>
              {hasPaperForm ? (
                <a
                  href={links.paperSubmission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-sky-400" />
                  <span>Submit Paper</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 rounded-lg border border-slate-200 cursor-not-allowed select-none">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Submission Portal Coming Soon</span>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

