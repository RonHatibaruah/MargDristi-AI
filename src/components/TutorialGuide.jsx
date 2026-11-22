import React, { useState } from 'react';
import { BookOpen, Video, Map, Cpu, FileCheck2, Image, ArrowRight, CheckCircle2, ShieldCheck, Play, Sparkles } from 'lucide-react';

export default function TutorialGuide({ onNavigateTab }) {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: "Real-Time Edge AI Video Inspection",
      tabId: "video",
      icon: Video,
      color: "text-blue-700 bg-blue-50 border-blue-200",
      description: "How to simulate continuous windshield road surveys at 60 km/h with on-device computer vision.",
      actions: [
        "View live simulated vehicle camera streaming at 35 FPS with bounding boxes for Potholes, Alligator Cracks, and Rutting.",
        "Observe the HUD displaying vehicle speed (62 km/h), sub-meter GPS coordinates, Chainage (Km 18+420), and 3-axis vibration shock telemetry.",
        "Toggle environmental weather conditions: Monsoon Rain (rain reflections & water puddles), Tree Canopy Shadows, or Dry Daylight.",
        "Test simulation speeds (1x, 2x, 5x) and click on any live defect in the event ticker to inspect severity details."
      ]
    },
    {
      step: 2,
      title: "Assam Geospatial GIS Defect Heatmap",
      tabId: "map",
      icon: Map,
      color: "text-indigo-700 bg-indigo-50 border-indigo-200",
      description: "How to explore highway corridors, inspect defect clusters, and review 100m segment PCI scores.",
      actions: [
        "Explore the interactive CartoDB light GIS map centered on the Assam NH-27 corridor (Guwahati – Jagiroad – Nagaon).",
        "Click on pulsing defect markers (Red = High Severity, Amber = Medium, Green = Low) to open photo evidence crops.",
        "Filter map layers between 'All Defects', 'Potholes Only', and 'Cracks & Rutting'.",
        "Toggle the 100m Pavement Condition Index (PCI 0-100) color bands and the Brahmaputra River Basin Flood Risk Layer."
      ]
    },
    {
      step: 3,
      title: "IRC:82 Maintenance Prioritisation Engine",
      tabId: "prioritisation",
      icon: Cpu,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
      description: "How algorithmic multi-criteria scoring optimizes maintenance ranking and PWD budget allocation.",
      actions: [
        "Adjust utility sliders across the 4 decision pillars: Pavement Distress (35%), Traffic Volume (25%), Flood Vulnerability (20%), and Economic Savings (20%).",
        "Watch the Composite Repair Index (CRI) recalculate instantly across all state highway corridors.",
        "Adjust the Division Budget Slider (₹50 Lakhs to ₹10 Crore) to see automated allocation across Urgent Safety (48h), Preventative Slurry (30d), and Structural Overlay.",
        "Click 'Export Prioritised Tender Package' to generate tender-ready work schedules under APWD Schedule of Rates."
      ]
    },
    {
      step: 4,
      title: "Work Orders & Closed-Loop Verification",
      tabId: "workorders",
      icon: FileCheck2,
      color: "text-amber-700 bg-amber-50 border-amber-200",
      description: "How tender-ready BoQ contracts are dispatched and verified using AI visual matching to eliminate ghost repairs.",
      actions: [
        "Review the automated Bill of Quantities (BoQ) with APWD Schedule of Rates item codes, quantities, and sanctioned budgets.",
        "Interact with the Pre/Post-Repair Comparison Slider: drag the divider handle left/right to compare the 65mm pothole vs the finished compacted bituminous patch.",
        "Inspect the Cryptographic SHA-256 evidence stamp, GPS perimeter match, and timestamp.",
        "Click 'Approve Contractor Invoice & Release Payment' to complete the audit cycle."
      ]
    },
    {
      step: 5,
      title: "16:9 Infographics & Proposal Submission",
      tabId: "infographics",
      icon: Image,
      color: "text-purple-700 bg-purple-50 border-purple-200",
      description: "How to access the 6 high-impact blueprint infographics and copy verified proposal text for NESFIC 2026.",
      actions: [
        "Browse the 6 vector SVG infographics formatted in 16:9 widescreen technological blueprint style (1920x1080 native resolution).",
        "Enlarge any infographic in the fullscreen lightbox to inspect fine engineering diagrams, formulas, and metric badges.",
        "Download raw SVG assets for direct inclusion in the Proof of Work (PoW) PDF.",
        "Switch to the 'NESFIC Proposal Doc' tab to read and one-click copy all 12 proposal sections (each verified < 500 words)."
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 rounded-2xl p-6 md:p-8 shadow-md text-white relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-white border border-white/30 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-mono flex items-center gap-1.5 backdrop-blur">
              <Sparkles className="w-3.5 h-3.5" />
              Application User Guide &amp; Technical Tour
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            How MargDristi AI Operates &amp; How to Use It
          </h2>

          <p className="text-blue-100 text-xs md:text-sm leading-relaxed max-w-3xl">
            <strong>MargDristi AI (मार्गदृष्टि)</strong> is a deep-tech road asset surveillance and decision-support platform designed for the <strong>Public Works Department (PWD), Government of Assam</strong> under challenge <strong>NESFIC-D-05</strong>. It automates defect detection at 60 km/h, calculates Pavement Condition Indices (PCI), ranks maintenance under IRC:82 standards, and enforces closed-loop contractor verification.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <button
              onClick={() => onNavigateTab('video')}
              className="bg-white hover:bg-blue-50 text-blue-900 font-bold px-4 py-2 rounded-lg transition flex items-center gap-2 shadow"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch Live Inspection Simulator</span>
            </button>
            <button
              onClick={() => onNavigateTab('map')}
              className="bg-blue-900/60 hover:bg-blue-900 text-white font-semibold px-4 py-2 rounded-lg border border-blue-400/40 transition flex items-center gap-2"
            >
              <Map className="w-3.5 h-3.5" />
              <span>Open Assam GIS Map</span>
            </button>
          </div>
        </div>
      </div>

      {/* Step-by-Step Interactive Guide */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Step-by-Step Module Tour
          </h3>
          <span className="text-xs text-slate-500 font-mono">5 Comprehensive Modules</span>
        </div>

        {/* Step Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {steps.map((s) => {
            const Icon = s.icon;
            const isSelected = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50 border-blue-500 shadow-sm text-blue-950 font-bold'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase">Step {s.step}</span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                </div>
                <div className="text-xs truncate">{s.title.split(' ')[0]} {s.title.split(' ')[1]}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Card */}
        {(() => {
          const current = steps.find((s) => s.step === activeStep);
          const Icon = current.icon;
          return (
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${current.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-blue-700 uppercase font-bold tracking-wider">
                      MODULE {current.step} OF 5
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">{current.title}</h4>
                  </div>
                </div>

                <button
                  onClick={() => onNavigateTab(current.tabId)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition flex items-center gap-1.5 shadow-sm"
                >
                  <span>Go to this Module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                {current.description}
              </p>

              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                  What you can do in this module:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {current.actions.map((act, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Role-Based Operational Guide */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Role-Based PWD Operational Workflows
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            How different government personas interact with the platform during daily highway maintenance cycles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Persona 1 */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <span className="text-[10px] font-mono text-blue-700 font-bold uppercase">PERSONA 1</span>
            <h5 className="font-bold text-slate-900 text-sm">Junior Engineer (JE)</h5>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Mounts smartphone or dashcam on vehicle dashboard and conducts hands-free road surveys at 60 km/h. Edge model caches detections offline in cellular dead-zones.
            </p>
          </div>

          {/* Persona 2 */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <span className="text-[10px] font-mono text-indigo-700 font-bold uppercase">PERSONA 2</span>
            <h5 className="font-bold text-slate-900 text-sm">Asst. Executive Engineer</h5>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Reviews auto-flagged severe potholes (&gt;50mm), inspects 100m segment PCI ratings on the web GIS, and validates localized distress boundaries.
            </p>
          </div>

          {/* Persona 3 */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">PERSONA 3</span>
            <h5 className="font-bold text-slate-900 text-sm">Executive Engineer (EE)</h5>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Runs the IRC:82 prioritisation matrix, optimizes division CapEx/OpEx, and sanctions tender-ready electronic work orders with auto-calculated APWD Schedule of Rates.
            </p>
          </div>

          {/* Persona 4 */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <span className="text-[10px] font-mono text-amber-700 font-bold uppercase">PERSONA 4</span>
            <h5 className="font-bold text-slate-900 text-sm">Empaneled Contractor</h5>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Executes repairs pinned to GPS coordinates and uploads post-repair photos. The AI model compares pre-and-post photos, validating the patch before invoice payment release.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
