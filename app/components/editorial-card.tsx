import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface EditorialCardProps {
  title: string
  organization: string
  role: string
  description: string
  link: string
  year: string
  highlights: string[]
}

export default function EditorialCard({
  title,
  organization,
  role,
  description,
  link,
  year,
  highlights,
}: EditorialCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="secondary">{year}</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm font-medium">{organization}</CardDescription>
        <p className="text-sm text-primary font-semibold mt-1">{role}</p>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{highlight}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              View Editorial
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
