import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import VideoInspectionSimulator from './components/VideoInspectionSimulator';
import GeospatialMap from './components/GeospatialMap';
import PrioritisationEngine from './components/PrioritisationEngine';
import WorkOrderPortal from './components/WorkOrderPortal';
import InfographicsGallery from './components/InfographicsGallery';
import ProposalViewer from './components/ProposalViewer';
import TutorialGuide from './components/TutorialGuide';

const HASH_TAB_MAP = {
  'inspection': 'video',
  'map': 'map',
  'prioritisation': 'prioritisation',
  'workorders': 'workorders',
  'infographics': 'infographics',
  'proposal': 'proposal',
  'tutorial': 'tutorial',
};

const TAB_HASH_MAP = {
  'video': 'inspection',
  'map': 'map',
  'prioritisation': 'prioritisation',
  'workorders': 'workorders',
  'infographics': 'infographics',
  'proposal': 'proposal',
  'tutorial': 'tutorial',
};

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return HASH_TAB_MAP[hash] || 'video';
  });
  const [selectedDefectForWorkOrder, setSelectedDefectForWorkOrder] = useState(null);

  // Sync tab with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (HASH_TAB_MAP[hash]) {
        setActiveTab(HASH_TAB_MAP[hash]);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    const hash = TAB_HASH_MAP[tabId] || 'inspection';
    window.location.hash = hash;
  };

  const handleDefectSelection = (defect) => {
    setSelectedDefectForWorkOrder(defect);
    switchTab('workorders');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar activeTab={activeTab} setActiveTab={switchTab} />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
        {activeTab === 'video' && (
          <VideoInspectionSimulator onDefectSelect={handleDefectSelection} />
        )}

        {activeTab === 'map' && (
          <GeospatialMap onSelectDefect={handleDefectSelection} />
        )}

        {activeTab === 'prioritisation' && (
          <PrioritisationEngine />
        )}

        {activeTab === 'workorders' && (
          <WorkOrderPortal initialDefect={selectedDefectForWorkOrder} />
        )}

        {activeTab === 'infographics' && (
          <InfographicsGallery />
        )}

        {activeTab === 'proposal' && (
          <ProposalViewer />
        )}

        {activeTab === 'tutorial' && (
          <TutorialGuide onNavigateTab={switchTab} />
        )}
      </main>

      {/* Institutional Footer with SEO-friendly quick links */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4 mt-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-bold text-white tracking-wide text-sm">
                MargDristi AI (मार्गदृष्टि)
              </span>
              <span className="text-slate-600">|</span>
              <span>North East Seva First Innovation Challenge (NESFIC) 2026</span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-400 flex-wrap justify-center">
              <a href="#tutorial" onClick={() => switchTab('tutorial')} className="hover:text-cyan-300 transition">
                Application Tutorial
              </a>
              <span>•</span>
              <a href="#inspection" onClick={() => switchTab('video')} className="hover:text-cyan-300 transition">
                Live Video Simulator
              </a>
              <span>•</span>
              <a href="#map" onClick={() => switchTab('map')} className="hover:text-cyan-300 transition">
                Assam GIS Map
              </a>
              <span>•</span>
              <a href="#prioritisation" onClick={() => switchTab('prioritisation')} className="hover:text-cyan-300 transition">
                IRC:82 Engine
              </a>
              <span>•</span>
              <a href="#infographics" onClick={() => switchTab('infographics')} className="hover:text-cyan-300 transition">
                16:9 Infographics
              </a>
              <span>•</span>
              <a href="#proposal" onClick={() => switchTab('proposal')} className="hover:text-cyan-300 transition">
                NESFIC Proposal
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <div>
              Department of Innovation, Incubation and Startups &amp; Public Works Department (PWD), Government of Assam.
            </div>
            <div>
              IRC:82-2015, ASTM D6433 &amp; DPDP Act 2023 Compliant.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
