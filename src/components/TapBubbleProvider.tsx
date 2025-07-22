"use client"

import type React from "react"
import { createContext, useContext, useCallback } from "react"

interface TapBubbleContextType {
  createTapBubble: (x: number, y: number) => void
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
  children: React.ReactNode
}

const TapBubbleProvider: React.FC<TapBubbleProviderProps> = ({ children }) => {
  const createTapBubble = useCallback((x: number, y: number) => {
    const bubble = document.createElement("div")
    bubble.className = "tap-bubble"
    bubble.style.left = `${x - 10}px`
    bubble.style.top = `${y - 10}px`

    document.body.appendChild(bubble)

    setTimeout(() => {
      document.body.removeChild(bubble)
    }, 1000)
  }, [])

  return (
    <TapBubbleContext.Provider value={{ createTapBubble }}>
      <div onClick={(e) => createTapBubble(e.clientX, e.clientY)} className="min-h-screen">
        {children}
      </div>
    </TapBubbleContext.Provider>
  )
}

export default TapBubbleProvider
