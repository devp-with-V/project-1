import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function QueuesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Queues in Data Structures</h1>
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
        <h2 className="text-xl font-semibold mb-4">Introduction to Queues</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. The first element
            inserted into the queue is the first one to be removed.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Characteristics:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>FIFO (First-In-First-Out) principle</li>
            <li>Insertion (enqueue) at rear end, deletion (dequeue) at front end</li>
            <li>Can be implemented using arrays or linked lists</li>
            <li>Used in many real-life scenarios and computer science applications</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Time Complexity:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enqueue: O(1)</li>
            <li>Dequeue: O(1)</li>
            <li>Front: O(1)</li>
            <li>Search: O(n)</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Queues in Data Structures" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Queue Operations</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Enqueue</h3>
          <p>Enqueue operation adds an element to the rear of the queue.</p>
          <VideoPlayer placeholder="Add enqueue operation video URL here" title="Queue Enqueue Operation" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Dequeue</h3>
          <p>Dequeue operation removes the front element from the queue.</p>
          <VideoPlayer placeholder="Add dequeue operation video URL here" title="Queue Dequeue Operation" />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Front</h3>
          <p>Front operation returns the front element of the queue without removing it.</p>
          <VideoPlayer placeholder="Add front operation video URL here" title="Queue Front Operation" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/learn/basic-data-structures/stacks">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous (Stacks)
          </Button>
        </Link>
        <Button variant="outline" disabled>
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

