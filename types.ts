export interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  tags: string[];
  liveDemoUrl?: string;
  categories: string[];
  caseStudy: {
    problem: string;
    solution: string[];
    learnings: string;
  }
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skills?: string[];
}

export interface Skill {
  name: string;
  category: 'Language' | 'AI & Data Science' | 'Backend & Frontend' | 'Cloud/DevOps' | 'Tool';
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    details: string;
}

export interface Certification {
    name: string;
    link: string;
    imageUrl: string;
}