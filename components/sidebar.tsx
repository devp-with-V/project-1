import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const topics = [
    {
      title: "Basic Data Structures",
      items: [
        { name: "Arrays", href: "/learn/basic-data-structures/arrays" },
        { name: "Linked Lists", href: "/learn/basic-data-structures/linked-lists" },
        { name: "Stacks", href: "/learn/basic-data-structures/stacks" },
        { name: "Queues", href: "/learn/basic-data-structures/queues" },
      ],
    },
    {
      title: "Advanced Data Structures",
      items: [
        { name: "Trees", href: "/learn/advanced-data-structures/trees" },
        { name: "Graphs", href: "/learn/advanced-data-structures/graphs" },
        { name: "Hash Tables", href: "/learn/advanced-data-structures/hash-tables" },
        { name: "Heaps", href: "/learn/advanced-data-structures/heaps" },
      ],
    },
  ]

  return (
    <div className="hidden md:block w-64 shrink-0 border-r border-slate-800 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto bg-slate-900">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Topics</h2>
        {topics.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-2 py-1 rounded text-sm",
                      pathname === item.href ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800/50",
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

