import { Sidebar } from "@/components/sidebar"
import type React from "react"

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen pt-16">
      <Sidebar />
      <div className="flex-1 px-4 py-8 md:px-8 overflow-y-auto">{children}</div>
    </div>
  )
}

