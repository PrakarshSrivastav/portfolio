import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectDetailProps {
  title: string
  period: string
  description: string
  features: string[]
  technologies: string[]
  githubLink: string
  image?: string
}

export default function ProjectDetail({
  title,
  period,
  description,
  features,
  technologies,
  githubLink,
  image,
}: ProjectDetailProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{period}</CardDescription>
          </div>
          <Link href={githubLink} target="_blank">
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {image && (
          <div className="relative w-full h-[300px] rounded-md overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
        )}

        <div>
          <h3 className="font-medium text-lg mb-2">Overview</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-2">Key Features</h3>
          <ul className="list-disc pl-5 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-muted-foreground">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
