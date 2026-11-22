import React from 'react';
import { Video, Map, Cpu, FileCheck2, FileText, Image, ShieldAlert, Wifi, Navigation, BookOpen, HelpCircle } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'video', hash: 'inspection', label: 'Live Edge AI Inspection', icon: Video, badge: '35 FPS' },
    { id: 'map', hash: 'map', label: 'Geospatial GIS Map', icon: Map, badge: 'Assam NH' },
    { id: 'prioritisation', hash: 'prioritisation', label: 'IRC:82 Decision Engine', icon: Cpu, badge: 'CRI 86.4' },
    { id: 'workorders', hash: 'workorders', label: 'Work Orders & Verification', icon: FileCheck2, badge: '2 Active' },
    { id: 'infographics', hash: 'infographics', label: '16:9 Infographics', icon: Image, badge: '6 SVGs' },
    { id: 'proposal', hash: 'proposal', label: 'NESFIC Proposal Doc', icon: FileText, badge: '12 Secs' },
    { id: 'tutorial', hash: 'tutorial', label: 'Tutorial & Guide', icon: BookOpen, badge: 'How-To', isSpecial: true },
  ];

  const handleTabClick = (item) => {
    setActiveTab(item.id);
    window.location.hash = item.hash;
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 shadow-xl">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 px-4 py-1.5 border-b border-slate-800 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-white font-extrabold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
            NESFIC 2026
          </span>
          <span className="text-slate-300 font-medium hidden sm:inline">
            Challenge NESFIC-D-05: Road Surface Defect Detection &amp; Maintenance Prioritisation
          </span>
          <span className="text-slate-500 hidden md:inline">|</span>
          <span className="text-emerald-400 font-semibold hidden md:inline">
            Public Works Department (PWD), Government of Assam
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-slate-300">
          {/* Direct Tutorial Link in Header */}
          <button
            onClick={() => {
              setActiveTab('tutorial');
              window.location.hash = 'tutorial';
            }}
            className="flex items-center gap-1.5 bg-cyan-950/90 text-cyan-300 hover:text-white hover:bg-cyan-900 border border-cyan-800/80 px-2.5 py-0.5 rounded-full font-semibold transition"
          >
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>How to Use / Tutorial</span>
          </button>

          <div className="flex items-center gap-1.5 hidden lg:flex">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Edge AI Node: <strong className="text-white">Active (YOLOv11n)</strong></span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700 hidden sm:flex">
            <Navigation className="w-3 h-3 text-amber-400" />
            <span className="text-amber-300 font-mono">NH-27 Km 18+420</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <a
            href="#inspection"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('video');
              window.location.hash = 'inspection';
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-cyan-400/30 group-hover:scale-105 transition">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                  MargDristi <span className="text-cyan-400 font-light">AI</span>
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-mono">
                  मार्गदृष्टि v2.6
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Assam PWD Edge-Vision &amp; IRC:82 Maintenance Prioritisation Platform
              </p>
            </div>
          </a>
        </div>

        {/* Navigation Tabs with SEO-friendly hash routing */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.hash}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(item);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40'
                    : item.isSpecial
                    ? 'bg-cyan-950/60 text-cyan-300 hover:text-white hover:bg-cyan-900/60 border border-cyan-800/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : item.isSpecial ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-medium ${
                      isActive
                        ? 'bg-blue-800 text-blue-200'
                        : item.isSpecial
                        ? 'bg-cyan-900 text-cyan-200'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
