import React, { useState } from 'react';
import officialIeeeLogo from '../assets/images/conference/ieee-logo.png';

/**
 * IEEEsponsor Component
 * Displays the prominent and professional IEEE Sponsor horizontal banner
 * immediately below the Hero section on the Home Page.
 */
export default function IEEEsponsor({ logo = officialIeeeLogo }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 py-10 md:py-14 border-b border-slate-200">
      {/* Subtle professional background waves / curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35 select-none" aria-hidden="true">
        <svg
          className="absolute -top-12 -left-20 w-[600px] h-[300px] text-sky-300"
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 120 C 150 40, 350 220, 650 90"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <path
            d="M-30 180 C 180 90, 380 260, 630 140"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <svg
          className="absolute -bottom-16 -right-20 w-[600px] h-[300px] text-sky-300"
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-20 200 C 220 80, 420 250, 620 120"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M0 240 C 250 140, 450 280, 650 170"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Sponsor Banner */}
        <div className="bg-white/95 rounded-2xl border border-sky-100 shadow-academic hover:shadow-academic-hover transition-all duration-300 p-6 sm:p-8 md:p-10 backdrop-blur-sm">
          
          {/* Top Heading */}
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-sky-300"></div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-800 uppercase">
              IEEE Sponsor
            </span>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-sky-300"></div>
          </div>

          {/* Content Area: Logo + Divider + Sponsor Information */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 text-center md:text-left">
            
            {/* IEEE Official Logo / Defined Asset Placeholder */}
            <div className="flex items-center justify-center shrink-0">
              {!logoError ? (
                <img
                  src={logo}
                  alt="IEEE Logo"
                  onError={() => setLogoError(true)}
                  className="h-14 sm:h-16 md:h-20 w-auto max-w-[240px] object-contain transition-transform duration-300 hover:scale-105"
                />
              ) : (
                /* Clean academic placeholder until the approved logo asset is placed in the designated path */
                <div className="h-14 sm:h-16 md:h-20 px-8 rounded-xl border-2 border-dashed border-sky-300 bg-sky-50/60 flex flex-col items-center justify-center text-center shadow-inner">
                  <span className="font-extrabold text-2xl md:text-3xl text-navy-900 tracking-wider">
                    IEEE
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-sky-800 font-semibold mt-0.5">
                    Official Logo Asset
                  </span>
                </div>
              )}
            </div>

            {/* Vertical Divider for Tablet / Desktop */}
            <div className="hidden md:block w-px h-16 bg-slate-200 shrink-0" aria-hidden="true"></div>

            {/* Sponsor Label & Supporting Text */}
            <div className="space-y-1.5 max-w-md">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                IEEE Sponsor
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                ICETAQC 2027 is supported by IEEE.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
