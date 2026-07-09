export interface TechCategory {
  category: string
  skills: string[]
}

export const technologies: TechCategory[] = [
  {
    category: "Core Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript"],
  },
  {
    category: "Backend Frameworks",
    skills: ["Spring Boot", "FastAPI", "Spring Security", "Node.js"],
  },
  {
    category: "Databases & Data",
    skills: ["PostgreSQL", "MySQL", "Oracle", "Redis", "FAISS"],
  },
  {
    category: "DevOps & Tooling",
    skills: ["Git", "Docker", "Maven", "Postman", "pgAdmin", "Jira", "Vercel", "Railway"],
  },
  {
    category: "Spoken Languages",
    skills: ["English (Fluent)", "Hindi (Native)", "French (Intermediate)", "Hungarian (Beginner)", "German (Beginner)"],
  },
]
