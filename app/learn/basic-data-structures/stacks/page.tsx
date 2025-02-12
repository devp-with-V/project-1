import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function StacksPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Stacks in Data Structures</h1>
        <div className="flex gap-4 mb-6">
          <Link href="/learn/basic-data-structures">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Basic Data Structures
            </Button>
          </Link>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Introduction to Stacks</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. The last element
            inserted into the stack is the first one to be removed.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Characteristics:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>LIFO (Last-In-First-Out) principle</li>
            <li>Operations are performed at one end (top) only</li>
            <li>Can be implemented using arrays or linked lists</li>
            <li>Used in many algorithms and programming language runtimes</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Time Complexity:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Push: O(1)</li>
            <li>Pop: O(1)</li>
            <li>Peek: O(1)</li>
            <li>Search: O(n)</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Stacks in Data Structures" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Stack Operations</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Push</h3>
          <p>Push operation adds an element to the top of the stack.</p>
          <VideoPlayer placeholder="Add push operation video URL here" title="Stack Push Operation" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Pop</h3>
          <p>Pop operation removes the top element from the stack.</p>
          <VideoPlayer placeholder="Add pop operation video URL here" title="Stack Pop Operation" />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Peek (or Top)</h3>
          <p>Peek operation returns the top element of the stack without removing it.</p>
          <VideoPlayer placeholder="Add peek operation video URL here" title="Stack Peek Operation" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/learn/basic-data-structures/linked-lists">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous (Linked Lists)
          </Button>
        </Link>
        <Link href="/learn/basic-data-structures/queues">
          <Button variant="outline">
            Next (Queues)
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

