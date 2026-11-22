import React, { useState } from 'react';
import Navbar from './components/Navbar';
import VideoInspectionSimulator from './components/VideoInspectionSimulator';
import GeospatialMap from './components/GeospatialMap';
import PrioritisationEngine from './components/PrioritisationEngine';
import WorkOrderPortal from './components/WorkOrderPortal';
import InfographicsGallery from './components/InfographicsGallery';
import ProposalViewer from './components/ProposalViewer';

export default function App() {
  const [activeTab, setActiveTab] = useState('video');
  const [selectedDefectForWorkOrder, setSelectedDefectForWorkOrder] = useState(null);

  const handleDefectSelection = (defect) => {
    setSelectedDefectForWorkOrder(defect);
    setActiveTab('workorders');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

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
      </main>

      {/* Institutional Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 px-4 mt-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-wide">
              MargDristi AI (मार्गदृष्टि)
            </span>
            <span className="text-slate-600">|</span>
            <span>North East Seva First Innovation Challenge (NESFIC) 2026</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>PWD Assam Government Track: NESFIC-D-05</span>
            <span>•</span>
            <span>Indian Roads Congress (IRC:82-2015 &amp; ASTM D6433 Compliant)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
