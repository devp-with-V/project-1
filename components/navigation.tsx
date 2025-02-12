import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-slate-900/50 backdrop-blur-xl border-slate-800">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-2xl text-white">
            DSA Guide
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/roadmap" className="text-slate-200 hover:text-white">
              Roadmap
            </Link>
            <Link href="/docs" className="text-slate-200 hover:text-white">
              Docs
            </Link>
            <Link href="/examples" className="text-slate-200 hover:text-white">
              Examples
            </Link>
          </div>
        </div>
        <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700">
          Get Started
        </Button>
      </div>
    </nav>
  )
}

