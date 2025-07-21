"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

interface TapBubble {
  id: string
  x: number
  y: number
  color: string
  text?: string
}

interface TapBubbleContextType {
  addTapBubble: (x: number, y: number, color?: string, text?: string) => void
}

const TapBubbleContext = createContext<TapBubbleContextType | null>(null)

export const useTapBubble = () => {
  const context = useContext(TapBubbleContext)
  if (!context) {
    throw new Error("useTapBubble must be used within TapBubbleProvider")
  }
  return context
}

interface TapBubbleProviderProps {
  children: ReactNode
}

export default function TapBubbleProvider({ children }: TapBubbleProviderProps) {
  const [bubbles, setBubbles] = useState<TapBubble[]>([])

  const addTapBubble = useCallback((x: number, y: number, color = "border-blue-500 bg-blue-500", text?: string) => {
    const id = Date.now().toString()
    const newBubble: TapBubble = { id, x, y, color, text }

    setBubbles((prev) => [...prev, newBubble])

    setTimeout(() => {
      setBubbles((prev) => prev.filter((bubble) => bubble.id !== id))
    }, 1000)
  }, [])

  // Add random tap bubbles on screen tap
  const handleScreenTap = useCallback(
    (e: React.MouseEvent) => {
      if (Math.random() > 0.7) {
        // 30% chance
        const colors = [
          "border-notebook-red bg-notebook-red",
          "border-notebook-blue bg-notebook-blue",
          "border-notebook-green bg-notebook-green",
          "border-notebook-yellow bg-notebook-yellow",
        ]
        const texts = ["Great!", "Nice!", "Keep going!", "Awesome!", "Well done!"]

        addTapBubble(
          e.clientX,
          e.clientY,
          colors[Math.floor(Math.random() * colors.length)],
          texts[Math.floor(Math.random() * texts.length)],
        )
      }
    },
    [addTapBubble],
  )

  return (
    <TapBubbleContext.Provider value={{ addTapBubble }}>
      <div onClick={handleScreenTap} className="min-h-screen">
        {children}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`tap-bubble ${bubble.color}`}
            style={{
              left: bubble.x - 20,
              top: bubble.y - 20,
            }}
          >
            {bubble.text && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white bg-gray-800 px-2 py-1 rounded whitespace-nowrap">
                {bubble.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </TapBubbleContext.Provider>
  )
}
