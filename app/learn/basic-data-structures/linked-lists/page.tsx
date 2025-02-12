import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function LinkedListsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Linked Lists in Data Structures</h1>
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
        <h2 className="text-xl font-semibold mb-4">Introduction to Linked Lists</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            A linked list is a linear data structure in which elements are stored in nodes. Each node contains a data
            field and a reference (or link) to the next node in the sequence.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Characteristics:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dynamic size</li>
            <li>Efficient insertion and deletion</li>
            <li>No random access</li>
            <li>Extra memory space for pointers</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Time Complexity:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access: O(n)</li>
            <li>Search: O(n)</li>
            <li>Insertion: O(1)</li>
            <li>Deletion: O(1)</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Linked Lists in Data Structures" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Linked List Operations</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Insertion</h3>
          <p>Insertion in a linked list involves adding a new node at the beginning, end, or at a specific position.</p>
          <VideoPlayer placeholder="Add insertion video URL here" title="Linked List Insertion" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Deletion</h3>
          <p>
            Deletion in a linked list involves removing a node from the beginning, end, or from a specific position.
          </p>
          <VideoPlayer placeholder="Add deletion video URL here" title="Linked List Deletion" />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Traversal</h3>
          <p>
            Traversal in a linked list involves visiting each node of the list at least once in order to perform some
            specific operation.
          </p>
          <VideoPlayer placeholder="Add traversal video URL here" title="Linked List Traversal" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Link href="/learn/basic-data-structures/arrays">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous (Arrays)
          </Button>
        </Link>
        <Link href="/learn/basic-data-structures/stacks">
          <Button variant="outline">
            Next (Stacks)
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

