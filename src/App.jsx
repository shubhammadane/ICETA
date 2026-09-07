import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Tracks from './pages/Tracks';
import CallForPapers from './pages/CallForPapers';
import ImportantDates from './pages/ImportantDates';
import Committee from './pages/Committee';
import Speakers from './pages/Speakers';
import Publication from './pages/Publication';
import Registration from './pages/Registration';
import Contact from './pages/Contact';

import { conferenceData } from './data/conferenceData';

// 404 Fallback component
function NotFound() {
  return (
    <div className="py-24 text-center px-4 max-w-lg mx-auto space-y-4">
      <span className="text-4xl font-extrabold text-navy-900 block">404</span>
      <h2 className="text-xl font-bold text-slate-900">Page Not Found</h2>
      <p className="text-sm text-slate-600">
        The requested conference page could not be located. Please use the navigation menu or return to the conference homepage.
      </p>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm"
        >
          Return to {conferenceData.shortName} Home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-sky-600 selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
