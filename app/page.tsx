"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import ScrollArrow from "./components/scroll-arrow"
import EditorialCard from "./components/editorial-card"

export default function Page() {
  return (
    <div className="min-h-screen bg-background animated-bg">
      {/* Floating code snippets */}
      <div className="floating-element floating-code float-1 text-primary">
        function hello() &#123; return 'world' &#125;
      </div>
      <div className="floating-element floating-code float-2 text-primary">import React from 'react'</div>
      <div className="floating-element floating-code float-3 text-primary">const [data, setData] = useState()</div>
      <div className="floating-element floating-code float-4 text-primary">async function fetchData()</div>
      <div className="floating-element floating-code float-5 text-primary">public static void main()</div>
      <div className="floating-element floating-code float-6 text-primary">SELECT * FROM users</div>
      <div className="floating-element floating-code float-7 text-primary">git commit -m 'fix'</div>
      <div className="floating-element floating-code float-8 text-primary">console.log("debugging...")</div>
      <div className="floating-element floating-code float-9 text-primary">pipeline.run('data_cleaning')</div>

      {/* Floating particles */}
      <div className="floating-element particle particle-1 float-2"></div>
      <div className="floating-element particle particle-2 float-3"></div>
      <div className="floating-element particle particle-3 float-4"></div>
      <div className="floating-element particle particle-1 float-5"></div>
      <div className="floating-element particle particle-2 float-6"></div>
      <div className="floating-element particle particle-3 float-1"></div>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-screen-xl mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold">PS</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#editorial" className="transition-colors hover:text-foreground/80">
                Editorial
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
          <section id="about" className="py-12 md:py-24 lg:py-32 relative min-h-[90vh]">
    <div className="container max-w-screen-xl mx-auto px-4 relative">
      {/* Center content */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center w-full md:pr-40">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Prakarsh Srivastava
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Solving real-world problems, one line of code at a time — focused on backend engineering
            and data-driven systems.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
  <Link href="https://github.com/PrakarshSrivastav" target="_blank">
    <Button variant="outline" size="icon" aria-label="GitHub">
      <Github className="h-4 w-4" />
    </Button>
  </Link>

  <Link href="https://www.linkedin.com/in/prakarsh-srivastava-2352412a7/" target="_blank">
    <Button variant="outline" size="icon" aria-label="LinkedIn">
      <Linkedin className="h-4 w-4" />
    </Button>
  </Link>

  <Link href="mailto:prakarshsrivastava2004@gmail.com">
    <Button variant="outline" size="icon" aria-label="Email">
      <Mail className="h-4 w-4" />
    </Button>
  </Link>

  <Link href="/prakarsh_resume-2.pdf" download>
    <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
      <Download className="h-4 w-4" />
      Download Resume
    </Button>
  </Link>
</div>

      </div>

      {/* Job roles card */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 p-5 bg-card rounded-lg shadow-lg hidden md:block max-w-xs">
        <h2 className="text-lg font-bold tracking-tight mb-2 text-left">
          Target roles
        </h2>

        <p className="text-sm text-muted-foreground mb-3 text-left">
          Strong fit for junior Java backend roles. Also open to backend software & data roles.
        </p>

        <ul className="list-disc list-outside text-gray-500 dark:text-gray-400 text-left pl-5 space-y-1">
          <li>
            <span className="font-medium text-foreground">Junior Java Backend Engineer</span>
            <span className="text-muted-foreground"> (Spring Boot)</span>
          </li>
          <li>Backend Software Engineer</li>
          <li>Junior Software Engineer</li>
          <li>Data Engineer</li>
        </ul>
      </div>

      <ScrollArrow />
    </div>
  </section>

        <section id="editorial" className="py-12 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
              Editorial & Contributions
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Showcasing my contributions to publications and organizations where I've been recognized for my work.
            </p>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <EditorialCard
                title="Research Assistant – Object Detection"
                organization="University of Debrecen – Faculty of Informatics"
                role="Research Assistant"
                description="Created and validated a dataset of 5,000+ annotated satellite and microscopy images to support training of YOLO-based object detection models. Integrated curated datasets into automated detection pipelines for machine learning experiments."
                link="#"
                year="April 2025 – June 2025"
                highlights={[
                  "Created and validated a dataset of 5,000+ annotated satellite and microscopy images",
                  "Supported training of YOLO-based object detection models",
                  "Integrated curated datasets into automated detection pipelines",
                ]}
              />
              <EditorialCard
                title="Hungarian Startup University Program"
                organization="University of Debrecen"
                role="Software Developer"
                description="Developed a real-time chat application with a secure backend, implementing JWT-based authentication and OAuth for session management, and designing a scalable publish–subscribe architecture using WebSockets. Improved system performance and reliability by integrating Redis caching. Worked within an Agile/Scrum environment."
                link="https://github.com/PrakarshSrivastav/ChatApp-WebSocket"
                year="Mar 2025 – Sep 2025"
                highlights={[
                  "Developed a real-time chat application with a secure backend (JWT, OAuth, WebSockets)",
                  "Improved system performance and reliability with Redis caching",
                  "Contributed in an Agile/Scrum environment (sprint planning, code reviews, iterative feature delivery)",
                ]}
              />
              <EditorialCard
                title="Flying High Magazine"
                organization="Indian Language School"
                role="Developer & Editorial Team Member"
                description="Recognized as part of the core development team that created the first-ever digital edition of the school magazine during the COVID-19 pandemic. Contributed to over 20,000 lines of code and 400+ man-hours of work."
                link="https://ils-magazine.github.io/Flying_High/HomePage/Editorial.html"
                year="2020-2021"
                highlights={[
                  "Part of the 5-member student development team",
                  "Contributed to coding and proofreading",
                  "Helped create the historical digital edition",
                ]}
              />
              <EditorialCard
                title="Aid Global Foundation"
                organization="Aid Global NGO"
                role="Backend Developer - Admin Dashboard"
                description="Contributed to the development of the Aid Global Foundation website, focusing on backend development for the admin dashboard to help manage and streamline organizational operations."
                link="https://www.aidglobal.ngo/developers"
                year="2025"
                highlights={[
                  "Backend developer for admin dashboard",
                  "Open source contribution",
                  "NGO platform development",
                ]}
              />
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <ProjectCard
                title="Expense-o-meter"
                description="A personal finance tracking application that helps users monitor expenses, create budgets, and visualize spending patterns."
                image="/images/expense-o-meter.jpeg"
                link="https://github.com/PrakarshSrivastav/expense-o-meter"
                tags={["Java", "SpringBoot", "PostGreSQL", "JPA"]}
                detailsLink="/projects/expense-o-meter"
              />
              <ProjectCard
                title="VedAI – AI Chatbot on Bhagavad Gita"
                description="An AI-powered chatbot using RAG model and FAISS vector database for efficient retrieval from Bhagavad Gita teachings with persistent chat history."
                image="/ai-chatbot-interface-with-ancient-indian-spiritual.jpg"
                link="https://github.com/PrakarshSrivastav/VedAI"
                tags={["Python", "FastAPI", "RAG", "FAISS", "NLP"]}
                detailsLink="/projects/vedai"
              />
              <ProjectCard
                title="Chatly"
                description="A real-time chat application built with Spring Boot and WebSockets, featuring persistent connections and user activity tracking."
                image="/images/chatly.png"
                link="https://github.com/PrakarshSrivastav/ChatApp-WebSocket"
                tags={["Spring Boot", "WebSockets", "DragonflyDB", "Redis", "Docker"]}
                detailsLink="/projects/chatly"
              />
              <ProjectCard
                title="Premier League Player Stats App"
                description="A Spring Boot web application for analyzing Premier League player statistics, designed for Fantasy Premier League enthusiasts to make data-driven decisions."
                image="/images/premier-league.png"
                link="https://github.com/PrakarshSrivastav/PremBackYard"
                tags={["Spring Boot", "PostgreSQL", "Thymeleaf", "HTML/CSS", "JavaScript"]}
                detailsLink="/projects/premier-league-stats"
              />
              <ProjectCard
                title="Resume Screening Application"
                description="An AI-powered resume screening system that automates resume categorization, job recommendation, and information extraction using NLP."
                image="/images/ats-scanner.png"
                link="https://github.com/PrakarshSrivastav/NLP_PROJECT"
                tags={["Python", "Flask", "NLP", "HTML/CSS", "Machine Learning"]}
                detailsLink="/projects/resume-screening"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container max-w-screen-xl mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Prakarsh Srivastava. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
