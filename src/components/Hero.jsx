import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Compass, MapPin, Calendar, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

export default function Hero() {
  const hasPaperForm = Boolean(conferenceData.links.paperSubmission && conferenceData.links.paperSubmission.trim());

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-12 pb-16 md:pt-16 md:pb-24 border-b border-navy-800">
      {/* Subtle academic background grid and architectural lines */}
      <div className="absolute inset-0 academic-grid-dark opacity-35 pointer-events-none"></div>
      
      {/* Subtle institutional ambient light cones */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column: Academic Information (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-sky-300 font-medium">
              <Building2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Jointly Organized by CSE • IT • MCA</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-slate-300 hidden sm:inline">{conferenceData.institutionShort}</span>
            </div>

            {/* Conference Short Title */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                  {conferenceData.shortName}
                </h1>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-sky-500/20 text-sky-300 border border-sky-400/30 rounded-md">
                  {conferenceData.edition}
                </span>
              </div>
              
              {/* Full Conference Name */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 leading-snug tracking-tight">
                {conferenceData.fullName}
              </h2>
            </div>

            {/* Official Supporting Narrative */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {conferenceData.description}
            </p>

            {/* Conference Details Strip: Location & Tentative Year */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{conferenceData.locationTag}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg">
                <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Tentative Date: August/September 2027</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              {hasPaperForm ? (
                <a
                  href={conferenceData.links.paperSubmission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-navy-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-lg hover:shadow-sky-400/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Paper</span>
                </a>
              ) : (
                <Link
                  to="/call-for-papers"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-navy-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-lg hover:shadow-sky-400/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Paper</span>
                </Link>
              )}

              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-all"
              >
                <Compass className="w-4 h-4 text-slate-300" />
                <span>Explore Conference</span>
              </Link>
            </div>

            {/* Core Integrity Pillars */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Double-Blind Peer Review</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>6 Specialized Research Tracks</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Hybrid Presentation Mode</span>
              </span>
            </div>

          </div>

          {/* Right Hero Column: Scientific Visual Identity Emblem (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-white/10 to-white/5 p-8 rounded-2xl border border-white/15 backdrop-blur-md shadow-2xl">
              
              {/* Scientific Graphic SVG: AI Neurons + Quantum Orbits + Cryptographic Hexagon */}
              <div className="relative flex items-center justify-center py-6">
                <svg
                  className="w-56 h-56 md:w-64 md:h-64 text-sky-400 animate-[spin_60s_linear_infinite]"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Cryptographic Shield / Defense Hexagon */}
                  <polygon
                    points="100,18 172,55 172,145 100,182 28,145 28,55"
                    stroke="rgba(56, 189, 248, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                  />
                  {/* Quantum Orbital Rings */}
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="32"
                    stroke="rgba(14, 165, 233, 0.6)"
                    strokeWidth="1.5"
                    transform="rotate(30 100 100)"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="32"
                    stroke="rgba(45, 212, 191, 0.6)"
                    strokeWidth="1.5"
                    transform="rotate(-30 100 100)"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="32"
                    stroke="rgba(125, 211, 252, 0.3)"
                    strokeWidth="1.2"
                    transform="rotate(90 100 100)"
                  />

                  {/* AI Neural Interconnects & Nodes */}
                  <line x1="100" y1="100" x2="60" y2="70" stroke="#38BDF8" strokeWidth="1.5" />
                  <line x1="100" y1="100" x2="140" y2="70" stroke="#38BDF8" strokeWidth="1.5" />
                  <line x1="100" y1="100" x2="100" y2="150" stroke="#2DD4BF" strokeWidth="1.5" />
                  <line x1="60" y1="70" x2="140" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Core Quantum Singularity Node */}
                  <circle cx="100" cy="100" r="10" fill="#0369A1" stroke="#38BDF8" strokeWidth="2.5" />
                  <circle cx="60" cy="70" r="6" fill="#0D9488" stroke="#5EEAD4" strokeWidth="2" />
                  <circle cx="140" cy="70" r="6" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2" />
                  <circle cx="100" cy="150" r="6" fill="#0369A1" stroke="#38BDF8" strokeWidth="2" />

                  {/* Quantum Superposition Orbiting Particles */}
                  <circle cx="160" cy="120" r="3.5" fill="#38BDF8" />
                  <circle cx="40" cy="80" r="3.5" fill="#2DD4BF" />
                </svg>

                {/* Central Emblem Badge Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="text-[10px] font-mono tracking-widest text-sky-300 font-bold uppercase">
                    AI • QC • CYBER
                  </span>
                </div>
              </div>

              {/* Research Scope Summary Box */}
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Conference Scope:</span>
                  <span className="font-semibold text-white">Emerging Computing</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Review Policy:</span>
                  <span className="font-semibold text-sky-300">Double-Blind Peer Review</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Proceedings Route:</span>
                  <span className="font-semibold text-slate-200">Springer Nature (Proposed)</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
