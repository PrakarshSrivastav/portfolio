import ProjectDetail from "@/app/components/project-detail"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ChatlyPage() {
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
        title="Chatly"
        period="February 2025 - March 2025"
        description="A real-time chat application built with Spring Boot and WebSockets, providing uninterrupted messaging capabilities and persistent user connections. The application features user activity tracking and is containerized for easy deployment."
        features={[
          "Built a real-time chat application using Spring Boot and WebSockets for uninterrupted messaging",
          "Implemented persistent connections to ensure smooth user experience without interruptions",
          "Integrated DragonflyDB with Redis connection to efficiently manage active users and message history",
          "Developed user activity tracking to monitor join/leave events for better engagement insights",
          "Containerized the application with Docker for seamless deployment across different environments",
          "Designed a responsive and intuitive user interface for both desktop and mobile users",
        ]}
        technologies={["Spring Boot", "WebSockets", "DragonflyDB", "Redis", "Docker", "Java"]}
        githubLink="https://github.com/PrakarshSrivastav/ChatApp-WebSocket"
        image="/images/chatly.png"
      />
    </div>
  )
}
