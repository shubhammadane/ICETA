import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Globe2, 
  Users, 
  Cpu, 
  BookOpen, 
  Sparkles, 
  GraduationCap,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import InstitutionalSection from '../components/InstitutionalSection';
import { conferenceData } from '../data/conferenceData';

export default function About() {
  return (
    <div className="py-12 md:py-16 space-y-16">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="About The Conference"
          title={`About ${conferenceData.shortName}`}
          subtitle={conferenceData.fullName}
        />

        {/* Narrative & Purpose Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Academic Scope (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Conference Purpose & Academic Focus
              </h3>
              <p>
                The <strong>{conferenceData.fullName} ({conferenceData.shortName})</strong> is jointly organized by the <strong>Department of Computer Science and Engineering (CSE)</strong>, <strong>Department of Information Technology (IT)</strong>, and <strong>Department of Master of Computer Applications (MCA)</strong> under <strong>{conferenceData.institution}, {conferenceData.stateAndCountry}</strong>. The conference serves as a high-impact international platform engineered to bring together researchers, academicians, scientists, industry practitioners, and engineering students across the globe.
              </p>
              <p>
                The accelerating convergence of Artificial Intelligence, Quantum Information Science, and Advanced Cybersecurity represents one of the most transformative frontiers in modern computer science. {conferenceData.shortName} is conceived to critically explore this intersection, providing an open, academically rigorous venue for presenting novel foundational models, algorithmic optimizations, quantum hardware advancements, and post-quantum cryptographic defenses.
              </p>
              <p>
                Through rigorous peer review, multidisciplinary discourse, and collaborative engagement between academia and industry, the conference aims to catalyze research partnerships, address contemporary scientific challenges, and accelerate the dissemination of ethical, high-quality peer-reviewed literature.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-navy-900 text-sky-400 flex items-center justify-center font-bold text-sm">
                  <Globe2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">
                  International Participation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Welcoming scientific contributions and academic delegations from international universities, research laboratories, and global computing organizations.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-navy-900 text-sky-400 flex items-center justify-center font-bold text-sm">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Academia-Industry Synergy
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bridging the gap between theoretical computer science discoveries and real-world industrial implementations across defense, quantum, and AI domains.
                </p>
              </div>
            </div>
          </div>

          {/* Format & Key Metadata Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hybrid Format Card */}
            <div className="bg-navy-950 text-white rounded-xl border border-navy-900 p-6 sm:p-7 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Conference Format
                </span>
                <span className="px-2.5 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[11px] font-semibold border border-sky-400/30">
                  Hybrid
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white">
                {conferenceData.format.type}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                To maximize international accessibility and foster broad scientific participation, the conference incorporates both physical on-campus technical sessions and high-definition synchronous virtual presentations.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-white/10">
                {conferenceData.format.components.map((comp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                    <div>
                      <span className="font-bold text-slate-200">{comp.name}:</span>{' '}
                      <span className="text-slate-400">{comp.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizing Body Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Joint Organizing Departments
              </h4>
              <div className="space-y-1.5">
                {conferenceData.organizingDepartments.map((dept) => (
                  <p key={dept.shortName} className="font-bold text-slate-900 text-xs sm:text-sm">
                    {dept.name} ({dept.shortName})
                  </p>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-100 text-xs space-y-1">
                <p className="font-semibold text-slate-700">
                  {conferenceData.institution}
                </p>
                <p className="text-slate-500">
                  {conferenceData.venue}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Conference Objectives Section (All 10 Core Objectives) */}
      <section className="bg-slate-50 border-t border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="Guiding Mandate"
            title="Conference Objectives"
            subtitle="The conference is structured around ten foundational pillars dedicated to advancing global computing research and student-faculty engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conferenceData.objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs hover:border-sky-300 hover:shadow-sm transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-900 text-sky-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Profile Section */}
      <InstitutionalSection />

    </div>
  );
}
