import ProjectDetail from "@/app/components/project-detail"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PremierLeagueStatsPage() {
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
        title="Premier League Player Stats App"
        period="January 2025 - February 2025"
        description="A full-stack web application to analyze and display Premier League player statistics, providing users with detailed performance insights. Targeted at Fantasy Premier League (FPL) enthusiasts looking to optimize their squads through data-driven decision-making."
        features={[
          "Developed a Spring Boot-Based Web Application with full-stack capabilities for Premier League player statistics analysis",
          "Implemented advanced filtering options allowing users to refine player data based on position, nationality, and club",
          "Optimized data storage with PostgreSQL for efficient management of large volumes of player statistics",
          "Built a responsive and interactive frontend using HTML, CSS, and JavaScript with Thymeleaf for server-side rendering",
          "Designed specifically for Fantasy Premier League players to help identify top-performing players based on various statistical metrics",
        ]}
        technologies={["Spring Boot", "PostgreSQL", "Thymeleaf", "HTML/CSS", "JavaScript"]}
        githubLink="https://github.com/PrakarshSrivastav/PremBackYard"
        image="/images/premier-league.png"
      />
    </div>
  )
}
