export type ProjectStatus = "featured" | "other"

export interface Project {
  slug: string
  title: string
  shortTitle?: string
  status: ProjectStatus
  description: string
  oneLine: string
  impact: string
  period: string
  image: string
  githubLink: string
  liveLink?: string
  technologies: string[]
  features: string[]
  updatedAt: string
}

export const projects: Project[] = [
  {
    slug: "cardle",
    title: "Cardle",
    status: "featured",
    description:
      "A daily blackjack guessing game built around secure server-owned game state. Players authenticate, receive a daily challenge, and submit guesses against backend-enforced rules rather than trusting client-side logic.",
    oneLine: "Daily blackjack guessing game with authenticated, server-enforced state.",
    impact: "Production JWT auth, server-enforced daily game state, zero client-trust design",
    period: "2026",
    image: "/images/cardle.png",
    githubLink: "https://github.com/PrakarshSrivastav/Cardle",
    liveLink: "https://cardle-six.vercel.app",
    technologies: ["FastAPI", "PostgreSQL", "JWT", "React", "TypeScript", "Railway", "Vercel"],
    features: [
      "Designed a zero client-trust game flow where the backend owns daily state, answer validation, and attempt tracking",
      "Implemented JWT authentication for protected player sessions and persistent account data",
      "Modeled PostgreSQL entities for users, daily games, attempts, and result history",
      "Deployed the API and frontend separately using Railway and Vercel for a production-style split architecture",
    ],
    updatedAt: "2026-07-04",
  },
  {
    slug: "asteroidwatch",
    title: "AsteroidWatch",
    status: "featured",
    description:
      "A near-Earth object monitoring dashboard and collision-risk engine that combines NASA NeoWs telemetry with cached API responses and custom physics-based scoring.",
    oneLine: "NEO monitoring dashboard with cached NASA telemetry and collision-risk scoring.",
    impact: "Custom physics-based risk engine with Torino scale approximation, Redis-cached telemetry",
    period: "2026",
    image: "/images/asteroidwatch.png",
    githubLink: "https://github.com/PrakarshSrivastav/AsteroidWatch",
    liveLink: "https://asteroid-watch-pearl.vercel.app/",
    technologies: ["FastAPI", "Redis", "NASA NeoWs API", "Python", "Risk Modeling", "Vercel"],
    features: [
      "Built a FastAPI backend that normalizes NASA NeoWs asteroid telemetry for dashboard consumption",
      "Added Redis caching to reduce repeated external API calls and keep the UI responsive",
      "Implemented a custom risk engine using velocity, miss distance, size estimates, and Torino-style approximation",
      "Presented risk data in a scan-friendly dashboard focused on monitoring and prioritization",
    ],
    updatedAt: "2026-07-04",
  },
  {
    slug: "chatly",
    title: "Chatly",
    status: "featured",
    description:
      "A real-time chat application built with Spring Boot and WebSockets, providing uninterrupted messaging capabilities and persistent user connections.",
    oneLine: "Real-time chat app with persistent WebSocket connections and Redis-backed activity state.",
    impact: "Real-time bidirectional messaging over WebSockets with Redis-backed state",
    period: "February 2025 - March 2025",
    image: "/images/chatly.png",
    githubLink: "https://github.com/PrakarshSrivastav/ChatApp-WebSocket",
    technologies: ["Spring Boot", "WebSockets", "DragonflyDB", "Redis", "Docker", "Java"],
    features: [
      "Built a real-time chat application using Spring Boot and WebSockets for uninterrupted messaging",
      "Implemented persistent connections to ensure smooth user experience without interruptions",
      "Integrated DragonflyDB with Redis connection to efficiently manage active users and message history",
      "Developed user activity tracking to monitor join and leave events for better engagement insights",
      "Containerized the application with Docker for consistent deployment across environments",
      "Designed a responsive user interface for desktop and mobile users",
    ],
    updatedAt: "2026-07-04",
  },
  {
    slug: "vedai",
    title: "VedAI - AI Chatbot on Bhagavad Gita",
    shortTitle: "VedAI",
    status: "featured",
    description:
      "An AI-powered chatbot that brings Bhagavad Gita teachings into a conversational interface using FastAPI, retrieval-augmented generation, and FAISS vector search.",
    oneLine: "RAG chatbot for Bhagavad Gita teachings with persistent chat context.",
    impact: "Retrieval-augmented generation pipeline with FAISS vector search over scripture corpus",
    period: "July 2025 - September 2025",
    image: "/ai-chatbot-interface-with-ancient-indian-spiritual.jpg",
    githubLink: "https://github.com/PrakarshSrivastav/VedAI",
    technologies: ["Python", "FastAPI", "RAG", "FAISS", "NLP", "Machine Learning", "Vector Database"],
    features: [
      "Built a FastAPI backend for high-performance conversational endpoints",
      "Integrated FAISS vector search to retrieve semantically relevant passages from the Bhagavad Gita",
      "Implemented a retrieval-augmented generation pipeline for grounded responses",
      "Designed persistent user chat history to preserve context across sessions",
      "Optimized the system for lightweight deployment while maintaining useful response quality",
    ],
    updatedAt: "2026-07-04",
  },
  {
    slug: "expense-o-meter",
    title: "Expense-o-meter",
    status: "other",
    description:
      "A comprehensive personal finance tracking application that helps users monitor expenses, create budgets, and visualize spending patterns to make better financial decisions.",
    oneLine: "Java/Spring Boot/PostgreSQL finance tracker with budgets and recurring expenses.",
    impact: "Budgeting, recurring expense tracking, and spending categorization in a Spring Boot backend",
    period: "October 2024 - December 2024",
    image: "/images/expense-o-meter.jpeg",
    githubLink: "https://github.com/PrakarshSrivastav/expense-o-meter",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JPA"],
    features: [
      "Expense tracking with categorization and tagging for detailed financial analysis",
      "Interactive dashboards to visualize spending patterns over time",
      "Budget creation and management with category-level overspending alerts",
      "Recurring expense tracking and bill payment reminders",
    ],
    updatedAt: "2026-07-04",
  },
  {
    slug: "premier-league-stats",
    title: "Premier League Player Stats App",
    status: "other",
    description:
      "A full-stack web application to analyze and display Premier League player statistics for Fantasy Premier League enthusiasts.",
    oneLine: "Spring Boot/Thymeleaf FPL stats analysis tool.",
    impact: "Data-driven filtering for Premier League player performance analysis",
    period: "January 2025 - February 2025",
    image: "/images/premier-league.png",
    githubLink: "https://github.com/PrakarshSrivastav/PremBackYard",
    technologies: ["Spring Boot", "PostgreSQL", "Thymeleaf", "HTML/CSS", "JavaScript"],
    features: [
      "Developed a Spring Boot web application for Premier League player statistics analysis",
      "Implemented filters by position, nationality, and club",
      "Optimized data storage with PostgreSQL for player statistics",
      "Built a responsive frontend using Thymeleaf, HTML, CSS, and JavaScript",
      "Designed the app for Fantasy Premier League decision support",
    ],
    updatedAt: "2026-07-04",
  },
  {
    slug: "resume-screening",
    title: "Resume Screening Application",
    status: "other",
    description:
      "An AI-powered resume screening system that automates resume categorization, job recommendation, and information extraction from candidate documents.",
    oneLine: "Python/Flask/NLP resume categorization and job-matching tool.",
    impact: "Automated resume parsing, categorization, and recommendation workflows for recruiters",
    period: "January 2025",
    image: "/images/ats-scanner.png",
    githubLink: "https://github.com/PrakarshSrivastav/NLP_PROJECT",
    technologies: ["Python", "Flask", "Natural Language Processing", "HTML", "CSS", "Machine Learning"],
    features: [
      "Developed an AI-powered resume screening system for categorization and job recommendation",
      "Supported PDF and TXT resume uploads",
      "Created intelligent categorization by job title and industry",
      "Built a recommendation engine that matches candidates to roles based on skills",
      "Extracted names, contact details, skills, and education from candidate documents",
      "Produced a code explanation video for educational walkthroughs",
    ],
    updatedAt: "2026-07-04",
  },
]

export const featuredProjects = projects.filter((project) => project.status === "featured")
export const otherProjects = projects.filter((project) => project.status === "other")

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
