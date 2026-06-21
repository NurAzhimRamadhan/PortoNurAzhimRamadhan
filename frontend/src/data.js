// ============================================================
//  PORTFOLIO DATA - Nur Azhim Ramadhan
//  v2.2 - Refined Information Architecture
//  Three pillars: Projects, Experiences, Achievements
//  Source of truth.
// ============================================================

import bpcacv from "./assets/images/bpcacv.jpg";
import pkmacv from "./assets/images/pkmacv.jpg";
import sc from "./assets/images/sc.jpg";
import samsung from "./assets/images/samsung.jpg";
import palmora from "./assets/images/palmora.jpg";
import muharram from "./assets/images/muaharram.jpg";
import profile from "./assets/images/profile-maroon.png";
import finconnect from "./assets/images/finconnect.jpg";
import isec from "./assets/images/isec.jpg";
import isecQr from "./assets/images/isec-qr.jpg";
import kopikita from "./assets/images/kopikita.jpg";
import hsu from "./assets/images/hsu.jpg";
import edufair from "./assets/images/edufair.jpg";
import figfig from "./assets/images/figfig.jpg"; // eslint-disable-line no-unused-vars
import aiai from "./assets/images/aiai.jpg";
import wana from "./assets/images/wana.svg";
import sicProject from "./assets/images/sic-project.svg";
import himsikaPr from "./assets/images/himsika-pr.jpg";
import revoist from "./assets/images/revoist.jpg";
import fasilkom from "./assets/images/fasilkom.jpg";
import isgath from "./assets/images/isgath.jpg";

// -------------------- PROFILE --------------------
export const profileData = {
  name: "Nur Azhim Ramadhan",
  shortName: "Nur Azhim R.",
  role: "Information Systems Undergraduate",
  roles: [
    "Information Systems Undergraduate",
    "Data Analytics Enthusiast",
    "AI Explorer",
    "Digital Innovation Builder",
  ],
  tagline: "Turning data, ideas, and innovation into real solutions.",
  email: "nurazhimrr@gmail.com",
  phone: "+62 819 9121 9199",
  whatsapp: "6281991219199",
  location: "Indonesia",
  gpa: "3.98",
  profileImage: profile,
  summary:
    "Information Systems undergraduate combining academic excellence (GPA 3.98), leadership in campus organizations, and hands-on building of data, AI, FinTech, and cybersecurity systems.",
  longBio: [
    "I am an Information Systems undergraduate with a cumulative GPA of 3.98, combining academic excellence with continuous, applied learning in data analytics, artificial intelligence, business intelligence, and cybersecurity.",
    "My work spans flagship builds like WANA, an AI-powered indigenous digital rights infrastructure, PALMORA, a BI dashboard and decision-support system, FinConnect, an all-in-one FinTech platform, iSEC, a user-friendly information security system, and the KopiKita predictive BI dashboard. These sit alongside applied learning from the Samsung Innovation Campus Python track.",
    "I also lead and communicate inside campus. I serve as the Coordinator of the Public Relations Department at HIMSIKA, moderated HIMSIKA Skill Up (HSU) and the EduFair National Seminar, and earned national competition wins in Business Plan and PKM-PM. I am growing into a data and AI professional who can translate complex problems into clear, useful, and responsible solutions.",
  ],
  pillars: [
    {
      key: "academic",
      title: "Academic Excellence",
      description:
        "GPA 3.98, supported by certifications and continuous learning across data, AI, BI, and security.",
    },
    {
      key: "leadership",
      title: "Leadership and Communication",
      description:
        "Coordinator of Public Relations at HIMSIKA, moderator for HSU and EduFair National Seminar, and active in volunteer programs.",
    },
    {
      key: "tech",
      title: "Technology and Innovation",
      description:
        "Flagship builds including WANA, PALMORA, FinConnect, iSEC, the KopiKita BI Dashboard, and the Samsung Innovation Campus track.",
    },
  ],
};

// -------------------- FOCUS AREAS --------------------
export const focusAreas = [
  "Data Analytics",
  "Business Intelligence",
  "Artificial Intelligence",
  "Cybersecurity",
  "Information Systems",
  "Digital Innovation",
];

// -------------------- HERO STATS --------------------
export const heroStats = [
  { label: "Cumulative GPA", value: 3.98, suffix: "", isDecimal: true },
  { label: "Flagship Projects", value: 6, suffix: "+" },
  { label: "Certifications", value: 6, suffix: "+" },
  { label: "National Awards", value: 2, suffix: "" },
];

// ============================================================
//  PROJECTS - actual builds, systems, prototypes, dashboards
// ============================================================
export const projects = [
  // ---------- 1. WANA (FLAGSHIP) ----------
  {
    id: "p-wana",
    slug: "wana",
    title: "WANA",
    subtitle: "Wilayah Adat Nusantara Accountability",
    category: "AI, Information Systems, Digital Governance",
    tags: [
      "Artificial Intelligence",
      "Information Systems",
      "Digital Governance",
      "Social Impact Technology",
    ],
    image: wana,
    role: "Project Lead, System Designer, AI Workflow Architect",
    period: "2026",
    description:
      "Indigenous digital rights infrastructure that monitors forestry regulations, translates legal jargon into community readable briefs, performs spatial overlay against customary territories, and ships early warnings to paralegals before policy impact becomes irreversible.",
    flagship: true,
    link: "https://nurazhimramadhan.github.io/WANA/",
    overview:
      "WANA is a six-module digital infrastructure that closes the information gap between forestry policy publication and indigenous community awareness. It combines AI policy intelligence, spatial overlay against customary territories, and a paralegal workspace, all governed by transparent human in the loop principles.",
    research: [
      "Indigenous communities receive forestry policy information last and react too late, which is a structural information gap rather than a regulation gap.",
      "Existing forestry technology tools prioritize industry efficiency over indigenous tenure rights.",
      "Agrarian conflicts and customary territory dispossession continue to escalate across Indonesia.",
    ],
    problem:
      "A 14 day or longer information lag between policy publication and community awareness creates irreversible territorial loss. Paralegals lack a single workspace that simplifies legal documents, checks spatial overlap, and triggers tiered alerts.",
    approach:
      "Built a six module digital infrastructure that flows from Policy Monitor to AI Impact Brief Generator using Claude LLM, then Spatial Overlay using BRWA and concession data, then a Tiered Alert Center, then a Legal Evidence Workspace with FPIC checklist, and finally a News and Conflicts feed. Every step is governed by a human in the loop principle with transparent confidence scores.",
    solution:
      "An end to end indigenous digital rights infrastructure that turns dense policy text into community readable briefs, automatically checks spatial overlap with customary territories, and routes prioritized alerts to paralegals so they can act before policy impact becomes irreversible.",
    architecture: [
      "Web scraping and AI classification of new regulations from KLHK, JDIH, and Setneg.",
      "Domain tuned LLM with Claude for plain Indonesian impact brief generation.",
      "Spatial matching engine combining the BRWA indigenous territory database with active concession data from KLHK and ESDM.",
      "Tiered priority notifications over WhatsApp and email for paralegals and registered communities.",
      "FPIC (Free, Prior, Informed Consent) legal case workspace with structured evidence package.",
      "Leaflet.js and OpenStreetMap for spatial visualization.",
    ],
    aiIntegration:
      "Claude LLM for legal document simplification, AI classification for spatial impact tagging, transparent confidence scores, and mandatory human validation on every AI generated brief.",
    policyIntelligence:
      "Real time monitoring, impact assessment, risk indicators, early warning system, and an accountability from below governance model.",
    sdgImpact: [
      { code: "SDG 16.10", note: "Access to information that closes the policy information gap." },
      { code: "SDG 15.1", note: "Protection of terrestrial ecosystems through community led forest guardianship." },
      { code: "SDG 16.7", note: "Inclusive participation in decision making." },
      { code: "SDG 17.16", note: "Multi stakeholder partnerships for the goals." },
    ],
    outcome:
      "Submitted to PRISMATIC 2026 as a national essay competition entry. Designed for a 3 month pilot with Suku Anak Dalam in Jambi alongside KKI Warsi and WALHI Jambi. Success metrics are to reduce the information gap to under 14 days and to achieve at least an 80 percent paralegal brief usefulness score.",
    impact:
      "Designed to give indigenous communities and paralegals a shared workspace that turns reactive territorial defense into proactive, evidence based advocacy at scale.",
    features: [
      "Policy Monitor that ingests new forestry regulations in near real time.",
      "AI Impact Brief Generator that converts dense legal text into community readable briefs.",
      "Spatial Overlay that checks each policy against customary territories and active concessions.",
      "Tiered Alert Center that routes prioritized warnings to the right paralegals and communities.",
      "Legal Evidence Workspace with FPIC checklist for structured case preparation.",
      "News and Conflicts feed that surfaces context around each emerging case.",
    ],
    designProcess: [
      "Field research with paralegal practitioners and indigenous advocacy organizations.",
      "Mapped the policy to community information lag and identified six structural intervention points.",
      "Designed a modular system architecture with explicit human in the loop checkpoints.",
      "Built a prototype with Claude LLM for brief generation and Leaflet.js for spatial visualization.",
    ],
    lessonsLearned: [
      "AI without human validation is unsafe for legal advocacy work.",
      "Spatial truth and legal truth must be combined or neither becomes actionable.",
      "Information design matters as much as system architecture for grassroots tooling.",
    ],
    futureDevelopment: [
      "3 month Jambi pilot with Suku Anak Dalam (SAD) communities.",
      "Non profit consortium funding model with RRI, Ford Foundation, and Rainforest Foundation Norway.",
      "Scale through indigenous alliance partnerships across Sumatra and Kalimantan.",
    ],
    futureRoadmap: [
      "3 month Jambi pilot with Suku Anak Dalam (SAD) communities.",
      "Non profit consortium funding model with RRI, Ford Foundation, and Rainforest Foundation Norway.",
      "Scale through indigenous alliance partnerships across Sumatra and Kalimantan.",
    ],
    team: ["Nur Azhim Ramadhan (Lead)", "Nabila Latifa Tullaili"],
    technologies: ["AI / LLM (Claude)", "NLP", "Leaflet.js", "OpenStreetMap", "Web Scraping", "Geospatial"],
  },

  // ---------- 2. PALMORA ----------
  {
    id: "p-palmora",
    slug: "palmora",
    title: "PALMORA",
    subtitle: "Palm Oil Business Intelligence and Decision Support",
    category: "Business Intelligence, Data Analytics",
    tags: [
      "Business Intelligence",
      "Data Analytics",
      "Data Visualization",
      "Decision Support",
    ],
    image: palmora,
    role: "Data Analyst, Dashboard Designer, BI Developer",
    period: "2025",
    description:
      "Business intelligence platform that transforms palm oil supply chain data into actionable insights through analytics, visualization, KPI reporting, and decision support mechanisms.",
    flagship: true,
    overview:
      "PALMORA is a business intelligence platform built to give palm oil supply chain stakeholders a single, transparent view of their operations, sustainability metrics, and recommended next actions.",
    research: [
      "Operational data in the palm oil value chain lives in fragmented spreadsheets and disconnected reports.",
      "Sustainability and traceability metrics rarely make it into executive level decision surfaces.",
      "Stakeholders need a narrative layer, not just charts, to make confident decisions quickly.",
    ],
    problem:
      "Stakeholders in the palm oil value chain lack a single transparent view of operational KPIs, traceability events, and sustainability metrics, which leads to slow and fragmented decision making.",
    approach:
      "Designed an end to end BI flow that moves from data modeling, to KPI definition, to interactive dashboard, to narrative storytelling, and finally to executive recommendations. Each chart is paired with a so what insight.",
    solution:
      "A clean, executive grade BI surface that combines an operational KPI dashboard, a traceability storytelling layer, a sustainability metrics panel, and a recommendation panel for the top three next actions.",
    outcome:
      "Working BI prototype presented at a national competition with a clear KPI surface and a recommendation panel for supply chain decision makers.",
    impact:
      "Demonstrated how a focused BI surface can compress weeks of stakeholder reporting into a single, transparent dashboard that supports faster and more confident decisions.",
    features: [
      "Operational KPI dashboard with drill down across regions and time.",
      "Traceability storytelling layer that maps each shipment to its origin.",
      "Sustainability metrics panel with action oriented thresholds.",
      "Executive recommendation engine that surfaces the top three next actions.",
    ],
    keyInsights: [
      "Operational KPI dashboard with drill down across regions and time.",
      "Traceability storytelling layer mapping each shipment to its origin.",
      "Sustainability metrics panel with action oriented thresholds.",
      "Executive recommendation engine surfacing the top three next actions.",
    ],
    designProcess: [
      "Audited stakeholder reporting flows and identified high friction handoffs.",
      "Defined a small set of KPIs that map directly to decisions, not vanity metrics.",
      "Designed an information hierarchy from headline KPIs to drill down detail to recommended actions.",
      "Iterated visual design toward an Apple style BI surface that prioritizes calm clarity.",
    ],
    lessonsLearned: [
      "A dashboard without a recommendation panel forces every viewer to reinvent the same conclusion.",
      "Traceability data only becomes meaningful when it sits next to operational KPIs.",
      "Sustainability metrics must be made executive friendly to actually influence decisions.",
    ],
    futureDevelopment: [
      "Plug into live ERP and logistics data sources for real time updates.",
      "Add scenario modeling for pricing, weather, and yield shocks.",
      "Open a partner facing read only view for downstream buyers and certifiers.",
    ],
    technologies: ["Power BI", "Data Modeling", "SQL", "Dashboard Design", "Data Storytelling"],
    folderLink:
      "https://drive.google.com/drive/folders/1l9FfnlXcxUAlZLBh9qFt3I-gcO_hFRmy",
  },

  // ---------- 3. FinConnect ----------
  {
    id: "p-finconnect",
    slug: "finconnect",
    title: "FinConnect",
    subtitle: "AI Powered FinTech Platform",
    category: "AI, FinTech, Business Intelligence",
    tags: [
      "Artificial Intelligence",
      "FinTech",
      "Smart Analytics",
      "Business Intelligence",
    ],
    image: finconnect,
    role: "AI System Designer, Product Lead, Information Systems",
    period: "2025",
    description:
      "AI powered FinTech platform that unifies financial management, smart analytics, AI insights, financial recommendations, decision support, and business intelligence into a single product surface.",
    flagship: true,
    overview:
      "FinConnect is an AI powered FinTech platform that combines financial management, smart analytics, AI driven insights, financial recommendations, and decision support inside one unified business intelligence surface.",
    research: [
      "Users juggle disconnected financial apps and lose visibility into their complete financial picture.",
      "Existing FinTech tools rarely apply AI to translate raw transactions into recommended next actions.",
      "Decision support is missing across consumer FinTech, leaving users to interpret their own data.",
    ],
    problem:
      "Users need an intelligent financial platform that goes beyond record keeping. They need AI driven recommendations, smart analytics that surface anomalies, and a decision support layer that turns transactions into clear next moves.",
    approach:
      "Designed an AI powered FinTech architecture spanning financial management, smart analytics, AI insights, recommendation engine, decision support, and a business intelligence surface. Modeled user flows, data architecture, and the AI scoring logic that ranks suggested actions.",
    solution:
      "A single platform that pairs everyday financial management with an AI recommendation engine, smart analytics dashboards, and a decision support layer that surfaces the next best action.",
    outcome:
      "Delivered as the academic capstone for the Accounting and Financial Information Systems course. Includes the full product narrative, AI feature framework, brand identity, user flow, and product UI direction (s.id/FinConnect).",
    impact:
      "Demonstrated how an AI powered FinTech platform can compress multiple disconnected apps into one decision oriented experience and turn raw transactions into actionable financial intelligence.",
    features: [
      "Financial Management for daily tracking, budgeting, and goal setting.",
      "Smart Analytics with anomaly detection and spending pattern insights.",
      "AI Insights that translate transactions into plain language recommendations.",
      "Financial Recommendations ranked by confidence and impact.",
      "Decision Support layer that surfaces the next best action for the user.",
      "Business Intelligence view for monthly and quarterly financial direction.",
    ],
    designProcess: [
      "Mapped the fragmented landscape of financial apps targeting Indonesian users.",
      "Defined six AI driven jobs to be done: manage, analyze, recommend, decide, learn, and act.",
      "Designed a unified data spine that all AI modules share for context.",
      "Built the brand identity, UI direction, and AI explainability layer.",
    ],
    lessonsLearned: [
      "AI recommendations only build trust when they show transparent reasoning.",
      "Financial management and AI insights must share one data model or the product splits in half.",
      "Decision support is the highest leverage feature in consumer FinTech.",
    ],
    futureDevelopment: [
      "Real implementation of the AI recommendation engine on live transaction data.",
      "Integration with Indonesian payment rails and open banking APIs for a full pilot.",
      "Companion mobile app for daily AI assisted personal financial decisions.",
    ],
    team: [
      "Nasywa Salsabila",
      "Nabila Latifa Tullaili",
      "Nur Azhim Ramadhan",
      "Nabil Muzakkii",
      "Muhammad Syifaa'ur Rahman",
    ],
    technologies: [
      "Artificial Intelligence",
      "Information Systems",
      "UI/UX Design",
      "Financial Modeling",
      "Smart Analytics",
      "Business Intelligence",
    ],
    link: "https://s.id/FinConnect",
    secondaryImage: null,
  },

  // ---------- 4. iSEC ----------
  {
    id: "p-isec",
    slug: "isec",
    title: "iSEC",
    subtitle: "Information System Security that Protects Your Digital Future",
    category: "Cybersecurity, Information Systems, AI Security",
    tags: ["Cybersecurity", "Information Systems", "AI Security"],
    image: isec,
    role: "System Designer, Team Member, Security Analyst",
    period: "2025",
    description:
      "Cybersecurity application that goes beyond traditional scan and delete antivirus by actively monitoring threats, translating technical alerts into plain language, and educating novice users about their device security posture.",
    flagship: true,
    overview:
      "iSEC is an information system security application that focuses on protecting and educating novice users at the same time. It moves beyond traditional scan and delete antivirus by adding a transparent risk explanation layer.",
    research: [
      "Malware, ransomware, and digital attacks continue to escalate in volume and complexity.",
      "Traditional antivirus tools only scan and delete, and their alerts use technical language that novice users cannot act on.",
      "Users need to understand their security posture, not only react to alerts.",
    ],
    problem:
      "Traditional antivirus tools only scan and delete, while their notifications are too technical for novice users to act on. A solution is needed that protects and clearly explains system security in plain language.",
    approach:
      "Designed an information system security application that combines effective malware and digital threat protection, plain language security status communication, device security awareness uplift, and monitoring with transparent risk explanation that goes beyond scan and delete.",
    solution:
      "A security application that pairs strong threat detection with a human centered risk explanation layer so that users can act on, and learn from, every alert.",
    outcome:
      "Submitted as the academic capstone for the Information System Security course. The deliverable documents the system architecture, the user facing security education flow, and the threat explanation UX.",
    impact:
      "Showed how a security product can become a learning surface, not just a protection layer, and how plain language alerts can directly improve user behavior.",
    features: [
      "Effective protection against malware, ransomware, and digital threats.",
      "Plain language security status for novice users.",
      "Active device security awareness layer.",
      "Antivirus that monitors and explains risks, rather than only scanning and deleting.",
    ],
    designProcess: [
      "Audited typical antivirus alert flows and identified communication breakdown points.",
      "Designed a plain language layer that sits between the detection engine and the user.",
      "Mapped a security education flow that grows the user knowledge over time.",
      "Defined a system architecture that keeps detection, explanation, and education modular.",
    ],
    lessonsLearned: [
      "Most users do not need more alerts, they need clearer alerts.",
      "Security education works best when it is embedded into the product, not added as a separate guide.",
      "A great security UX builds trust through transparency, not through fear.",
    ],
    futureDevelopment: [
      "Connect the explanation layer to a live threat intelligence feed.",
      "Add a guided remediation flow that walks users through fixing detected issues.",
      "Introduce a family or small business mode for shared device protection.",
    ],
    technologies: ["Information Security", "Threat Detection", "User Facing Security UX"],
    link: "https://s.id/iSEC-Porto",
    secondaryImage: isecQr,
  },

  // ---------- 5. KopiKita / BI Dashboard ----------
  {
    id: "p-kopikita",
    slug: "bi-dashboard",
    title: "Business Intelligence Dashboard",
    subtitle: "Predictive BI for CEO Level Decision Making (KopiKita)",
    category: "Business Intelligence, Machine Learning, Analytics",
    tags: ["Business Intelligence", "Machine Learning", "Data Analytics", "Dashboard"],
    image: kopikita,
    role: "BI Developer, Data Scientist, Dashboard Designer",
    period: "2026",
    description:
      "Predictive business intelligence dashboard that simulates CEO level decision making through revenue forecasting, churn probability, operational monitoring, voice of customer analysis, competitor benchmarking, and a recommendation engine.",
    flagship: true,
    link: "https://nurazhimramadhan.github.io/BIDataScientiesDashboard/",
    overview:
      "A predictive business intelligence dashboard that goes beyond reporting and actively recommends the next move. Built around a coffee shop CEO use case, it combines forecasting, operational monitoring, and a what if simulator.",
    research: [
      "CEOs need a single surface that predicts what happens next, not just reports what already happened.",
      "Customer churn and revenue forecasting are most useful when they sit next to operational context.",
      "Voice of customer and competitor benchmarking change the meaning of the underlying numbers.",
    ],
    objectives: [
      "Understand the end to end business intelligence workflow.",
      "Build interactive and opinionated dashboards.",
      "Integrate machine learning predictions into the BI surface.",
      "Support real decision making with analytics.",
    ],
    problem:
      "A coffee shop CEO needs a single surface that does not just report what happened, but predicts what will happen next and recommends the move. The dashboard needs to combine ML predictions with operational context.",
    approach:
      "Engineered a CEO view predictive dashboard with a what if simulator panel for discount, staff, and facility moves, alongside revenue and churn forecasting, a voice of customer module, and a competitor benchmark.",
    solution:
      "A clean, light mode BI surface where every chart pairs an ML prediction with an operational driver and a recommended action.",
    outcome:
      "Live BI artifact deployed on GitHub Pages. The ML model surfaces an omzet akan terus turun warning together with concrete drivers, including a 12 to 14 hour queue, temperature impact, and competitor pricing.",
    impact:
      "Demonstrated that ML predictions become useful only when wrapped in operational context and a what if simulator that lets decision makers stress test their own choices.",
    features: [
      "Revenue prediction with April Rp 15M and May Rp 12M projections.",
      "Customer churn probability in real time with an 80 percent risk threshold surfaced.",
      "Operational monitoring per hour with bottleneck detection.",
      "Voice of customer and competitor benchmarking.",
      "Recommendation engine with a what if simulator.",
      "KPI panel covering margin, loyalty, and average spend.",
    ],
    designProcess: [
      "Profiled the CEO decision moments across a typical week of operations.",
      "Defined a small but opinionated set of predictions that map to clear decisions.",
      "Designed the what if simulator as the centerpiece, not as a side panel.",
      "Tuned the visual system toward a calm light mode surface.",
    ],
    lessonsLearned: [
      "ML predictions need operational context to influence behavior.",
      "A what if simulator turns a dashboard from a report into a decision tool.",
      "Voice of customer and competitor data make the numbers narratively complete.",
    ],
    futureDevelopment: [
      "Connect to live POS and inventory data for real time updates.",
      "Add a multi outlet view for chain operators.",
      "Introduce automated weekly briefings driven by the recommendation engine.",
    ],
    technologies: ["Machine Learning", "Data Science", "JavaScript", "Chart Visualization", "Interactive UI"],
  },

  // ---------- 6. Samsung Innovation Campus Project ----------
  {
    id: "p-sic",
    title: "Samsung Innovation Campus - Python Project",
    subtitle: "Python, Data Processing, and Real World Applications",
    category: "Programming, Data Analytics, Capstone",
    tags: ["Python", "Data Processing", "Capstone"],
    image: sicProject,
    role: "Trainee, Python Developer",
    period: "2025",
    description:
      "Capstone project and learning outputs produced during the Samsung Innovation Campus Python track, covering programming logic, data processing, and applied case studies.",
    flagship: false,
    problem:
      "Translate Python fundamentals into a deliverable, real world data processing solution within an intensive bootcamp track.",
    approach:
      "Worked through structured modules from logic, to control flow, to data structures, to libraries, to applied data processing, and shipped a capstone aligned with the SIC industry curriculum.",
    outcome:
      "Completed the SIC Python certification with project outputs and final assessment artifacts.",
    technologies: ["Python", "Data Processing", "Pandas", "Problem Solving"],
    folderLink:
      "https://drive.google.com/drive/folders/1ARj6qHiQg8FzjUP-Yujpg1mWfBgXGUJ4",
  },
];

export const featuredProjectIds = [
  "p-wana",
  "p-palmora",
  "p-finconnect",
  "p-isec",
  "p-kopikita",
];

// ============================================================
//  EXPERIENCES - organizations, leadership, volunteer, moderation, training
// ============================================================
export const experiences = [
  {
    id: "e-himsika-pr",
    role: "Coordinator of Public Relations Department",
    organization: "HIMSIKA, Information Systems Student Association",
    period: "2026",
    category: "Leadership",
    image: himsikaPr,
    description:
      "Lead the Public Relations Department at HIMSIKA, coordinating internal and external relationship management, organizational branding, and public communication for the Information Systems student community.",
    contributions: [
      "Internal and external relationship management across campus and partner organizations.",
      "Communication strategy, organizational branding, and public relations management.",
      "Stakeholder coordination and partnership development for HIMSIKA programs.",
      "Student engagement initiatives that strengthen the Information Systems community.",
    ],
    tech: ["Public Relations", "Communication", "Stakeholder Coordination", "Branding", "Leadership"],
    impact:
      "Elevated HIMSIKA visibility and partnership quality, while strengthening the public facing voice of the Information Systems community.",
  },
  {
    id: "e-edufair",
    role: "Moderator, EduFair National Seminar",
    organization: "EduFair 2026 National Workshop on Generative AI with Emirsyah Rafsanjani",
    period: "2026",
    category: "Moderation",
    image: edufair,
    description:
      "Moderated a national scale workshop titled Transforming Digital with Generative AI featuring Emirsyah Rafsanjani, a Generative AI Mentor Trainee at BlockDev.",
    contributions: [
      "Moderated workshop flow in front of a national audience.",
      "Curated and delivered audience Q and A segments.",
      "Coordinated with the speaker on session arc and key takeaways.",
    ],
    tech: ["Public Speaking", "Event Moderation", "Stakeholder Communication"],
    impact:
      "Helped distill a national Generative AI session into actionable takeaways for an audience of students and early career professionals.",
  },
  {
    id: "e-hsu",
    role: "Moderator, HIMSIKA Skill Up (HSU)",
    organization: "HIMSIKA 2026, Kerja Cerdas, Sinergi Tanpa Batas",
    period: "2026",
    category: "Moderation",
    image: hsu,
    description:
      "Moderated HIMSIKA Skill Up 2026 (HSU), a campus level skill development session under the theme Smart Work, Boundless Synergy: Managing Potential Within Constraints.",
    contributions: [
      "Moderated session flow, pacing, and Q and A.",
      "Engaged the peer audience and translated speaker insight into clear takeaways.",
      "Represented HIMSIKA as the front of house voice for the event.",
    ],
    tech: ["Moderation", "Communication", "Audience Engagement"],
    impact:
      "Strengthened HSU participant takeaway clarity and reinforced the HIMSIKA flagship event delivery quality.",
  },
  {
    id: "e-revoist",
    role: "Sponsorship Strategy, Revoist 5.0",
    organization: "Revoist 5.0 (Volunteer Experience)",
    period: "2025",
    category: "Volunteer",
    image: revoist,
    description:
      "Led sponsorship acquisition and partnership communication for Revoist 5.0, preparing proposals and coordinating stakeholder conversations across the campaign.",
    contributions: [
      "Sponsorship acquisition for Revoist 5.0.",
      "Partnership communication with brand and institutional partners.",
      "Proposal preparation tailored to each stakeholder segment.",
      "Stakeholder coordination across the campaign timeline.",
    ],
    tech: ["Communication", "Negotiation", "Teamwork", "Event Management"],
    impact:
      "Helped secure partnership commitments that supported Revoist 5.0 program delivery and elevated its public profile.",
  },
  {
    id: "e-fasilkom-cup",
    role: "Consumption Coordinator, Fasilkom Cup",
    organization: "Fasilkom Cup (Committee Experience)",
    period: "2025",
    category: "Committee",
    image: fasilkom,
    description:
      "Coordinated consumption planning, vendor management, and logistics support for Fasilkom Cup as part of the event operations team.",
    contributions: [
      "Consumption planning across all match days and rest periods.",
      "Vendor coordination, sourcing, and quality control.",
      "Logistics support for participants, officials, and committee members.",
      "Event operations execution under tight tournament timelines.",
    ],
    tech: ["Planning", "Coordination", "Teamwork", "Event Operations"],
    impact:
      "Kept the tournament running smoothly by ensuring reliable consumption logistics for participants, officials, and committee members.",
  },
  {
    id: "e-isgath",
    role: "Public Relations Management, ISGATH 2025",
    organization: "ISGATH 2025 (Volunteer Experience)",
    period: "2025",
    category: "Volunteer",
    image: isgath,
    description:
      "Managed public relations for ISGATH 2025, leading public communication, participant engagement, and event promotion before and during the program.",
    contributions: [
      "Public communication strategy across pre event and live phases.",
      "Participant engagement that converted interest into attendance.",
      "Event promotion across owned and partner channels.",
      "Information dissemination to keep audiences and stakeholders aligned.",
    ],
    tech: ["Public Relations", "Communication", "Branding", "Team Collaboration"],
    impact:
      "Boosted visibility and participant engagement for ISGATH 2025 and supported a consistent public facing event identity.",
  },
  {
    id: "e-sic-experience",
    role: "Trainee, Samsung Innovation Campus (Professional Learning)",
    organization: "Samsung Innovation Campus, Python Track",
    period: "2025",
    category: "Training",
    image: samsung,
    description:
      "Completed the Samsung Innovation Campus Python track, an industry led intensive program covering programming logic, data processing, and applied projects. Treated as both a learning experience and a project output track.",
    contributions: [
      "Completed all modules and assessments of the Python track.",
      "Delivered capstone outputs aligned with the SIC curriculum.",
      "Engaged with mentors on real world data processing scenarios.",
    ],
    tech: ["Python", "Data Processing", "Mentorship"],
    impact:
      "Earned the official SIC certification and advanced Python fluency for data and applied AI work.",
  },
  {
    id: "e-bootcamp",
    role: "Participant, Offline Data Analyst Bootcamp",
    organization: "Data Analyst Bootcamp (Offline)",
    period: "2025",
    category: "Training",
    image: sc,
    description:
      "Offline data analyst bootcamp covering data cleaning, exploratory analysis, visualization, and business insight delivery on real datasets.",
    contributions: [
      "Completed end to end case studies on real business data.",
      "Practiced storytelling first analytics presentations.",
      "Built reusable cleaning, EDA, and visualization workflows.",
    ],
    tech: ["Python", "Excel", "Visualization", "EDA"],
    impact:
      "Strengthened the analytical foundation later used in PALMORA, KopiKita, and broader BI work.",
  },
];

// ============================================================
//  ACHIEVEMENTS - awards, competitions, recognitions, certifications
// ============================================================
export const achievements = [
  {
    id: "a-bpc",
    year: "2025",
    category: "Competition · Award",
    title: "1st Place, National Business Plan Competition",
    description:
      "First place in a national business plan competition by presenting an innovative business model supported by strong market analysis and financial projections.",
    image: bpcacv,
    folderLink:
      "https://drive.google.com/drive/folders/10fUMI9tRC0-Pr7oKLMEGUB4cALmyEC5z",
  },
  {
    id: "a-pkm",
    year: "2025",
    category: "Competition · Award",
    title: "1st Place, PKM-PM (Student Creativity Program)",
    description:
      "First place in the national PKM-PM program with a community empowerment project focused on digital transformation and social impact.",
    image: pkmacv,
    folderLink:
      "https://drive.google.com/drive/folders/1dzpauxeTDRrjcI0h8-IjcBoTcnDnhM8Y",
  },
  {
    id: "a-movie",
    year: "2022",
    category: "Competition · Award",
    title: "2nd Place, Modernization of Islam Short Movie",
    description:
      "Award winning short movie exploring the concept of Islam in the modern era through creative storytelling and visual narrative. Earned 2nd place at the senior high school national level as Director and Editor.",
    image: muharram,
    folderLink:
      "https://drive.google.com/drive/folders/1jAmlnz2EAKNr7gqqPKDZUEARxHzOX7UV",
  },
  {
    id: "a-sic-cert",
    year: "2025",
    category: "Certification",
    title: "Samsung Innovation Campus, Python Certification",
    description:
      "Official certification from Samsung Innovation Campus after completing the intensive Python track covering programming logic, data processing, and real world applications.",
    image: samsung,
    folderLink:
      "https://drive.google.com/drive/folders/1ARj6qHiQg8FzjUP-Yujpg1mWfBgXGUJ4",
  },
  {
    id: "a-data-bootcamp",
    year: "2025",
    category: "Certification",
    title: "Data Analyst Bootcamp, Completion Certificate",
    description:
      "Completion certificate from an offline Data Analyst Bootcamp covering cleaning, EDA, visualization, and business insight delivery.",
    image: sc,
    folderLink:
      "https://drive.google.com/drive/folders/104Z4Cd-L7JUmYA-g9xXojWK8n8UXxb8j",
  },
  {
    id: "a-ai-workshop",
    year: "2025",
    category: "Workshop · Certification",
    title: "AI Chatbot Development Workshop",
    description:
      "Certificate of participation from the AI Chatbot Development Workshop, covering conversational AI, NLP foundations, and prompt design.",
    image: aiai,
    folderLink:
      "https://drive.google.com/drive/folders/1rluVH7zQL7WBit03Zz6tDnuiPokNuJYV",
  },
];

export const achievementStats = [
  { value: 7, suffix: "+", label: "Awards & Certifications" },
  { value: 6, suffix: "+", label: "Flagship Projects" },
  { value: 3, suffix: "+", label: "National Competitions" },
  { value: 5, suffix: "+", label: "Organizations & Roles" },
];

// -------------------- JOURNEY TIMELINE --------------------
export const journey = [
  {
    year: "2022",
    title: "Musabaqah Competition Participation",
    subtitle: "First steps into public speaking and competition",
    items: [
      {
        kind: "Competition",
        label: "Early presentation, communication, and self development",
        note: "An early experience in public speaking, presentation, communication, competition participation, and personal development before entering university.",
      },
    ],
  },
  {
    year: "2022",
    title: "2nd Place, Modernization of Islam Short Movie",
    subtitle: "Senior high school national competition",
    items: [
      {
        kind: "Award",
        label: "Director and Editor, national level",
        note: "Award winning short movie exploring Islam in the modern era through creative storytelling and visual narrative.",
      },
    ],
  },
  {
    year: "2024",
    title: "Started Information Systems Undergraduate Program",
    subtitle: "Universitas Singaperbangsa Karawang",
    items: [
      {
        kind: "Education",
        label: "Began Information Systems at UNSIKA",
        note: "Focused on Information Systems, Programming Fundamentals, Database Systems, and core technology foundations.",
      },
    ],
  },
  {
    year: "2025",
    title: "Offline Data Analyst Bootcamp",
    subtitle: "Hands on data analyst training",
    items: [
      {
        kind: "Bootcamp",
        label: "Data Cleaning, Visualization, Excel, SQL, BI, Storytelling",
        note: "Focused on data cleaning, data visualization, Excel, SQL, business intelligence, and data storytelling on real datasets.",
      },
      {
        kind: "Certification",
        label: "Samsung Innovation Campus, Python",
        note: "Industry led Python intensive with capstone project outputs and applied data work from the SIC track.",
      },
    ],
  },
  {
    year: "2025",
    title: "National Competition Achievements",
    subtitle: "Two national first place wins",
    items: [
      {
        kind: "Award",
        label: "1st Place, National Business Plan Competition",
        note: "Innovative business model supported by market analysis and financial projections.",
      },
      {
        kind: "Award",
        label: "1st Place, PKM-PM",
        note: "Community empowerment project focused on digital transformation and social impact.",
      },
    ],
  },
  {
    year: "2025",
    title: "Sponsorship Strategy, Revoist 5.0",
    subtitle: "Volunteer Experience",
    image: revoist,
    items: [
      {
        kind: "Volunteer",
        label: "Sponsorship acquisition and partnership communication",
        note: "Led sponsorship acquisition, partnership communication, proposal preparation, and stakeholder coordination across the Revoist 5.0 campaign.",
      },
    ],
  },
  {
    year: "2025",
    title: "Consumption Coordinator, Fasilkom Cup 2025",
    subtitle: "Committee Experience",
    image: fasilkom,
    items: [
      {
        kind: "Committee",
        label: "Consumption planning, vendor coordination, logistics",
        note: "Coordinated consumption planning, vendor management, and logistics support across all match days of the Fasilkom Cup tournament.",
      },
    ],
  },
  {
    year: "2025",
    title: "Public Relations Management, ISGATH 2025",
    subtitle: "Volunteer Experience",
    image: isgath,
    items: [
      {
        kind: "Volunteer",
        label: "Public communication, participant engagement, promotion",
        note: "Managed public relations across pre event and live phases, including communication strategy, participant engagement, event promotion, and information dissemination.",
      },
    ],
  },
  {
    year: "2026",
    title: "HIMSIKA Public Relations Leadership",
    subtitle: "Coordinator of Public Relations Department",
    image: himsikaPr,
    items: [
      {
        kind: "Leadership",
        label: "Coordinator of Public Relations Department, HIMSIKA",
        note: "Internal and external relationship management, organizational branding, communication strategy, public communication, student engagement, and stakeholder coordination.",
      },
    ],
  },
  {
    year: "2026",
    title: "Moderator, HIMSIKA Skill Up (HSU)",
    subtitle: "Flagship campus skill development event",
    image: hsu,
    items: [
      {
        kind: "Moderation",
        label: "Moderated HSU 2026",
        note: "Theme: Smart Work, Boundless Synergy. Managing Potential Within Constraints.",
      },
    ],
  },
  {
    year: "2026",
    title: "Moderator, EduFair National Seminar",
    subtitle: "National workshop on Generative AI",
    image: edufair,
    items: [
      {
        kind: "Moderation",
        label: "Moderated the EduFair national Generative AI workshop",
        note: "Featured speaker Emirsyah Rafsanjani, Generative AI Mentor Trainee at BlockDev.",
      },
    ],
  },
  {
    year: "2026+",
    title: "Technology and Innovation Projects",
    subtitle: "Flagship builds across data, AI, FinTech, and security",
    items: [
      {
        kind: "Project",
        label: "WANA, Indigenous Digital Rights Infrastructure",
        note: "Flagship AI policy intelligence with spatial overlay and a paralegal workspace.",
      },
      {
        kind: "Project",
        label: "PALMORA, Business Intelligence Dashboard",
        note: "Decision support BI surface for the palm oil value chain.",
      },
      {
        kind: "Project",
        label: "FinConnect, AI Powered FinTech Platform",
        note: "All in one platform for financial management, smart analytics, AI insights, and decision support.",
      },
      {
        kind: "Project",
        label: "iSEC, Information System Security",
        note: "Cybersecurity application that protects and educates novice users through transparent risk explanation.",
      },
      {
        kind: "Project",
        label: "Business Intelligence Dashboard (KopiKita)",
        note: "CEO view machine learning powered analytics surface with a what if simulator.",
      },
      {
        kind: "Project",
        label: "Samsung Innovation Campus Projects",
        note: "Python capstone outputs and applied data work from the SIC industry track.",
      },
    ],
  },
];

// -------------------- SKILLS --------------------
export const skillsByCategory = [
  {
    id: "data",
    title: "Data Analytics and BI",
    items: ["Excel", "SQL", "Python", "Pandas", "Power BI", "Statistics", "Data Storytelling"],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    items: [
      "ChatGPT",
      "Gemini",
      "Claude",
      "Prompt Engineering",
      "AI Workflow Design",
      "NLP Foundations",
    ],
  },
  {
    id: "sec",
    title: "Cybersecurity and Information Systems",
    items: ["Information System Security", "Threat Awareness", "Secure UX", "Risk Communication"],
  },
  {
    id: "web",
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Vite", "Git", "GitHub"],
  },
  {
    id: "uiux",
    title: "UI / UX and Product",
    items: ["Figma", "Wireframing", "Prototyping", "Design Thinking"],
  },
  {
    id: "pro",
    title: "Professional and Leadership",
    items: [
      "Public Speaking",
      "Moderation",
      "Leadership",
      "Communication",
      "Problem Solving",
      "Collaboration",
      "Critical Thinking",
    ],
  },
];

// Flat tech wall (for marquee + grid)
export const techStack = [
  "Python",
  "SQL",
  "Excel",
  "Power BI",
  "Pandas",
  "JavaScript",
  "React",
  "Vite",
  "HTML",
  "CSS",
  "Tailwind",
  "Figma",
  "Git",
  "GitHub",
  "Leaflet.js",
  "OpenStreetMap",
  "Claude LLM",
  "ChatGPT",
  "Gemini",
  "NLP",
  "Web Scraping",
  "Information Security",
];

// -------------------- LEARNING ROADMAP --------------------
export const learningRoadmap = [
  {
    phase: "Foundation",
    status: "Done",
    title: "Programming and Data Foundations",
    points: [
      "Python at Samsung Innovation Campus",
      "SQL and Database Management",
      "Data cleaning, EDA, and visualization",
    ],
  },
  {
    phase: "Build",
    status: "Done",
    title: "Applied Projects and Competitions",
    points: [
      "National Business Plan, 1st Place",
      "PKM-PM, 1st Place",
      "PALMORA, FinConnect, and iSEC",
    ],
  },
  {
    phase: "Now",
    status: "In Progress",
    title: "AI Governance, Predictive BI, and Leadership",
    points: [
      "WANA flagship for AI policy intelligence",
      "KopiKita predictive BI dashboard",
      "Moderator for HSU and EduFair National Seminar",
    ],
  },
  {
    phase: "Next",
    status: "Planned",
    title: "Specialization and Industry Internship",
    points: [
      "End to end BI and Data Science internship",
      "Production grade AI workflow tooling",
      "Cloud data fundamentals",
    ],
  },
  {
    phase: "Future",
    status: "Planned",
    title: "Data and AI Professional",
    points: [
      "Deep specialization in data, AI, and governance",
      "Cross functional product collaboration",
      "Lead data informed initiatives",
    ],
  },
];

// -------------------- CERTIFICATES --------------------
export const certificates = [
  {
    id: "cert-samsung",
    title: "Samsung Innovation Campus, Python",
    issuer: "Samsung Innovation Campus",
    date: "2025",
    image: samsung,
    credential:
      "https://drive.google.com/drive/folders/1ARj6qHiQg8FzjUP-Yujpg1mWfBgXGUJ4",
  },
  {
    id: "cert-data-bootcamp",
    title: "Data Analyst Bootcamp (Offline)",
    issuer: "Bootcamp Program",
    date: "2025",
    image: sc,
    credential:
      "https://drive.google.com/drive/folders/104Z4Cd-L7JUmYA-g9xXojWK8n8UXxb8j",
  },
  {
    id: "cert-ai-workshop",
    title: "AI Chatbot Development Workshop",
    issuer: "AI Workshop Program",
    date: "2025",
    image: aiai,
    credential:
      "https://drive.google.com/drive/folders/1rluVH7zQL7WBit03Zz6tDnuiPokNuJYV",
  },
  {
    id: "cert-bpc",
    title: "1st Place, National Business Plan Competition",
    issuer: "National Competition",
    date: "2025",
    image: bpcacv,
    credential:
      "https://drive.google.com/drive/folders/10fUMI9tRC0-Pr7oKLMEGUB4cALmyEC5z",
  },
  {
    id: "cert-pkm",
    title: "1st Place, PKM-PM (Student Creativity Program)",
    issuer: "Ministry of Education, National",
    date: "2025",
    image: pkmacv,
    credential:
      "https://drive.google.com/drive/folders/1dzpauxeTDRrjcI0h8-IjcBoTcnDnhM8Y",
  },
  {
    id: "cert-shortmovie",
    title: "2nd Place, Modernization of Islam Short Movie",
    issuer: "Senior High School National Competition",
    date: "2022",
    image: muharram,
    credential:
      "https://drive.google.com/drive/folders/1jAmlnz2EAKNr7gqqPKDZUEARxHzOX7UV",
  },
];

// -------------------- SOCIAL LINKS & CV --------------------
export const socialLinks = {
  email: "mailto:nurazhimrr@gmail.com",
  linkedin: "https://linkedin.com/in/nurazhimramadhan",
  instagram: "https://instagram.com/ramzzhim",
  whatsapp: "https://wa.me/6281991219199",
  github: "https://github.com/NurAzhimRamadhan",
};

export const cvLink =
  "https://drive.google.com/drive/folders/1WKsnGBrm0WtbIIuTGeIfFBSPjB2rAwnm";

// -------------------- NAV ITEMS --------------------
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "experiences", label: "Experiences" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

// Legacy guards (for any old references) - empty arrays
export const otherProjects = [];
