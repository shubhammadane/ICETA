import React from 'react';
import { Link } from 'react-router-dom';
import {
  Send,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Calendar,
  BookOpen,
  GraduationCap,
  Users,
  Sparkles,
  Award,
  Globe2
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import TrackCard from '../components/TrackCard';
import Timeline from '../components/Timeline';
import InstitutionalSection from '../components/InstitutionalSection';
import { conferenceData } from '../data/conferenceData';

export default function Home() {
  const hasPaperForm = Boolean(conferenceData.links.paperSubmission && conferenceData.links.paperSubmission.trim());

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero />

      {/* Core Conference Academic Highlights Bar */}
      <div className="bg-navy-900 border-b border-navy-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-navy-800">
            <div className="pt-2 md:pt-0 md:px-4">
              <span className="block text-2xl lg:text-3xl font-extrabold text-sky-400">
                6 Tracks
              </span>
              <span className="text-xs text-slate-300 font-medium">
                AI, Quantum & Cyber Computing
              </span>
            </div>

            <div className="pt-2 md:pt-0 md:px-4">
              <span className="block text-2xl lg:text-3xl font-extrabold text-sky-400">
                Double-Blind
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Peer Review by 2+ Reviewers
              </span>
            </div>

            <div className="pt-2 md:pt-0 md:px-4">
              <span className="block text-2xl lg:text-3xl font-extrabold text-sky-400">
                Hybrid Mode
              </span>
              <span className="text-xs text-slate-300 font-medium">
                In-Person & Online Technical Sessions
              </span>
            </div>

            <div className="pt-2 md:pt-0 md:px-4">
              <span className="block text-2xl lg:text-3xl font-extrabold text-sky-400">
                Springer Nature
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Proposed Publication Route
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* About & Objectives Snapshot Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: About Narrative (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <SectionTitle
                tag="Conference Overview"
                title={`About ${conferenceData.shortName}`}
                subtitle="Fostering rigorous scientific discovery at the intersection of intelligent systems, quantum frontiers, and cyber defense."
              />

              <div className="text-sm sm:text-base text-slate-600 space-y-4 leading-relaxed">
                <p>
                  The <strong>{conferenceData.fullName} ({conferenceData.shortName})</strong> is organized by the Departments of Computer Science and Engineering (CSE), Information Technology (IT), and Master of Computer Applications (MCA), Government College of Engineering, Chhatrapati Sambhajinagar.
                </p>
                <p>
                  As computing paradigms rapidly transition into intelligent, distributed, and post-quantum regimes, {conferenceData.shortName} serves as a premier international scholarly forum. The conference brings together world-class researchers, faculty, industry practitioners, and scholars to present novel theoretical insights, discuss robust experimental validations, and deliberate on ethical computing imperatives.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-sky-700 group"
                >
                  <span>Read Full Conference Mission & Scope</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 10 Objectives (6 cols) */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                <h3 className="font-bold text-base md:text-lg text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-sky-600" />
                  <span>Key Conference Objectives</span>
                </h3>
                <span className="text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded border border-slate-200">
                  10 Pillars
                </span>
              </div>

              <div className="space-y-3">
                {conferenceData.objectives.slice(0, 5).map((objective, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                      {objective}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200">
                <Link
                  to="/about"
                  className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1"
                >
                  <span>View All 10 Institutional Objectives</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Tracks Grid Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionTitle
              tag="Call for Research"
              title="Technical Research Tracks"
              subtitle="Submissions are invited across six specialized tracks encompassing theoretical models, algorithm design, and applied computational frameworks."
              className="mb-0"
            />
            <Link
              to="/tracks"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 shrink-0"
            >
              <span>Explore All Tracks & Full Topic Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferenceData.tracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Timeline Section */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="Milestone Schedule"
            title="Important Dates"
            subtitle="Please review the tentative deadlines for manuscript submission, peer-review acceptance notifications, and author registrations."
            centered={true}
          />

          <Timeline dates={conferenceData.importantDates} showNotice={true} />

          <div className="mt-12 text-center">
            {hasPaperForm ? (
              <a
                href={conferenceData.links.paperSubmission}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Submit Manuscript (Google Form)</span>
              </a>
            ) : (
              <Link
                to="/call-for-papers"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>View Author Submission Guidelines</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Proposed Publication Route Snapshot */}
      <section className="py-16 bg-navy-950 text-white border-t border-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold border border-white/15">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>Academic Proceedings</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Proposed Publication Route
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {conferenceData.publication.proposedRoute}
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-w-2xl mx-auto text-xs text-slate-400 leading-normal">
            <span className="font-semibold text-slate-200">Compliance & Disclaimers: </span>
            {conferenceData.publication.disclaimer} Publication is strictly contingent on original contribution, plagiarism clearance, and mandatory oral presentation.
          </div>

          <div className="pt-2">
            <Link
              to="/publication"
              className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300"
            >
              <span>Read Comprehensive Publication Policies & Ethics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Institutional Section */}
      <InstitutionalSection />

      {/* Final Call to Action Strip */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-950 text-white py-14 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Participate in {conferenceData.shortName}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Join international researchers in advancing Artificial Intelligence, Quantum Computing, and Cybersecurity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/call-for-papers"
              className="px-6 py-3 text-xs sm:text-sm font-bold text-navy-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow transition-colors"
            >
              Author Guidelines & Submissions
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-colors"
            >
              Contact Organizing Committee
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
