const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'assets');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Common SVG Blueprint Background & Defs
function getBlueprintHeader(title, subtitle, badgeText) {
  return `
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" stroke-width="1" />
      </pattern>
      <pattern id="subgrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f1f5f9" stroke-width="0.5" />
      </pattern>
      <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#1e3a8a" />
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#06b6d4" />
        <stop offset="100%" stop-color="#0284c7" />
      </linearGradient>
      <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" />
        <stop offset="100%" stop-color="#059669" />
      </linearGradient>
      <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" />
        <stop offset="100%" stop-color="#d97706" />
      </linearGradient>
      <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f43f5e" />
        <stop offset="100%" stop-color="#e11d48" />
      </linearGradient>
      <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.06" />
      </filter>
    </defs>
    
    <!-- Background Canvas -->
    <rect width="1920" height="1080" fill="#f8fafc" />
    <rect width="1920" height="1080" fill="url(#subgrid)" />
    <rect width="1920" height="1080" fill="url(#grid)" />
    
    <!-- Top Header Bar -->
    <rect x="60" y="40" width="1800" height="110" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow)" />
    <rect x="60" y="40" width="8" height="110" rx="4" fill="#1e3a8a" />
    
    <!-- Badges -->
    <g transform="translate(1500, 65)">
      <rect width="330" height="34" rx="6" fill="#0f172a" />
      <text x="165" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle" letter-spacing="1.5">${badgeText || 'GOVERNMENT OF ASSAM • PWD • NESFIC 2026'}</text>
    </g>
    
    <g transform="translate(90, 80)">
      <text font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#0f172a" letter-spacing="0.5">${title}</text>
      <text y="42" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" fill="#64748b">${subtitle}</text>
    </g>
  `;
}

// 1. Infographic 1: Operational Paradigm Shift
function generateInfographic1() {
  const content = `
    ${getBlueprintHeader(
      "ASSAM PWD HIGHWAY MAINTENANCE: PARADIGM SHIFT",
      "Transforming North-East Road Asset Management From Subjective Inspection to Continuous Real-Time Edge-AI Diagnostics",
      "NESFIC-D-05 • DEEP-TECH INNOVATION"
    )}
    
    <!-- Left Column: Legacy Workflow -->
    <g transform="translate(60, 180)">
      <rect width="875" height="740" rx="16" fill="#ffffff" stroke="#fecdd3" stroke-width="2" filter="url(#shadow)" />
      <rect width="875" height="56" rx="16" fill="#ffe4e6" />
      <path d="M 0 40 L 0 56 L 875 56 L 875 40 Z" fill="#ffe4e6" />
      
      <circle cx="40" cy="28" r="14" fill="#e11d48" />
      <text x="40" y="33" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">✕</text>
      <text x="68" y="34" font-family="sans-serif" font-size="18" font-weight="800" fill="#9f1239">THE LEGACY MANUAL APPROACH (Current State Vulnerabilities)</text>
      
      <!-- Box 1 -->
      <g transform="translate(30, 80)">
        <rect width="815" height="110" rx="10" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <text x="24" y="35" font-family="sans-serif" font-size="17" font-weight="800" fill="#881337">1. Windshield Subjectivity & Latency</text>
        <text x="24" y="62" font-family="sans-serif" font-size="14" fill="#475569">Physical visual checks cover &lt;15% of Assam network quarterly. Uncalibrated visual eye estimations</text>
        <text x="24" y="85" font-family="sans-serif" font-size="14" fill="#475569">lead to massive inter-division variance and delayed handwritten register records.</text>
      </g>
      
      <!-- Box 2 -->
      <g transform="translate(30, 210)">
        <rect width="815" height="110" rx="10" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <text x="24" y="35" font-family="sans-serif" font-size="17" font-weight="800" fill="#881337">2. Post-Monsoon Disaster Amplification</text>
        <text x="24" y="62" font-family="sans-serif" font-size="14" fill="#475569">Heavy Brahmaputra flooding causes rapid water ingress. Manual reporting takes 3-6 weeks,</text>
        <text x="24" y="85" font-family="sans-serif" font-size="14" fill="#475569">letting minor ravelling and micro-cracks deteriorate into hazardous structural cratering.</text>
      </g>
      
      <!-- Box 3 -->
      <g transform="translate(30, 340)">
        <rect width="815" height="110" rx="10" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <text x="24" y="35" font-family="sans-serif" font-size="17" font-weight="800" fill="#881337">3. Prohibitive Capital & Operational Costs</text>
        <text x="24" y="62" font-family="sans-serif" font-size="14" fill="#475569">Imported Network Survey Vehicles (NSV/ROMDAS) cost ₹1.5 - ₹3.0 Crore each with ₹1,200/km survey fees.</text>
        <text x="24" y="85" font-family="sans-serif" font-size="14" fill="#475569">Bulky vans cannot navigate flood-damaged embankments or narrow rural MDRs.</text>
      </g>

      <!-- Box 4 -->
      <g transform="translate(30, 470)">
        <rect width="815" height="110" rx="10" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <text x="24" y="35" font-family="sans-serif" font-size="17" font-weight="800" fill="#881337">4. Suboptimal Budget Allocation & Fraud Risk</text>
        <text x="24" y="62" font-family="sans-serif" font-size="14" fill="#475569">Lacking objective spatial condition indices, resurfacing funds are distributed reactively.</text>
        <text x="24" y="85" font-family="sans-serif" font-size="14" fill="#475569">Contractor patch repairs lack cryptographic audit proof, creating ghost billing risks.</text>
      </g>
      
      <!-- Metric Footer Left -->
      <g transform="translate(30, 610)">
        <rect width="185" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="92" y="38" font-family="sans-serif" font-size="28" font-weight="900" fill="#e11d48" text-anchor="middle">5 km/d</text>
        <text x="92" y="65" font-family="sans-serif" font-size="13" font-weight="600" fill="#64748b" text-anchor="middle">Survey Speed</text>
        
        <rect x="210" width="185" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="302" y="38" font-family="sans-serif" font-size="28" font-weight="900" fill="#e11d48" text-anchor="middle">₹1.8 Cr+</text>
        <text x="302" y="65" font-family="sans-serif" font-size="13" font-weight="600" fill="#64748b" text-anchor="middle">Equipment CapEx</text>

        <rect x="420" width="185" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="512" y="38" font-family="sans-serif" font-size="28" font-weight="900" fill="#e11d48" text-anchor="middle">3-6 Wks</text>
        <text x="512" y="65" font-family="sans-serif" font-size="13" font-weight="600" fill="#64748b" text-anchor="middle">Reporting Lag</text>

        <rect x="630" width="185" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="722" y="38" font-family="sans-serif" font-size="28" font-weight="900" fill="#e11d48" text-anchor="middle">&lt; 15%</text>
        <text x="722" y="65" font-family="sans-serif" font-size="13" font-weight="600" fill="#64748b" text-anchor="middle">Quarterly Coverage</text>
      </g>
    </g>

    <!-- Right Column: MargDristi AI Solution -->
    <g transform="translate(985, 180)">
      <rect width="875" height="740" rx="16" fill="#ffffff" stroke="#a7f3d0" stroke-width="2" filter="url(#shadow)" />
      <rect width="875" height="56" rx="16" fill="#d1fae5" />
      <path d="M 0 40 L 0 56 L 875 56 L 875 40 Z" fill="#d1fae5" />
      
      <circle cx="40" cy="28" r="14" fill="#059669" />
      <text x="40" y="33" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="68" y="34" font-family="sans-serif" font-size="18" font-weight="800" fill="#065f46">MARGDRISTI AI: THE CONTINUOUS EDGE-VISION REVOLUTION</text>

      <!-- Box 1 -->
      <g transform="translate(30, 80)">
        <rect width="815" height="110" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
        <text x="24" y="35" font-family="sans-serif" font-size="17" font-weight="800" fill="#064e3b">1. Edge-AI Smartphone / Dashcam Vision</text>
        <text x="24" y="62" font-family="sans-serif" font-size="14" fill="#334155">Lightweight YOLOv11n running on mobile NPU at 60 km/h survey speeds. Real-time bounding</text>
        <text x="24" y="85" font-family="sans-serif" font-size="14" fill="#334155">boxes for potholes, cracks, rutting, and edge-breaks with 100% offline edge caching.</text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(30, 210)">
        <rect width="815" height="110" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
        <text x="24" y="35" font-family="sans-serif" font-size="17" font-weight="800" fill="#064e3b">2. Sub-Meter Geospatial & PCI Indexing</text>
        <text x="24" y="62" font-family="sans-serif" font-size="14" fill="#334155">Syncs defect telemetry with 10Hz GNSS GPS and road centerline vector graphs. Dynamically computes</text>
        <text x="24" y="85" font-family="sans-serif" font-size="14" fill="#334155">standardized ASTM D6433 Pavement Condition Index (PCI 0-100) per 100-meter segment.</text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(30, 340)">
        <rect width="815" height="110" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
        <text x="24" y="35" font-family="sans-serif" font-size="17" font-weight="800" fill="#064e3b">3. Algorithmic IRC:82 Maintenance Prioritisation</text>
        <text x="24" y="62" font-family="sans-serif" font-size="14" fill="#334155">Synthesizes distress density, traffic volume (CVPD/AADT), monsoon flood vulnerability, and</text>
        <text x="24" y="85" font-family="sans-serif" font-size="14" fill="#334155">Assam PWD Schedule of Rates to generate ranked, cost-optimized repair work packages.</text>
      </g>

      <!-- Box 4 -->
      <g transform="translate(30, 470)">
        <rect width="815" height="110" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
        <text x="24" y="35" font-family="sans-serif" font-size="17" font-weight="800" fill="#064e3b">4. Closed-Loop Pre/Post-Repair Verification</text>
        <text x="24" y="62" font-family="sans-serif" font-size="14" fill="#334155">Contractors execute repairs pinned to GPS coordinates. Mobile uploads of completed patches</text>
        <text x="24" y="85" font-family="sans-serif" font-size="14" fill="#334155">undergo AI visual feature matching before automated sign-off and invoice approval.</text>
      </g>

      <!-- Metric Footer Right -->
      <g transform="translate(30, 610)">
        <rect width="185" height="95" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
        <text x="92" y="38" font-family="sans-serif" font-size="28" font-weight="900" fill="#059669" text-anchor="middle">200+ km/d</text>
        <text x="92" y="65" font-family="sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle">Fleet Coverage</text>

        <rect x="210" width="185" height="95" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
        <text x="302" y="38" font-family="sans-serif" font-size="28" font-weight="900" fill="#059669" text-anchor="middle">&lt; ₹35k</text>
        <text x="302" y="65" font-family="sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle">Per-Kit Hardware</text>

        <rect x="420" width="185" height="95" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
        <text x="512" y="38" font-family="sans-serif" font-size="28" font-weight="900" fill="#059669" text-anchor="middle">&lt; 5 Min</text>
        <text x="512" y="65" font-family="sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle">Turnaround Time</text>

        <rect x="630" width="185" height="95" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
        <text x="722" y="38" font-family="sans-serif" font-size="28" font-weight="900" fill="#059669" text-anchor="middle">89.4%</text>
        <text x="722" y="65" font-family="sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle">Detection mAP@0.5</text>
      </g>
    </g>

    <!-- Bottom Institutional Banner -->
    <g transform="translate(60, 945)">
      <rect width="1800" height="85" rx="10" fill="#0f172a" />
      <text x="40" y="38" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">CORE IMPACT METRICS FOR ASSAM PWD:</text>
      <text x="40" y="62" font-family="sans-serif" font-size="14" fill="#94a3b8">85% Reduction in Inspection Turnaround • 28% Life-Cycle Cost Savings • Zero Distracted Driving (Hands-free) • 100% Audit-Ready GIS Telemetry</text>
      <rect x="1490" y="24" width="270" height="38" rx="6" fill="#1e3a8a" stroke="#38bdf8" stroke-width="1" />
      <text x="1625" y="48" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">IRC:82-2015 COMPLIANT</text>
    </g>
  `;
  return wrapSvg(content);
}

// 2. Infographic 2: System Architecture
function generateInfographic2() {
  const content = `
    ${getBlueprintHeader(
      "MARGDRISTI AI: EDGE-TO-CLOUD DISTRIBUTED ARCHITECTURE",
      "Multi-Tier Resilient System Topology for Continuous Road Distress Detection, Spatial GIS Analytics & Prioritisation",
      "SYSTEM ARCHITECTURE BLUEPRINT"
    )}

    <!-- Tier 1: Edge Surveillance Vehicle -->
    <g transform="translate(60, 180)">
      <rect width="425" height="740" rx="14" fill="#ffffff" stroke="#93c5fd" stroke-width="2" filter="url(#shadow)" />
      <rect width="425" height="52" rx="14" fill="#eff6ff" />
      <text x="25" y="32" font-family="sans-serif" font-size="16" font-weight="800" fill="#1e40af">TIER 1: EDGE SURVEILLANCE VEHICLE</text>
      
      <g transform="translate(20, 75)">
        <rect width="385" height="135" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Optical & Kinematic Sensors</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• 1080p 60 FPS Automotive Dashcam</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• 10 Hz Multi-GNSS Receiver (GPS/Galileo)</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• 3-Axis IMU Accelerometer (Vibration)</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#0284c7">→ Polarizing Filter: Eliminates Rain Glare</text>
      </g>

      <g transform="translate(20, 230)">
        <rect width="385" height="155" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">On-Device Neural Engine</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• YOLOv11n-RoadDefect (14.2 MB INT8)</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• NPU Inference &lt; 28 ms (&gt;35 FPS)</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Automated Face & License Anonymizer</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Bounding Box & Severity Estimator</text>
        <text x="20" y="145" font-family="sans-serif" font-size="13" font-weight="700" fill="#059669">→ Zero Cloud Dependence During Transit</text>
      </g>

      <g transform="translate(20, 405)">
        <rect width="385" height="135" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Local Offline Storage & Sync</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Encrypted SQLite Spatial Cache</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Stores 250+ km of Telemetry Offline</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Automatic Burst Sync on 4G/5G/Wi-Fi</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#d97706">→ Resilient to North-East Cellular Deadzones</text>
      </g>

      <g transform="translate(20, 560)">
        <rect width="385" height="150" rx="8" fill="#1e293b" />
        <text x="20" y="32" font-family="sans-serif" font-size="14" font-weight="800" fill="#38bdf8">HARDWARE COMPATIBILITY</text>
        <text x="20" y="60" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Standard Android Smartphone (Snapdragon)</text>
        <text x="20" y="85" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Dedicated Jetson Orin Nano Edge Box</text>
        <text x="20" y="110" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Universal 12V Dash Vehicle Mount</text>
        <text x="20" y="135" font-family="sans-serif" font-size="13" font-weight="700" fill="#4ade80">• Kit Cost: &lt; ₹35,000 / Patrol Unit</text>
      </g>
    </g>

    <!-- Connector 1 -->
    <g transform="translate(490, 500)">
      <path d="M 0 0 L 25 0" stroke="#0284c7" stroke-width="4" stroke-dasharray="6,4" />
      <polygon points="25,-6 35,0 25,6" fill="#0284c7" />
    </g>

    <!-- Tier 2: Ingestion & Spatial Gateway -->
    <g transform="translate(525, 180)">
      <rect width="425" height="740" rx="14" fill="#ffffff" stroke="#67e8f9" stroke-width="2" filter="url(#shadow)" />
      <rect width="425" height="52" rx="14" fill="#ecfeff" />
      <text x="25" y="32" font-family="sans-serif" font-size="16" font-weight="800" fill="#0891b2">TIER 2: INGESTION &amp; SPATIAL DATA</text>

      <g transform="translate(20, 75)">
        <rect width="385" height="145" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">FastAPI Ingestion Gateway</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Asynchronous High-Throughput REST APIs</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Celery Distributed Background Queues</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Redis Real-Time In-Memory Broker</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#0284c7">• Microservices Containerized with Docker</text>
      </g>

      <g transform="translate(20, 240)">
        <rect width="385" height="165" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">PostGIS Spatial Database</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• PostgreSQL 16 + PostGIS Extension</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Spatial Indexing (GIST R-Tree Index)</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• ST_SnapToGrid &amp; Centerline Alignment</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#475569">• 100-Meter Dynamic Road Segment Graph</text>
        <text x="20" y="147" font-family="sans-serif" font-size="13" font-weight="700" fill="#059669">• Sub-Meter Geolocation Precision</text>
      </g>

      <g transform="translate(20, 425)">
        <rect width="385" height="145" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Sovereign Evidence Store</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• MeitY-Empanelled Cloud / NIC S3</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• High-Res Defect Cropped Frames</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Cryptographic SHA-256 Frame Hashing</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#059669">• 100% Indian Sovereign Data Residency</text>
      </g>

      <g transform="translate(20, 590)">
        <rect width="385" height="120" rx="8" fill="#1e293b" />
        <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="800" fill="#38bdf8">TELEMETRY INGESTION RATE</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#e2e8f0">• 50,000+ Defect Records / Hour / Division</text>
        <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#e2e8f0">• End-to-End Ingestion Latency: &lt; 2.5 Sec</text>
        <text x="20" y="105" font-family="sans-serif" font-size="13" font-weight="700" fill="#38bdf8">• SSL/TLS 1.3 + AES-256 Data Encryption</text>
      </g>
    </g>

    <!-- Connector 2 -->
    <g transform="translate(955, 500)">
      <path d="M 0 0 L 25 0" stroke="#059669" stroke-width="4" stroke-dasharray="6,4" />
      <polygon points="25,-6 35,0 25,6" fill="#059669" />
    </g>

    <!-- Tier 3: Analytics & Prioritisation Engine -->
    <g transform="translate(990, 180)">
      <rect width="425" height="740" rx="14" fill="#ffffff" stroke="#6ee7b7" stroke-width="2" filter="url(#shadow)" />
      <rect width="425" height="52" rx="14" fill="#ecfdf5" />
      <text x="25" y="32" font-family="sans-serif" font-size="16" font-weight="800" fill="#047857">TIER 3: CIVIL ANALYTICS &amp; IRC:82 ENGINE</text>

      <g transform="translate(20, 75)">
        <rect width="385" height="145" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">ASTM D6433 PCI Calculator</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Dynamic 0-100 Pavement Condition Index</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Defect Deduct Value Curves (DV)</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Severity Multipliers (Low, Med, High)</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#059669">• 6 Condition Bands (Good to Failed)</text>
      </g>

      <g transform="translate(20, 240)">
        <rect width="385" height="165" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">IRC:82 Prioritisation Matrix</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Distress Severity Index (35% Weight)</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Traffic Intensity / CVPD (25% Weight)</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Flood Vulnerability Index (20% Weight)</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Facility Criticality Score (20% Weight)</text>
        <text x="20" y="147" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">• Automated Repair Classification</text>
      </g>

      <g transform="translate(20, 425)">
        <rect width="385" height="145" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Assam PWD SoR Cost Engine</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Schedule of Rates (APWD-SoR 2024)</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Instant Bill of Quantities (BoQ) Calc</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Patching vs Resurfacing vs Overlay</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#d97706">• Life-Cycle Cost Optimisation</text>
      </g>

      <g transform="translate(20, 590)">
        <rect width="385" height="120" rx="8" fill="#1e293b" />
        <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="800" fill="#38bdf8">ALGORITHMIC DECISION ACCURACY</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#e2e8f0">• 91.2% Correlation with Senior EE Audits</text>
        <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#e2e8f0">• 28% Preventative Maintenance Savings</text>
        <text x="20" y="105" font-family="sans-serif" font-size="13" font-weight="700" fill="#4ade80">• Zero Manual Calculation Errors</text>
      </g>
    </g>

    <!-- Connector 3 -->
    <g transform="translate(1420, 500)">
      <path d="M 0 0 L 25 0" stroke="#f59e0b" stroke-width="4" stroke-dasharray="6,4" />
      <polygon points="25,-6 35,0 25,6" fill="#f59e0b" />
    </g>

    <!-- Tier 4: PWD Executive Governance Suite -->
    <g transform="translate(1455, 180)">
      <rect width="405" height="740" rx="14" fill="#ffffff" stroke="#fcd34d" stroke-width="2" filter="url(#shadow)" />
      <rect width="405" height="52" rx="14" fill="#fefce8" />
      <text x="25" y="32" font-family="sans-serif" font-size="16" font-weight="800" fill="#b45309">TIER 4: PWD GOVERNANCE SUITE</text>

      <g transform="translate(20, 75)">
        <rect width="365" height="145" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Interactive Web GIS Portal</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• MapLibre / Leaflet Vector Maps</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Color-Coded PCI Road Health Overlays</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Live Defect Clustering &amp; Heatmaps</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#0284c7">• Single-Click Division Level Filters</text>
      </g>

      <g transform="translate(20, 240)">
        <rect width="365" height="165" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Electronic Work-Order Dispatch</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• One-Click Tender BoQ PDF Export</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Chainage &amp; GPS Coordinate Bounds</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Digital Signature by Executive Engineer</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Contractor Mobile Task Assignment</text>
        <text x="20" y="147" font-family="sans-serif" font-size="13" font-weight="700" fill="#059669">• Instant PWD e-Prastuti Integration</text>
      </g>

      <g transform="translate(20, 425)">
        <rect width="365" height="145" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Contractor Verification Loop</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Geo-Fenced Post-Repair Photo Upload</text>
        <text x="20" y="78" font-family="sans-serif" font-size="13" fill="#475569">• AI Before/After Visual Patch Matching</text>
        <text x="20" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Prevents Ghost / Fraudulent Repairs</text>
        <text x="20" y="124" font-family="sans-serif" font-size="13" fill="#059669">• Automated Invoice Clearance Release</text>
      </g>

      <g transform="translate(20, 590)">
        <rect width="365" height="120" rx="8" fill="#1e293b" />
        <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="800" fill="#38bdf8">PWD USER PERSONAS</text>
        <text x="20" y="55" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Junior Engineer (Mobile Field Survey)</text>
        <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Executive Engineer (Sanction &amp; Tender)</text>
        <text x="20" y="105" font-family="sans-serif" font-size="13" font-weight="700" fill="#fcd34d">• Chief Engineer (Strategic State Overview)</text>
      </g>
    </g>

    <!-- Bottom Institutional Banner -->
    <g transform="translate(60, 945)">
      <rect width="1800" height="85" rx="10" fill="#0f172a" />
      <text x="40" y="38" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">SECURITY &amp; COMPLIANCE HIGHLIGHTS:</text>
      <text x="40" y="62" font-family="sans-serif" font-size="14" fill="#94a3b8">DPDP Act 2023 Compliant • Automatic Edge Face/License Scrubbing • MeitY Sovereign Data Residency • OGC Open Spatial Standards (GeoJSON/WMS)</text>
      <rect x="1510" y="24" width="250" height="38" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1" />
      <text x="1635" y="48" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">SOVEREIGN TECH STACK</text>
    </g>
  `;
  return wrapSvg(content);
}

// 3. Infographic 3: Pavement Distress Taxonomy & PCI
function generateInfographic3() {
  const content = `
    ${getBlueprintHeader(
      "STANDARDIZED PAVEMENT DISTRESS TAXONOMY & PCI SPECTRUM",
      "Classification of 6 Highway Bituminous Surface Distress Categories Aligned With IRC:82-2015 and ASTM D6433 Standards",
      "CIVIL ENGINEERING TAXONOMY"
    )}

    <!-- 6 Distress Category Cards (2 Rows of 3 Cards) -->
    <!-- Card 1: Potholes -->
    <g transform="translate(60, 180)">
      <rect width="575" height="320" rx="12" fill="#ffffff" stroke="#fca5a5" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="575" height="42" rx="12" fill="#fee2e2" />
      <text x="20" y="28" font-family="sans-serif" font-size="16" font-weight="800" fill="#991b1b">1. POTHOLES (CLASS D40 / IRC:82)</text>
      
      <g transform="translate(20, 60)">
        <text font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Definition &amp; Cause:</text>
        <text y="24" font-family="sans-serif" font-size="13" fill="#475569">Bowl-shaped depressions &gt;25 mm deep, resulting from water</text>
        <text y="44" font-family="sans-serif" font-size="13" fill="#475569">penetration, base softening, and heavy traffic suction.</text>
        
        <text y="80" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Severity Thresholds:</text>
        <text y="104" font-family="sans-serif" font-size="13" fill="#475569">• Low: &lt;25 mm depth | Area &lt; 0.1 m²</text>
        <text y="126" font-family="sans-serif" font-size="13" fill="#475569">• Med: 25-50 mm depth | Area 0.1-0.3 m²</text>
        <text y="148" font-family="sans-serif" font-size="13" fill="#b91c1c" font-weight="700">• High: &gt;50 mm depth | Severe safety hazard</text>
        
        <rect x="0" y="170" width="535" height="45" rx="6" fill="#fff1f2" stroke="#fecdd3" stroke-width="1" />
        <text x="15" y="198" font-family="sans-serif" font-size="13" font-weight="700" fill="#991b1b">IRC:82 Treatment: Cold-mix/Hot-mix Patching with Tack Coat</text>
      </g>
    </g>

    <!-- Card 2: Alligator Cracking -->
    <g transform="translate(670, 180)">
      <rect width="575" height="320" rx="12" fill="#ffffff" stroke="#fca5a5" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="575" height="42" rx="12" fill="#fee2e2" />
      <text x="20" y="28" font-family="sans-serif" font-size="16" font-weight="800" fill="#991b1b">2. ALLIGATOR / FATIGUE CRACKING (CLASS D20)</text>

      <g transform="translate(20, 60)">
        <text font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Definition &amp; Cause:</text>
        <text y="24" font-family="sans-serif" font-size="13" fill="#475569">Interconnected chicken-wire polygon cracks forming under</text>
        <text y="44" font-family="sans-serif" font-size="13" fill="#475569">repeated wheel loads. Primary indicator of structural base failure.</text>

        <text y="80" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Severity Thresholds:</text>
        <text y="104" font-family="sans-serif" font-size="13" fill="#475569">• Low: Fine longitudinal parallel hairline cracks</text>
        <text y="126" font-family="sans-serif" font-size="13" fill="#475569">• Med: Alligator pattern, crack width &lt; 3 mm</text>
        <text y="148" font-family="sans-serif" font-size="13" fill="#b91c1c" font-weight="700">• High: Pieces loose, spalled edges, crack &gt; 3 mm</text>

        <rect x="0" y="170" width="535" height="45" rx="6" fill="#fff1f2" stroke="#fecdd3" stroke-width="1" />
        <text x="15" y="198" font-family="sans-serif" font-size="13" font-weight="700" fill="#991b1b">IRC:82 Treatment: Full-depth Base Dig-out or Structural Overlay</text>
      </g>
    </g>

    <!-- Card 3: Longitudinal & Transverse -->
    <g transform="translate(1280, 180)">
      <rect width="575" height="320" rx="12" fill="#ffffff" stroke="#fde68a" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="575" height="42" rx="12" fill="#fef3c7" />
      <text x="20" y="28" font-family="sans-serif" font-size="16" font-weight="800" fill="#92400e">3. LONGITUDINAL &amp; TRANSVERSE CRACKS (D00/D10)</text>

      <g transform="translate(20, 60)">
        <text font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Definition &amp; Cause:</text>
        <text y="24" font-family="sans-serif" font-size="13" fill="#475569">Cracks parallel or perpendicular to road centerline caused by</text>
        <text y="44" font-family="sans-serif" font-size="13" fill="#475569">thermal shrinkage, paving joint faults, or subgrade settlement.</text>

        <text y="80" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Severity Thresholds:</text>
        <text y="104" font-family="sans-serif" font-size="13" fill="#475569">• Low: Width &lt; 3 mm | Little to no spalling</text>
        <text y="126" font-family="sans-serif" font-size="13" fill="#475569">• Med: Width 3-6 mm | Minor adjacent crack spalling</text>
        <text y="148" font-family="sans-serif" font-size="13" fill="#b45309" font-weight="700">• High: Width &gt; 6 mm | Deep water intrusion vulnerability</text>

        <rect x="0" y="170" width="535" height="45" rx="6" fill="#fffbeb" stroke="#fde68a" stroke-width="1" />
        <text x="15" y="198" font-family="sans-serif" font-size="13" font-weight="700" fill="#92400e">IRC:82 Treatment: Hot Bitumen Slurry or Rubberized Crack Sealing</text>
      </g>
    </g>

    <!-- Card 4: Rutting -->
    <g transform="translate(60, 525)">
      <rect width="575" height="260" rx="12" fill="#ffffff" stroke="#fde68a" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="575" height="42" rx="12" fill="#fef3c7" />
      <text x="20" y="28" font-family="sans-serif" font-size="16" font-weight="800" fill="#92400e">4. RUTTING &amp; WHEEL-PATH DEFORMATION (D30)</text>

      <g transform="translate(20, 60)">
        <text font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Definition &amp; Cause:</text>
        <text y="24" font-family="sans-serif" font-size="13" fill="#475569">Permanent longitudinal surface depressions along wheel paths</text>
        <text y="44" font-family="sans-serif" font-size="13" fill="#475569">caused by high-temperature bitumen creep under heavy freight.</text>

        <text y="80" font-family="sans-serif" font-size="13" fill="#475569">• Low: Rut depth 6-12 mm | Hydroplaning hazard in rain</text>
        <text y="102" font-family="sans-serif" font-size="13" fill="#b45309" font-weight="700">• High: Rut depth &gt; 25 mm | Extreme vehicle tramlining</text>

        <rect x="0" y="125" width="535" height="45" rx="6" fill="#fffbeb" stroke="#fde68a" stroke-width="1" />
        <text x="15" y="152" font-family="sans-serif" font-size="13" font-weight="700" fill="#92400e">IRC:82 Treatment: Cold Milling &amp; High-Modulus Inlay</text>
      </g>
    </g>

    <!-- Card 5: Ravelling & Stripping -->
    <g transform="translate(670, 525)">
      <rect width="575" height="260" rx="12" fill="#ffffff" stroke="#fed7aa" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="575" height="42" rx="12" fill="#ffedd5" />
      <text x="20" y="28" font-family="sans-serif" font-size="16" font-weight="800" fill="#c2410c">5. RAVELLING &amp; MOISTURE STRIPPING (D43)</text>

      <g transform="translate(20, 60)">
        <text font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Definition &amp; Cause:</text>
        <text y="24" font-family="sans-serif" font-size="13" fill="#475569">Dislodgement of aggregate particles from bitumen binder due</text>
        <text y="44" font-family="sans-serif" font-size="13" fill="#475569">to flood water immersion and asphalt binder aging.</text>

        <text y="80" font-family="sans-serif" font-size="13" fill="#475569">• Low: Loss of fines, surface roughness increases</text>
        <text y="102" font-family="sans-serif" font-size="13" fill="#c2410c" font-weight="700">• High: Coarse aggregate exposed, rough pockmarked surface</text>

        <rect x="0" y="125" width="535" height="45" rx="6" fill="#fff7ed" stroke="#fed7aa" stroke-width="1" />
        <text x="15" y="152" font-family="sans-serif" font-size="13" font-weight="700" fill="#c2410c">IRC:82 Treatment: Preventative Slurry Seal or Micro-surfacing</text>
      </g>
    </g>

    <!-- Card 6: Edge Drop-offs -->
    <g transform="translate(1280, 525)">
      <rect width="575" height="260" rx="12" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="575" height="42" rx="12" fill="#dcfce7" />
      <text x="20" y="28" font-family="sans-serif" font-size="16" font-weight="800" fill="#15803d">6. EDGE DROP-OFFS &amp; SHOULDER BREAKS (D44)</text>

      <g transform="translate(20, 60)">
        <text font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Definition &amp; Cause:</text>
        <text y="24" font-family="sans-serif" font-size="13" fill="#475569">Erosion and breaking of pavement edges along unpaved shoulders</text>
        <text y="44" font-family="sans-serif" font-size="13" fill="#475569">due to heavy runoff torrents along embankment slopes.</text>

        <text y="80" font-family="sans-serif" font-size="13" fill="#475569">• Low: Drop-off depth 25-50 mm | Edge spalling</text>
        <text y="102" font-family="sans-serif" font-size="13" fill="#15803d" font-weight="700">• High: Drop-off &gt; 50 mm | Risk of vehicle rollover</text>

        <rect x="0" y="125" width="535" height="45" rx="6" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
        <text x="15" y="152" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803d">IRC:82 Treatment: Shoulder Regrading &amp; Edge Reconstitution</text>
      </g>
    </g>

    <!-- Bottom Dial: ASTM D6433 Pavement Condition Index (PCI 0-100) -->
    <g transform="translate(60, 810)">
      <rect width="1800" height="220" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="1800" height="44" rx="14" fill="#f1f5f9" />
      <text x="30" y="28" font-family="sans-serif" font-size="16" font-weight="800" fill="#0f172a">ASTM D6433 PAVEMENT CONDITION INDEX (PCI 0 - 100) DECISION SPECTRUM</text>
      <text x="1500" y="28" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">DYNAMIC 100-METER SEGMENT SCORING</text>
      
      <!-- PCI Spectrum Bar -->
      <g transform="translate(40, 70)">
        <!-- 0-25 Failed (Red) -->
        <rect x="0" width="280" height="55" rx="6" fill="#ef4444" />
        <text x="140" y="34" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">0 - 25: FAILED</text>
        <text x="140" y="80" font-family="sans-serif" font-size="12" font-weight="700" fill="#b91c1c" text-anchor="middle">Full Reconstruction Required</text>
        
        <!-- 25-40 Serious (Orange) -->
        <rect x="290" width="280" height="55" rx="6" fill="#f97316" />
        <text x="430" y="34" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">25 - 40: SERIOUS</text>
        <text x="430" y="80" font-family="sans-serif" font-size="12" font-weight="700" fill="#c2410c" text-anchor="middle">Thick Structural Overlay (DBM)</text>

        <!-- 40-55 Poor (Amber) -->
        <rect x="580" width="280" height="55" rx="6" fill="#f59e0b" />
        <text x="720" y="34" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">40 - 55: POOR</text>
        <text x="720" y="80" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309" text-anchor="middle">Deep Patching &amp; Surface Course</text>

        <!-- 55-70 Fair (Yellow) -->
        <rect x="870" width="280" height="55" rx="6" fill="#eab308" />
        <text x="1010" y="34" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">55 - 70: FAIR</text>
        <text x="1010" y="80" font-family="sans-serif" font-size="12" font-weight="700" fill="#854d0e" text-anchor="middle">Preventative Slurry / Micro-surfacing</text>

        <!-- 70-85 Satisfactory (Light Green) -->
        <rect x="1160" width="280" height="55" rx="6" fill="#84cc16" />
        <text x="1300" y="34" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">70 - 85: SATISFACTORY</text>
        <text x="1300" y="80" font-family="sans-serif" font-size="12" font-weight="700" fill="#4d7c0f" text-anchor="middle">Crack Sealing &amp; Routine Sweep</text>

        <!-- 85-100 Good (Emerald) -->
        <rect x="1450" width="270" height="55" rx="6" fill="#10b981" />
        <text x="1585" y="34" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">85 - 100: GOOD</text>
        <text x="1585" y="80" font-family="sans-serif" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">Standard Periodic Monitoring</text>
      </g>
    </g>
  `;
  return wrapSvg(content);
}

// 4. Infographic 4: Closed-Loop PWD Governance
function generateInfographic4() {
  const content = `
    ${getBlueprintHeader(
      "CLOSED-LOOP PWD GOVERNANCE & CONTRACTOR REPAIR AUDIT",
      "End-to-End Operational Workflow from Edge Defect Capture to Automated Verification and Invoice Release",
      "GOVERNANCE & WORKFLOW AUDIT"
    )}

    <!-- 4 Circular Role Stations -->
    <!-- Station 1: Junior Engineer (Surveyor) -->
    <g transform="translate(60, 180)">
      <rect width="410" height="690" rx="14" fill="#ffffff" stroke="#93c5fd" stroke-width="2" filter="url(#shadow)" />
      <rect width="410" height="60" rx="14" fill="#eff6ff" />
      <circle cx="45" cy="30" r="16" fill="#1e40af" />
      <text x="45" y="36" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">1</text>
      <text x="75" y="36" font-family="sans-serif" font-size="17" font-weight="800" fill="#1e40af">JUNIOR ENGINEER (JE)</text>
      <text x="25" y="85" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">ROLE: MOBILE FIELD SURVEYOR</text>

      <g transform="translate(20, 110)">
        <rect width="370" height="155" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="18" y="28" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Action: Windshield Survey</text>
        <text x="18" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Mounts device on PWD patrol vehicle</text>
        <text x="18" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Taps "Start Survey: NH-27 Nagaon"</text>
        <text x="18" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Hands-free driving at 60 km/h</text>
        <text x="18" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Zero distraction, automated logging</text>
        <text x="18" y="145" font-family="sans-serif" font-size="13" font-weight="700" fill="#059669">Output: 100% Offline Edge Storage</text>
      </g>

      <g transform="translate(20, 285)">
        <rect width="370" height="155" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="18" y="28" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Real-Time Data Capture</text>
        <text x="18" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Continuous defect segmentation</text>
        <text x="18" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Sub-meter GPS coordinate tagging</text>
        <text x="18" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Automated camera shock filtering</text>
        <text x="18" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Privacy scrubbing of faces &amp; plates</text>
        <text x="18" y="145" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">Sync: Automatic upload via 4G/Wi-Fi</text>
      </g>

      <g transform="translate(20, 460)">
        <rect width="370" height="180" rx="8" fill="#1e293b" />
        <text x="18" y="32" font-family="sans-serif" font-size="14" font-weight="800" fill="#38bdf8">FIELD METRICS GENERATED</text>
        <text x="18" y="60" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Chainage Km Marks (e.g. Km 12+450)</text>
        <text x="18" y="85" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Pothole Length x Width x Depth</text>
        <text x="18" y="110" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Cracking Surface Area (m²)</text>
        <text x="18" y="135" font-family="sans-serif" font-size="13" fill="#e2e8f0">• GPS Heading &amp; Vehicle Speed</text>
        <text x="18" y="160" font-family="sans-serif" font-size="13" font-weight="700" fill="#4ade80">• Time Elapsed: 45 min per 50 km</text>
      </g>
    </g>

    <!-- Flow Arrow 1 to 2 -->
    <g transform="translate(480, 520)">
      <path d="M 0 0 L 30 0" stroke="#0284c7" stroke-width="4" />
      <polygon points="30,-6 40,0 30,6" fill="#0284c7" />
    </g>

    <!-- Station 2: Assistant Executive Engineer (AEE) -->
    <g transform="translate(530, 180)">
      <rect width="410" height="690" rx="14" fill="#ffffff" stroke="#67e8f9" stroke-width="2" filter="url(#shadow)" />
      <rect width="410" height="60" rx="14" fill="#ecfeff" />
      <circle cx="45" cy="30" r="16" fill="#0891b2" />
      <text x="45" y="36" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">2</text>
      <text x="75" y="36" font-family="sans-serif" font-size="17" font-weight="800" fill="#0891b2">ASST. EXECUTIVE ENGINEER</text>
      <text x="25" y="85" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">ROLE: SUB-DIVISION VALIDATOR</text>

      <g transform="translate(20, 110)">
        <rect width="370" height="155" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="18" y="28" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Action: Spatial Defect Triage</text>
        <text x="18" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Reviews auto-flagged severe defects</text>
        <text x="18" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Inspects 100m segment PCI ratings</text>
        <text x="18" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Verifies high-hazard potholes (&gt;50mm)</text>
        <text x="18" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Confirms pavement distress boundaries</text>
        <text x="18" y="145" font-family="sans-serif" font-size="13" font-weight="700" fill="#059669">Output: Validated Defect Registry</text>
      </g>

      <g transform="translate(20, 285)">
        <rect width="370" height="155" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="18" y="28" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">GIS Heatmap Analysis</text>
        <text x="18" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Visual inspection of sub-division roads</text>
        <text x="18" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Overlay flood zone vulnerability</text>
        <text x="18" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Flags urgent safety patches (&lt;48h)</text>
        <text x="18" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Groups localized defects into stretches</text>
        <text x="18" y="145" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">Forward: Submits to Executive Engineer</text>
      </g>

      <g transform="translate(20, 460)">
        <rect width="370" height="180" rx="8" fill="#1e293b" />
        <text x="18" y="32" font-family="sans-serif" font-size="14" font-weight="800" fill="#38bdf8">SUB-DIVISION OVERSIGHT</text>
        <text x="18" y="60" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Defect False-Positive Scrubbing</text>
        <text x="18" y="85" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Localized Traffic Divert Advisory</text>
        <text x="18" y="110" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Emergency Temporary Cold Patch Order</text>
        <text x="18" y="135" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Review Speed: &lt; 15 min / 50 km stretch</text>
        <text x="18" y="160" font-family="sans-serif" font-size="13" font-weight="700" fill="#4ade80">• 100% Elimination of Paper Work</text>
      </g>
    </g>

    <!-- Flow Arrow 2 to 3 -->
    <g transform="translate(950, 520)">
      <path d="M 0 0 L 30 0" stroke="#059669" stroke-width="4" />
      <polygon points="30,-6 40,0 30,6" fill="#059669" />
    </g>

    <!-- Station 3: Executive Engineer (EE) -->
    <g transform="translate(1000, 180)">
      <rect width="410" height="690" rx="14" fill="#ffffff" stroke="#6ee7b7" stroke-width="2" filter="url(#shadow)" />
      <rect width="410" height="60" rx="14" fill="#ecfdf5" />
      <circle cx="45" cy="30" r="16" fill="#059669" />
      <text x="45" y="36" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">3</text>
      <text x="75" y="36" font-family="sans-serif" font-size="17" font-weight="800" fill="#059669">EXECUTIVE ENGINEER (EE)</text>
      <text x="25" y="85" font-family="sans-serif" font-size="13" font-weight="700" fill="#059669">ROLE: DIVISION HEAD &amp; SANCTION</text>

      <g transform="translate(20, 110)">
        <rect width="370" height="155" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="18" y="28" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Action: IRC:82 Prioritisation</text>
        <text x="18" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Executes multi-criteria ranking engine</text>
        <text x="18" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Optimizes budget across available funds</text>
        <text x="18" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Compares Patch vs Resurface vs Overlay</text>
        <text x="18" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Generates APWD-SoR Bill of Quantities</text>
        <text x="18" y="145" font-family="sans-serif" font-size="13" font-weight="700" fill="#059669">Output: Tender-Ready Work Package</text>
      </g>

      <g transform="translate(20, 285)">
        <rect width="370" height="155" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="18" y="28" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Digital Work Order Issuance</text>
        <text x="18" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Cryptographically signs work orders</text>
        <text x="18" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Dispatches to empaneled contractor app</text>
        <text x="18" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Defines completion SLA (e.g. 7 days)</text>
        <text x="18" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Enforces geo-fenced repair boundaries</text>
        <text x="18" y="145" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">Integration: PWD e-Prastuti Sync</text>
      </g>

      <g transform="translate(20, 460)">
        <rect width="370" height="180" rx="8" fill="#1e293b" />
        <text x="18" y="32" font-family="sans-serif" font-size="14" font-weight="800" fill="#38bdf8">DIVISION IMPACT</text>
        <text x="18" y="60" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Objective Grant Allocation Without Bias</text>
        <text x="18" y="85" font-family="sans-serif" font-size="13" fill="#e2e8f0">• 28% Reduction in Pavement Life-Cycle Cost</text>
        <text x="18" y="110" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Real-Time Contractor Performance Rating</text>
        <text x="18" y="135" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Automated Legislative Assembly Reports</text>
        <text x="18" y="160" font-family="sans-serif" font-size="13" font-weight="700" fill="#4ade80">• Transparent Public Works Auditing</text>
      </g>
    </g>

    <!-- Flow Arrow 3 to 4 -->
    <g transform="translate(1420, 520)">
      <path d="M 0 0 L 30 0" stroke="#f59e0b" stroke-width="4" />
      <polygon points="30,-6 40,0 30,6" fill="#f59e0b" />
    </g>

    <!-- Station 4: Contractor & Quality Control -->
    <g transform="translate(1470, 180)">
      <rect width="390" height="690" rx="14" fill="#ffffff" stroke="#fcd34d" stroke-width="2" filter="url(#shadow)" />
      <rect width="390" height="60" rx="14" fill="#fefce8" />
      <circle cx="45" cy="30" r="16" fill="#d97706" />
      <text x="45" y="36" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">4</text>
      <text x="75" y="36" font-family="sans-serif" font-size="17" font-weight="800" fill="#d97706">CONTRACTOR &amp; QC AUDIT</text>
      <text x="25" y="85" font-family="sans-serif" font-size="13" font-weight="700" fill="#b45309">ROLE: FIELD REPAIR &amp; PROOF</text>

      <g transform="translate(20, 110)">
        <rect width="350" height="155" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="18" y="28" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">Action: Geo-Fenced Repair</text>
        <text x="18" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Mobile app navigates to exact GPS pin</text>
        <text x="18" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Executes pothole patch or resurfacing</text>
        <text x="18" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Adheres to APWD technical specs</text>
        <text x="18" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Taps "Complete Repair" on-site</text>
        <text x="18" y="145" font-family="sans-serif" font-size="13" font-weight="700" fill="#059669">Requirement: On-Site Geo-Fencing</text>
      </g>

      <g transform="translate(20, 285)">
        <rect width="350" height="155" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="18" y="28" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">AI Visual Verification Loop</text>
        <text x="18" y="55" font-family="sans-serif" font-size="13" fill="#475569">• Uploads post-repair photograph</text>
        <text x="18" y="78" font-family="sans-serif" font-size="13" fill="#475569">• Edge model performs feature matching</text>
        <text x="18" y="101" font-family="sans-serif" font-size="13" fill="#475569">• Confirms defect elimination</text>
        <text x="18" y="124" font-family="sans-serif" font-size="13" fill="#475569">• Generates tamper-proof before/after pair</text>
        <text x="18" y="145" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">Authorization: Invoice Release</text>
      </g>

      <g transform="translate(20, 460)">
        <rect width="350" height="180" rx="8" fill="#1e293b" />
        <text x="18" y="32" font-family="sans-serif" font-size="14" font-weight="800" fill="#38bdf8">ANTI-FRAUD BENEFIT</text>
        <text x="18" y="60" font-family="sans-serif" font-size="13" fill="#e2e8f0">• 100% Elimination of Ghost Billing</text>
        <text x="18" y="85" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Cryptographic Timestamp &amp; GPS Tag</text>
        <text x="18" y="110" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Fast-Track Payment for Good Contractors</text>
        <text x="18" y="135" font-family="sans-serif" font-size="13" fill="#e2e8f0">• Automated Audit Dossier for AG Assam</text>
        <text x="18" y="160" font-family="sans-serif" font-size="13" font-weight="700" fill="#fcd34d">• Defect Resolved Status Closed</text>
      </g>
    </g>

    <!-- Bottom Institutional Banner -->
    <g transform="translate(60, 945)">
      <rect width="1800" height="85" rx="10" fill="#0f172a" />
      <text x="40" y="38" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">TRANSPARENT PWD GOVERNANCE CIRCLE:</text>
      <text x="40" y="62" font-family="sans-serif" font-size="14" fill="#94a3b8">Continuous Inspection → Algorithmic Prioritisation → Automated Tender BoQ → AI Before/After Verification → Automated Invoice Clearance</text>
      <rect x="1500" y="24" width="260" height="38" rx="6" fill="#1e3a8a" stroke="#38bdf8" stroke-width="1" />
      <text x="1630" y="48" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">ZERO-LEAKAGE AUDIT</text>
    </g>
  `;
  return wrapSvg(content);
}

// 5. Infographic 5: Prioritisation Matrix
function generateInfographic5() {
  const content = `
    ${getBlueprintHeader(
      "ALGORITHMIC MAINTENANCE PRIORITISATION MATRIX",
      "Multi-Criteria Decision Engine Formulated Under IRC:82-2015 Civil Guidelines and Assam Environmental Factors",
      "DECISION ENGINE FORMULATION"
    )}

    <!-- 4 Converging Decision Pillars -->
    <!-- Pillar 1 -->
    <g transform="translate(60, 180)">
      <rect width="425" height="420" rx="12" fill="#ffffff" stroke="#93c5fd" stroke-width="2" filter="url(#shadow)" />
      <rect width="425" height="50" rx="12" fill="#eff6ff" />
      <text x="25" y="32" font-family="sans-serif" font-size="16" font-weight="800" fill="#1e40af">PILLAR 1: PAVEMENT DISTRESS (35%)</text>

      <g transform="translate(20, 70)">
        <text font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">ASTM D6433 &amp; IRC:82 Score:</text>
        <text y="25" font-family="sans-serif" font-size="13" fill="#475569">• Pothole Density Index (PDI / 100m)</text>
        <text y="48" font-family="sans-serif" font-size="13" fill="#475569">• Structural Fatigue Alligator Area (m²)</text>
        <text y="71" font-family="sans-serif" font-size="13" fill="#475569">• Longitudinal/Transverse Crack Width</text>
        <text y="94" font-family="sans-serif" font-size="13" fill="#475569">• Wheel-Path Rut Depth (mm)</text>
        <text y="117" font-family="sans-serif" font-size="13" fill="#475569">• Surface Ravelling &amp; Stripping Ratio</text>
        <text y="140" font-family="sans-serif" font-size="13" fill="#475569">• Edge Break Embankment Erosion</text>
        
        <rect x="0" y="170" width="385" height="150" rx="8" fill="#1e293b" />
        <text x="18" y="30" font-family="sans-serif" font-size="13" font-weight="800" fill="#38bdf8">MATHEMATICAL WEIGHTING</text>
        <text x="18" y="58" font-family="monospace" font-size="14" fill="#a5f3fc">S_distress = ∑ (w_i × Area_i × Sev_i)</text>
        <text x="18" y="86" font-family="sans-serif" font-size="12" fill="#94a3b8">Where Sev = 1.0 (Low), 2.5 (Med), 5.0 (High)</text>
        <text x="18" y="110" font-family="sans-serif" font-size="12" fill="#94a3b8">Potholes weighted 3x higher than ravelling</text>
        <text x="18" y="135" font-family="sans-serif" font-size="13" font-weight="700" fill="#4ade80">→ Weight in Final Score: 0.35</text>
      </g>
    </g>

    <!-- Pillar 2 -->
    <g transform="translate(520, 180)">
      <rect width="425" height="420" rx="12" fill="#ffffff" stroke="#67e8f9" stroke-width="2" filter="url(#shadow)" />
      <rect width="425" height="50" rx="12" fill="#ecfeff" />
      <text x="25" y="32" font-family="sans-serif" font-size="16" font-weight="800" fill="#0891b2">PILLAR 2: TRAFFIC VOLUME (25%)</text>

      <g transform="translate(20, 70)">
        <text font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Road Hierarchy &amp; Intensity:</text>
        <text y="25" font-family="sans-serif" font-size="13" fill="#475569">• National Highway (NH) Factor: 1.5x</text>
        <text y="48" font-family="sans-serif" font-size="13" fill="#475569">• State Highway (SH) Factor: 1.25x</text>
        <text y="71" font-family="sans-serif" font-size="13" fill="#475569">• Major District Road (MDR): 1.0x</text>
        <text y="94" font-family="sans-serif" font-size="13" fill="#475569">• Commercial Vehicles per Day (CVPD)</text>
        <text y="117" font-family="sans-serif" font-size="13" fill="#475569">• Passenger Car Units (PCU Density)</text>
        <text y="140" font-family="sans-serif" font-size="13" fill="#475569">• Heavy Axle Freight Corridors (Tea/Coal)</text>

        <rect x="0" y="170" width="385" height="150" rx="8" fill="#1e293b" />
        <text x="18" y="30" font-family="sans-serif" font-size="13" font-weight="800" fill="#38bdf8">MATHEMATICAL WEIGHTING</text>
        <text x="18" y="58" font-family="monospace" font-size="14" fill="#a5f3fc">S_traffic = log10(CVPD) × H_road</text>
        <text x="18" y="86" font-family="sans-serif" font-size="12" fill="#94a3b8">Prevents spending budget on empty roads</text>
        <text x="18" y="110" font-family="sans-serif" font-size="12" fill="#94a3b8">Protects vital economic supply lines</text>
        <text x="18" y="135" font-family="sans-serif" font-size="13" font-weight="700" fill="#4ade80">→ Weight in Final Score: 0.25</text>
      </g>
    </g>

    <!-- Pillar 3 -->
    <g transform="translate(980, 180)">
      <rect width="425" height="420" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="2" filter="url(#shadow)" />
      <rect width="425" height="50" rx="12" fill="#ecfdf5" />
      <text x="25" y="32" font-family="sans-serif" font-size="16" font-weight="800" fill="#047857">PILLAR 3: FLOOD VULNERABILITY (20%)</text>

      <g transform="translate(20, 70)">
        <text font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Assam Climate &amp; Terrain Factors:</text>
        <text y="25" font-family="sans-serif" font-size="13" fill="#475569">• Brahmaputra Basin Inundation Risk</text>
        <text y="48" font-family="sans-serif" font-size="13" fill="#475569">• Embankment Height &amp; Slope Stability</text>
        <text y="71" font-family="sans-serif" font-size="13" fill="#475569">• Historical Submersion Frequency</text>
        <text y="94" font-family="sans-serif" font-size="13" fill="#475569">• Longitudinal Roadside Drainage Slope</text>
        <text y="117" font-family="sans-serif" font-size="13" fill="#475569">• Sub-Base Soil Plasticity &amp; CBR Index</text>
        <text y="140" font-family="sans-serif" font-size="13" fill="#475569">• Proximity to River Channel Erosion</text>

        <rect x="0" y="170" width="385" height="150" rx="8" fill="#1e293b" />
        <text x="18" y="30" font-family="sans-serif" font-size="13" font-weight="800" fill="#38bdf8">MATHEMATICAL WEIGHTING</text>
        <text x="18" y="58" font-family="monospace" font-size="14" fill="#a5f3fc">S_flood = FloodZone × (1 / DrainSlope)</text>
        <text x="18" y="86" font-family="sans-serif" font-size="12" fill="#94a3b8">Prioritizes repairs BEFORE monsoons strike</text>
        <text x="18" y="110" font-family="sans-serif" font-size="12" fill="#94a3b8">Prevents road washaways during high flood</text>
        <text x="18" y="135" font-family="sans-serif" font-size="13" font-weight="700" fill="#4ade80">→ Weight in Final Score: 0.20</text>
      </g>
    </g>

    <!-- Pillar 4 -->
    <g transform="translate(1435, 180)">
      <rect width="425" height="420" rx="12" fill="#ffffff" stroke="#fcd34d" stroke-width="2" filter="url(#shadow)" />
      <rect width="425" height="50" rx="12" fill="#fefce8" />
      <text x="25" y="32" font-family="sans-serif" font-size="16" font-weight="800" fill="#b45309">PILLAR 4: ECONOMIC LIFE-CYCLE (20%)</text>

      <g transform="translate(20, 70)">
        <text font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">Assam PWD SoR &amp; TCO:</text>
        <text y="25" font-family="sans-serif" font-size="13" fill="#475569">• Preventative vs Reconstruction Ratio</text>
        <text y="48" font-family="sans-serif" font-size="13" fill="#475569">• ₹1 in Slurry Seal saves ₹6 in Overlay</text>
        <text y="71" font-family="sans-serif" font-size="13" fill="#475569">• Proximity to Hospitals &amp; Freight Hubs</text>
        <text y="94" font-family="sans-serif" font-size="13" fill="#475569">• Contractor Gang Mobilization Cost</text>
        <text y="117" font-family="sans-serif" font-size="13" fill="#475569">• Clustered Work Package Savings</text>
        <text y="140" font-family="sans-serif" font-size="13" fill="#475569">• Available Division Budget Envelope</text>

        <rect x="0" y="170" width="385" height="150" rx="8" fill="#1e293b" />
        <text x="18" y="30" font-family="sans-serif" font-size="13" font-weight="800" fill="#38bdf8">MATHEMATICAL WEIGHTING</text>
        <text x="18" y="58" font-family="monospace" font-size="14" fill="#a5f3fc">S_econ = SavingsRatio × CritFacility</text>
        <text x="18" y="86" font-family="sans-serif" font-size="12" fill="#94a3b8">Optimizes capital efficiency across FY</text>
        <text x="18" y="110" font-family="sans-serif" font-size="12" fill="#94a3b8">Prevents delayed maintenance deterioration</text>
        <text x="18" y="135" font-family="sans-serif" font-size="13" font-weight="700" fill="#4ade80">→ Weight in Final Score: 0.20</text>
      </g>
    </g>

    <!-- Master Unified Formula & Action Pathways -->
    <g transform="translate(60, 630)">
      <rect width="1800" height="295" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="1800" height="48" rx="14" fill="#0f172a" />
      <text x="30" y="31" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">MASTER MARGDRISTI PRIORITISATION FORMULA: COMPOSITE REPAIR INDEX (CRI)</text>
      <text x="1350" y="31" font-family="monospace" font-size="15" font-weight="700" fill="#ffffff">CRI = 0.35(S_dist) + 0.25(S_traf) + 0.20(S_flood) + 0.20(S_econ)</text>

      <!-- 3 Clear Action Streams -->
      <g transform="translate(30, 75)">
        <!-- Action 1: Urgent Safety -->
        <rect width="560" height="195" rx="10" fill="#fff1f2" stroke="#fca5a5" stroke-width="1.5" />
        <rect width="560" height="38" rx="10" fill="#fee2e2" />
        <text x="20" y="25" font-family="sans-serif" font-size="15" font-weight="800" fill="#991b1b">STREAM A: URGENT SAFETY ACTION (SLA: 48 HOURS)</text>
        <text x="20" y="65" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">Trigger: CRI &gt; 80 OR Any High-Severity Pothole &gt; 50 mm</text>
        <text x="20" y="90" font-family="sans-serif" font-size="13" fill="#475569">• High hazard to two-wheelers, buses, and commercial freight</text>
        <text x="20" y="112" font-family="sans-serif" font-size="13" fill="#475569">• Generates immediate emergency work order to nearest PWD gang</text>
        <text x="20" y="134" font-family="sans-serif" font-size="13" fill="#475569">• Intervention: Cold-mix/Rapid Bitumen mastic asphalt patching</text>
        <text x="20" y="165" font-family="sans-serif" font-size="13" font-weight="800" fill="#b91c1c">Goal: Zero Accident Casualties &amp; Emergency Traffic Restoration</text>
      </g>

      <g transform="translate(620, 75)">
        <!-- Action 2: Preventative Preservation -->
        <rect width="560" height="195" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect width="560" height="38" rx="10" fill="#dcfce7" />
        <text x="20" y="25" font-family="sans-serif" font-size="15" font-weight="800" fill="#15803d">STREAM B: PREVENTATIVE PRESERVATION (SLA: 30 DAYS)</text>
        <text x="20" y="65" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">Trigger: CRI 50 - 80 | PCI 55 - 75 (Fair/Satisfactory)</text>
        <text x="20" y="90" font-family="sans-serif" font-size="13" fill="#475569">• Pavement structurally intact but moisture stripping starting</text>
        <text x="20" y="112" font-family="sans-serif" font-size="13" fill="#475569">• Seals hairline cracks before monsoon rains penetrate base</text>
        <text x="20" y="134" font-family="sans-serif" font-size="13" fill="#475569">• Intervention: Slurry Seal, Micro-surfacing, Fog Spray Seal</text>
        <text x="20" y="165" font-family="sans-serif" font-size="13" font-weight="800" fill="#15803d">Goal: Extends Pavement Life by 4-6 Years at 1/5th Reconstruction Cost</text>
      </g>

      <g transform="translate(1210, 75)">
        <!-- Action 3: Structural Overlay -->
        <rect width="560" height="195" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" />
        <rect width="560" height="38" rx="10" fill="#dbeafe" />
        <text x="20" y="25" font-family="sans-serif" font-size="15" font-weight="800" fill="#1e40af">STREAM C: STRUCTURAL OVERLAY / TENDER (ANNUAL PLAN)</text>
        <text x="20" y="65" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">Trigger: Continuous Segment PCI &lt; 40 Across &gt; 500 Meters</text>
        <text x="20" y="90" font-family="sans-serif" font-size="13" fill="#475569">• Sub-base failure, extensive alligator fatigue, or deep rutting</text>
        <text x="20" y="112" font-family="sans-serif" font-size="13" fill="#475569">• Automated aggregation into division e-Procurement packages</text>
        <text x="20" y="134" font-family="sans-serif" font-size="13" fill="#475569">• Intervention: Milling + 50mm Dense Bituminous Macadam (DBM)</text>
        <text x="20" y="165" font-family="sans-serif" font-size="13" font-weight="800" fill="#1e40af">Goal: Long-Term Heavy Freight Capacity &amp; Flood Immersion Resilience</text>
      </g>
    </g>

    <!-- Bottom Institutional Banner -->
    <g transform="translate(60, 945)">
      <rect width="1800" height="85" rx="10" fill="#0f172a" />
      <text x="40" y="38" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">CIVIL ENGINEERING GOVERNANCE STANDARDS:</text>
      <text x="40" y="62" font-family="sans-serif" font-size="14" fill="#94a3b8">IRC:82-2015 (Code of Practice for Maintenance of Bituminous Surfaces) • IRC:SP:16 (Surface Unevenness) • APWD Schedule of Rates 2024</text>
      <rect x="1510" y="24" width="250" height="38" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1" />
      <text x="1635" y="48" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">DATA-DRIVEN CAPEX</text>
    </g>
  `;
  return wrapSvg(content);
}

// 6. Infographic 6: Pilot Roadmap & Milestones
function generateInfographic6() {
  const content = `
    ${getBlueprintHeader(
      "9-MONTH ENGINEERING DELIVERY ROADMAP & ASSAM FIELD PILOT",
      "Staged Implementation Lifecycle From Requirements Discovery to 50 km Highway Corridor Validation",
      "STAGE-GATE MILESTONE PLAN"
    )}

    <!-- 5 Phase Milestone Columns -->
    <!-- Phase 1 -->
    <g transform="translate(60, 180)">
      <rect width="335" height="530" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="335" height="46" rx="12" fill="#f1f5f9" />
      <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">PHASE 1: MONTH 1 - 2</text>
      <rect x="235" y="12" width="85" height="24" rx="4" fill="#e2e8f0" />
      <text x="277" y="28" font-family="sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">M1 GATE</text>

      <g transform="translate(18, 65)">
        <text font-family="sans-serif" font-size="16" font-weight="800" fill="#1e3a8a">Discovery &amp; Grounding</text>
        <text y="30" font-family="sans-serif" font-size="13" fill="#475569">• PWD Assam Stakeholder Sign-off</text>
        <text y="54" font-family="sans-serif" font-size="13" fill="#475569">• IRC:82 Taxonomy Harmonization</text>
        <text y="78" font-family="sans-serif" font-size="13" fill="#475569">• Hardware Mounting Specs Finalized</text>
        <text y="102" font-family="sans-serif" font-size="13" fill="#475569">• North-East Dataset Protocol Formed</text>
        <text y="126" font-family="sans-serif" font-size="13" fill="#475569">• System Requirements Spec (SRS)</text>

        <rect x="0" y="160" width="299" height="150" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="14" y="28" font-family="sans-serif" font-size="13" font-weight="800" fill="#0f172a">KEY GATE DELIVERABLE:</text>
        <text x="14" y="55" font-family="sans-serif" font-size="12" fill="#334155">• Approved Operational SRS Document</text>
        <text x="14" y="80" font-family="sans-serif" font-size="12" fill="#334155">• 4x Prototype Edge Dashcam Kits</text>
        <text x="14" y="105" font-family="sans-serif" font-size="12" fill="#334155">• PWD Division Consultation Minutes</text>
        <text x="14" y="130" font-family="sans-serif" font-size="12" font-weight="700" fill="#059669">Sign-Off: Chief Engineer (Roads)</text>

        <rect x="0" y="330" width="299" height="110" rx="8" fill="#1e293b" />
        <text x="14" y="28" font-family="sans-serif" font-size="12" font-weight="800" fill="#38bdf8">RESOURCE COMMITMENT</text>
        <text x="14" y="52" font-family="sans-serif" font-size="12" fill="#e2e8f0">• AI Lead (100%)</text>
        <text x="14" y="74" font-family="sans-serif" font-size="12" fill="#e2e8f0">• Geospatial Architect (100%)</text>
        <text x="14" y="96" font-family="sans-serif" font-size="12" fill="#e2e8f0">• PWD Civil Consultant (50%)</text>
      </g>
    </g>

    <!-- Phase 2 -->
    <g transform="translate(425, 180)">
      <rect width="335" height="530" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="335" height="46" rx="12" fill="#f1f5f9" />
      <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">PHASE 2: MONTH 2 - 4</text>
      <rect x="235" y="12" width="85" height="24" rx="4" fill="#e2e8f0" />
      <text x="277" y="28" font-family="sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">M2 GATE</text>

      <g transform="translate(18, 65)">
        <text font-family="sans-serif" font-size="16" font-weight="800" fill="#1e3a8a">Edge-AI Vision Model</text>
        <text y="30" font-family="sans-serif" font-size="13" fill="#475569">• 15,000+ Image Dataset Curated</text>
        <text y="54" font-family="sans-serif" font-size="13" fill="#475569">• Wet Asphalt &amp; Shadow Augmentation</text>
        <text y="78" font-family="sans-serif" font-size="13" fill="#475569">• YOLOv11n Training on A100 GPUs</text>
        <text y="102" font-family="sans-serif" font-size="13" fill="#475569">• INT8 Quantization &amp; TensorRT</text>
        <text y="126" font-family="sans-serif" font-size="13" fill="#475569">• Offline Edge Caching Engine</text>

        <rect x="0" y="160" width="299" height="150" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="14" y="28" font-family="sans-serif" font-size="13" font-weight="800" fill="#0f172a">KEY GATE DELIVERABLE:</text>
        <text x="14" y="55" font-family="sans-serif" font-size="12" fill="#334155">• Model Weights (14.2 MB Footprint)</text>
        <text x="14" y="80" font-family="sans-serif" font-size="12" fill="#334155">• mAP@0.5 >= 88% Benchmark Report</text>
        <text x="14" y="105" font-family="sans-serif" font-size="12" fill="#334155">• Edge Inference &lt; 28 ms (&gt;35 FPS)</text>
        <text x="14" y="130" font-family="sans-serif" font-size="12" font-weight="700" fill="#059669">Sign-Off: AI Evaluation Board</text>

        <rect x="0" y="330" width="299" height="110" rx="8" fill="#1e293b" />
        <text x="14" y="28" font-family="sans-serif" font-size="12" font-weight="800" fill="#38bdf8">RESOURCE COMMITMENT</text>
        <text x="14" y="52" font-family="sans-serif" font-size="12" fill="#e2e8f0">• AI Lead (100%)</text>
        <text x="14" y="74" font-family="sans-serif" font-size="12" fill="#e2e8f0">• Data Annotation Team (2 FTE)</text>
        <text x="14" y="96" font-family="sans-serif" font-size="12" fill="#e2e8f0">• Mobile App Engineer (100%)</text>
      </g>
    </g>

    <!-- Phase 3 -->
    <g transform="translate(790, 180)">
      <rect width="335" height="530" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="335" height="46" rx="12" fill="#f1f5f9" />
      <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">PHASE 3: MONTH 4 - 6</text>
      <rect x="235" y="12" width="85" height="24" rx="4" fill="#e2e8f0" />
      <text x="277" y="28" font-family="sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">M3 GATE</text>

      <g transform="translate(18, 65)">
        <text font-family="sans-serif" font-size="16" font-weight="800" fill="#1e3a8a">Spatial GIS &amp; IRC Engine</text>
        <text y="30" font-family="sans-serif" font-size="13" fill="#475569">• PostGIS Centerline Snapping Logic</text>
        <text y="54" font-family="sans-serif" font-size="13" fill="#475569">• 100m Dynamic Segment Graph</text>
        <text y="78" font-family="sans-serif" font-size="13" fill="#475569">• ASTM D6433 PCI Calculation Module</text>
        <text y="102" font-family="sans-serif" font-size="13" fill="#475569">• IRC:82 Multi-Criteria Ranking Core</text>
        <text y="126" font-family="sans-serif" font-size="13" fill="#475569">• APWD Schedule of Rates BoQ Engine</text>

        <rect x="0" y="160" width="299" height="150" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="14" y="28" font-family="sans-serif" font-size="13" font-weight="800" fill="#0f172a">KEY GATE DELIVERABLE:</text>
        <text x="14" y="55" font-family="sans-serif" font-size="12" fill="#334155">• Deployed Spatial Database &amp; APIs</text>
        <text x="14" y="80" font-family="sans-serif" font-size="12" fill="#334155">• Algorithmic Decision Engine v1.0</text>
        <text x="14" y="105" font-family="sans-serif" font-size="12" fill="#334155">• PCI Calculation Accuracy &gt; 92%</text>
        <text x="14" y="130" font-family="sans-serif" font-size="12" font-weight="700" fill="#059669">Sign-Off: Pavement Consultant</text>

        <rect x="0" y="330" width="299" height="110" rx="8" fill="#1e293b" />
        <text x="14" y="28" font-family="sans-serif" font-size="12" font-weight="800" fill="#38bdf8">RESOURCE COMMITMENT</text>
        <text x="14" y="52" font-family="sans-serif" font-size="12" fill="#e2e8f0">• Geospatial Architect (100%)</text>
        <text x="14" y="74" font-family="sans-serif" font-size="12" fill="#e2e8f0">• Full-Stack Developer (100%)</text>
        <text x="14" y="96" font-family="sans-serif" font-size="12" fill="#e2e8f0">• PWD Civil Consultant (50%)</text>
      </g>
    </g>

    <!-- Phase 4 -->
    <g transform="translate(1155, 180)">
      <rect width="335" height="530" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="335" height="46" rx="12" fill="#f1f5f9" />
      <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">PHASE 4: MONTH 6 - 7</text>
      <rect x="235" y="12" width="85" height="24" rx="4" fill="#e2e8f0" />
      <text x="277" y="28" font-family="sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">M4 GATE</text>

      <g transform="translate(18, 65)">
        <text font-family="sans-serif" font-size="16" font-weight="800" fill="#1e3a8a">Full-Stack MVP Hardening</text>
        <text y="30" font-family="sans-serif" font-size="13" fill="#475569">• Android Dashcam Survey App Finalized</text>
        <text y="54" font-family="sans-serif" font-size="13" fill="#475569">• Web GIS MapLibre Executive Portal</text>
        <text y="78" font-family="sans-serif" font-size="13" fill="#475569">• Automated Work Order Dispatch PDF</text>
        <text y="102" font-family="sans-serif" font-size="13" fill="#475569">• Contractor Pre/Post Photo Verification</text>
        <text y="126" font-family="sans-serif" font-size="13" fill="#475569">• End-to-End Stress &amp; Offline Tests</text>

        <rect x="0" y="160" width="299" height="150" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="14" y="28" font-family="sans-serif" font-size="13" font-weight="800" fill="#0f172a">KEY GATE DELIVERABLE:</text>
        <text x="14" y="55" font-family="sans-serif" font-size="12" fill="#334155">• Integrated Working Web &amp; Mobile MVP</text>
        <text x="14" y="80" font-family="sans-serif" font-size="12" fill="#334155">• Pre/Post Repair Verification Engine</text>
        <text x="14" y="105" font-family="sans-serif" font-size="12" fill="#334155">• Complete API &amp; Security Audit</text>
        <text x="14" y="130" font-family="sans-serif" font-size="12" font-weight="700" fill="#059669">Sign-Off: NESFIC Mid-Term Review</text>

        <rect x="0" y="330" width="299" height="110" rx="8" fill="#1e293b" />
        <text x="14" y="28" font-family="sans-serif" font-size="12" font-weight="800" fill="#38bdf8">RESOURCE COMMITMENT</text>
        <text x="14" y="52" font-family="sans-serif" font-size="12" fill="#e2e8f0">• Full-Stack Developer (100%)</text>
        <text x="14" y="74" font-family="sans-serif" font-size="12" fill="#e2e8f0">• Mobile App Engineer (100%)</text>
        <text x="14" y="96" font-family="sans-serif" font-size="12" fill="#e2e8f0">• QA &amp; Test Engineer (100%)</text>
      </g>
    </g>

    <!-- Phase 5 -->
    <g transform="translate(1520, 180)">
      <rect width="340" height="530" rx="12" fill="#ffffff" stroke="#10b981" stroke-width="2" filter="url(#shadow)" />
      <rect width="340" height="46" rx="12" fill="#d1fae5" />
      <text x="20" y="30" font-family="sans-serif" font-size="15" font-weight="800" fill="#065f46">PHASE 5: MONTH 7 - 9</text>
      <rect x="235" y="12" width="90" height="24" rx="4" fill="#a7f3d0" />
      <text x="280" y="28" font-family="sans-serif" font-size="11" font-weight="800" fill="#064e3b" text-anchor="middle">M5 PILOT</text>

      <g transform="translate(18, 65)">
        <text font-family="sans-serif" font-size="16" font-weight="800" fill="#047857">50 km Highway Pilot</text>
        <text y="30" font-family="sans-serif" font-size="13" fill="#475569">• NH-27 Guwahati-Nagaon Corridor</text>
        <text y="54" font-family="sans-serif" font-size="13" fill="#475569">• Side-by-Side Manual vs AI Dual Survey</text>
        <text y="78" font-family="sans-serif" font-size="13" fill="#475569">• Monsoon Rain &amp; Sunlight Calibration</text>
        <text y="102" font-family="sans-serif" font-size="13" fill="#475569">• PWD Field Staff Training Workshops</text>
        <text y="126" font-family="sans-serif" font-size="13" fill="#475569">• Final Acceptance Certification</text>

        <rect x="0" y="160" width="304" height="150" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
        <text x="14" y="28" font-family="sans-serif" font-size="13" font-weight="800" fill="#065f46">FINAL COMMISSIONING:</text>
        <text x="14" y="55" font-family="sans-serif" font-size="12" fill="#1e293b">• 50 km Pilot Audit Report</text>
        <text x="14" y="80" font-family="sans-serif" font-size="12" fill="#1e293b">• PWD Acceptance Certificate</text>
        <text x="14" y="105" font-family="sans-serif" font-size="12" fill="#1e293b">• State-Wide Scaling Blueprint</text>
        <text x="14" y="130" font-family="sans-serif" font-size="12" font-weight="800" fill="#059669">Status: Commercial Procurement Ready</text>

        <rect x="0" y="330" width="304" height="110" rx="8" fill="#1e293b" />
        <text x="14" y="28" font-family="sans-serif" font-size="12" font-weight="800" fill="#38bdf8">RESOURCE COMMITMENT</text>
        <text x="14" y="52" font-family="sans-serif" font-size="12" fill="#e2e8f0">• Field Operations Lead (100%)</text>
        <text x="14" y="74" font-family="sans-serif" font-size="12" fill="#e2e8f0">• AI Model Lead (50%)</text>
        <text x="14" y="96" font-family="sans-serif" font-size="12" fill="#e2e8f0">• PWD Division Liaison (100%)</text>
      </g>
    </g>

    <!-- Bottom Pilot Corridor Showcase -->
    <g transform="translate(60, 730)">
      <rect width="1800" height="190" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow)" />
      <rect width="1800" height="40" rx="14" fill="#f8fafc" />
      <text x="25" y="26" font-family="sans-serif" font-size="15" font-weight="800" fill="#0f172a">DESIGNATED 50 KM FIELD PILOT CORRIDOR: NH-27 (GUWAHATI - JAGIROAD - NAGAON WORKS DIVISION)</text>
      <text x="1480" y="26" font-family="sans-serif" font-size="12" font-weight="700" fill="#0284c7">HIGHWAY TESTBED CALIBRATION</text>

      <g transform="translate(30, 60)">
        <rect width="550" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e3a8a">Section A: Guwahati Urban-Periurban (Km 0 - 15)</text>
        <text x="20" y="55" font-family="sans-serif" font-size="12" fill="#475569">• High-density traffic, bus lanes, bridge expansion joints</text>
        <text x="20" y="75" font-family="sans-serif" font-size="12" fill="#475569">• Tests multi-lane defect localization &amp; shadow filtering</text>
        <text x="20" y="95" font-family="sans-serif" font-size="12" font-weight="700" fill="#059669">• Speed: 30-50 km/h | 100% Pedestrian Face Privacy Anonymization</text>
      </g>

      <g transform="translate(615, 60)">
        <rect width="550" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e3a8a">Section B: Jagiroad Floodplain Embankment (Km 15 - 35)</text>
        <text x="20" y="55" font-family="sans-serif" font-size="12" fill="#475569">• Annual water immersion zone, high water table, heavy freight</text>
        <text x="20" y="75" font-family="sans-serif" font-size="12" fill="#475569">• Calibrates moisture stripping, ravelling &amp; edge drop-off detection</text>
        <text x="20" y="95" font-family="sans-serif" font-size="12" font-weight="700" fill="#d97706">• Validates flood vulnerability weighting in IRC:82 prioritisation</text>
      </g>

      <g transform="translate(1200, 60)">
        <rect width="570" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e3a8a">Section C: Nagaon Agricultural &amp; Rural Bypass (Km 35 - 50)</text>
        <text x="20" y="55" font-family="sans-serif" font-size="12" fill="#475569">• Clay mud deposits, variable asphalt ages, rural road junctions</text>
        <text x="20" y="75" font-family="sans-serif" font-size="12" fill="#475569">• Benchmarks against PWD Junior Engineer manual survey teams</text>
        <text x="20" y="95" font-family="sans-serif" font-size="12" font-weight="700" fill="#0284c7">• Validates automated BoQ generation against APWD Schedule of Rates</text>
      </g>
    </g>

    <!-- Bottom Institutional Banner -->
    <g transform="translate(60, 945)">
      <rect width="1800" height="85" rx="10" fill="#0f172a" />
      <text x="40" y="38" font-family="sans-serif" font-size="16" font-weight="800" fill="#38bdf8">NESFIC 2026 OUTCOME GUARANTEE:</text>
      <text x="40" y="62" font-family="sans-serif" font-size="14" fill="#94a3b8">Ready for PWD Commissioning by Month 9 • Turnkey Deployment with Zero Specialized Vehicles Required • Government of Assam First Customer Adoption</text>
      <rect x="1500" y="24" width="260" height="38" rx="6" fill="#047857" stroke="#34d399" stroke-width="1" />
      <text x="1630" y="48" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">PILOT VALIDATION READY</text>
    </g>
  `;
  return wrapSvg(content);
}

function wrapSvg(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
${content}
</svg>`;
}

// Generate all 6 SVGs
const infographics = [
  { filename: 'infographic_1_operational_paradigm_shift.svg', fn: generateInfographic1 },
  { filename: 'infographic_2_system_architecture.svg', fn: generateInfographic2 },
  { filename: 'infographic_3_pavement_distress_taxonomy_pci.svg', fn: generateInfographic3 },
  { filename: 'infographic_4_closed_loop_governance_workflow.svg', fn: generateInfographic4 },
  { filename: 'infographic_5_irc82_prioritisation_matrix.svg', fn: generateInfographic5 },
  { filename: 'infographic_6_pilot_roadmap_milestones.svg', fn: generateInfographic6 },
];

console.log("Generating 6 High-Impact 16:9 Widescreen Technological Framework Infographics...");
infographics.forEach((item, index) => {
  const filePath = path.join(OUTPUT_DIR, item.filename);
  fs.writeFileSync(filePath, item.fn(), 'utf8');
  console.log(`[${index + 1}/6] Generated: ${filePath}`);
});
console.log("All infographics successfully generated in public/assets!");
