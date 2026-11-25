# MargDristi AI (मार्गदृष्टि)
### Edge-Vision Road Surface Defect Detection & IRC:82 Maintenance Prioritisation System
**North East Seva First Innovation Challenge (NESFIC) 2026**  
**Track:** Government Track — Public Works Department (PWD), Government of Assam  
**Challenge ID:** NESFIC-D-05 | Deep-Tech MVP Tier (₹40 Lakhs)

🌐 **Live Demo:** [https://margdrishti.coolmindslab.com](https://margdrishti.coolmindslab.com)

---

## 🌟 Overview
**MargDristi AI** is an automated, edge-to-cloud highway asset surveillance and decision-support system engineered specifically for the Public Works Department (PWD), Government of Assam. It transforms road maintenance from an irregular, subjective, reactive cycle into an automated, continuous, AI-driven predictive asset management pipeline.

Operating on standard dashcams or smartphones mounted in PWD patrol vehicles, MargDristi performs **real-time pavement distress segmentation at prevailing traffic speeds (60 km/h)**, calculates dynamic 100-meter segment **Pavement Condition Index (PCI 0–100)** under ASTM D6433, and applies a multi-criteria **IRC:82-2015 maintenance prioritisation engine** integrated with the Assam PWD Schedule of Rates (APWD-SoR).

---

## 🚀 Key Modules
1. **Edge-AI Video Inspection Unit:** Lightweight YOLOv11n-RoadDefect (INT8 TensorRT) detecting potholes, alligator cracking, longitudinal/transverse cracks, rutting, ravelling, and edge drop-offs with 100% offline edge caching.
2. **Geospatial GIS Distress Heatmap:** PostGIS spatial database snapping defect centroids to road centerlines and dynamic 100m chainage segments.
3. **IRC:82 Maintenance Prioritisation Engine:** Algorithmic ranking synthesizing distress severity, traffic density (CVPD), flood vulnerability, and life-cycle economic savings into a Composite Repair Index (CRI).
4. **PWD Closed-Loop Work Order & Verification Portal:** Tender-ready Bill of Quantities (BoQ) generation with cryptographic AI Before-and-After photo verification to prevent ghost billing.

---

## 📊 16:9 Widescreen Technological Framework Infographics
The repository includes 6 high-impact architectural SVG infographics (`public/assets/`):
- `infographic_1_operational_paradigm_shift.svg`: Legacy Manual Inspection vs MargDristi AI Diagnostics.
- `infographic_2_system_architecture.svg`: Four-Tier Distributed Edge-to-Cloud System Topology.
- `infographic_3_pavement_distress_taxonomy_pci.svg`: 6 Distress Classes & ASTM D6433 Condition Dial.
- `infographic_4_closed_loop_governance_workflow.svg`: Surveyor → AEE → EE → Contractor Verification Loop.
- `infographic_5_irc82_prioritisation_matrix.svg`: Multi-Criteria Decision Engine Formulation.
- `infographic_6_pilot_roadmap_milestones.svg`: 9-Month Roadmap & 50 km NH-27 Guwahati-Nagaon Testbed.

---

## 🛠️ Quickstart

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Setup & Run Local Dev Server
```bash
# Clone the repository
git clone https://github.com/RonHatibaruah/MargDristi-AI.git
cd MargDristi-AI

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` (or the port reported by Vite) to interact with the prototype.

---

## 📑 Proposal Document
The complete 12-section NESFIC proposal text (with all sections verified < 500 words) is available in [PROPOSAL_NESFIC_D05.md](./PROPOSAL_NESFIC_D05.md).

---

## ⚖️ Standards Compliance
- **Indian Roads Congress:** IRC:82-2015 (*Maintenance of Bituminous Surfaces*) & IRC:SP:16 (*Surface Unevenness*)
- **ASTM Standards:** ASTM D6433 (*Standard Practice for Roads and Parking Lots Pavement Condition Index Surveys*)
- **Data Protection:** DPDP Act 2023 (Automated on-device scrubbing of human faces and vehicle license plates)
- **Data Sovereignty:** 100% Indian Cloud Residency (MeitY-empanelled / NIC hosting)
