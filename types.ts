
export interface NavItem {
  label: string;
  href: string;
  dropdown?: {
    title: string;
    description: string;
    sections: {
      category: string;
      links: string[];
    }[];
  };
}

export interface IndustryFunctionContent {
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  visualType: 'grid' | 'orbit' | 'flow';
  solutions: { title: string; desc: string; icon: string }[];
  outcomes: { metric: string; label: string; context: string }[];
  perspectives: { category: string; title: string; date: string }[];
}

export interface SectorData {
  [key: string]: IndustryFunctionContent;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface IndustryBlock {
  title: string;
  description: string;
  image: string;
}

export interface HeroSlide {
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  image: string;
  navTitle: string;
}
