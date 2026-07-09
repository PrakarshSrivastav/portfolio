"use client"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { featuredProjects, otherProjects } from "@/lib/projects"
import { useEffect, useState } from "react"

const sections = [
  { label: "About", href: "#about" },
  { label: "Now", href: "#now" },
  { label: "Projects", href: "#projects" },
  { label: "Editorial", href: "#editorial" },
  { label: "Contact", href: "#contact" },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || event.key === "/") {
        event.preventDefault()
        setOpen((current) => !current)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const navigate = (href: string) => {
    setOpen(false)
    window.location.href = href
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a section or project..." />
      <CommandList>
        <CommandEmpty>No result found.</CommandEmpty>
        <CommandGroup heading="Sections">
          {sections.map((section) => (
            <CommandItem key={section.href} onSelect={() => navigate(section.href)}>
              {section.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Projects">
          {[...featuredProjects, ...otherProjects].map((project) => (
            <CommandItem key={project.slug} onSelect={() => navigate(`/projects/${project.slug}`)}>
              {project.shortTitle ?? project.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
