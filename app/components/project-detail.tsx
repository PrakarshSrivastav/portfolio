import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/lib/projects"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectDetailProps {
  project: Project
}

function estimateReadingTime(project: Project) {
  const words = [project.description, project.impact, ...project.features, ...project.technologies].join(" ").split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const readingTime = estimateReadingTime(project)

  return (
    <Card className="w-full overflow-hidden border-primary/10">
      <CardHeader className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <CardDescription>{project.period}</CardDescription>
            <CardTitle className="mt-2 text-3xl tracking-tight md:text-4xl">{project.title}</CardTitle>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{project.oneLine}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </Link>
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span>{readingTime} min read</span>
          <span>Last updated {project.updatedAt}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="relative min-h-[240px] w-full overflow-hidden rounded-md border bg-muted md:h-[420px]">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section>
            <h2 className="mb-2 text-lg font-semibold">Overview</h2>
            <p className="leading-7 text-muted-foreground">{project.description}</p>
          </section>

          <section className="rounded-md border bg-primary/5 p-4">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Impact</h2>
            <p className="font-medium leading-7">{project.impact}</p>
          </section>
        </div>

        <section>
          <h2 className="mb-3 text-lg font-semibold">Key Features</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="rounded-md border bg-card p-4 text-sm leading-6 text-muted-foreground">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  )
}
