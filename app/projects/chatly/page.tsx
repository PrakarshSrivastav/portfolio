import ProjectDetail from "@/app/components/project-detail"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"
import { notFound } from "next/navigation"

export default function ChatlyPage() {
  const project = getProjectBySlug("chatly")

  if (!project) {
    notFound()
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-12 px-4">
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
