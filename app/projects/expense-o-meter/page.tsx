import ProjectDetail from "@/app/components/project-detail"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ExpenseOMeterPage() {
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
        title="Expense-o-meter"
        period="October 2024 - December 2024"
        description="A comprehensive personal finance tracking application that helps users monitor expenses, create budgets, and visualize spending patterns to make better financial decisions."
        features={[
          "Expense tracking with categorization and tagging system for detailed financial analysis",
          "Interactive dashboards with charts and graphs to visualize spending patterns over time",
          "Budget creation and management with alerts for overspending in specific categories",
          "Recurring expense tracking and bill payment reminders to avoid late fees",
        ]}
        technologies={["Java", "SpringBoot", "PostGreSQL", "JPA"]}
        githubLink="https://github.com/PrakarshSrivastav/ExpenseTracker"
        image="/images/expense-o-meter.jpeg"
      />
    </div>
  )
}
