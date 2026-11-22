import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, FastForward, CloudRain, Sun, Trees, AlertTriangle, Shield, Gauge, Crosshair, CheckCircle2, RefreshCw } from 'lucide-react';
import { MOCK_DEFECTS } from '../data/mockData';

export default function VideoInspectionSimulator({ onDefectSelect }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [weatherCondition, setWeatherCondition] = useState('monsoon'); // 'sunny', 'monsoon', 'shadow'
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [fps, setFps] = useState(35.4);
  const [chainageKm, setChainageKm] = useState(18.420);
  const [vehicleSpeed, setVehicleSpeed] = useState(62);
  const [vibrationG, setVibrationG] = useState(0.28);
  const [detectedDefects, setDetectedDefects] = useState(MOCK_DEFECTS);
  const [activeDetection, setActiveDetection] = useState(MOCK_DEFECTS[0]);

  const canvasRef = useRef(null);

  // Simulation loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentFrameIndex((prev) => (prev + 1) % 1000);
      setChainageKm((prev) => +(prev + 0.005 * speedMultiplier).toFixed(3));
      setFps(+(34 + Math.random() * 3).toFixed(1));
      setVibrationG(+(0.2 + Math.random() * 0.35).toFixed(2));
      setVehicleSpeed(+(58 + Math.random() * 6).toFixed(0));

      // Periodic defect shift
      const randomDefectIndex = Math.floor((Date.now() / 3000) % MOCK_DEFECTS.length);
      setActiveDetection(MOCK_DEFECTS[randomDefectIndex]);
    }, 100 / speedMultiplier);

    return () => clearInterval(interval);
  }, [isPlaying, speedMultiplier]);

  // Render canvas road simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Sky gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.45);
    if (weatherCondition === 'monsoon') {
      skyGrad.addColorStop(0, '#334155');
      skyGrad.addColorStop(1, '#64748b');
    } else if (weatherCondition === 'shadow') {
      skyGrad.addColorStop(0, '#1e293b');
      skyGrad.addColorStop(1, '#475569');
    } else {
      skyGrad.addColorStop(0, '#0284c7');
      skyGrad.addColorStop(1, '#bae6fd');
    }
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height * 0.45);

    // Distant hills / Assam landscape
    ctx.fillStyle = weatherCondition === 'monsoon' ? '#1e293b' : '#14532d';
    ctx.beginPath();
    ctx.moveTo(0, height * 0.45);
    ctx.lineTo(120, height * 0.38);
    ctx.lineTo(280, height * 0.44);
    ctx.lineTo(460, height * 0.36);
    ctx.lineTo(680, height * 0.45);
    ctx.lineTo(width, height * 0.42);
    ctx.lineTo(width, height * 0.45);
    ctx.closePath();
    ctx.fill();

    // Road Pavement Perspective (Trapezoid)
    const roadGrad = ctx.createLinearGradient(0, height * 0.45, 0, height);
    if (weatherCondition === 'monsoon') {
      roadGrad.addColorStop(0, '#1e293b');
      roadGrad.addColorStop(1, '#0f172a'); // Wet shiny asphalt
    } else {
      roadGrad.addColorStop(0, '#334155');
      roadGrad.addColorStop(1, '#1e293b');
    }
    ctx.fillStyle = roadGrad;
    ctx.beginPath();
    ctx.moveTo(width * 0.42, height * 0.45);
    ctx.lineTo(width * 0.58, height * 0.45);
    ctx.lineTo(width * 0.95, height);
    ctx.lineTo(width * 0.05, height);
    ctx.closePath();
    ctx.fill();

    // Roadside berm / embankment
    ctx.fillStyle = '#451a03'; // Assam red soil / berm
    ctx.beginPath();
    ctx.moveTo(0, height * 0.45);
    ctx.lineTo(width * 0.42, height * 0.45);
    ctx.lineTo(width * 0.05, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(width * 0.58, height * 0.45);
    ctx.lineTo(width, height * 0.45);
    ctx.lineTo(width, height);
    ctx.lineTo(width * 0.95, height);
    ctx.closePath();
    ctx.fill();

    // Lane Markings with perspective animation
    const offset = (currentFrameIndex * 8) % 60;
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 4;
    ctx.setLineDash([25, 35]);
    ctx.lineDashOffset = -offset;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.45);
    ctx.lineTo(width * 0.5, height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Wet Road Reflections (Monsoon condition)
    if (weatherCondition === 'monsoon') {
      ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.fillRect(width * 0.2, height * 0.65, width * 0.6, height * 0.3);

      // Rain streaks
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 40; i++) {
        const rx = (i * 23 + currentFrameIndex * 15) % width;
        const ry = (i * 37 + currentFrameIndex * 25) % height;
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx - 8, ry + 22);
        ctx.stroke();
      }
    }

    // Tree canopy shadows (Shadow condition)
    if (weatherCondition === 'shadow') {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.4)';
      ctx.beginPath();
      ctx.arc(width * 0.35, height * 0.75, 120, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(width * 0.7, height * 0.82, 160, 0, Math.PI * 2);
      ctx.fill();
    }

    // Render Simulated AI Bounding Box on road
    if (activeDetection) {
      const boxX = width * 0.42;
      const boxY = height * 0.68;
      const boxW = width * 0.22;
      const boxH = height * 0.18;

      // Color by severity
      let color = '#ef4444'; // Red for High
      if (activeDetection.severity === 'Medium') color = '#f59e0b'; // Amber
      if (activeDetection.severity === 'Low') color = '#10b981'; // Green

      // Box border
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.strokeRect(boxX, boxY, boxW, boxH);

      // Semi-transparent overlay
      ctx.fillStyle = color + '22';
      ctx.fillRect(boxX, boxY, boxW, boxH);

      // Corner crosshairs
      const cornerLen = 14;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      // Top-Left
      ctx.beginPath();
      ctx.moveTo(boxX - 4, boxY + cornerLen);
      ctx.lineTo(boxX - 4, boxY - 4);
      ctx.lineTo(boxX + cornerLen, boxY - 4);
      ctx.stroke();
      // Top-Right
      ctx.beginPath();
      ctx.moveTo(boxX + boxW + 4, boxY + cornerLen);
      ctx.lineTo(boxX + boxW + 4, boxY - 4);
      ctx.lineTo(boxX + boxW - cornerLen, boxY - 4);
      ctx.stroke();
      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(boxX - 4, boxY + boxH - cornerLen);
      ctx.lineTo(boxX - 4, boxY + boxH + 4);
      ctx.lineTo(boxX + cornerLen, boxY + boxH + 4);
      ctx.stroke();
      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(boxX + boxW + 4, boxY + boxH - cornerLen);
      ctx.lineTo(boxX + boxW + 4, boxY + boxH + 4);
      ctx.lineTo(boxX + boxW - cornerLen, boxY + boxH + 4);
      ctx.stroke();

      // Label Badge
      ctx.fillStyle = color;
      ctx.fillRect(boxX, boxY - 26, boxW, 26);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px monospace';
      ctx.fillText(
        `${activeDetection.type} [${(activeDetection.confidence * 100).toFixed(0)}%] ${activeDetection.severity.toUpperCase()}`,
        boxX + 6,
        boxY - 8
      );
    }
  }, [currentFrameIndex, weatherCondition, activeDetection]);

  return (
    <div className="space-y-6">
      {/* Top Status & Controls Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-cyan-400" />
            Edge-AI Windshield Video Stream &amp; Real-Time Defect Segmentation
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Model: <strong className="text-cyan-300">YOLOv11n-RoadDefect (INT8 TensorRT)</strong> • Inference: &lt; 28ms on Mobile NPU • Corridor: NH-27 Nagaon
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              isPlaying
                ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 hover:bg-amber-600/50'
                : 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-500'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause Feed' : 'Resume Survey'}</span>
          </button>

          {/* Speed Toggles */}
          <div className="bg-slate-800 rounded-lg p-0.5 border border-slate-700 flex items-center text-xs">
            {[1, 2, 5].map((multiplier) => (
              <button
                key={multiplier}
                onClick={() => setSpeedMultiplier(multiplier)}
                className={`px-2 py-1 rounded text-xs font-bold transition ${
                  speedMultiplier === multiplier
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {multiplier}x
              </button>
            ))}
          </div>

          {/* Weather Simulation Filter */}
          <div className="bg-slate-800 rounded-lg p-0.5 border border-slate-700 flex items-center text-xs">
            <button
              onClick={() => setWeatherCondition('monsoon')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded transition text-xs font-semibold ${
                weatherCondition === 'monsoon'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Simulate Brahmaputra heavy monsoon rains & water reflection"
            >
              <CloudRain className="w-3 h-3" />
              <span>Monsoon Rain</span>
            </button>
            <button
              onClick={() => setWeatherCondition('shadow')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded transition text-xs font-semibold ${
                weatherCondition === 'shadow'
                  ? 'bg-slate-700 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Simulate dense tree canopy shadow transitions"
            >
              <Trees className="w-3 h-3" />
              <span>Tree Shadows</span>
            </button>
            <button
              onClick={() => setWeatherCondition('sunny')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded transition text-xs font-semibold ${
                weatherCondition === 'sunny'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Clear daylight asphalt"
            >
              <Sun className="w-3 h-3" />
              <span>Dry / Clear</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Video Viewport & Telemetry Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Canvas Video Viewport with HUD */}
        <div className="lg:col-span-2 relative bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
          {/* Simulation Canvas */}
          <canvas
            ref={canvasRef}
            width={720}
            height={440}
            className="w-full h-auto aspect-video object-cover block"
          />

          {/* Telemetry HUD Top Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono pointer-events-none">
            <div className="bg-slate-900/80 backdrop-blur border border-slate-700/80 rounded-lg px-2.5 py-1 flex items-center gap-2 text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-bold text-white tracking-widest">LIVE REC</span>
              <span className="text-slate-500">|</span>
              <span>CAM-01 1080p@60</span>
              <span className="text-slate-500">|</span>
              <span className="text-emerald-400">{fps} FPS</span>
            </div>

            <div className="bg-slate-900/80 backdrop-blur border border-slate-700/80 rounded-lg px-2.5 py-1 flex items-center gap-3 text-slate-300">
              <span>GNSS: <strong className="text-emerald-400">RTK FIX (±0.4m)</strong></span>
              <span>VIB: <strong className="text-amber-400">{vibrationG}g RMS</strong></span>
            </div>
          </div>

          {/* Telemetry HUD Bottom Overlay */}
          <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur border border-slate-800 rounded-lg p-3 text-xs font-mono grid grid-cols-2 md:grid-cols-4 gap-3 text-slate-300">
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-sans font-bold">CHAINAGE / LOCATION</div>
              <div className="text-sm font-bold text-cyan-400">Km {chainageKm.toFixed(3)}</div>
              <div className="text-[10px] text-slate-400 truncate">NH-27 Jagiroad Stretch</div>
            </div>

            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-sans font-bold">VEHICLE SPEED</div>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5" />
                {vehicleSpeed} km/h
              </div>
              <div className="text-[10px] text-slate-400">Prevailing Highway Speed</div>
            </div>

            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-sans font-bold">SUB-METER GNSS</div>
              <div className="text-xs font-bold text-white">26.1445° N, 91.7362° E</div>
              <div className="text-[10px] text-slate-400">WGS84 Datum</div>
            </div>

            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-sans font-bold">PRIVACY SCRUBBER</div>
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                ON-DEVICE SCRUB
              </div>
              <div className="text-[10px] text-slate-400">Faces &amp; Plates Redacted</div>
            </div>
          </div>
        </div>

        {/* Right Col: Live Defect Inspector Card */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Active Frame AI Detection
              </h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase font-mono ${
                activeDetection.severity === 'High'
                  ? 'bg-red-950 text-red-400 border border-red-800'
                  : 'bg-amber-950 text-amber-400 border border-amber-800'
              }`}>
                {activeDetection.severity} Severity
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Defect Classification:</span>
                <span className="font-bold text-white">{activeDetection.type} ({activeDetection.code})</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Detection Confidence:</span>
                <span className="font-mono font-bold text-emerald-400">
                  {(activeDetection.confidence * 100).toFixed(1)}%
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Physical Dimensions:</span>
                <span className="font-mono text-cyan-300 font-semibold">{activeDetection.dimensions}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Distress Area &amp; Depth:</span>
                <span className="font-mono text-slate-200">{activeDetection.areaM2} m² | {activeDetection.depthMm} mm</span>
              </div>

              <div className="py-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  IRC:82-2015 PRESCRIBED TREATMENT
                </div>
                <div className="text-slate-300 font-medium mt-1 leading-relaxed">
                  {activeDetection.ircAction}
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800 text-[11px]">
                  <span className="text-slate-400">Repair SLA: <strong className="text-white">{activeDetection.slaHours} Hours</strong></span>
                  <span className="text-emerald-400 font-bold">Est. Cost: ₹{activeDetection.estimatedCostInr.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-4 pt-2">
              <button
                onClick={() => onDefectSelect && onDefectSelect(activeDetection)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded-lg text-xs transition flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Locate on GIS &amp; Generate Work Order</span>
              </button>
            </div>
          </div>

          {/* Offline Caching Status Badge */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 text-xs flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="font-bold text-white">Edge Resilience Active</div>
              <p className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">
                48 defects currently cached in local SQLite store. Telemetry automatically synchronizes upon entering 4G/Wi-Fi coverage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Defect Event Stream Ticker */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Real-Time Vehicle Survey Event Stream (NH-27 Corridor)
          </h3>
          <span className="text-xs text-slate-400 font-mono">6 Events Logged</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {MOCK_DEFECTS.map((defect) => (
            <div
              key={defect.id}
              onClick={() => setActiveDetection(defect)}
              className={`p-3 rounded-lg border transition-all cursor-pointer text-xs ${
                activeDetection.id === defect.id
                  ? 'bg-blue-950/60 border-blue-500 shadow-md shadow-blue-500/20'
                  : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-white">{defect.type}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded font-mono ${
                  defect.severity === 'High' ? 'bg-red-950 text-red-300' : 'bg-amber-950 text-amber-300'
                }`}>
                  {defect.severity}
                </span>
              </div>
              <div className="text-[11px] text-cyan-300 font-mono">{defect.chainage} • {defect.location}</div>
              <div className="text-[11px] text-slate-400 mt-1 truncate">{defect.ircAction}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
