"use client"

import type React from "react"
import { useEffect, useState } from "react"
import StudentCharacter from "./StudentCharacter"

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 bg-notebook-bg flex items-center justify-center z-50 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="text-center space-y-8 animate-splash">
        <div className="relative">
          <StudentCharacter type="studying" size="large" className="character-float mx-auto" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-notebook-text sketch-underline">Homework Club</h1>
          <p className="text-xl text-notebook-text/80">Lal Chand Sharma Higher Secondary School</p>
          <div className="flex justify-center">
            <div className="loading-dots text-notebook-blue text-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
