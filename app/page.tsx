import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  const steps = [
    {
      title: "Step 1: Basic Data Structures",
      href: "/learn/basic-data-structures",
      items: [
        { name: "Arrays", href: "/learn/basic-data-structures/arrays" },
        { name: "Linked Lists", href: "/learn/basic-data-structures/linked-lists" },
        { name: "Stacks", href: "/learn/basic-data-structures/stacks" },
        { name: "Queues", href: "/learn/basic-data-structures/queues" },
      ],
    },
    {
      title: "Step 2: Advanced Data Structures",
      href: "/learn/advanced-data-structures",
      items: ["Trees", "Graphs", "Hash Tables", "Heaps"],
    },
    {
      title: "Step 3: Basic Algorithms",
      href: "/learn/basic-algorithms",
      items: ["Sorting", "Searching", "Recursion", "Two Pointers"],
    },
    {
      title: "Step 4: Advanced Algorithms",
      href: "/learn/advanced-algorithms",
      items: ["Dynamic Programming", "Greedy Algorithms", "Backtracking", "Graph Algorithms"],
    },
    {
      title: "Step 5: Problem Solving Patterns",
      href: "/learn/problem-solving",
      items: ["Sliding Window", "Divide & Conquer", "BFS/DFS", "Pattern Matching"],
    },
    {
      title: "Step 6: System Design Basics",
      href: "/learn/system-design",
      items: ["Scalability", "Load Balancing", "Caching", "Database Design"],
    },
  ]

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Master Data Structures & Algorithms</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          A comprehensive, step-by-step guide to learning DSA. Follow our structured path from basic data structures to
          advanced algorithms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <Link key={step.title} href={step.href}>
            <Card className="h-full bg-slate-800/50 hover:bg-slate-800 transition-colors border-slate-700">
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
                <ul className="mt-4 space-y-2">
                  {step.items.map((item) => (
                    <li key={typeof item === "string" ? item : item.name}>
                      {typeof item === "string" ? (
                      <span className="text-slate-300">• {item}</span>
                      ) : (
                      <Link href={item.href} className="text-slate-300 hover:text-white">
                        • {item.name}
                      </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

