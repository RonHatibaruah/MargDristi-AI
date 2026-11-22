import React, { useState } from 'react';
import { FileCheck2, ShieldCheck, CheckCircle2, FileText, UserCheck, Check } from 'lucide-react';
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
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-emerald-600" />
            PWD Work Orders &amp; Closed-Loop Contractor Verification
          </h2>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            APWD Schedule of Rates BoQ Generation • AI Before-and-After Patch Feature Verification • Anti-Ghost Billing
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Governance Status:</span>
          <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Zero-Leakage Audit Enforced
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Work Order Dossier */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-[10px] font-mono text-blue-700 font-bold uppercase tracking-wider">
              {selectedOrder.orderId}
            </span>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">{selectedOrder.corridor}</h3>
            <p className="text-xs text-slate-500">{selectedOrder.division}</p>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Assigned Contractor:</span>
              <span className="font-bold text-slate-900">{selectedOrder.contractor}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Sanctioned BoQ Amount:</span>
              <span className="font-bold text-emerald-700 font-mono text-sm">{selectedOrder.estimatedAmount}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Priority Level:</span>
              <span className="font-bold text-red-700">{selectedOrder.priority}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">SLA Due Date:</span>
              <span className="font-mono text-slate-800">{selectedOrder.dueDate}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Verification Progress:</span>
              <span className="font-bold text-blue-700">{selectedOrder.verifiedPercentage}% Completed</span>
            </div>
          </div>

          {/* Schedule of Rates (BoQ) Breakdown */}
          <div className="pt-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              Itemized Bill of Quantities (APWD-SoR)
            </h4>
            <div className="space-y-2">
              {selectedOrder.items.map((item, i) => (
                <div key={i} className="bg-slate-50 p-2.5 rounded border border-slate-200 text-xs">
                  <div className="flex justify-between font-mono text-blue-700 font-semibold">
                    <span>{item.code}</span>
                    <span className="text-emerald-700">{item.amount}</span>
                  </div>
                  <div className="text-slate-800 text-[11px] mt-0.5">{item.desc}</div>
                  <div className="text-slate-500 text-[10px] mt-1">
                    Qty: {item.qty} @ {item.rate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 2 Columns: AI Before/After Visual Patch Verification */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-blue-600" />
                AI Pre/Post-Repair Verification Loop
              </h3>
              <p className="text-xs text-slate-500">
                Pothole DEF-2026-001 (Km 18+420 Jagiroad Stretch) • Drag slider to compare pre-repair defect vs executed bituminous patch
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-lg text-xs font-mono text-emerald-800 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>AI Match: 94.8% RESOLVED</span>
            </div>
          </div>

          {/* Interactive Comparison Viewport */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-300 bg-black select-none">
            {/* After Image (Full background) */}
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80"
              alt="After Repair"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-emerald-700/90 backdrop-blur px-2.5 py-1 rounded text-xs font-bold text-white shadow-sm">
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
              <div className="absolute top-3 left-3 bg-red-700/90 backdrop-blur px-2.5 py-1 rounded text-xs font-bold text-white shadow-sm">
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
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Cryptographic Evidence Audit Stamp:
              </span>
              <span className="font-mono text-blue-700 font-medium text-[11px]">
                SHA256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px] text-slate-600 pt-2 border-t border-slate-200">
              <div>GPS Match: <strong className="text-slate-900">± 0.2m (Verified)</strong></div>
              <div>Geo-Fencing: <strong className="text-emerald-700">Inside Perimeter</strong></div>
              <div>Timestamp: <strong className="text-slate-900">2026-11-23 11:20 IST</strong></div>
              <div>Audit Status: <strong className="text-emerald-700">Pass</strong></div>
            </div>
          </div>

          {/* Action Approval Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              Executive Engineer Approval: <strong className="text-slate-900">Sri R. K. Barua, PWD Nagaon</strong>
            </div>

            {approvalStatus === 'Approved' || selectedOrder.status === 'Invoice Released & Verified' ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Invoice Verified &amp; Payment Released (₹ 3,42,800)</span>
              </div>
            ) : (
              <button
                onClick={() => handleApprove(selectedOrder.orderId)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs transition flex items-center gap-2 shadow-sm"
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
