import React from 'react';
import { 
  Mail, 
  MapPin, 
  Building2, 
  ExternalLink, 
  Send, 
  GraduationCap, 
  Globe2, 
  MessageSquare,
  Navigation,
  Clock
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { conferenceData } from '../data/conferenceData';

export default function Contact() {
  const hasContactForm = Boolean(conferenceData.links.contactForm && conferenceData.links.contactForm.trim());

  return (
    <div className="py-12 md:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          tag="Communications & Inquiries"
          title="Contact Conference Secretariat"
          subtitle={`Reach out to the organizing team across the Departments of CSE, IT, and MCA for academic inquiries, paper submissions, and logistics.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Contact Card & General Chair (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-1">
                  Primary Academic Contact
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Dr. Vikul J. Pawar
                </h3>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">
                  Head, Department of Computer Science and Engineering
                </p>
                <p className="text-xs text-slate-500">
                  General Chair, {conferenceData.shortName}
                </p>
              </div>

              {/* Institution Address */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Host Institution:</span>
                    <p>{conferenceData.institution}</p>
                    <p className="text-slate-500 font-medium mt-0.5">Jointly Organized by Departments of CSE, IT & MCA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Campus Location:</span>
                    <p>{conferenceData.institutional.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Official Contact Email:</span>
                    <a
                      href={`mailto:${conferenceData.contactEmail}`}
                      className="font-bold text-sky-700 hover:text-sky-900 hover:underline break-all text-sm"
                    >
                      {conferenceData.contactEmail}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Please include "[{conferenceData.shortName} Inquiry]" in the email subject line.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${conferenceData.contactEmail}?subject=${encodeURIComponent(`[${conferenceData.shortName}] General Inquiry`)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>Send Direct Email</span>
                </a>

                {hasContactForm ? (
                  <a
                    href={conferenceData.links.contactForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
                    <span>Inquiry Google Form</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ) : (
                  <a
                    href={conferenceData.institutionWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200"
                  >
                    <Globe2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Official GECCS Portal</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                )}
              </div>

            </div>

            {/* Inquiries Scope Guidance */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                Inquiry Categorization
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When transmitting messages to the secretariat, please clarify whether your question pertains to <strong>Manuscript Submissions</strong>, <strong>Peer-Review Procedures</strong>, <strong>Keynote Proposals</strong>, or <strong>Institutional Participation</strong>.
              </p>
            </div>
          </div>

          {/* Transit & Venue Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-navy-950 text-white rounded-2xl border border-navy-900 p-6 sm:p-7 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                <span>Conference Venue & Transit</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Chhatrapati Sambhajinagar
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Known historically as Aurangabad, Chhatrapati Sambhajinagar is a major educational and cultural hub in Maharashtra, India, home to the UNESCO World Heritage Sites of Ajanta and Ellora Caves.
              </p>

              <div className="space-y-3 pt-3 border-t border-white/10 text-xs text-slate-300">
                <div>
                  <span className="font-bold text-white block">By Air:</span>
                  <p className="text-slate-400">Chhatrapati Sambhajinagar Airport (IXU) connects directly with major national hubs including Mumbai, Delhi, and Hyderabad.</p>
                </div>
                <div>
                  <span className="font-bold text-white block">By Rail:</span>
                  <p className="text-slate-400">Aurangabad Railway Station (AWB) is situated within 3-4 km of the Government College of Engineering campus.</p>
                </div>
                <div>
                  <span className="font-bold text-white block">By Road:</span>
                  <p className="text-slate-400">Well connected via Samruddhi Mahamarg expressway and state highway networks to Pune, Mumbai, and Nashik.</p>
                </div>
              </div>
            </div>

            {/* Official Website Link Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                Institutional Authority
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Government College of Engineering, Chhatrapati Sambhajinagar is an autonomous institute of the Government of Maharashtra.
              </p>
              <div className="pt-2">
                <a
                  href={conferenceData.institutionWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 hover:text-sky-900"
                >
                  <span>Visit GECCS Institutional Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
