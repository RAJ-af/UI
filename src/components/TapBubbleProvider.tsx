"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface TapBubble {
  id: number
  x: number
  y: number
  message: string
}

interface TapBubbleContextType {
  bubbles: TapBubble[]
  addBubble: (x: number, y: number, message: string) => void
}

const TapBubbleContext = createContext<TapBubbleContextType | null>(null)

const helpfulTips = [
  "Try our AI assistant for instant help!",
  "Upload your notes to the library",
  "Use the timer to stay focused",
  "Scan problems with your camera",
  "Track your study streak daily",
  "Join our WhatsApp community",
  "Great job exploring!",
  "Keep up the good work!",
]

export function TapBubbleProvider({ children }: { children: React.ReactNode }) {
  const [bubbles, setBubbles] = useState<TapBubble[]>([])

  const addBubble = (x: number, y: number, message: string) => {
    const id = Date.now()
    setBubbles((prev) => [...prev, { id, x, y, message }])

    setTimeout(() => {
      setBubbles((prev) => prev.filter((bubble) => bubble.id !== id))
    }, 2000)
  }

  const handleGlobalClick = (e: React.MouseEvent) => {
    if (Math.random() > 0.3) return // Only show 30% of the time

    const message = helpfulTips[Math.floor(Math.random() * helpfulTips.length)]
    addBubble(e.clientX, e.clientY, message)
  }

  return (
    <TapBubbleContext.Provider value={{ bubbles, addBubble }}>
      <div onClick={handleGlobalClick} className="min-h-screen">
        {children}
        <div className="fixed inset-0 pointer-events-none z-50">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute bg-notebook-blue text-white px-3 py-1 rounded-full text-sm animate-tap-bubble"
              style={{
                left: bubble.x - 50,
                top: bubble.y - 30,
                animationFillMode: "forwards",
              }}
            >
              {bubble.message}
            </div>
          ))}
        </div>
      </div>
    </TapBubbleContext.Provider>
  )
}

export const useTapBubbles = () => {
  const context = useContext(TapBubbleContext)
  if (!context) {
    throw new Error("useTapBubbles must be used within TapBubbleProvider")
  }
  return context
}

// ✅ Default export added - यही missing था!
export default TapBubbleProvider
