import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink, ShieldCheck, GraduationCap, ChevronRight, Globe } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-900">
      {/* Upper Footer: Institutional Branding & Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Conference Title & Organizing Body (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 text-sky-400 flex items-center justify-center font-bold text-lg border border-white/15">
                <span>IQ</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight block">
                  {conferenceData.shortName}
                </span>
                <span className="text-xs text-sky-400 font-medium">
                  {conferenceData.edition} • {conferenceData.year}
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-200 leading-snug">
              {conferenceData.fullName}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5 border-l-2 border-sky-500/60 pl-3">
              <p className="font-medium text-slate-300">
                Organized by:
              </p>
              <p className="font-semibold text-white">
                {conferenceData.department}
              </p>
              <p>
                {conferenceData.institution}
              </p>
              <p className="text-slate-400 flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Chhatrapati Sambhajinagar, Maharashtra, India</span>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <a
                href={conferenceData.institutionWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visit Official GECA Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 pb-1 border-b border-white/10">
              Conference Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {conferenceData.navLinks.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              {conferenceData.navLinks.slice(5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Publication & Contact Notice (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 pb-1 border-b border-white/10">
              Publication & Inquiries
            </h3>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-300">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Publication Framework</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Selected high-quality peer-reviewed presented papers will be considered for publication with Springer Nature as proceedings or an edited volume, subject to editorial evaluation.
              </p>
            </div>

            <div className="pt-2 text-xs space-y-2">
              <span className="text-slate-400 block font-medium">Conference Secretarial Contact:</span>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`mailto:${conferenceData.contactEmail}`}
                    className="font-medium text-white hover:text-sky-300 underline underline-offset-2 break-all"
                  >
                    {conferenceData.contactEmail}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Dr. Vikul J. Pawar (General Chair)
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Bar: Copyright & Compliance */}
      <div className="border-t border-white/10 bg-black/40 py-5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <p>
              © {conferenceData.year} {conferenceData.shortName}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Organized by Department of Computer Science and Engineering, Government College of Engineering, Chhatrapati Sambhajinagar.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="hover:text-slate-300 transition-colors cursor-default">
              Double-Blind Peer Review
            </span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors cursor-default">
              Academic Ethics
            </span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors cursor-default">
              Research Dissemination
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
