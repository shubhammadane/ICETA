import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import TrackCard from '../components/TrackCard';
import { conferenceData } from '../data/conferenceData';

export default function Tracks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrackId, setSelectedTrackId] = useState('all');

  // Filter tracks based on search term (searches titles, descriptions, and individual topics)
  const filteredTracks = useMemo(() => {
    return conferenceData.tracks.filter((track) => {
      const matchesTrackFilter = selectedTrackId === 'all' || track.id === selectedTrackId;
      if (!matchesTrackFilter) return false;

      if (!searchTerm.trim()) return true;

      const term = searchTerm.toLowerCase();
      const matchesTitle = track.title.toLowerCase().includes(term);
      const matchesDesc = track.description.toLowerCase().includes(term);
      const matchesTopics = track.topics.some((topic) => topic.toLowerCase().includes(term));

      return matchesTitle || matchesDesc || matchesTopics;
    });
  }, [searchTerm, selectedTrackId]);

  const totalTopics = useMemo(() => {
    return conferenceData.tracks.reduce((sum, track) => sum + track.topics.length, 0);
  }, []);

  return (
    <div className="py-12 md:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <SectionTitle
            tag="Call for Contributions"
            title="Technical Research Tracks"
            subtitle={`Original research submissions are invited across six specialized tracks encompassing ${totalTopics} emerging computational focus areas.`}
            className="mb-0"
          />

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/call-for-papers"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span>Call for Papers & Submission</span>
            </Link>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Keyword Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g. LLMs, Quantum, Vision, Cryptography)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-900 placeholder:text-slate-400"
            />
          </div>

          {/* Quick Track Pill Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              type="button"
              onClick={() => setSelectedTrackId('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedTrackId === 'all'
                  ? 'bg-navy-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Tracks (6)
            </button>
            {conferenceData.tracks.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTrackId(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedTrackId === t.id
                    ? 'bg-navy-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.number}
              </button>
            ))}
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="mt-8">
          {filteredTracks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTracks.map((track) => (
                <TrackCard key={track.id} track={track} initialExpanded={Boolean(searchTerm.trim())} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-xl border border-dashed border-slate-300 p-8 space-y-3">
              <p className="text-slate-600 text-sm">
                No tracks match your query: <span className="font-bold text-slate-900">"{searchTerm}"</span>
              </p>
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setSelectedTrackId('all'); }}
                className="text-xs font-bold text-sky-700 hover:underline"
              >
                Clear filters and show all tracks
              </button>
            </div>
          )}
        </div>

        {/* Scope Note Banner */}
        <div className="mt-12 bg-sky-50/70 border border-sky-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-sky-950">
              Interdisciplinary & Cross-Track Research
            </h4>
            <p className="text-xs text-sky-900/80 leading-relaxed">
              Manuscripts bridging multiple areas (e.g., Quantum Machine Learning, AI for Cybersecurity, Digital Twins) may be categorized under the primary track that best reflects their core scientific methodology.
            </p>
          </div>
          <Link
            to="/call-for-papers"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm"
          >
            <span>Submission Instructions</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </div>
  );
}
