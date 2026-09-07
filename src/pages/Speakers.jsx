import React from 'react';
import { Mic, Clock, ShieldCheck, Mail, ArrowRight, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import SpeakerCard from '../components/SpeakerCard';
import { conferenceData } from '../data/conferenceData';

export default function Speakers() {
  const { keynoteSpeakers } = conferenceData;
  const hasConfirmedSpeakers = keynoteSpeakers.speakers && keynoteSpeakers.speakers.length > 0;

  return (
    <div className="py-12 md:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          tag="Keynote & Invited Scholars"
          title="Keynote Speakers"
          subtitle={`World-renowned researchers and thought leaders delivering plenary addresses in Artificial Intelligence, Quantum Computing, and Cybersecurity at ${conferenceData.shortName}.`}
        />

        {/* Status Notice */}
        <div className="bg-sky-50/80 border border-sky-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-navy-900 text-sky-400 flex items-center justify-center shrink-0">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                Official Keynote Announcement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {keynoteSpeakers.statusNotice}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-sky-200 text-sky-800">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>In Confirmation Process</span>
            </span>
          </div>
        </div>

        {/* Keynote Speakers Grid / TBA State */}
        <div className="mt-10">
          {hasConfirmedSpeakers ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keynoteSpeakers.speakers.map((speaker, idx) => (
                <SpeakerCard key={idx} {...speaker} />
              ))}
            </div>
          ) : (
            /* Dignified Academic Schema Preview & TBA Notice */
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    session: "Keynote Lecture I",
                    area: "Artificial Intelligence & Cognitive Computing",
                  },
                  {
                    session: "Keynote Lecture II",
                    area: "Quantum Computing & Quantum Algorithms",
                  },
                  {
                    session: "Keynote Lecture III",
                    area: "Post-Quantum Cryptography & Cyber Defense",
                  }
                ].map((slot, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-dashed border-slate-300 p-6 flex flex-col justify-between text-center space-y-4 shadow-2xs hover:border-slate-400 transition-colors"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center mx-auto mb-3">
                        <UserCheck className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider block">
                        {slot.session}
                      </span>
                      <h4 className="font-bold text-base text-slate-800 mt-1">
                        To be Announced
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {slot.area}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                        Distinguished Speaker
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Speaker Nomination / Inquiries Note */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center max-w-2xl mx-auto space-y-3">
                <h4 className="font-bold text-sm text-slate-900">
                  Invited Talks & Keynote Inquiries
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Academic researchers, laboratory directors, and industry leaders wishing to propose keynote topics or special invited sessions may contact the General Chair.
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${conferenceData.contactEmail}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact General Chair ({conferenceData.contactEmail})</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Authenticity Guarantee */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-5 text-xs text-slate-600 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
          <span>
            <strong>Academic Integrity Statement:</strong> {conferenceData.shortName} does not publish provisional, speculative, or unconfirmed speaker profiles. Keynote names and bios will appear once formal written confirmation is received.
          </span>
        </div>

      </div>
    </div>
  );
}
