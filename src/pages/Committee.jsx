import React from 'react';
import { Users, Award, ShieldCheck, Mail, Building2, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CommitteeCard from '../components/CommitteeCard';
import { conferenceData } from '../data/conferenceData';

export default function Committee() {
  const { committee, organizingCommittees, patrons, coordinators } = conferenceData;
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

        {/* Patrons */}
        {patrons && patrons.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-sky-600" />
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Patrons
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {patrons.map((patron) => (
                <CommitteeCard key={patron.id} {...patron} />
              ))}
            </div>
          </div>
        )}

        {/* Coordinator */}
        {coordinators && coordinators.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-sky-600" />
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Coordinator
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coordinators.map((coordinator) => (
                <CommitteeCard key={coordinator.id} {...coordinator} />
              ))}
            </div>
          </div>
        )}

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

        {/* Organizing Committees */}
        <div className="space-y-12 mb-14">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-5 h-5 text-sky-600" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Organizing Committees
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Departmental faculty and academic committees steering conference tracks, technical sessions, and academic peer review.
            </p>
          </div>

          {/* CSE Department */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-900 text-sky-400 font-bold text-xs flex items-center justify-center border border-navy-800">
                  CSE
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    CSE Department
                  </h3>
                  <p className="text-xs text-slate-500">
                    Department of Computer Science and Engineering
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                {organizingCommittees.cse.length} Members
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizingCommittees.cse.map((member) => (
                <CommitteeCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          {/* IT Department */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-900 text-sky-400 font-bold text-xs flex items-center justify-center border border-navy-800">
                  IT
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    IT Department
                  </h3>
                  <p className="text-xs text-slate-500">
                    Department of Information Technology
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                {organizingCommittees.it.length} Members
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {organizingCommittees.it.map((member) => (
                <CommitteeCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          {/* MCA Department */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-900 text-sky-400 font-bold text-xs flex items-center justify-center border border-navy-800">
                  MCA
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    MCA Department
                  </h3>
                  <p className="text-xs text-slate-500">
                    Department of Master of Computer Applications
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                {organizingCommittees.mca.length} Members
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizingCommittees.mca.map((member) => (
                <CommitteeCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          {/* Visiting Faculty */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-900 text-sky-400 font-bold text-xs flex items-center justify-center border border-navy-800">
                  VF
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Visiting Faculty
                  </h3>
                  <p className="text-xs text-slate-500">
                    Visiting and Adjunct Academic Faculty
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                {organizingCommittees.visitingFaculty.length} Members
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizingCommittees.visitingFaculty.map((member) => (
                <CommitteeCard key={member.id} {...member} />
              ))}
            </div>
          </div>
        </div>

        {/* Organizing Chairs & Functional Committees */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Program Chairs & Academic Functional Committees
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Functional committees responsible for editorial oversight, peer review, and logistics.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              To be Announced
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
