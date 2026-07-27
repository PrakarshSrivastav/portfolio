export type FaqItem = {
  category: string;
  question: string;
  answer: string | string[]; // string = paragraph, string[] = bullet points
};

export const faqItems: FaqItem[] = [
  {
    category: "About",
    question: "What does Prakarsh do?",
    answer: [
      "Backend and data engineer, working primarily in Java and Python",
      "Builds APIs, services, and data pipelines where correctness and state management matter",
      "Also builds full-stack side projects, using AI-assisted workflows for the frontend/TypeScript side so his own focus stays on the backend",
    ],
  },
  {
    category: "About",
    question: "What roles is he looking for?",
    answer: [
      "Junior/Backend Software Engineer, Java (Spring Boot) or Python (FastAPI)",
      "Data Engineer",
      "Open to full-time roles, particularly in Hungary and Europe",
    ],
  },
  {
    category: "Projects",
    question: "What are his featured projects?",
    answer: [
      "Cardle: a JWT-authenticated blackjack game with server-enforced state",
      "AsteroidWatch: a NASA NEO monitoring dashboard with a custom risk engine",
      "Chatly: a real-time WebSocket chat app with Redis-backed state",
      "VedAI: a RAG chatbot over Bhagavad Gita teachings using FAISS",
      "Distributed Job Queue Engine: exactly-once execution across worker nodes",
    ],
  },
  {
    category: "Projects",
    question: "What's his most technically impressive project?",
    answer: [
      "Distributed Job Queue Engine, most likely",
      "Priority queuing with exactly-once execution across 3 worker nodes, using PostgreSQL advisory locks",
      "Exponential backoff retry, dead-letter queues, and full audit logging",
      "The kind of distributed-systems problem that's easy to get subtly wrong",
    ],
  },
  {
    category: "Experience",
    question: "Where has he worked?",
    answer: [
      "Backend Developer, Aid Global Foundation (remote, since Feb 2026): refactoring a Node.js backend serving 10,000+ monthly users",
      "Software Developer Intern, Hungarian Startup University Program: built a JWT/WebSocket chat backend in Java",
      "Research Assistant, University of Debrecen: Python-based data pipelines for object detection models",
    ],
  },
  {
    category: "Experience",
    question: "What's a concrete result he's achieved?",
    answer: [
      "Cut Redis-cached query latency by 40%, round-trip time to sub-50ms (HSUP)",
      "Cut upload processing latency by 35% via parallelized backend integrations (Aid Global)",
      "Reduced failed-job recovery time by 40% (Distributed Job Queue Engine, Java/Spring Boot)",
    ],
  },
  {
    category: "Skills",
    question: "What's his tech stack?",
    answer: [
      "Core languages: Java and Python",
      "Backend: Spring Boot, FastAPI",
      "Data: PostgreSQL, Redis",
      "Deployment: Docker, GitHub Actions",
      "Frontend (TypeScript/React) when a project needs it, often AI-assisted so his own time stays on backend architecture and logic",
    ],
  },
  {
    category: "Skills",
    question: "Is he more backend or full-stack?",
    answer: [
      "Backend-first, by design",
      "Depth is in Java/Spring Boot and Python/FastAPI: API design, state, databases, deployment",
      "Can and does build frontends for his own projects, supported by AI-assisted development rather than as a primary specialty",
    ],
  },
  {
    category: "Skills",
    question: "Does he have data engineering experience?",
    answer: [
      "Yes, in Python specifically",
      "Azure Data Factory, Databricks, PySpark",
      "ETL/ELT pipeline work, alongside the backend engineering",
    ],
  },
  {
    category: "Education",
    question: "What's his educational background?",
    answer: [
      "BSc Computer Science, University of Debrecen (graduated Jan 2026, GPA 4.5/5.0, top 10% of cohort)",
      "MSc Computer Science, Software Architecture & Systems Design, University of Vienna (starting Sept 2026)",
    ],
  },
  {
    category: "Niche",
    question: "Has he contributed to open source?",
    answer: [
      "JReleaser (Java): fixed a JDK download timeout bug affecting CI builds",
      "OWASP VulnerableApp (Java/Spring Boot): fixed a clickjacking vulnerability, added Docker-based test automation",
    ],
  },
  {
    category: "Niche",
    question: "What's an unusual project he's built?",
    answer: [
      "VedAI: a RAG chatbot answering questions about Bhagavad Gita teachings",
      "Uses a FAISS vector search pipeline (Python) over the scripture corpus with persistent session memory",
      "Not the typical backend-engineer side project",
    ],
  },
  {
    category: "Niche",
    question: "Does he have leadership experience?",
    answer: [
      "Team Lead, real-time chat app at HSUP: earned the HSUP Scholarship",
      "Founding President, University of Debrecen's Student Clubs Council",
      "Captain, university football team",
    ],
  },
  {
    category: "Niche",
    question: "What languages does he speak?",
    answer: [
      "English (fluent)",
      "Hindi (native)",
      "French (conversational)",
      "Hungarian (conversational)",
      "German (learning)",
    ],
  },
  {
    category: "Niche",
    question: "How can I contact him?",
    answer: [
      "Email: prakarshsrivastava2004@gmail.com",
      "LinkedIn: linkedin.com/in/prakarsh-srivastava-2352412a7",
      "GitHub: github.com/PrakarshSrivastav",
    ],
  },
];