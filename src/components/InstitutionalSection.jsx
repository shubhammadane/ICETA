import React from 'react';
import { Building2, GraduationCap, Award, ExternalLink, Compass, CheckCircle } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

export default function InstitutionalSection() {
  const { institutional } = conferenceData;

  return (
    <section className="bg-slate-50 border-t border-b border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-50 text-navy-900 border border-navy-200 mb-3">
            <Building2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Host Institution & Department</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {institutional.name}
          </h2>
          <p className="mt-2 text-base font-semibold text-sky-800">
            {institutional.departmentName}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Institution Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sky-600" />
                <span>Institutional Profile</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {institutional.overview}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {institutional.departmentOverview}
              </p>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 font-medium">
                  {institutional.location}
                </span>
                <a
                  href={conferenceData.institutionWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-sky-700 hover:text-sky-900"
                >
                  <span>Official Institution Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Official Update Placeholder Notice */}
            <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-4 text-xs text-sky-900 flex items-center justify-between gap-3">
              <span>{institutional.officialNotice}</span>
              <span className="shrink-0 px-2 py-0.5 rounded bg-sky-100 font-semibold text-sky-800 text-[11px]">
                Verified Source
              </span>
            </div>
          </div>

          {/* Highlights & Accreditations Placeholders (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-700">
                Departmental Highlights
              </h3>

              <div className="space-y-3.5">
                {institutional.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-navy-50 text-navy-800 flex items-center justify-center shrink-0 mt-0.5 border border-navy-100">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-snug mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Editable Placeholders for Accreditations / Establishment */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Head of Department (CSE):</span>
                  <span className="text-slate-900 font-bold">Dr. Vikul J. Pawar</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Institution Type:</span>
                  <span className="text-slate-900 font-bold">Government Autonomous Institute</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Jurisdiction:</span>
                  <span className="text-slate-900 font-bold">Govt. of Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
