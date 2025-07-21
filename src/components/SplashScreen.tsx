"use client"

import { useState, useEffect } from "react"
import StudentCharacter from "./StudentCharacter"

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => setIsVisible(false), 800)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center ${isExiting ? "splash-exit" : "splash-enter"}`}
    >
      <div className="text-center">
        <div className="mb-6">
          <StudentCharacter type="reading" size="xl" className="character-float" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2 sketch-underline">Homework Club</h1>
        <p className="text-gray-600 mb-4">Your Educational Journey Starts Here</p>
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-notebook-blue rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
