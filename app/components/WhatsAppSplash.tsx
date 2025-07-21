"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

interface WhatsAppSplashProps {
  isVisible: boolean
  onComplete: () => void
}

export default function WhatsAppSplash({ isVisible, onComplete }: WhatsAppSplashProps) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer1 = setTimeout(() => setPhase(1), 200)
      const timer2 = setTimeout(() => setPhase(2), 1000)
      const timer3 = setTimeout(() => {
        setPhase(0)
        onComplete()
      }, 2500)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isVisible, onComplete])

  if (!isVisible) return null

  return (
    <div className="whatsapp-splash">
      <div className="text-center">
        <div className="whatsapp-logo mb-6">
          <MessageCircle className="w-12 h-12 text-green-500" />
        </div>
        <div
          className={`transform transition-all duration-500 ${
            phase >= 1 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold text-white mb-2">Joining Study Group</h2>
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
        {phase >= 2 && (
          <div className="mt-4 success-animation">
            <p className="text-white font-medium">Successfully joined!</p>
          </div>
        )}
      </div>
    </div>
  )
}
