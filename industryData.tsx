
import { SectorData, IndustryFunctionContent } from './types';

export const INDUSTRY_FUNCTION_MAP: SectorData = {
  "Retail & Corporate Banking": {
    title: "Customer-Centric Banking Solutions",
    subtitle: "Served to 30+ Countries",
    description: "Architecting high-availability, cloud-native platforms that bridge the gap between legacy stability and neo-banking agility.",
    accentColor: "#ffcc00",
    visualType: 'orbit',
    solutions: [
      { title: "Digital Banking", desc: "Modern frontend experiences.", icon: "Smartphone" },
      { title: "Core Banking", desc: "Robust transaction engines.", icon: "Database" },
      { title: "Infra Solutions", desc: "Scalable cloud foundations.", icon: "Cloud" },
      { title: "Payment Solutions", desc: "Seamless money movement.", icon: "CreditCard" },
      { title: "Enterprise Solutions", desc: "Bespoke internal platforms.", icon: "Briefcase" },
      { title: "Emerging Tech", desc: "AI and Blockchain explorations.", icon: "Zap" }
    ],
    outcomes: [
      { metric: "30+", label: "Countries Served", context: "Providing localized expertise with a global delivery engine." },
      { metric: "100%", label: "Uptime Commitment", context: "Supporting mission-critical banking operations 24/7." }
    ],
    perspectives: [
      { category: "Solution", title: "GBS Product Suite", date: "Current" },
      { category: "Service", title: "RPA Services", date: "Current" },
      { category: "Product", title: "KIOSK Product", date: "Current" },
      { category: "Product", title: "iSMART BI Product", date: "Current" },
      { category: "Service", title: "Application Services", date: "Current" },
      { category: "Platform", title: "Data Morphix Platform", date: "Current" }
    ]
  }
};

export const DEFAULT_FUNCTION_CONTENT: IndustryFunctionContent = {
  title: "Industry Transformation",
  subtitle: "Engineering the future",
  description: "Digital excellence through integrated strategy.",
  accentColor: "#3b82f6",
  visualType: 'grid',
  solutions: [{ title: "Digital Core", desc: "Foundational scale.", icon: "Layers" }],
  outcomes: [{ metric: "40%", label: "Efficiency", context: "Global portfolio average." }],
  perspectives: [{ category: "General", title: "Digital Excellence", date: "2024" }]
};
