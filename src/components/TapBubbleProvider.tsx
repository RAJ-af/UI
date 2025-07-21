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
    bubble.style.left = `${x - 20}px`
    bubble.style.top = `${y - 20}px`
    bubble.style.width = "40px"
    bubble.style.height = "40px"
    bubble.style.border = "2px dashed #74b9ff"

    document.body.appendChild(bubble)

    setTimeout(() => {
      if (document.body.contains(bubble)) {
        document.body.removeChild(bubble)
      }
    }, 1000)
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      createTapBubble(e.clientX, e.clientY)
    },
    [createTapBubble],
  )

  return (
    <TapBubbleContext.Provider value={{ createTapBubble }}>
      <div onClick={handleClick}>{children}</div>
    </TapBubbleContext.Provider>
  )
}

export default TapBubbleProvider
