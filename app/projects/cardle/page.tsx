import ProjectDetail from "@/app/components/project-detail"
import { Button } from "@/components/ui/button"
import { getProjectBySlug } from "@/lib/projects"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function CardlePage() {
  const project = getProjectBySlug("cardle")

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-12">
      <div className="mb-6">
        <Link href="/#projects">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Button>
        </Link>
      </div>
      <ProjectDetail project={project} />
    </div>
  )
}
