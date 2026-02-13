
import { SectorData, IndustryFunctionContent } from '../types/index';

export const INDUSTRY_FUNCTION_MAP: SectorData = {
  "Logistics and Rail": {
    title: "The Future of Intelligent Mobility",
    subtitle: "Modernizing the backbone of global commerce.",
    description: "In an era of supply chain volatility, we help logistics and rail providers build resilient, data-driven ecosystems.",
    accentColor: "#3b82f6",
    visualType: 'flow',
    solutions: [
      { title: "Smart Asset Management", desc: "Predictive maintenance for rolling stock.", icon: "Settings" },
      { title: "Supply Chain Visibility", desc: "End-to-end transparency across networks.", icon: "Eye" }
    ],
    outcomes: [
      { metric: "25%", label: "Downtime Reduction", context: "Through AI maintenance." }
    ],
    perspectives: [
      { category: "Whitepaper", title: "Decarbonizing Rail", date: "June 2024" }
    ]
  },
  "Retail & Corporate Banking": {
    title: "Customer-Centric Banking Solutions",
    subtitle: "Served to 30+ Countries",
    description: "Architecting high-availability, cloud-native platforms that bridge the gap between legacy stability and neo-banking agility.",
    accentColor: "#22d3ee", // Cyan-charged
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
  },
  "Asset & Wealth Management": {
    title: "Next-Generation Wealth Ecosystems",
    subtitle: "Orchestrating $2.5T+ in Global Assets",
    description: "Empowering wealth managers with AI-driven insights, hyper-personalized client journeys, and mission-critical cloud-native compliance foundations.",
    accentColor: "#10b981", // Emerald Gold vibe
    visualType: 'orbit',
    videoUrl: "https://player.vimeo.com/external/494163987.sd.mp4?s=256a297775916515865502a3560233010b97951c&profile_id=164&oauth2_token_id=57447761",
    solutions: [
      { title: "Lifecycle Management", desc: "Seamless onboarding & client portal experience.", icon: "UserCheck" },
      { title: "Portfolio Analytics", desc: "AI-powered risk & return modeling.", icon: "TrendingUp" },
      { title: "Wealth Platforms", desc: "Cloud-native cores for multi-asset management.", icon: "Briefcase" },
      { title: "ESG Integration", desc: "Sustainable investing & impact reporting.", icon: "Leaf" },
      { title: "Compliance Automator", desc: "Real-time regulatory & KYC orchestration.", icon: "ShieldCheck" },
      { title: "Digital Advisory", desc: "Hybrid robo-advisory & human intelligence.", icon: "Headphones" }
    ],
    outcomes: [
      { metric: "$2T+", label: "AUM Powered", context: "Trusted by the world's leading wealth institutions." },
      { metric: "35%", label: "OpEx Reduction", context: "Through intelligent platform consolidation." }
    ],
    perspectives: [
      { category: "Trend", title: "The Rise of Private Markets", date: "2024" },
      { category: "Tech", title: "AI in Wealth Advisory", date: "2024" },
      { category: "Impact", title: "ESG Compliance Roadmap", date: "2024" }
    ]
  }
};

export const DEFAULT_FUNCTION_CONTENT: IndustryFunctionContent = {
  title: "Industry Transformation",
  subtitle: "Engineering the future",
  description: "Standardizing digital excellence through integrated strategy.",
  accentColor: "#3b82f6",
  visualType: 'grid',
  solutions: [
    { title: "Digital Core", desc: "Foundation for scale.", icon: "Layers" }
  ],
  outcomes: [
    { metric: "40%", label: "Efficiency Gain", context: "Average transformation improvement." }
  ],
  perspectives: [
    { category: "General", title: "Standardizing Digital Excellence", date: "2024" }
  ]
};
