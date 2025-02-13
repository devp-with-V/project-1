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
      items: [
        { name: "Trees", href: "/learn/advanced-data-structures/trees" },
        { name: "Graphs", href: "/learn/advanced-data-structures/graphs" },
        { name: "Hash Tables", href: "/learn/advanced-data-structures/hash-tables" },
        { name: "Heaps", href: "/learn/advanced-data-structures/heaps" },
      ],
    },
    {
      title: "Step 3: Basic Algorithms",
      href: "/learn/basic-algorithms",
      items: [
        { name: "Sorting", href: "/learn/basic-algorithms/sorting" },
        { name: "Searching", href: "/learn/basic-algorithms/searching" },
        { name: "Recursion", href: "/learn/basic-algorithms/recursion" },
        { name: "Two Pointers", href: "/learn/basic-algorithms/two-pointers" },
      ],
    },
    {
      title: "Step 4: Advanced Algorithms",
      href: "/learn/advanced-algorithms",
      items: [
        { name: "Dynamic Programming", href: "/learn/advanced-algorithms/dynamic-programming" },
        { name: "Greedy Algorithms", href: "/learn/advanced-algorithms/greedy-algorithms" },
        { name: "Backtracking", href: "/learn/advanced-algorithms/backtracking" },
        { name: "Graph Algorithms", href: "/learn/advanced-algorithms/graph-algorithms" },
      ],
    },
    {
      title: "Step 5: Problem Solving Patterns",
      href: "/learn/problem-solving",
      items: [
        { name: "Sliding Window", href: "/learn/problem-solving/sliding-window" },
        { name: "Divide & Conquer", href: "/learn/problem-solving/divide-and-conquer" },
        { name: "BFS/DFS", href: "/learn/problem-solving/bfs-dfs" },
        { name: "Pattern Matching", href: "/learn/problem-solving/pattern-matching" },
      ],
    },
    {
      title: "Step 6: System Design Basics",
      href: "/learn/system-design",
      items: [
        { name: "Scalability", href: "/learn/system-design/scalability" },
        { name: "Load Balancing", href: "/learn/system-design/load-balancing" },
        { name: "Caching", href: "/learn/system-design/caching" },
        { name: "Database Design", href: "/learn/system-design/database-design" },
      ],
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
          <Card
            key={step.title}
            className="h-full bg-slate-800/50 hover:bg-slate-800 transition-colors border-slate-700"
          >
            <CardHeader>
              <CardTitle>
                <Link href={step.href} className="hover:underline">
                  {step.title}
                </Link>
              </CardTitle>
              <ul className="mt-4 space-y-2">
                {step.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-300 hover:text-white">
                      • {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

