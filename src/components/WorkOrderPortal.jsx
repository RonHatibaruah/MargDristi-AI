import React, { useState } from 'react';
import { FileCheck2, ShieldCheck, CheckCircle2, AlertTriangle, FileText, ArrowRight, UserCheck, Check, Clock } from 'lucide-react';
import { MOCK_WORK_ORDERS } from '../data/mockData';

export default function WorkOrderPortal() {
  const [workOrders, setWorkOrders] = useState(MOCK_WORK_ORDERS);
  const [selectedOrder, setSelectedOrder] = useState(MOCK_WORK_ORDERS[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [approvalStatus, setApprovalStatus] = useState('Pending');

  const handleApprove = (orderId) => {
    setApprovalStatus('Approved');
    setWorkOrders((prev) =>
      prev.map((wo) =>
        wo.orderId === orderId ? { ...wo, status: 'Invoice Released & Verified', verifiedPercentage: 100 } : wo
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-emerald-400" />
            PWD Work Orders &amp; Closed-Loop Contractor Verification
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            APWD Schedule of Rates BoQ Generation • AI Before-and-After Patch Feature Verification • Anti-Ghost Billing
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Governance Status:</span>
          <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Zero-Leakage Audit Enforced
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Work Order Dossier */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
              {selectedOrder.orderId}
            </span>
            <h3 className="text-base font-bold text-white mt-0.5">{selectedOrder.corridor}</h3>
            <p className="text-xs text-slate-400">{selectedOrder.division}</p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-800/60">
              <span className="text-slate-400">Assigned Contractor:</span>
              <span className="font-bold text-white">{selectedOrder.contractor}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800/60">
              <span className="text-slate-400">Sanctioned BoQ Amount:</span>
              <span className="font-bold text-emerald-400 font-mono text-sm">{selectedOrder.estimatedAmount}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800/60">
              <span className="text-slate-400">Priority Level:</span>
              <span className="font-bold text-red-400">{selectedOrder.priority}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800/60">
              <span className="text-slate-400">SLA Due Date:</span>
              <span className="font-mono text-slate-200">{selectedOrder.dueDate}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800/60">
              <span className="text-slate-400">Verification Progress:</span>
              <span className="font-bold text-cyan-400">{selectedOrder.verifiedPercentage}% Completed</span>
            </div>
          </div>

          {/* Schedule of Rates (BoQ) Breakdown */}
          <div className="pt-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              Itemized Bill of Quantities (APWD-SoR)
            </h4>
            <div className="space-y-2">
              {selectedOrder.items.map((item, i) => (
                <div key={i} className="bg-slate-950 p-2.5 rounded border border-slate-800 text-xs">
                  <div className="flex justify-between font-mono text-cyan-400 font-semibold">
                    <span>{item.code}</span>
                    <span className="text-emerald-400">{item.amount}</span>
                  </div>
                  <div className="text-slate-300 text-[11px] mt-0.5">{item.desc}</div>
                  <div className="text-slate-500 text-[10px] mt-1">
                    Qty: {item.qty} @ {item.rate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 2 Columns: AI Before/After Visual Patch Verification */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-cyan-400" />
                AI Pre/Post-Repair Verification Loop
              </h3>
              <p className="text-xs text-slate-400">
                Pothole DEF-2026-001 (Km 18+420 Jagiroad Stretch) • Drag slider to compare pre-repair defect vs executed bituminous patch
              </p>
            </div>

            <div className="bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-lg text-xs font-mono text-emerald-300 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>AI Match: 94.8% RESOLVED</span>
            </div>
          </div>

          {/* Interactive Comparison Viewport */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-black select-none">
            {/* After Image (Full background) */}
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80"
              alt="After Repair"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-emerald-900/90 backdrop-blur border border-emerald-600 px-2.5 py-1 rounded text-xs font-bold text-white">
              POST-REPAIR: COMPACTED ASPHALT
            </div>

            {/* Before Image (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=1200&q=80"
                alt="Before Repair"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute top-3 left-3 bg-red-900/90 backdrop-blur border border-red-600 px-2.5 py-1 rounded text-xs font-bold text-white">
                PRE-REPAIR: 65MM POTHOLE (DEF-001)
              </div>
            </div>

            {/* Splitter Line with Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center font-bold text-xs shadow-xl border-2 border-slate-900">
                ⬌
              </div>
            </div>

            {/* Hidden Input for Slider Control */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          {/* Cryptographic Audit Stamp */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Cryptographic Evidence Audit Stamp:
              </span>
              <span className="font-mono text-cyan-400 text-[11px]">
                SHA256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
              <div>GPS Match: <strong className="text-white">± 0.2m (Verified)</strong></div>
              <div>Geo-Fencing: <strong className="text-emerald-400">Inside Perimeter</strong></div>
              <div>Timestamp: <strong className="text-white">2026-11-23 11:20 IST</strong></div>
              <div>Audit Status: <strong className="text-emerald-400">Pass</strong></div>
            </div>
          </div>

          {/* Action Approval Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Executive Engineer Approval: <strong className="text-white">Sri R. K. Barua, PWD Nagaon</strong>
            </div>

            {approvalStatus === 'Approved' || selectedOrder.status === 'Invoice Released & Verified' ? (
              <div className="bg-emerald-600/20 border border-emerald-500 text-emerald-300 font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Invoice Verified &amp; Payment Released (₹ 3,42,800)</span>
              </div>
            ) : (
              <button
                onClick={() => handleApprove(selectedOrder.orderId)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-lg text-xs transition flex items-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Approve Contractor Invoice &amp; Release Payment</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
