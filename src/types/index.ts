export type ProjectCategory =
  | 'All'
  | 'Machine Learning'
  | 'Deep Learning'
  | 'NLP'
  | 'GenAI'
  | 'Automation'
  | 'Deployment';

export interface WorkflowStep {
  title: string;
  description: string;
  icon?: string;
  type?: 'input' | 'process' | 'model' | 'automation' | 'output' | 'interrupt';
}

export interface ProjectDetailData {
  id: string;
  title: string;
  category: ProjectCategory | string;
  secondaryCategories?: string[];
  shortDescription: string;
  technologies: string[];
  type?: string;
  keyMetric?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  overview?: string;
  problem?: string;
  approach?: string;
  dataset?: {
    name: string;
    description: string;
    features?: string[];
  };
  preprocessing?: string[];
  modelArchitecture?: {
    name: string;
    description: string;
    details?: string[];
  };
  evaluation?: {
    strategy: string;
    metrics?: string[];
  };
  results?: {
    summary: string;
    highlights?: string[];
  };
  deployment?: {
    platform: string;
    details: string;
    containerization?: string;
  };
  workflowType?:
    | 'rag'
    | 'sentiment_automation'
    | 'rfm_automation'
    | 'langgraph_interrupt'
    | 'medical_ner'
    | 'generic';
  workflowSteps?: WorkflowStep[];
  workflowNotes?: string;
  screenshotsPlaceholder?: string[];
  architectureDiagramNote?: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  description: string;
  keyLearnings: string[];
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  badgeType: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  gpa: string;
  timeline: string;
  location?: string;
  coursework: string[];
  honors?: string;
}
