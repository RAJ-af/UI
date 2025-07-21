"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface TapBubbleProps {
  x: number
  y: number
  message: string
  color?: string
  onClose: () => void
}

export default function TapBubble({ x, y, message, color = "bg-blue-500", onClose }: TapBubbleProps) {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed z-40 ${color} text-white px-3 py-2 rounded-lg text-sm max-w-xs bounce-in border-2 border-dashed border-white border-opacity-30`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: "translate(-50%, -100%)",
      }}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={handleClose} className="ml-2 p-1 hover:bg-white hover:bg-opacity-20 rounded">
          <X className="w-3 h-3" />
        </button>
      </div>
      <div
        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-current`}
      ></div>
    </div>
  )
}
