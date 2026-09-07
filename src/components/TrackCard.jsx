import React, { useState } from 'react';
import { 
  Brain, 
  Atom, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Brain: Brain,
  Atom: Atom,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Database: Database,
  Sparkles: Sparkles,
};

export default function TrackCard({ track, initialExpanded = false }) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const IconComponent = iconMap[track.icon] || Layers;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-academic-hover transition-all duration-200 flex flex-col overflow-hidden">
      {/* Track Header */}
      <div className="p-6 border-b border-slate-100 flex-1">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
            {track.number}
          </span>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
            {track.topics.length} Research Topics
          </span>
        </div>

        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0 shadow-sm">
            <IconComponent className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 leading-snug">
              {track.title}
            </h3>
          </div>
        </div>

        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2">
          {track.description}
        </p>
      </div>

      {/* Topics Preview / Full Expandable Area */}
      <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Topic Scope
          </span>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-500 rounded px-1.5 py-0.5"
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Collapse Topics' : `View All (${track.topics.length})`}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Topics Tag Cloud */}
        <div className="flex flex-wrap gap-1.5">
          {(expanded ? track.topics : track.topics.slice(0, 6)).map((topic, idx) => (
            <span
              key={idx}
              className="inline-block px-2.5 py-1 text-xs bg-white text-slate-700 rounded-md border border-slate-200 shadow-2xs font-medium"
            >
              {topic}
            </span>
          ))}
          {!expanded && track.topics.length > 6 && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-block px-2.5 py-1 text-xs bg-sky-50 text-sky-700 rounded-md border border-sky-200 font-semibold hover:bg-sky-100 transition-colors"
            >
              +{track.topics.length - 6} more
            </button>
          )}
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-slate-200/60 mt-2">
          <Link
            to="/call-for-papers"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-navy-900 group"
          >
            <span>Submission Guidelines</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
