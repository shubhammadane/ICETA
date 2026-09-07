import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Send, GraduationCap, ChevronRight, ArrowUpRight } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll detection for refined shadow elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Submission action: if Google Form is set, open in new tab; otherwise route to CFP page
  const hasPaperForm = Boolean(conferenceData.links.paperSubmission && conferenceData.links.paperSubmission.trim());

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-300">
      {/* Top Institutional Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-navy-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400 shrink-0 hidden sm:inline" />
            <span className="font-semibold text-slate-200">{conferenceData.institution}</span>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="text-slate-300 hidden md:inline">{conferenceData.department}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <span>{conferenceData.stateAndCountry}</span>
            <span className="text-slate-600">•</span>
            <span className="text-sky-300 font-medium">{conferenceData.year}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-200 ${
        scrolled ? 'py-2.5' : 'py-3.5'
      }`}>
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Conference Brand */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-navy-900 rounded-lg p-1">
            <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center font-bold text-lg shadow-sm border border-navy-800 group-hover:bg-navy-800 transition-colors">
              <span className="tracking-tighter text-sky-400">IQ</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-navy-950 tracking-tight leading-none group-hover:text-sky-700 transition-colors">
                  {conferenceData.shortName}
                </span>
                <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-1.5 py-0.5 rounded border border-sky-200">
                  {conferenceData.year}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium line-clamp-1 max-w-[240px] sm:max-w-sm mt-0.5">
                {conferenceData.departmentShort}, {conferenceData.institutionShort}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {conferenceData.navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-sky-700 bg-sky-50 font-bold'
                      : 'text-slate-700 hover:text-navy-900 hover:bg-slate-100/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {hasPaperForm ? (
              <a
                href={conferenceData.links.paperSubmission}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm hover:shadow transition-all border border-navy-800"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Submit Paper</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            ) : (
              <Link
                to="/call-for-papers"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm hover:shadow transition-all border border-navy-800"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Submit Paper</span>
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              to="/call-for-papers"
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-navy-900 rounded-lg"
            >
              Submit
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-navy-900"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
            <div className="pb-2 mb-2 border-b border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Conference Navigation
              </span>
            </div>
            {conferenceData.navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-bold border-l-4 border-sky-600 pl-2.5'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}

            <div className="pt-4 mt-4 border-t border-slate-200 space-y-2">
              {hasPaperForm ? (
                <a
                  href={conferenceData.links.paperSubmission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Submit Paper (Google Form)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to="/call-for-papers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Call for Papers & Submission</span>
                </Link>
              )}

              <div className="text-center pt-2">
                <span className="text-xs text-slate-500">
                  Contact: <a href={`mailto:${conferenceData.contactEmail}`} className="text-sky-700 underline">{conferenceData.contactEmail}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
