import React from 'react';
import { 
  CreditCard, 
  Clock, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  Building, 
  Globe2, 
  ExternalLink,
  HelpCircle,
  Mail,
  ShieldCheck
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { conferenceData } from '../data/conferenceData';

export default function Registration() {
  const { registration, links } = conferenceData;
  const hasRegForm = Boolean(links.registration && links.registration.trim());

  const suggestedFields = [
    "Full Name",
    "Email Address",
    "Institution / University",
    "Department",
    "Designation",
    "Country",
    "Registration Category",
    "Accepted Paper ID (for Authors)",
    "Paper Title (for Authors)",
    "Mode of Attendance (In-Person / Online)",
    "Payment / Reference Details (if applicable)"
  ];

  return (
    <div className="py-12 md:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          tag="Delegate & Author Participation"
          title="Conference Registration"
          subtitle={`Official registration options for authors, academic delegates, students, and industry professionals attending ${conferenceData.shortName}.`}
        />

        {/* Status Notification Banner */}
        <div className={`rounded-xl p-6 border transition-all ${
          hasRegForm ? 'bg-sky-50 border-sky-200' : 'bg-amber-50/80 border-amber-200'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {hasRegForm ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
                ) : (
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                )}
                <h3 className="font-bold text-base md:text-lg text-slate-900">
                  {hasRegForm ? 'Registration Portal is Live' : 'Registration Schedule & Fee Status'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {hasRegForm
                  ? 'Registration is currently open via the official Google Form portal.'
                  : `${registration.notice} The organizing committee will publish finalized category registration fee schedules and payment portals following the paper review milestone.`}
              </p>
            </div>

            <div className="shrink-0">
              {hasRegForm ? (
                <a
                  href={links.registration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm"
                >
                  <CreditCard className="w-4 h-4 text-sky-400" />
                  <span>Register Now (Google Form)</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 rounded-lg border border-slate-200 cursor-not-allowed select-none">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Registration Portal Coming Soon</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Registration Categories Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Participation Categories
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Eligible categories for presenting authors and attending participants.
              </p>
            </div>
            <span className="text-xs font-semibold text-sky-800 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
              Hybrid Access
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registration.categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-academic-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Category 0{idx + 1}
                  </span>
                  <h4 className="font-bold text-base text-slate-900 mb-2">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Package Inclusions:
                    </span>
                    {cat.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Fee Schedule:</span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
                    To be Announced
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Google Form Registration Fields Preview */}
        <div className="mt-14 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="max-w-3xl mb-6">
            <h3 className="font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-sky-600" />
              <span>Configured Registration Information (Google Form)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Delegates will be prompted for the following details upon portal activation:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {suggestedFields.map((field, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs font-semibold text-slate-700 flex items-center gap-2 shadow-2xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>{field}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Inquiries Note */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-slate-900">
              Registration & Payment Inquiries
            </h4>
            <p className="text-xs text-slate-600">
              For queries concerning institutional sponsorship, group discounts, or registration confirmations, contact the secretarial desk.
            </p>
          </div>
          <a
            href={`mailto:${conferenceData.contactEmail}`}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-navy-900 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Registration Desk</span>
          </a>
        </div>

      </div>
    </div>
  );
}
