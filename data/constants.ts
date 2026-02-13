
import { NavItem, ServiceCard, IndustryBlock, HeroSlide } from '../types';

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
  { label: 'About Us', href: '#about', dropdown: { title: 'About Us', description: 'Learn more about JOSATA.', sections: [{ category: 'Company', links: ['Our Story', 'Mission & Values', 'Leadership Team'] }, { category: 'Presence', links: ['Global Offices', 'Partnerships'] }] } },
  { label: 'Insights', href: '#insights', dropdown: { title: 'Insights', description: 'Expert perspectives.', sections: [{ category: 'Thought Leadership', links: ['Blogs', 'Whitepapers'] }] } },
  { label: 'Careers', href: '#careers', dropdown: { title: 'Careers', description: 'Join us.', sections: [{ category: 'Work', links: ['Life at JOSATA', 'Diversity'] }, { category: 'Openings', links: ['Job Search'] }] } },
  { label: 'Digital', href: '#digital', dropdown: { title: 'Vector Digital', description: 'Integrated platform.', sections: [{ category: 'Capabilities', links: ['Digital Strategy', 'Advanced Analytics'] }] } }
];

export const SERVICES: ServiceCard[] = [
  { title: 'Digital Transformation', description: 'Strategic technology integration.', icon: 'activity' },
  { title: 'Cloud Excellence', description: 'Scalable infrastructure.', icon: 'cloud' },
  { title: 'AI & Data Science', description: 'Actionable insights.', icon: 'cpu' },
  { title: 'Cyber Security', description: 'Comprehensive protection.', icon: 'shield' }
];
