"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import Link from "next/link"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#now", label: "Now" },
  { href: "#projects", label: "Projects" },
  { href: "#editorial", label: "Editorial" },
  { href: "#contact", label: "Contact" },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/65">
      <div className="container mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">PS</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 grid gap-3">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link href={item.href} className="rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
