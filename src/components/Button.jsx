import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Clock } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'white' | 'gold'
  size = 'md', // 'sm' | 'md' | 'lg'
  isExternal = false,
  isDisabled = false,
  emptyNotice = null, // text if URL is empty, e.g. "Coming Soon"
  className = '',
  icon: Icon = null,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-navy-900 hover:bg-navy-800 text-white shadow-sm hover:shadow focus:ring-navy-900 border border-navy-800',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 focus:ring-slate-400 border border-slate-200',
    outline: 'border border-slate-300 hover:border-navy-900 hover:bg-navy-50 text-slate-800 focus:ring-navy-900',
    white: 'bg-white hover:bg-slate-50 text-navy-900 shadow-sm hover:shadow focus:ring-white border border-slate-200',
    gold: 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm hover:shadow focus:ring-amber-500 border border-amber-700',
    cyan: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow focus:ring-sky-500 border border-sky-600',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  // If external form URL is empty, render a graceful button displaying the empty notice
  if (isExternal && (!href || href.trim() === '')) {
    return (
      <span
        className={`${combinedClass} opacity-75 cursor-not-allowed bg-slate-100 text-slate-500 border-slate-200`}
        title={emptyNotice || "Portal link will be announced soon"}
      >
        <Clock className="w-4 h-4 text-amber-500 shrink-0" />
        <span>{emptyNotice || "Announced Soon"}</span>
      </span>
    );
  }

  // External link (Google Forms, official website, etc.)
  if (isExternal && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClass}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
      </a>
    );
  }

  // React Router internal link
  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
      </Link>
    );
  }

  // Standard interactive button
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={combinedClass}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
}
