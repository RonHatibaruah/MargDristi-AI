import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Layers, AlertCircle, ShieldAlert, Eye, Filter, CheckCircle2, ChevronRight, Navigation } from 'lucide-react';
import { MOCK_DEFECTS, ASSAM_HIGHWAY_CORRIDORS } from '../data/mockData';
import L from 'leaflet';

export default function GeospatialMap({ onSelectDefect }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  const [selectedCorridor, setSelectedCorridor] = useState(ASSAM_HIGHWAY_CORRIDORS[0]);
  const [filterType, setFilterType] = useState('all'); // 'all', 'pothole', 'crack'
  const [activeDefect, setActiveDefect] = useState(MOCK_DEFECTS[0]);
  const [showPciOverlay, setShowPciOverlay] = useState(true);
  const [showFloodOverlay, setShowFloodOverlay] = useState(true);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Assam center coordinates (Guwahati-Nagaon highway corridor)
    const map = L.map(mapContainerRef.current, {
      center: [26.2000, 92.0000],
      zoom: 10,
      zoomControl: true,
    });

    // Dark CartoDB tile layer for modern tech dashboard
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Highway NH-27 Corridor Polyline (Guwahati -> Khetri -> Jagiroad -> Dharamtul -> Roha -> Nagaon)
    const nh27Coords = [
      [26.1445, 91.7362], // Guwahati / Jalukbari
      [26.1550, 91.7800],
      [26.1680, 91.8200], // Khetri
      [26.1820, 91.9100], // Nellie
      [26.2100, 92.0500], // Jagiroad
      [26.2400, 92.2000], // Dharamtul
      [26.2800, 92.3500], // Roha
      [26.3450, 92.6850], // Nagaon
    ];

    const polyline = L.polyline(nh27Coords, {
      color: '#06b6d4',
      weight: 5,
      opacity: 0.8,
      dashArray: '8, 8',
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers when filter or defect changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    const filtered = MOCK_DEFECTS.filter((d) => {
      if (filterType === 'pothole') return d.type.toLowerCase().includes('pothole');
      if (filterType === 'crack') return d.type.toLowerCase().includes('crack');
      return true;
    });

    filtered.forEach((defect) => {
      let pinColor = '#ef4444'; // Red for High
      if (defect.severity === 'Medium') pinColor = '#f59e0b'; // Amber
      if (defect.severity === 'Low') pinColor = '#10b981'; // Green

      const customIcon = L.divIcon({
        className: 'custom-leaflet-pin',
        html: `
          <div style="position: relative; width: 28px; height: 28px;">
            <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: ${pinColor}; opacity: 0.3; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
            <div style="position: absolute; top: 4px; left: 4px; width: 20px; height: 20px; border-radius: 50%; background: ${pinColor}; border: 2px solid #ffffff; box-shadow: 0 0 10px ${pinColor}; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; color: #ffffff;">
              !
            </div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      const marker = L.marker([defect.lat, defect.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        setActiveDefect(defect);
      });

      markersRef.current.push(marker);
    });
  }, [filterType]);

  return (
    <div className="space-y-6">
      {/* Top GIS Toolbar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            Assam PWD Geospatial Road Network &amp; Defect Heatmap (PostGIS)
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Dynamic 100-Meter Segment Linear Referencing • Snapped to NH-27 Corridor Centerline • WGS-84 Datum
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="bg-slate-800 rounded-lg p-0.5 border border-slate-700 flex items-center text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded font-semibold transition ${
                filterType === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Defects ({MOCK_DEFECTS.length})
            </button>
            <button
              onClick={() => setFilterType('pothole')}
              className={`px-3 py-1 rounded font-semibold transition ${
                filterType === 'pothole' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Potholes
            </button>
            <button
              onClick={() => setFilterType('crack')}
              className={`px-3 py-1 rounded font-semibold transition ${
                filterType === 'crack' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Cracks &amp; Rutting
            </button>
          </div>

          {/* Toggle Layers */}
          <button
            onClick={() => setShowPciOverlay(!showPciOverlay)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
              showPciOverlay
                ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            PCI Color Band: {showPciOverlay ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={() => setShowFloodOverlay(!showFloodOverlay)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
              showFloodOverlay
                ? 'bg-blue-950 text-blue-300 border-blue-800'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            Flood Risk Layer: {showFloodOverlay ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Main Map + Side Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Leaflet GIS Map Container */}
        <div className="lg:col-span-2 relative bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-xl min-h-[520px]">
          <div ref={mapContainerRef} className="w-full h-full min-h-[520px] z-10" />

          {/* Map Overlay Legend */}
          <div className="absolute bottom-4 left-4 z-20 bg-slate-900/90 backdrop-blur border border-slate-800 rounded-lg p-3 text-xs shadow-lg space-y-2 pointer-events-none">
            <div className="font-bold text-white text-[11px] uppercase tracking-wider">
              Distress Severity Legend
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="text-slate-300">High Severity (Potholes &gt;50mm / Cracks &gt;6mm)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="text-slate-300">Medium Severity (Rutting / Fatigue)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="text-slate-300">Low Severity (Ravelling / Hairline Cracks)</span>
            </div>
            <div className="pt-1 border-t border-slate-800 flex items-center gap-2 text-[10px] text-cyan-300 font-mono">
              <Navigation className="w-3 h-3" />
              <span>Assam NH-27 Corridor (50 km Pilot Testbed)</span>
            </div>
          </div>
        </div>

        {/* Right Col: Selected Defect Deep-Dive Card */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                  {activeDefect.id}
                </span>
                <h3 className="text-sm font-bold text-white">{activeDefect.type}</h3>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase font-mono ${
                activeDefect.severity === 'High'
                  ? 'bg-red-950 text-red-400 border border-red-800'
                  : 'bg-amber-950 text-amber-400 border border-amber-800'
              }`}>
                {activeDefect.severity}
              </span>
            </div>

            {/* Photo Crop Preview */}
            <div className="relative rounded-lg overflow-hidden border border-slate-800 aspect-video mb-3">
              <img
                src={activeDefect.beforeImg}
                alt={activeDefect.type}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-slate-900/80 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300">
                {activeDefect.chainage} • GPS Tagged
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Location:</span>
                <span className="font-semibold text-slate-200 text-right">{activeDefect.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Dimensions:</span>
                <span className="font-mono text-cyan-300">{activeDefect.dimensions}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">AI Confidence:</span>
                <span className="font-mono text-emerald-400 font-bold">{(activeDefect.confidence * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Repair SLA:</span>
                <span className="font-bold text-white">{activeDefect.slaHours} Hours</span>
              </div>

              <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800 mt-2">
                <div className="text-[10px] uppercase font-bold text-amber-400">
                  IRC:82-2015 Prescribed Action
                </div>
                <div className="text-slate-300 text-xs mt-1">
                  {activeDefect.ircAction}
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Estimated Cost:</span>
                  <span className="text-emerald-400 font-bold font-mono">
                    ₹{activeDefect.estimatedCostInr.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectDefect && onSelectDefect(activeDefect)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded-lg text-xs transition flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
            >
              <span>Add to Executive Work Order</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Corridor Selection List */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Assam PWD Road Corridors Under Surveillance
            </h4>
            <div className="space-y-2">
              {ASSAM_HIGHWAY_CORRIDORS.map((corridor) => (
                <div
                  key={corridor.id}
                  onClick={() => setSelectedCorridor(corridor)}
                  className={`p-2.5 rounded-lg border text-xs cursor-pointer transition ${
                    selectedCorridor.id === corridor.id
                      ? 'bg-blue-950/60 border-blue-500'
                      : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/70'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white">{corridor.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                      corridor.pciAverage < 45 ? 'bg-red-950 text-red-300' : 'bg-amber-950 text-amber-300'
                    }`}>
                      PCI {corridor.pciAverage}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 flex justify-between">
                    <span>{corridor.division}</span>
                    <span className="text-cyan-300">{corridor.defectsCount} Defects</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
