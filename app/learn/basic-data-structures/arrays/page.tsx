import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ArraysPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Arrays in Data Structures</h1>
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
        <h2 className="text-xl font-semibold mb-4">Introduction to Arrays</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items
            of the same type together. This makes it easier to calculate the position of each element by simply adding
            an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by
            the name of the array).
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Key Characteristics:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Elements are stored contiguously</li>
            <li>Can access elements randomly using index</li>
            <li>Has a fixed size (in most programming languages)</li>
            <li>Homogeneous elements (same type)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Time Complexity:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access: O(1)</li>
            <li>Search: O(n)</li>
            <li>Insertion: O(n)</li>
            <li>Deletion: O(n)</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Video Explanation</h2>
        <VideoPlayer placeholder="Add your video URL here" title="Arrays in Data Structures" />
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Array Operations</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-6 mb-3">1. Traversing</h3>
          <p>Traversing an array means accessing each element of the array exactly once for processing.</p>
          <VideoPlayer placeholder="Add traversal video URL here" title="Array Traversal" />

          <h3 className="text-lg font-semibold mt-6 mb-3">2. Insertion</h3>
          <p>Insertion is the process of adding elements into the array at specified positions.</p>
          <VideoPlayer placeholder="Add insertion video URL here" title="Array Insertion" />

          <h3 className="text-lg font-semibold mt-6 mb-3">3. Deletion</h3>
          <p>
            Deletion refers to removing an existing element from the array and reorganizing all elements of an array.
          </p>
          <VideoPlayer placeholder="Add deletion video URL here" title="Array Deletion" />
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Button variant="outline" disabled>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Link href="/learn/basic-data-structures/linked-lists">
          <Button variant="outline">
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

