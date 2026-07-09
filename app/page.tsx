import CommandPalette from "@/app/components/command-palette"
import ContactForm from "@/app/components/contact-form"
import EditorialCard from "@/app/components/editorial-card"
import GithubStats from "@/app/components/github-stats"
import LeetCodeActivity from "@/app/components/leetcode-activity"
import NowSection from "@/app/components/now-section"
import ProjectCard from "@/app/components/project-card"
import ScrollArrow from "@/app/components/scroll-arrow"
import ScrollProgress from "@/app/components/scroll-progress"
import SiteHeader from "@/app/components/site-header"
import TechStack from "@/app/components/tech-stack"
import VisitCounter from "@/app/components/visit-counter"
import { Button } from "@/components/ui/button"
import { editorials } from "@/lib/editorials"
import { featuredProjects, otherProjects } from "@/lib/projects"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const heroSnippets = [
  { text: 'api.get("/health")', className: "hero-code-1" },
  { text: "SELECT * FROM projects", className: "hero-code-2" },
  { text: "redis.set(cacheKey, payload)", className: "hero-code-3" },
  { text: "@Query(nativeQuery = true)", className: "hero-code-4" },
  { text: "CREATE INDEX idx_events_created_at", className: "hero-code-5" },
  { text: "async def sync_telemetry():", className: "hero-code-6" },
  { text: "WHERE status = 'active'", className: "hero-code-7" },
  { text: "JOIN users ON users.id = sessions.user_id", className: "hero-code-8" },
  { text: "jwt.verify(accessToken)", className: "hero-code-9" },
  { text: "docker compose up --build", className: "hero-code-10" },
  { text: "EXPLAIN ANALYZE SELECT", className: "hero-code-11" },
  { text: "queue.publish('resume.parsed')", className: "hero-code-12" },
  { text: "cache.ttl('neo-feed')", className: "hero-code-13" },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-background animated-bg">
      <ScrollProgress />
      <CommandPalette />

      <SiteHeader />

      <main>
        <section
          id="about"
          className="relative isolate min-h-[calc(100svh-3.5rem)] overflow-hidden"
        >
          <div className="hero-code-field" aria-hidden="true">
            {heroSnippets.map((snippet) => (
              <span key={snippet.text} className={`hero-code-snippet ${snippet.className}`}>
                {snippet.text}
              </span>
            ))}
          </div>

          <div className="container relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-screen-xl content-center items-center gap-x-10 gap-y-8 px-4 pt-14 pb-36 md:pt-20 md:pb-40 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="hero-copy space-y-7">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-primary md:text-[0.95rem]">
                Backend/Data Engineer
              </p>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[4.2rem] lg:leading-none xl:text-7xl">
                  Prakarsh Srivastava
                </h1>
                <p className="max-w-2xl text-xl leading-8 text-muted-foreground md:text-[1.35rem]">
                  I build backend systems, APIs, and data-driven products where correctness, state, and deployment
                  details matter.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="https://github.com/PrakarshSrivastav" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/prakarsh-srivastava-2352412a7/" target="_blank" rel="noopener noreferrer">
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
                  <Button variant="outline" className="gap-2 whitespace-nowrap bg-transparent">
                    <Download className="h-4 w-4" />
                    Resume
                  </Button>
                </Link>
              </div>
            </div>

            <div className="target-roles-card rounded-md border bg-card/85 p-6 shadow-lg">
              <h2 className="mb-3 text-xl font-bold tracking-tight">Target roles</h2>
              <p className="mb-5 text-[0.95rem] leading-6 text-muted-foreground">
                Strong fit for junior Java backend roles, with active work across FastAPI, Redis, PostgreSQL, and
                production-style deployments.
              </p>
              <ul className="space-y-3 text-[0.95rem]">
                <li>
                  <span className="font-medium text-foreground">Junior Java Backend Engineer</span>
                  <span className="text-muted-foreground"> (Spring Boot)</span>
                </li>
                <li>Backend Software Engineer</li>
                <li>Junior Software Engineer</li>
                <li>Data Engineer</li>
              </ul>
            </div>

            <div className="hero-stat-strip grid gap-3 rounded-md border bg-background/70 p-5 shadow-sm backdrop-blur md:grid-cols-3 lg:col-span-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Focus</p>
                <p className="mt-1 text-sm font-medium">APIs, state, data systems</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Core stack</p>
                <p className="mt-1 text-sm font-medium">Java, FastAPI, PostgreSQL</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Recent work</p>
                <p className="mt-1 text-sm font-medium">Cardle, AsteroidWatch, Chatly</p>
              </div>
            </div>

            <div className="hero-ambient-statement lg:col-span-2">
              <span />
              <p>Currently building production-grade backend systems</p>
              <span />
            </div>
          </div>
          <ScrollArrow />
        </section>

        <NowSection />

        <section id="projects" className="py-12 md:py-24 lg:py-28">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Featured Work
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Backend-heavy case studies</h2>
              <p className="mt-4 text-muted-foreground">
                Four projects with stronger architecture stories, live deployments, and clearer engineering tradeoffs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.shortTitle ?? project.title}
                  description={project.oneLine}
                  image={project.image}
                  link={project.githubLink}
                  liveLink={project.liveLink}
                  tags={project.technologies.slice(0, 5)}
                  impact={project.impact}
                  detailsLink={`/projects/${project.slug}`}
                />
              ))}
            </div>

            <div className="mt-14">
              <h3 className="mb-4 text-xl font-semibold">Other projects</h3>
              <div className="divide-y rounded-md border bg-card/80">
                {otherProjects.map((project) => (
                  <div key={project.slug} className="grid gap-3 p-4 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                      <h4 className="font-semibold">{project.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{project.oneLine}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LeetCodeActivity />
        <GithubStats />

        <section id="editorial" className="bg-secondary/30 py-12 md:py-24 lg:py-28">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Editorial & Contributions
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Publications, research, and organizations where I contributed engineering or editorial work.
            </p>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {editorials.map((editorial) => (
                <EditorialCard key={`${editorial.title}-${editorial.year}`} {...editorial} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-28">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Tech Stack</h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-28">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex w-full max-w-screen-xl shrink-0 flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">© 2026 Prakarsh Srivastava. All rights reserved.</p>
          <div className="sm:ml-auto">
            <VisitCounter />
          </div>
        </div>
      </footer>
    </div>
  )
}
