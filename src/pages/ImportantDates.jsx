import React from 'react';
import { Calendar, Clock, AlertCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import { conferenceData } from '../data/conferenceData';

export default function ImportantDates() {
  const hasPaperForm = Boolean(conferenceData.links.paperSubmission && conferenceData.links.paperSubmission.trim());

  return (
    <div className="py-12 md:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          tag="Conference Schedule"
          title="Important Dates"
          subtitle={`Review key milestone timelines for ${conferenceData.shortName}. All deadlines are scheduled in tentative phases for the 2027 academic cycle.`}
        />

        {/* Timeline Component */}
        <Timeline dates={conferenceData.importantDates} showNotice={true} />

        {/* Operational Schedule Notes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>Standard Submission Timezone</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unless otherwise specified in author notification broadcasts, all conference deadlines operate on <strong>Indian Standard Time (IST, UTC +5:30)</strong>. Submissions submitted prior to 23:59 IST on the deadline date will be treated as valid submissions.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-600" />
              <span>Hard Deadline & Extension Policy</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To maintain the integrity and thoroughness of the Double-Blind Peer Review workflow, authors are strongly urged to submit well in advance. Official extensions, if any, will be announced strictly on this website.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-slate-50 border border-slate-200 rounded-xl p-8 space-y-4">
          <h3 className="font-bold text-lg text-slate-900">
            Ready to Prepare Your Manuscript?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Consult the submission formatting guidelines, track topic alignments, and ethical standards before the deadline.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/call-for-papers"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm"
            >
              <span>View Call for Papers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/tracks"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-200"
            >
              <span>Explore Research Tracks</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
