"use client"

import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react"

interface TapBubble {
  id: string
  x: number
  y: number
  color: string
  message: string
}

interface TapBubbleContextType {
  addTapBubble: (x: number, y: number, color?: string, message?: string) => void
}

const TapBubbleContext = createContext<TapBubbleContextType | undefined>(undefined)

export const useTapBubble = () => {
  const context = useContext(TapBubbleContext)
  if (!context) {
    throw new Error("useTapBubble must be used within a TapBubbleProvider")
  }
  return context
}

interface TapBubbleProviderProps {
  children: ReactNode
}

export default function TapBubbleProvider({ children }: TapBubbleProviderProps) {
  const [bubbles, setBubbles] = useState<TapBubble[]>([])

  const tips = [
    { message: "Great choice!", color: "border-notebook-blue bg-notebook-blue" },
    { message: "Keep learning!", color: "border-notebook-green bg-notebook-green" },
    { message: "You're awesome!", color: "border-notebook-yellow bg-notebook-yellow" },
    { message: "Study smart!", color: "border-notebook-red bg-notebook-red" },
    { message: "Nice tap!", color: "border-gray-400 bg-gray-400" },
  ]

  const addTapBubble = useCallback((x: number, y: number, color?: string, message?: string) => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)]
    const bubble: TapBubble = {
      id: Date.now().toString() + Math.random(),
      x,
      y,
      color: color || randomTip.color,
      message: message || randomTip.message,
    }

    setBubbles((prev) => [...prev, bubble])

    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== bubble.id))
    }, 1000)
  }, [])

  // Add global click listener
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Random chance to show bubble
      if (Math.random() < 0.3) {
        addTapBubble(e.clientX, e.clientY)
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [addTapBubble])

  return (
    <TapBubbleContext.Provider value={{ addTapBubble }}>
      {children}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`tap-bubble ${bubble.color} text-white text-xs font-bold flex items-center justify-center`}
          style={{
            left: bubble.x - 20,
            top: bubble.y - 20,
          }}
        >
          {bubble.message}
        </div>
      ))}
    </TapBubbleContext.Provider>
  )
}
