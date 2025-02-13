interface VideoPlayerProps {
  placeholder: string
  title: string
}

export function VideoPlayer({ placeholder, title }: VideoPlayerProps) {
  return (
    <div className="relative bg-slate-800 rounded-lg overflow-hidden aspect-video mb-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-2">{title}</p>
          <p className="text-sm text-slate-500">{placeholder}</p>
        </div>
      </div>
    </div>
  )
}

