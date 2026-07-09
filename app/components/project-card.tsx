import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  detailsLink?: string
  impact?: string
  liveLink?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  detailsLink,
  impact,
  liveLink,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-primary/10 bg-card/90 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        {impact && <p className="mb-4 border-l-2 border-primary pl-3 text-sm font-medium text-foreground">{impact}</p>}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between gap-3 p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </Link>
          {liveLink && (
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <ExternalLink className="h-4 w-4" />
                Live
              </Button>
            </Link>
          )}
        </div>
        {detailsLink && (
          <Link href={detailsLink} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            View Details →
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
