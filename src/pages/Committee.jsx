import React from 'react';
import { Users, Award, ShieldCheck, Mail, Building2, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CommitteeCard from '../components/CommitteeCard';
import { conferenceData } from '../data/conferenceData';

export default function Committee() {
  const { committee } = conferenceData;
  const generalChair = committee.leadership.find((m) => m.role === 'General Chair');
  const organizingChairs = committee.leadership.filter((m) => m.role !== 'General Chair');

  return (
    <div className="py-12 md:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          tag="Leadership & Governance"
          title="Conference Committee"
          subtitle={`Organized under the academic governance of the ${conferenceData.department}, ${conferenceData.institution}.`}
        />

        {/* Organizing Departments */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-sky-600" />
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Organizing Departments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conferenceData.organizingDepartments.map((dept) => (
              <div
                key={dept.shortName}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-academic-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-navy-900 text-sky-400 flex items-center justify-center font-extrabold text-base mb-4 border border-navy-800">
                    <span>{dept.shortName}</span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 leading-snug">
                    {dept.name}
                  </h4>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200">
                    {dept.shortName}
                  </span>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">
                    {conferenceData.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Chair Spotlight */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-sky-600" />
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              General Chair
            </h3>
          </div>

          {generalChair && (
            <div className="max-w-2xl">
              <CommitteeCard {...generalChair} />
            </div>
          )}
        </div>

        {/* Organizing Chairs & Functional Committees */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Organizing & Program Chairs
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Functional committees responsible for editorial oversight, peer review, and logistics.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              Official Academic Panel
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingChairs.map((member, idx) => (
              <CommitteeCard key={idx} {...member} />
            ))}
          </div>
        </div>

        {/* International Advisory Committee */}
        <div className="mt-16 pt-12 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                International Advisory Committee
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Distinguished researchers and senior fellows providing strategic guidance and scientific oversight.
              </p>
            </div>
          </div>

          {committee.advisoryMembers && committee.advisoryMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committee.advisoryMembers.map((member, idx) => (
                <CommitteeCard key={idx} {...member} />
              ))}
            </div>
          ) : (
            /* Official TBA Academic Notice */
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {committee.advisoryNotice}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                Invitations are actively being confirmed with eminent professors and research directors from leading domestic and international universities. The verified advisory board roster will be published here upon official confirmation.
              </p>
            </div>
          )}
        </div>

        {/* Committee Integrity Notice */}
        <div className="mt-12 bg-sky-50/70 border border-sky-200 rounded-xl p-5 text-xs text-sky-950 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
          <span>
            <strong>Authentic Academic Disclosure:</strong> In accordance with ethical conference guidelines, only officially verified chair appointments and faculty roles are published on this portal.
          </span>
        </div>

      </div>
    </div>
  );
}
