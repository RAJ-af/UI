"use client"

import type React from "react"

import { useState, useEffect } from "react"
import WelcomeModal from "./WelcomeModal"
import TapBubble from "./TapBubble"

interface TapBubbleData {
  id: string
  x: number
  y: number
  message: string
  color: string
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showWelcome, setShowWelcome] = useState(false)
  const [tapBubbles, setTapBubbles] = useState<TapBubbleData[]>([])

  useEffect(() => {
    // Check if user is visiting for the first time
    const hasVisited = localStorage.getItem("homework-club-visited")
    if (!hasVisited) {
      setShowWelcome(true)
      localStorage.setItem("homework-club-visited", "true")
    }
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Random chance to show tip bubble on click
      if (Math.random() < 0.3) {
        const tips = [
          { message: "Try asking AI for step-by-step solutions!", color: "bg-yellow-500" },
          { message: "Upload your notes to the library!", color: "bg-blue-500" },
          { message: "Use the timer to stay focused!", color: "bg-green-500" },
          { message: "Scan problems with your camera!", color: "bg-red-500" },
          { message: "Track your study progress!", color: "bg-purple-500" },
          { message: "Join our WhatsApp study group!", color: "bg-green-600" },
          { message: "Create study schedules!", color: "bg-indigo-500" },
        ]

        const randomTip = tips[Math.floor(Math.random() * tips.length)]
        const newBubble: TapBubbleData = {
          id: Date.now().toString(),
          x: e.clientX,
          y: e.clientY,
          message: randomTip.message,
          color: randomTip.color,
        }

        setTapBubbles((prev) => [...prev, newBubble])
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  const removeBubble = (id: string) => {
    setTapBubbles((prev) => prev.filter((bubble) => bubble.id !== id))
  }

  return (
    <>
      {children}
      <WelcomeModal isOpen={showWelcome} onClose={() => setShowWelcome(false)} />
      {tapBubbles.map((bubble) => (
        <TapBubble
          key={bubble.id}
          x={bubble.x}
          y={bubble.y}
          message={bubble.message}
          color={bubble.color}
          onClose={() => removeBubble(bubble.id)}
        />
      ))}
    </>
  )
}
