import React, { useState } from 'react';
import { Image, Download, Maximize2, X, CheckCircle, FileText, ExternalLink } from 'lucide-react';
import { INFOGRAPHICS_METADATA } from '../data/mockData';

export default function InfographicsGallery() {
  const [selectedInfographic, setSelectedInfographic] = useState(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Image className="w-5 h-5 text-cyan-400" />
            16:9 Widescreen Technological Framework Infographics Suite
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Designed for Proof of Work (PoW) PDF &amp; NESFIC 2026 Evaluation • Clean Blueprint Aesthetic • Vector Scalable
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-cyan-950 text-cyan-300 border border-cyan-800 px-3 py-1 rounded-lg font-mono font-semibold">
            6 Vector Assets Available (1920x1080)
          </span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INFOGRAPHICS_METADATA.map((info) => (
          <div
            key={info.id}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-slate-700 transition flex flex-col justify-between group"
          >
            <div>
              {/* Infographic Preview Image */}
              <div className="relative aspect-video bg-white overflow-hidden border-b border-slate-800">
                <img
                  src={`/assets/${info.filename}`}
                  alt={info.title}
                  className="w-full h-full object-contain p-1 group-hover:scale-[1.02] transition duration-300"
                />
                <button
                  onClick={() => setSelectedInfographic(info)}
                  className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2 text-white font-bold text-xs"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Enlarge Blueprint</span>
                </button>
              </div>

              {/* Card Meta */}
              <div className="p-4 space-y-2">
                <div className="text-[10px] uppercase font-bold text-cyan-400 font-mono tracking-wider">
                  {info.section}
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-1">{info.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{info.subtitle}</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {info.metrics.map((m, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="p-4 pt-0">
              <a
                href={`/assets/${info.filename}`}
                download={info.filename}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-3 rounded-lg text-xs transition flex items-center justify-center gap-2 border border-slate-700"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download SVG (16:9 Widescreen)</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox for Fullscreen Review */}
      {selectedInfographic && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 md:p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between text-white pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white">{selectedInfographic.title}</h3>
              <p className="text-xs text-slate-400">{selectedInfographic.subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`/assets/${selectedInfographic.filename}`}
                download={selectedInfographic.filename}
                className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save High-Res SVG</span>
              </a>
              <button
                onClick={() => setSelectedInfographic(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-2 overflow-auto">
            <img
              src={`/assets/${selectedInfographic.filename}`}
              alt={selectedInfographic.title}
              className="max-h-[80vh] w-auto max-w-full rounded-lg shadow-2xl bg-white p-2"
            />
          </div>

          <div className="pt-3 border-t border-slate-800 text-center text-xs text-slate-400 font-mono">
            {selectedInfographic.section} • 1920x1080 Native Resolution • Vector Scalable to 300 DPI Print
          </div>
        </div>
      )}
    </div>
  );
}
