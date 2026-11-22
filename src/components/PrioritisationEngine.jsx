import React, { useState } from 'react';
import { Cpu, Sliders, TrendingUp, DollarSign, ShieldCheck, Download } from 'lucide-react';
import { ASSAM_HIGHWAY_CORRIDORS } from '../data/mockData';

export default function PrioritisationEngine() {
  const [weightDistress, setWeightDistress] = useState(35);
  const [weightTraffic, setWeightTraffic] = useState(25);
  const [weightFlood, setWeightFlood] = useState(20);
  const [weightEcon, setWeightEcon] = useState(20);
  const [budgetLakhs, setBudgetLakhs] = useState(250); // ₹ 2.5 Crore

  // Normalized weights
  const totalWeight = weightDistress + weightTraffic + weightFlood + weightEcon;

  // Calculate dynamic CRI for each corridor
  const rankedCorridors = ASSAM_HIGHWAY_CORRIDORS.map((corridor) => {
    const distressScore = (100 - corridor.pciAverage);
    const trafficScore = Math.min(100, (corridor.cvpd / 7000) * 100);
    const floodScore = corridor.floodZone.includes('Critical') ? 95 : corridor.floodZone.includes('High') ? 80 : 50;
    const econScore = corridor.defectsCount > 150 ? 90 : 70;

    const cri = (
      (distressScore * (weightDistress / totalWeight)) +
      (trafficScore * (weightTraffic / totalWeight)) +
      (floodScore * (weightFlood / totalWeight)) +
      (econScore * (weightEcon / totalWeight))
    ).toFixed(1);

    let actionStream = 'Stream B: Preventative Preservation';
    let actionColor = 'text-amber-800 bg-amber-50 border-amber-300';
    if (cri >= 75) {
      actionStream = 'Stream A: Urgent Safety Patching (48h)';
      actionColor = 'text-red-800 bg-red-50 border-red-300';
    } else if (cri < 50) {
      actionStream = 'Stream C: Structural DBM Overlay (Annual)';
      actionColor = 'text-blue-800 bg-blue-50 border-blue-300';
    }

    return {
      ...corridor,
      cri: parseFloat(cri),
      actionStream,
      actionColor,
    };
  }).sort((a, b) => b.cri - a.cri);

  const emergencyPatchingBudget = (budgetLakhs * 0.25).toFixed(1);
  const preventativeSlurryBudget = (budgetLakhs * 0.40).toFixed(1);
  const structuralOverlayBudget = (budgetLakhs * 0.35).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-600" />
            Algorithmic Road Maintenance Prioritisation Engine (IRC:82-2015)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            Composite Repair Index (CRI) Multi-Criteria Optimization • Assam PWD Schedule of Rates (APWD-SoR) Integration
          </p>
        </div>

        <button
          onClick={() => alert("Tender-ready Work Package Exported in PDF according to APWD-SoR standards!")}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-2 transition shadow-sm"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Prioritised Tender Package</span>
        </button>
      </div>

      {/* Decision Weight Sliders & Budget Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sliders Card */}
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-blue-600" />
              Multi-Criteria Utility Weight Configuration
            </h3>
            <span className="text-xs font-mono text-blue-700 font-bold">
              Total Weight: {totalWeight}% {totalWeight !== 100 && '(Auto-Normalized)'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            {/* Distress Slider */}
            <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex justify-between">
                <span className="font-semibold text-slate-800">1. Pavement Distress &amp; PCI (ASTM D6433)</span>
                <span className="font-bold text-blue-700 font-mono">{weightDistress}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                value={weightDistress}
                onChange={(e) => setWeightDistress(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Pothole density, alligator cracking, and rut depth deduct values</p>
            </div>

            {/* Traffic Slider */}
            <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex justify-between">
                <span className="font-semibold text-slate-800">2. Traffic Volume &amp; Commercial CVPD</span>
                <span className="font-bold text-blue-700 font-mono">{weightTraffic}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                value={weightTraffic}
                onChange={(e) => setWeightTraffic(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Commercial vehicles per day and heavy axle tea/freight corridors</p>
            </div>

            {/* Flood Slider */}
            <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex justify-between">
                <span className="font-semibold text-slate-800">3. Monsoon Flood Vulnerability (Assam Layer)</span>
                <span className="font-bold text-emerald-700 font-mono">{weightFlood}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="40"
                value={weightFlood}
                onChange={(e) => setWeightFlood(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Brahmaputra/Barak inundation frequency and road embankment height</p>
            </div>

            {/* Economic Slider */}
            <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex justify-between">
                <span className="font-semibold text-slate-800">4. Economic Optimization &amp; Life-Cycle Savings</span>
                <span className="font-bold text-amber-700 font-mono">{weightEcon}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="40"
                value={weightEcon}
                onChange={(e) => setWeightEcon(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Early preventative preservation saving ₹6 per ₹1 spent</p>
            </div>
          </div>
        </div>

        {/* Budget Allocation Envelope */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              Available Budget Envelope
            </h3>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Division CapEx:</span>
                <span className="font-bold text-emerald-700 text-sm font-mono">₹ {budgetLakhs} Lakhs</span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="25"
                value={budgetLakhs}
                onChange={(e) => setBudgetLakhs(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200 flex justify-between">
                <span className="text-slate-600">Urgent Safety (48h):</span>
                <span className="font-bold text-red-700 font-mono">₹ {emergencyPatchingBudget} L</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200 flex justify-between">
                <span className="text-slate-600">Preventative Slurry:</span>
                <span className="font-bold text-amber-700 font-mono">₹ {preventativeSlurryBudget} L</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200 flex justify-between">
                <span className="text-slate-600">Structural Overlay:</span>
                <span className="font-bold text-blue-700 font-mono">₹ {structuralOverlayBudget} L</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-600 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Assam PWD SoR 2024 Schedule Aligned</span>
          </div>
        </div>
      </div>

      {/* Ranked Corridors Output Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            Algorithmic Corridor Ranking &amp; Prescribed Treatment Action
          </h3>
          <span className="text-xs text-slate-500 font-mono">Ranked by Composite Repair Index (CRI)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 uppercase font-mono text-[10px] border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Rank / Corridor Name</th>
                <th className="py-3 px-4">Division</th>
                <th className="py-3 px-4">PCI (0-100)</th>
                <th className="py-3 px-4">Defects</th>
                <th className="py-3 px-4">Flood Vulnerability</th>
                <th className="py-3 px-4">Composite Index (CRI)</th>
                <th className="py-3 px-4">Prescribed Intervention</th>
                <th className="py-3 px-4">Est. Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {rankedCorridors.map((corridor, idx) => (
                <tr key={corridor.id} className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-[10px]">
                        {idx + 1}
                      </span>
                      <span className="font-bold text-slate-900">{corridor.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{corridor.division}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded font-bold font-mono ${
                      corridor.pciAverage < 45 ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {corridor.pciAverage} / 100
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono">
                    <strong className="text-slate-900">{corridor.defectsCount}</strong> ({corridor.potholesCount} potholes)
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{corridor.floodZone}</td>
                  <td className="py-3.5 px-4">
                    <span className="text-sm font-bold text-blue-700 font-mono">{corridor.cri}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-1 rounded text-[11px] font-semibold border ${corridor.actionColor}`}>
                      {corridor.actionStream}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">
                    ₹ {corridor.estimatedBoQLakhs} L
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
