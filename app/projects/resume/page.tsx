"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ResumePage() {
  // Redirect to PDF on page load
  useEffect(() => {
    window.location.href = "/projects/resume-prakarsh-srivastava.pdf"
  }, [])

  return (
    <div className="container max-w-screen-xl mx-auto py-12 px-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Redirecting to Resume...</h1>
      <p className="mb-8">If you are not redirected automatically, please click the button below:</p>
      <div className="flex gap-4">
        <a href="/projects/resume-prakarsh-srivastava.pdf" target="_blank" rel="noopener noreferrer">
          <Button>View Resume</Button>
        </a>
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
