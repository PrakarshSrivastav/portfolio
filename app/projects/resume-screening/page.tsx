import ProjectDetail from "@/app/components/project-detail"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ResumeScreeningPage() {
  return (
    <div className="container max-w-screen-xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/#projects">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Button>
        </Link>
      </div>
      <ProjectDetail
        title="Resume Screening Application"
        period="January 2025"
        description="An AI-powered resume screening system that automates the process of categorizing resumes, recommending suitable jobs based on skills, and extracting key information from candidate documents. This team project streamlines the recruitment process by providing comprehensive insights for efficient candidate screening."
        features={[
          "Developed an AI-powered resume screening system that automates resume categorization, job recommendation, and information extraction",
          "Implemented support for multiple file formats including PDF and TXT for resume uploads",
          "Created intelligent categorization by job title and industry to quickly sort candidates",
          "Built a job recommendation engine that matches candidates with suitable positions based on their skills",
          "Designed information extraction capabilities to pull out name, contact information, skills, and education details",
          "Produced a code explanation video available on YouTube for educational purposes",
          "Streamlined the candidate screening process for HR professionals and recruiters",
        ]}
        technologies={["Python", "Flask", "Natural Language Processing", "HTML", "CSS", "Machine Learning"]}
        githubLink="https://github.com/PrakarshSrivastav/NLP_PROJECT"
        image="/images/ats-scanner.png"
      />
    </div>
  )
}
