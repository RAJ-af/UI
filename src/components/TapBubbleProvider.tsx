"use client"

import type React from "react"
import { createContext, useContext, useCallback } from "react"

interface TapBubbleContextType {
  createBubble: (x: number, y: number) => void
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
  children: React.ReactNode
}

export default function TapBubbleProvider({ children }: TapBubbleProviderProps) {
  const createBubble = useCallback((x: number, y: number) => {
    const bubble = document.createElement("div")
    bubble.className = "tap-bubble"
    bubble.style.left = `${x - 25}px`
    bubble.style.top = `${y - 25}px`
    bubble.style.width = "50px"
    bubble.style.height = "50px"

    document.body.appendChild(bubble)

    setTimeout(() => {
      if (document.body.contains(bubble)) {
        document.body.removeChild(bubble)
      }
    }, 1000)
  }, [])

  return <TapBubbleContext.Provider value={{ createBubble }}>{children}</TapBubbleContext.Provider>
}
