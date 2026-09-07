import React from 'react';

export default function SectionTitle({
  tag,
  title,
  subtitle,
  centered = false,
  className = '',
  light = false
}) {
  return (
    <div className={`mb-10 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {tag && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 ${
          light 
            ? 'bg-sky-500/10 text-sky-300 border border-sky-400/20' 
            : 'bg-navy-50 text-navy-800 border border-navy-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
          {tag}
        </div>
      )}
      
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3 text-base md:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
