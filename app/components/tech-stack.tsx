import { Card } from "@/components/ui/card"
import { technologies } from "@/lib/tech-stack"

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="mb-4 text-lg font-semibold">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
