"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, Download, ExternalLink } from "lucide-react"

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Resume
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl h-[90vh] p-0">
          <DialogHeader className="p-4 flex flex-row items-center justify-between">
            <DialogTitle>Prakarsh Srivastava - Resume</DialogTitle>
            <div className="flex items-center gap-2">
              <a
                href="/resume-prakarsh-srivastava.pdf"
                download="Prakarsh_Srivastava_Resume.pdf"
                className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="h-4 w-4" />
                Download
              </a>
              <a
                href="/resume-prakarsh-srivastava.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
                Open in New Tab
              </a>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          <div className="w-full h-full bg-gray-100 dark:bg-gray-800 overflow-auto">
            <object data="/resume-prakarsh-srivastava.pdf" type="application/pdf" className="w-full h-full">
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <p className="mb-4">Unable to display PDF. Please download or open in a new tab.</p>
                <div className="flex gap-4">
                  <a
                    href="/resume-prakarsh-srivastava.pdf"
                    download="Prakarsh_Srivastava_Resume.pdf"
                    className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                  <a
                    href="/resume-prakarsh-srivastava.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open in New Tab
                  </a>
                </div>
              </div>
            </object>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
