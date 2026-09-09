import {
  ProjectDetailData,
  SkillCategory,
  ExperienceItem,
  CertificationItem,
  EducationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'ESRAA MOHAMED',
  title: 'Machine Learning & AI Engineer',
  role: 'Software Engineering Student',
  graduationYear: '2027',
  location: 'Egypt',
  email: 'esraa.m7hamed7@gmail.com',
  tagline:
    'Software Engineering student building practical ML models, NLP pipelines, RAG systems, and AI automation workflows.',
  socials: {
    linkedin: 'https://linkedin.com/in/esraa-mohamed-ml',
    github: 'https://github.com/Esraa-MOhamed7',
    kaggle: 'https://www.kaggle.com/esraamoh7med',
    email: 'mailto:esraa.m7hamed7@gmail.com',
  },
};

export const CORE_PROJECTS: ProjectDetailData[] = [
  {
    id: 'medner',
    title: 'MedNER (Medical Named Entity Recognition)',
    category: 'NLP',
    shortDescription:
      'Fine-tuned BERT model for Medical Named Entity Recognition, deployed as a containerized FastAPI service.',
    technologies: ['PyTorch', 'Hugging Face', 'BERT', 'FastAPI', 'Docker'],
    type: 'Biomedical NLP + FastAPI',
    githubUrl: 'https://github.com/Esraa-MOhamed7/MedNER',
    liveDemoUrl: 'https://lnkd.in/p/ef35d8fY',
    overview:
      'Fine-tuned BERT transformer model specifically adapted for clinical and biomedical token extraction, identifying medical conditions, dosages, and drug entities with high accuracy, wrapped inside an async FastAPI microservice containerized with Docker.',
    problem:
      'Clinical text contains dense biomedical jargon and ambiguous terminology, making manual extraction of diagnostic entities slow, error-prone, and difficult to scale across healthcare workflows.',
    approach:
      'Fine-tuned a domain-adapted BERT model on annotated clinical corpora, established token-level sequence labeling with subword alignment, and packaged the inference pipeline into an asynchronous FastAPI endpoint containerized with Docker.',
    workflowType: 'medical_ner',
    workflowSteps: [
      { title: 'Clinical Note Input', description: 'Raw unstructured doctor notes or medical text', type: 'input' },
      { title: 'WordPiece Tokenizer', description: 'Subword tokenization with special clinical tokens', type: 'process' },
      { title: 'BERT Transformer', description: 'Contextual token representations & sequence classification', type: 'model' },
      { title: 'Entity Extraction', description: 'Decoded spans: Diseases, Dosages, Medications', type: 'output' },
    ],
    featured: true,
  },
  {
    id: 'rag-guardrails',
    title: 'Production-Ready RAG Pipeline with Guardrails',
    category: 'GenAI',
    shortDescription:
      'Interactive Q&A system over PDF/CSV files featuring dynamic chunking, strict hallucination guardrails, and precise source citations.',
    technologies: ['LangChain', 'LLaMA-3', 'Groq API', 'ChromaDB', 'Flask', 'Docker'],
    type: 'Enterprise RAG + Guardrails',
    githubUrl: 'https://github.com/Esraa-MOhamed7/RAG-Powered-Customer-Support-System',
    liveDemoUrl: 'https://www.linkedin.com/posts/esraa-mohamed-ml_ai-llm-rag-activity-7482009636426940416-euOM',
    overview:
      'An enterprise-grade Retrieval-Augmented Generation (RAG) platform that enables accurate question answering over proprietary corporate documents (PDF, CSV, TXT) with mathematical citation provenance and strict rejection of out-of-scope prompts.',
    problem:
      'Standard LLM responses often suffer from hallucinated facts and lack accountability. Unconstrained RAG systems frequently answer out-of-domain questions or fabricate sources without rigorous verification.',
    approach:
      'Engineered a multi-stage retrieval architecture: document ingestion with recursive semantic chunking, dense vector indexing via ChromaDB, similarity search with metadata filtering, and strict hallucination guardrail prompts that explicitly reject out-of-scope queries.',
    workflowType: 'rag',
    workflowSteps: [
      { title: 'Document Ingestion', description: 'PDF / CSV recursive semantic chunking', type: 'input' },
      { title: 'Vector Store (ChromaDB)', description: 'Dense vector search with cosine similarity', type: 'process' },
      { title: 'Guardrail Verification', description: 'Strict rejection filter for off-topic queries', type: 'process' },
      { title: 'LLaMA-3 Generation', description: 'Grounded generation with source citations', type: 'output' },
    ],
    featured: true,
  },
  {
    id: 'sentiment-automation',
    title: 'Amazon Review Sentiment Analysis & Automation',
    category: 'Automation',
    shortDescription:
      'Automated end-to-end sentiment analysis pipeline triggered via webhooks in n8n, running model inference, and logging responses automatically to Google Sheets.',
    technologies: ['PyTorch', 'n8n', 'Webhooks', 'Google Sheets API'],
    type: 'NLP + n8n Workflow',
    githubUrl: 'https://github.com/Esraa-MOhamed7/Sentiment-Analysis-Project',
    liveDemoUrl: 'https://www.linkedin.com/posts/esraa-mohamed-ml_machinelearning-ai-automation-activity-7450954305290977280-jXDI',
    overview:
      'An automated event-driven pipeline bridging machine learning model inference with enterprise workflow automation to process customer feedback in real time without human intervention.',
    problem:
      'E-commerce businesses receive thousands of customer reviews daily. Manually parsing sentiment and logging customer dissatisfaction leads to severe response delays.',
    approach:
      'Trained a high-accuracy PyTorch sentiment classification model. Exposed the inference logic as an HTTP service, then constructed an n8n workflow listening for review webhook events, dispatching payload to the model, and updating Google Sheets in real time.',
    workflowType: 'sentiment_automation',
    workflowSteps: [
      { title: 'Incoming Review Webhook', description: 'Triggered when new review is submitted', type: 'input' },
      { title: 'n8n Workflow Node', description: 'Extracts review payload & headers', type: 'automation' },
      { title: 'PyTorch Model Inference', description: 'Calculates positive / negative sentiment score', type: 'model' },
      { title: 'Google Sheets API', description: 'Logs timestamp, review, and sentiment score', type: 'output' },
    ],
    featured: true,
  },
  {
    id: 'langgraph-agent',
    title: 'LangGraph Intelligent Agent Workflow',
    category: 'GenAI',
    shortDescription:
      'Multi-branch AI agent workflow built using LangGraph and StateGraph, featuring double interrupt states for human-in-the-loop validation and controlled execution.',
    technologies: ['LangGraph', 'Groq API', 'StateGraph', 'Human-in-the-loop Interrupts'],
    type: 'Stateful AI Agent Graph',
    githubUrl: 'https://github.com/Esraa-MOhamed7/Smart-Request-Router-',
    overview:
      'A robust stateful AI agent graph engineered with LangGraph, featuring conditional multi-branch routing, state persistence, and human-in-the-loop double interrupt checkpoints.',
    problem:
      'Autonomous AI agents often make unverified decisions or fail silently during critical multi-step tasks when tool outputs are unexpected or sensitive actions are triggered.',
    approach:
      'Constructed a StateGraph architecture incorporating human approval gates. The agent gathers context, proposes actions, pauses execution at key checkpoints, and resumes seamlessly after user confirmation.',
    workflowType: 'langgraph_interrupt',
    workflowSteps: [
      { title: 'Goal Specification', description: 'User provides high-level objective', type: 'input' },
      { title: 'Agent Reasoning', description: 'LLM plans tool calls and next actions', type: 'model' },
      { title: 'Checkpoint Interrupt', description: 'Pauses execution waiting for human approval', type: 'interrupt' },
      { title: 'Tool Execution', description: 'Executes verified action & returns output', type: 'output' },
    ],
    featured: true,
  },
  {
    id: '10k-financial-rag',
    title: '10-K Financial Reports RAG Assistant',
    category: 'GenAI',
    shortDescription:
      'Specialized Financial RAG assistant designed for retrieval, query re-writing, and context reranking over 10-K financial reports.',
    technologies: ['LangChain', 'ChromaDB', 'LLMs', 'Query Transformation', 'Reranking'],
    type: 'Financial Intelligence RAG',
    githubUrl: 'https://github.com/Esraa-MOhamed7/10-K-Intelligence-Financial-Reports-RAG-Assistant',
    liveDemoUrl: 'https://lnkd.in/p/eTc-V2At',
    overview:
      'A financial intelligence assistant capable of synthesizing lengthy annual 10-K filings (SEC reports) with multi-query expansion and cross-encoder reranking.',
    problem:
      '10-K reports exceed hundreds of pages filled with dense tables, financial jargon, and legal footnotes. Standard naive RAG fails because user queries use colloquial language that does not match SEC terminology.',
    approach:
      'Implemented advanced RAG techniques: Query Transformation (generating sub-queries and hypothetical document embeddings), hybrid dense vector retrieval with ChromaDB, and Cross-Encoder neural reranking to prioritize high-precision financial context before LLM synthesis.',
    workflowType: 'rag',
    workflowSteps: [
      { title: 'User Financial Query', description: 'Natural language SEC question', type: 'input' },
      { title: 'Query Transformation', description: 'Rewrites into 3 targeted sub-queries', type: 'process' },
      { title: 'ChromaDB Retrieval', description: 'Pulls candidate financial chunks', type: 'process' },
      { title: 'Cross-Encoder Reranking', description: 'Scores and selects top-5 most relevant passages', type: 'model' },
      { title: 'Synthesis & Comparison', description: 'Structured financial comparison with table references', type: 'output' },
    ],
    featured: true,
  },
  {
    id: 'rfm-segmentation',
    title: 'Customer Segmentation with RFM Analysis & Automation',
    category: 'Automation',
    shortDescription:
      'Unsupervised customer segmentation model integrated with automated n8n notification routing based on RFM scores.',
    technologies: ['Pandas', 'K-Means', 'RFM Modeling', 'n8n', 'Telegram Bot API'],
    type: 'Unsupervised ML + n8n',
    githubUrl: 'https://github.com/Esraa-MOhamed7/Customer-Segmentation-with-RFM-Analysis',
    liveDemoUrl: 'https://www.linkedin.com/posts/esraa-mohamed-ml_machinelearning-ai-automation-activity-7450954305290977280-jXDI',
    overview:
      'An end-to-end customer intelligence system combining Recency, Frequency, and Monetary (RFM) modeling with K-Means clustering and automated Telegram notification dispatch via n8n.',
    problem:
      'E-commerce marketing teams often blast generic promotions to entire user bases, resulting in low conversion rates and unaddressed high-value customer churn.',
    approach:
      'Computed RFM metrics from transactional logs, applied log transformations and StandardScaler, and segmented customers into distinct personas using K-Means clustering. Linked the segmentation output to an n8n workflow that triggers automated Telegram alerts for VIP or at-risk segments.',
    workflowType: 'rfm_automation',
    workflowSteps: [
      { title: 'Transaction Logs', description: 'Customer purchase history & invoice data', type: 'input' },
      { title: 'RFM Calculation', description: 'Computes Recency, Frequency, Monetary values', type: 'process' },
      { title: 'K-Means Clustering', description: 'Assigns customer segment (VIP, At-Risk, Loyal)', type: 'model' },
      { title: 'n8n Telegram Alert', description: 'Sends automated notification to channel', type: 'automation' },
    ],
    featured: true,
  },
  {
    id: 'energy-forecasting',
    title: 'Hourly Energy Demand Forecasting',
    category: 'Machine Learning',
    shortDescription:
      'Machine learning time-series pipeline for evaluating power consumption patterns and predictive energy demand modeling.',
    technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Time Series Analysis'],
    type: 'Time Series Regression',
    githubUrl: 'https://github.com/Esraa-MOhamed7/Hourly-Energy-Demand-Forecasting',
    liveDemoUrl: 'https://www.linkedin.com/posts/esraa-mohamed-ml_machinelearning-timeseries-forecasting-activity-7420486303672283138-42f2',
    overview:
      'A machine learning pipeline for power grid forecasting, modeling temporal consumption variations across hourly intervals with lag features and rolling aggregations.',
    problem:
      'Electric utilities must balance power supply and demand continuously. Inaccurate hourly load forecasts lead to expensive grid inefficiencies and blackout risks.',
    approach:
      'Engineered comprehensive temporal features (hour, day of week, season, holiday indicators) and rolling statistical lags, benchmarking gradient boosted models against classical baselines.',
    featured: true,
  },
  {
    id: 'depression-detection',
    title: 'Suicide and Depression Detection',
    category: 'NLP',
    shortDescription:
      'Text classification pipeline analyzing emotional states and context patterns.',
    technologies: ['Python', 'NLP', 'PyTorch', 'Transformers', 'Scikit-Learn'],
    type: 'NLP Classification',
    githubUrl: 'https://github.com/Esraa-MOhamed7/Suicide-and-Depression-Detection',
    liveDemoUrl: 'https://www.linkedin.com/posts/esraa-mohamed-ml_nlp-machinelearning-ai-activity-7438298728270172160-0-84',
    overview:
      'A natural language processing framework developed to analyze unstructured online text and detect linguistic markers indicative of severe emotional distress or depression.',
    problem:
      'Early identification of mental health distress in online communities is essential for proactive intervention, yet manual monitoring is impossible at scale.',
    approach:
      'Built a complete NLP pipeline comparing TF-IDF + classical classifiers with deep neural sequence models and Transformer embeddings, emphasizing recall and sensitivity.',
    featured: true,
  },
];

// Alias for backward compatibility
export const FEATURED_PROJECTS = CORE_PROJECTS;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'ML & Data Science',
    description: 'Statistical modeling, feature engineering, and predictive algorithms.',
    icon: 'Cpu',
    skills: [
      { name: 'Scikit-Learn', highlight: true },
      { name: 'Pandas', highlight: true },
      { name: 'NumPy', highlight: true },
      { name: 'XGBoost', highlight: true },
      { name: 'Time Series Forecasting', highlight: true },
    ],
  },
  {
    name: 'Deep Learning & NLP',
    description: 'Neural networks, transformer architectures, and sequence modeling.',
    icon: 'Network',
    skills: [
      { name: 'PyTorch', highlight: true },
      { name: 'Transformers', highlight: true },
      { name: 'BERT', highlight: true },
      { name: 'Named Entity Recognition', highlight: true },
      { name: 'Text Classification', highlight: true },
    ],
  },
  {
    name: 'GenAI, Agents & MLOps',
    description: 'Prompt engineering, cognitive agent graphs, RAG architectures, and MLOps workflows.',
    icon: 'Sparkles',
    skills: [
      { name: 'LangChain', highlight: true },
      { name: 'LangGraph', highlight: true },
      { name: 'Prompt Engineering', highlight: true },
      { name: 'MLOps', highlight: true },
      { name: 'RAG (Guardrails & Citations)', highlight: true },
      { name: 'ChromaDB', highlight: true },
    ],
  },
  {
    name: 'Automation & APIs',
    description: 'Event-driven systems connecting AI models with production operations.',
    icon: 'Workflow',
    skills: [
      { name: 'n8n', highlight: true },
      { name: 'Webhooks', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'Flask', highlight: true },
      { name: 'ASP.NET Core', highlight: true },
    ],
  },
  {
    name: 'Languages, Visualization & Tools',
    description: 'Core development languages, BI dashboards, containerization, and data tools.',
    icon: 'Code2',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'Java', highlight: true },
      { name: 'C++', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'Power BI', highlight: true },
      { name: 'Tableau', highlight: true },
      { name: 'Excel', highlight: true },
      { name: 'Docker', highlight: true },
      { name: 'Git', highlight: true },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'depi',
    role: 'Machine Learning & AI Track',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Egypt (Ministry of Communications and Information Technology)',
    period: '2026',
    type: 'National Initiative',
    description:
      'Intensive government-sponsored initiative focusing on foundational and advanced machine learning, deep learning architectures, biomedical NLP transformers, and specialized modules in MLOps and Prompt Engineering.',
    keyLearnings: [
      'Advanced predictive modeling, regularization, and feature engineering',
      'PyTorch deep neural network architectures & sequence modeling with BERT',
      'Prompt Engineering techniques and GenAI agent pipelines',
      'MLOps principles, containerized model deployment, and lifecycle monitoring',
    ],
    tags: ['Machine Learning', 'Deep Learning', 'PyTorch', 'NLP', 'MLOps', 'Prompt Engineering'],
  },
  {
    id: 'nti',
    role: 'Data Analysis Training Program',
    organization: 'National Telecommunication Institute (NTI)',
    location: 'Egypt',
    period: '2024',
    type: 'Specialized Training',
    description:
      'Comprehensive hands-on training covering statistical data analysis, data cleaning, exploratory analysis (EDA), and interactive data visualization using Excel, Power BI, and Tableau.',
    keyLearnings: [
      'Exploratory Data Analysis with Pandas & Seaborn',
      'Business intelligence dashboards & reports with Power BI, Tableau, and Excel',
      'Relational schema design and advanced SQL querying',
      'Data preparation pipelines for machine learning modeling',
    ],
    tags: ['Data Analysis', 'Power BI', 'Tableau', 'Excel', 'SQL', 'Pandas', 'EDA'],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'hackerrank-sql',
    title: 'HackerRank SQL (Advanced & Intermediate)',
    issuer: 'HackerRank',
    description: 'Verified assessment in complex queries, joins, aggregations, window functions, and subqueries.',
    skills: ['SQL', 'Window Functions', 'Query Optimization', 'Relational Databases'],
    badgeType: 'Verified Skill Certificate',
  },
  {
    id: 'datacamp',
    title: 'DataCamp Professional Tracks',
    issuer: 'DataCamp',
    description: 'Comprehensive tracks in Python programming, Data Manipulation with Pandas, and Machine Learning Fundamentals.',
    skills: ['Python', 'Pandas', 'Scikit-Learn', 'Data Wrangling'],
    badgeType: 'Track Completion',
  },
];

export const EDUCATION_DATA: EducationItem = {
  institution: 'Faculty of Computers and Artificial Intelligence, Assiut University',
  degree: "Bachelor's Degree in Software Engineering",
  gpa: '3.86 / 4.0',
  timeline: 'Expected Graduation 2027',
  location: 'Assiut, Egypt',
  coursework: [
    'Data Structures & Algorithms',
    'Software Architecture & Design Patterns',
    'Database Systems (SQL)',
    'Theory of Automata',
    'Compilers',
    'Machine Learning',
    'Visual Programming',
  ],
  honors: 'Distinction & Honors Standing',
};
