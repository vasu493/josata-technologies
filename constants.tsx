
import { NavItem, ServiceCard, IndustryBlock, HeroSlide } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Our business is to help your business run",
    highlight: "more effectively and more efficiently.",
    subtitle: "Enterprise Strategy",
    description: "What we do",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    navTitle: "Digital Transformation"
  },
  {
    title: "Accelerate your competitive advantage with",
    highlight: "AI-First Engineering.",
    subtitle: "Innovation Intelligence",
    description: "Measure capability",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    navTitle: "AI & Automation"
  },
  {
    title: "Scale your global operations with",
    highlight: "Cloud Core Infrastructure.",
    subtitle: "Enterprise Core",
    description: "Explore Cloud",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    navTitle: "Cloud Excellence"
  },
  {
    title: "Protect your enterprise digital assets with",
    highlight: "Adaptive Cyber Defense.",
    subtitle: "Digital Resilience",
    description: "View Resilience",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
    navTitle: "Cyber Security"
  }
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Industries',
    href: '#industries',
    dropdown: {
      title: 'Industries',
      description: 'We transform at the intersect of deep domain knowledge and emerging technologies expertise.',
      sections: [
        {
          category: 'Banking & Financial Services',
          links: ['Retail & Corporate Banking', 'Asset & Wealth Management', 'Cards & Payments', 'Risk & Compliance']
        },
        {
          category: 'Travel, Transportation & Hospitality',
          links: ['Airlines', 'Airports', 'Travel Tech', 'Online Travel Agencies', 'Logistics and Rail', 'Hospitality']
        },
        {
          category: 'Retail & Consumer Goods',
          links: ['Retail', 'Consumer Packaged Goods (CPG)']
        },
        {
          category: 'Insurance',
          links: ['Life & Annuities', 'Property & Casualty', 'Lloyd\'s & London Market']
        },
        {
          category: 'Healthcare & Life Sciences',
          links: ['Life Sciences', 'Med Tech', 'Payers', 'Providers']
        },
        {
          category: 'Public Sector',
          links: ['Central/Federal Government', 'Departments and Agencies', 'Local/State Government and Councils', 'Nonprofit and Community Organizations']
        },
        {
          category: 'Energy and Utilities',
          links: ['Water Utilities', 'Power Utilities', 'Oil & Gas']
        }
      ]
    }
  },
  {
    label: 'Services',
    href: '#services',
    dropdown: {
      title: 'Services',
      description: 'We help you innovate and scale with industry-leading digital services.',
      sections: [
        {
          category: 'AI',
          links: ['AI Services', 'AI Platforms', 'AI/ML']
        },
        {
          category: 'Automation',
          links: ['Intelligent Automation']
        },
        {
          category: 'Data',
          links: ['Data Engineering', 'Data Analytics', 'Data Governance']
        },
        {
          category: 'Consult',
          links: ['Process Consulting', 'Strategy & Transformation']
        },
        {
          category: 'Engineering',
          links: ['Digital Engineering', 'Product Engineering', 'Legacy Modernization']
        },
        {
          category: 'Experience',
          links: ['Digital Experience', '1:1 Customer Engagement', 'Conversational Experience']
        }
      ]
    }
  },
  { 
    label: 'About Us', 
    href: '#about',
    dropdown: {
      title: 'About Us',
      description: 'Learn more about our vision, values, and the leadership driving JOSATA\'s success.',
      sections: [
        {
          category: 'Company',
          links: ['Our Story', 'Mission & Values', 'Leadership Team']
        },
        {
          category: 'Global Presence',
          links: ['Global Offices', 'Partnership Ecosystem']
        }
      ]
    }
  },
  { 
    label: 'Insights', 
    href: '#insights',
    dropdown: {
      title: 'Insights',
      description: 'Expert perspectives on the trends shaping the future of technology and business.',
      sections: [
        {
          category: 'Thought Leadership',
          links: ['Tech Blogs', 'Whitepapers', 'Client Success Stories']
        },
        {
          category: 'Research',
          links: ['Market Reports', 'Industry Trends']
        }
      ]
    }
  },
  { 
    label: 'Careers', 
    href: '#careers',
    dropdown: {
      title: 'Careers',
      description: 'Join a global team of innovators and help us shape the future of enterprise technology.',
      sections: [
        {
          category: 'Work With Us',
          links: ['Life at JOSATA', 'Diversity & Inclusion']
        },
        {
          category: 'Opportunities',
          links: ['Job Search', 'Early Careers']
        }
      ]
    }
  },
  { 
    label: 'Digital', 
    href: '#digital',
    dropdown: {
      title: 'Vector Digital',
      description: 'JOSATA\'s integrated digital delivery platform. We integrate strategy, design and engineering to help you achieve breakthrough results.',
      sections: [
        {
          category: 'Core Capabilities',
          links: ['Digital Strategy', 'Advanced Analytics', 'Automation & AI', 'Enterprise Technology', 'Product & Experience']
        },
        {
          category: 'Key Expertise',
          links: ['E-commerce', 'Cloud Computing', 'Cybersecurity', 'Metaverse', 'Web3 & Blockchain']
        },
        {
          category: 'Delivery',
          links: ['Agile Transformation', 'Next-gen DevOps', 'Software Engineering Excellence']
        },
        {
          category: 'Results',
          links: ['Success Metrics', 'Transformation ROI', 'Client Journeys']
        }
      ]
    }
  }
];

export const SERVICES: ServiceCard[] = [
  {
    title: 'Digital Transformation',
    description: 'Reimagining business processes for the digital age through strategic technology integration.',
    icon: 'activity'
  },
  {
    title: 'Cloud Excellence',
    description: 'Enabling scalable, secure, and resilient infrastructure tailored to enterprise demands.',
    icon: 'cloud'
  },
  {
    title: 'AI & Data Science',
    description: 'Turning complex data into actionable insights with cutting-edge machine learning models.',
    icon: 'cpu'
  },
  {
    title: 'Cyber Security',
    description: 'Comprehensive protection for your most valuable digital assets and intellectual property.',
    icon: 'shield'
  }
];

export const INDUSTRIES: IndustryBlock[] = [
  {
    title: 'Banking & Finance',
    description: 'Securing the future of global finance with robust digital core systems.',
    image: 'https://picsum.photos/seed/finance/800/600'
  },
  {
    title: 'Healthcare',
    description: 'Patient-centric solutions driven by interoperable data and intelligent systems.',
    image: 'https://picsum.photos/seed/health/800/600'
  }
];
