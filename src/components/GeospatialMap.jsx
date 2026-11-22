import React, { useState, useEffect, useRef } from 'react';
import { Layers, ChevronRight, Navigation } from 'lucide-react';
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

    // Clean light CartoDB Voyager tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
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

    L.polyline(nh27Coords, {
      color: '#1d4ed8',
      weight: 6,
      opacity: 0.85,
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
      let pinColor = '#dc2626'; // Red for High
      if (defect.severity === 'Medium') pinColor = '#d97706'; // Amber
      if (defect.severity === 'Low') pinColor = '#059669'; // Green

      const customIcon = L.divIcon({
        className: 'custom-leaflet-pin',
        html: `
          <div style="position: relative; width: 28px; height: 28px;">
            <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: ${pinColor}; opacity: 0.25; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
            <div style="position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; border-radius: 50%; background: ${pinColor}; border: 2.5px solid #ffffff; box-shadow: 0 2px 6px rgba(0,0,0,0.25); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; color: #ffffff;">
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
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            Assam PWD Geospatial Road Network &amp; Defect Heatmap (PostGIS)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            Dynamic 100-Meter Segment Linear Referencing • Snapped to NH-27 Corridor Centerline • WGS-84 Datum
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="bg-slate-100 rounded-lg p-0.5 border border-slate-200 flex items-center text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded font-semibold transition ${
                filterType === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Defects ({MOCK_DEFECTS.length})
            </button>
            <button
              onClick={() => setFilterType('pothole')}
              className={`px-3 py-1 rounded font-semibold transition ${
                filterType === 'pothole' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Potholes
            </button>
            <button
              onClick={() => setFilterType('crack')}
              className={`px-3 py-1 rounded font-semibold transition ${
                filterType === 'crack' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
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
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white text-slate-600 border-slate-200'
            }`}
          >
            PCI Color Band: {showPciOverlay ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={() => setShowFloodOverlay(!showFloodOverlay)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
              showFloodOverlay
                ? 'bg-blue-50 text-blue-800 border-blue-300'
                : 'bg-white text-slate-600 border-slate-200'
            }`}
          >
            Flood Risk Layer: {showFloodOverlay ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Main Map + Side Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Leaflet GIS Map Container */}
        <div className="lg:col-span-2 relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm min-h-[520px]">
          <div ref={mapContainerRef} className="w-full h-full min-h-[520px] z-10" />

          {/* Map Overlay Legend */}
          <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur border border-slate-200 rounded-lg p-3 text-xs shadow-md space-y-2 pointer-events-none">
            <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">
              Distress Severity Legend
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600"></span>
              <span className="text-slate-700 font-medium">High Severity (Potholes &gt;50mm / Cracks &gt;6mm)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="text-slate-700 font-medium">Medium Severity (Rutting / Fatigue)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
              <span className="text-slate-700 font-medium">Low Severity (Ravelling / Hairline Cracks)</span>
            </div>
            <div className="pt-1.5 border-t border-slate-200 flex items-center gap-2 text-[10px] text-blue-700 font-mono font-semibold">
              <Navigation className="w-3 h-3" />
              <span>Assam NH-27 Corridor (50 km Pilot Testbed)</span>
            </div>
          </div>
        </div>

        {/* Right Col: Selected Defect Deep-Dive Card */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
              <div>
                <span className="text-[10px] font-mono text-blue-700 font-bold uppercase tracking-wider">
                  {activeDefect.id}
                </span>
                <h3 className="text-sm font-bold text-slate-900">{activeDefect.type}</h3>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase font-mono ${
                activeDefect.severity === 'High'
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}>
                {activeDefect.severity}
              </span>
            </div>

            {/* Photo Crop Preview */}
            <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-video mb-3">
              <img
                src={activeDefect.beforeImg}
                alt={activeDefect.type}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-slate-900/80 px-2 py-0.5 rounded text-[10px] font-mono text-white">
                {activeDefect.chainage} • GPS Tagged
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold text-slate-800 text-right">{activeDefect.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Dimensions:</span>
                <span className="font-mono text-blue-700 font-semibold">{activeDefect.dimensions}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">AI Confidence:</span>
                <span className="font-mono text-emerald-600 font-bold">{(activeDefect.confidence * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Repair SLA:</span>
                <span className="font-bold text-slate-900">{activeDefect.slaHours} Hours</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 mt-2">
                <div className="text-[10px] uppercase font-bold text-amber-700">
                  IRC:82-2015 Prescribed Action
                </div>
                <div className="text-slate-700 text-xs mt-1 leading-relaxed">
                  {activeDefect.ircAction}
                </div>
                <div className="mt-2 pt-2 border-t border-slate-200 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Estimated Cost:</span>
                  <span className="text-emerald-700 font-bold font-mono">
                    ₹{activeDefect.estimatedCostInr.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectDefect && onSelectDefect(activeDefect)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-3 rounded-lg text-xs transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Add to Executive Work Order</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Corridor Selection List */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Assam PWD Road Corridors Under Surveillance
            </h4>
            <div className="space-y-2">
              {ASSAM_HIGHWAY_CORRIDORS.map((corridor) => (
                <div
                  key={corridor.id}
                  onClick={() => setSelectedCorridor(corridor)}
                  className={`p-2.5 rounded-lg border text-xs cursor-pointer transition ${
                    selectedCorridor.id === corridor.id
                      ? 'bg-blue-50 border-blue-300'
                      : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900">{corridor.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                      corridor.pciAverage < 45 ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      PCI {corridor.pciAverage}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 flex justify-between">
                    <span>{corridor.division}</span>
                    <span className="text-blue-700 font-semibold">{corridor.defectsCount} Defects</span>
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
