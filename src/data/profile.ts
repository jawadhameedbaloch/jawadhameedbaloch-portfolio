// Single source of truth for Jawad's public info.

export const profile = {
  name: 'Jawad Hameed Baloch',
  title: 'Generative AI Engineer',
  location: 'Karachi, Pakistan',
  email: 'jawadhameedbaloch@gmail.com',
  phone: '+92 326 9236946',
  links: {
    linkedin: 'https://www.linkedin.com/in/jawadhameedbaloch2/',
    github: 'https://github.com/jawadhameedbaloch',
    portfolio: 'https://jawadhameedbaloch.com',
    twitter: 'https://x.com/jawadhameedjhb',
    resume: '/Jawad Hameed Baloch-Resume.pdf',
  },
  summary:
    'I specialize in building production-grade Generative AI systems — from retrieval-augmented generation pipelines to autonomous agentic workflows. I architect scalable ML pipelines and enterprise-grade AI applications with Python, LangChain, and Hugging Face Transformers, integrating NLP models with RESTful APIs end to end.',

  aboutExtended:
    'I work solo, end to end — architecture, backend, frontend, and deployment — shipping production tools rather than prototypes. My focus is on building AI systems that solve real problems: intelligent search, automated document processing, and conversational AI that actually works at scale.',

  focusAreas: ['LLM Engineering', 'RAG Systems', 'Agentic Workflows', 'Production AI', 'Full-Stack AI'],

  skills: {
    'AI / Machine Learning': [
      'Generative AI',
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'NLP',
      'Prompt Engineering',
      'Supervised Fine-Tuning',
      'Semantic Search',
      'Agentic Workflows',
    ],
    'Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS'],
    'Frameworks & APIs': ['LangChain', 'Hugging Face Transformers', 'FastAPI', 'Flask', 'Streamlit', 'OpenAI API', 'LlamaIndex', 'PyTorch'],
    'Databases': ['Pinecone', 'ChromaDB', 'FAISS', 'PGVector', 'PostgreSQL', 'Supabase'],
    'Infrastructure': ['Git / GitHub', 'Docker', 'CI/CD', 'Firebase', 'Cloudflare R2', 'Vercel', 'Postman'],
  },

  experience: [
    {
      role: 'AI Product Engineer',
      org: 'ATS Resume Maker · Self-employed',
      date: 'May 2025 — Present',
      points: [
        'Built and deployed ATS Resume Maker (atsresumemaker.net) end-to-end — a production-grade AI-powered career platform that analyzes resumes against job descriptions, identifies ATS gaps, and helps job seekers optimize their applications.',
      ],
      technologies: ['AI Engineering', 'Python', 'Generative AI', 'LLMs', 'React', 'Next.js', 'TypeScript', 'Supabase'],
    },
    {
      role: 'AI Engineer Intern',
      org: 'DEN Pakistan',
      date: 'Jul 2025 — Sep 2025',
      points: [
        'Assisted in supervised fine-tuning (SFT) of LLMs and foundation models to improve reasoning and NLP accuracy.',
        'Partnered with cross-functional engineering teams to ship AI-driven features into core product infrastructure.',
        'Engineered large-scale data preprocessing pipelines for training datasets.',
        'Ran continuous evaluation of AI agents and mitigated hallucinations with data-driven metrics.',
      ],
      technologies: ['Python', 'LLMs', 'SFT', 'NLP', 'Data Preprocessing'],
    },
  ],

  education: {
    school: 'Sukkur IBA University, Pakistan',
    program: 'Bachelor of Science, Software Engineering',
    date: 'Oct 2021 — May 2026',
  },

  certifications: [
    'Post-training of LLMs! — University of Washington',
    'LangChain for LLM Application Development — LangChain',
    'Evaluating AI Agents — Arize AI',
    'Evaluating and Debugging Generative AI — Weights & Biases',
    'Building Generative AI Applications with Gradio — Hugging Face',
    'ChatGPT Prompt Engineering for Developers — OpenAI',
  ],

  projects: [
    {
      code: '01',
      name: 'ATS Resume Maker',
      tag: 'AI Career Platform',
      url: 'https://atsresumemaker.net',
      description:
        'A free AI-powered platform for building, analyzing, and optimizing resumes for ATS compliance. Includes a resume builder, ATS optimizer, analyzer, cover-letter generator, LinkedIn-to-ATS converter, and an interview-prep suite — no signup required.',
      stack: ['React', 'Vite', 'TypeScript', 'Express', 'Groq', 'Supabase'],
    },
    {
      code: '02',
      name: 'VYNTEX',
      tag: 'RAG Codebase Chat',
      url: 'https://getvyntex.vercel.app',
      description:
        'A retrieval-augmented chat system that enables conversational interaction with any GitHub codebase. Ingests a repository, generates embeddings, and answers questions grounded in the actual source code.',
      stack: ['FastAPI', 'ChromaDB', 'Sentence-Transformers', 'Groq', 'React'],
    },
    {
      code: '03',
      name: 'EchoFile',
      tag: 'File Utility',
      url: 'https://echofile.vercel.app',
      description: 'A lightweight, fast file-sharing web application built as a utility tool for quick and reliable file transfers.',
      stack: ['React', 'Vite', 'TypeScript'],
    },
    {
      code: '04',
      name: 'Rippy',
      tag: 'Personal AI Assistant',
      url: null,
      description:
        'A voice-activated AI assistant that executes system-level tasks and file-retrieval protocols, interpreting natural-language commands via Hugging Face Transformers and prompt engineering.',
      stack: ['Python', 'Hugging Face Transformers', 'Voice I/O'],
    },
  ],

  interests: ['Thriller & twist-ending cinema (Drishyam, Andhadhun, Oldboy, Knives Out)', 'Road trips', 'Solo AI product building'],
} as const;

export type Profile = typeof profile;
