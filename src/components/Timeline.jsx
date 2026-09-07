import React from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

export default function Timeline({ dates = conferenceData.importantDates, showNotice = true }) {
  return (
    <div className="w-full space-y-6">
      {/* Notice Banner */}
      {showNotice && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <span className="font-bold block text-amber-950">Tentative Important Dates:</span>
            Dates listed below represent the initial scheduling timeline. Specific day deadlines will be updated officially in the Call for Papers portal as conference milestones approach.
          </div>
        </div>
      )}

      {/* Grid / Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dates.map((item, index) => {
          const isConference = item.activity.toLowerCase().includes('conference');
          const isDeadline = item.activity.toLowerCase().includes('deadline');

          return (
            <div
              key={index}
              className={`rounded-xl border p-5 flex flex-col justify-between transition-all duration-200 shadow-sm ${
                isDeadline
                  ? 'bg-rose-50/50 border-rose-200'
                  : isConference
                  ? 'bg-sky-50/60 border-sky-200'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Milestone 0{index + 1}
                  </span>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    isDeadline
                      ? 'bg-rose-100 text-rose-800'
                      : isConference
                      ? 'bg-sky-100 text-sky-800'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.status || 'Tentative'}
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                  {item.activity}
                </h4>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                <Calendar className={`w-4 h-4 shrink-0 ${
                  isDeadline ? 'text-rose-600' : isConference ? 'text-sky-600' : 'text-slate-500'
                }`} />
                <span className={`text-xs md:text-sm font-bold ${
                  isDeadline ? 'text-rose-700' : isConference ? 'text-sky-800' : 'text-slate-700'
                }`}>
                  {item.date}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clean Formal Tabular View for Academics */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Consolidated Milestone Schedule
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Academic Year {conferenceData.year}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/50 text-slate-700 font-semibold">
                <th className="py-3 px-4 sm:px-6">Activity / Milestone</th>
                <th className="py-3 px-4 sm:px-6">Tentative Schedule</th>
                <th className="py-3 px-4 sm:px-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dates.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-medium text-slate-900">
                    {item.activity}
                  </td>
                  <td className="py-3 px-4 sm:px-6 font-semibold text-slate-700">
                    {item.date}
                  </td>
                  <td className="py-3 px-4 sm:px-6 text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      {item.status || 'Upcoming'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
