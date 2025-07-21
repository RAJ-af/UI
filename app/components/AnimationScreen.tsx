"use client"

import { useEffect, useState } from "react"

interface AnimationScreenProps {
  isVisible: boolean
  onComplete: () => void
  type?: "success" | "loading" | "thumbsUp" | "stars"
}

export default function AnimationScreen({ isVisible, onComplete, type = "success" }: AnimationScreenProps) {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer1 = setTimeout(() => setAnimationPhase(1), 100)
      const timer2 = setTimeout(() => setAnimationPhase(2), 800)
      const timer3 = setTimeout(() => {
        setAnimationPhase(0)
        onComplete()
      }, 2000)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isVisible, onComplete])

  if (!isVisible) return null

  const renderAnimation = () => {
    switch (type) {
      case "thumbsUp":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="thumbs-up-animation">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
            </div>
            <p className="text-white font-medium">Great job!</p>
          </div>
        )
      case "stars":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="star-burst" style={{ animationDelay: `${i * 0.1}s` }}>
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-white font-medium">Excellent!</p>
          </div>
        )
      default:
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="success-animation">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-white font-medium">Success!</p>
          </div>
        )
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ${
        animationPhase > 0 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`transform transition-all duration-500 ${
          animationPhase === 2 ? "scale-110" : animationPhase === 1 ? "scale-100" : "scale-0"
        }`}
      >
        {renderAnimation()}
      </div>
    </div>
  )
}
