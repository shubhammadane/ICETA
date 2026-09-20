import React, { useState } from 'react';
import { User, MapPin, Building, Award, FileText } from 'lucide-react';

export default function ProfileCard({
  name,
  role,
  designation,
  position,
  qualification,
  department,
  institution,
  country,
  location,
  image = null,
  bio = '',
  profileLink = '',
  linkedin = '',
  isSpeaker = false,
  departmentFirst = false
}) {
  const [imageError, setImageError] = useState(false);

  // Check if real verified image is provided and hasn't failed loading
  const hasValidImage = Boolean(image && (typeof image === 'string' ? image.trim() !== '' : true) && !imageError);

  // Derive initials for elegant fallback avatar
  const getInitials = (fullName) => {
    if (!fullName || fullName === "To be Announced") return "TBA";
    return fullName
      .replace(/^Dr\.\s*|^Prof\.\s*|^Mr\.\s*|^Ms\.\s*|^Shri\s*/i, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  const isTBA = !name || name.trim().toLowerCase() === 'to be announced';

  return (
    <div className={`bg-white rounded-xl border border-slate-200 transition-all duration-200 flex flex-col overflow-hidden ${
      isTBA ? 'border-dashed bg-slate-50/50' : 'hover:shadow-academic-hover shadow-sm'
    }`}>
      {/* Top Banner / Role Label */}
      {role && role !== position && (
        <div className={`px-4 py-2 text-xs font-bold tracking-wider uppercase flex items-center justify-between border-b ${
          isTBA 
            ? 'bg-slate-100 text-slate-500 border-slate-200' 
            : 'bg-navy-900 text-white border-navy-800'
        }`}>
          <span>{role}</span>
          {!isTBA && <Award className="w-3.5 h-3.5 text-sky-400" />}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Photo Container */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
          <div className="relative w-28 h-28 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100 flex items-center justify-center shadow-inner">
            {hasValidImage ? (
              <img
                src={image}
                alt={`${name} - ${role || designation}`}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            ) : (
              /* Official Photo Coming Soon Placeholder */
              <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 select-none">
                <div className="w-10 h-10 rounded-full bg-slate-300 text-slate-600 flex items-center justify-center font-bold text-xs mb-1">
                  {getInitials(name)}
                </div>
                <span className="text-[10px] font-semibold tracking-tight text-slate-500 uppercase leading-none">
                  {isTBA ? 'TBA' : 'Photo Coming Soon'}
                </span>
              </div>
            )}
          </div>

          {/* Core Person Details */}
          <div className="flex-1 text-center sm:text-left space-y-1">
            <h3 className={`font-bold text-base md:text-lg leading-tight ${
              isTBA ? 'text-slate-500 italic' : 'text-slate-900'
            }`}>
              {name || 'To be Announced'}
            </h3>

            {designation && (
              <p className="text-xs font-semibold text-sky-800 leading-snug">
                {designation}
              </p>
            )}

            {position && (
              <p className="text-xs font-medium text-slate-600 leading-snug">
                {position}
              </p>
            )}

            {departmentFirst && department && (
              <p className="text-xs text-slate-600 leading-snug">
                {department}
              </p>
            )}

            {qualification && (
              <p className="text-[11px] font-medium text-slate-600 leading-snug">
                {qualification}
              </p>
            )}

            {!departmentFirst && department && (
              <p className="text-xs text-slate-600 leading-snug">
                {department}
              </p>
            )}

            {institution && (
              <p className="text-xs font-medium text-slate-700 flex items-center justify-center sm:justify-start gap-1 pt-0.5">
                <Building className="w-3 h-3 text-slate-400 shrink-0" />
                <span>{institution}</span>
              </p>
            )}

            {(location || country) && (
              <p className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                <span>{location || country}</span>
              </p>
            )}
          </div>
        </div>

        {/* Biography (if provided) */}
        {bio && (
          <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
            <p>
              {bio}
            </p>
          </div>
        )}

        {/* LinkedIn Profile Link (only when explicitly provided) */}
        {linkedin && (
          <div className="mt-auto pt-3 border-t border-slate-100">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 hover:underline transition-colors"
            >
              {/* LinkedIn SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5 text-sky-600"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.869 0-2.156 1.46-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.608v5.588z"/>
              </svg>
              LinkedIn Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
