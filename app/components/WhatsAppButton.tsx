"use client"

import { useState } from "react"
import { MessageCircle, CheckCircle } from "lucide-react"
import WhatsAppSplash from "./WhatsAppSplash"

export default function WhatsAppButton() {
  const [isJoining, setIsJoining] = useState(false)
  const [hasJoined, setHasJoined] = useState(false)
  const [showSplash, setShowSplash] = useState(false)

  const handleJoinWhatsApp = async () => {
    setIsJoining(true)
    setShowSplash(true)
  }

  const handleSplashComplete = () => {
    setShowSplash(false)
    setIsJoining(false)
    setHasJoined(true)

    // Open WhatsApp group link
    setTimeout(() => {
      window.open("https://chat.whatsapp.com/your-group-link", "_blank")
    }, 500)

    // Reset after 3 seconds
    setTimeout(() => {
      setHasJoined(false)
    }, 3000)
  }

  if (hasJoined) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-green-500 text-white px-6 py-4 rounded-2xl flex items-center space-x-3 success-animation glass-morphism">
          <CheckCircle className="w-6 h-6" />
          <span className="font-medium">Successfully Joined!</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleJoinWhatsApp}
          disabled={isJoining}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 floating-animation disabled:opacity-50 pulse-glow glass-morphism"
        >
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-6 h-6" />
            <div className="hidden sm:block">
              <div className="text-sm font-bold">Join WhatsApp</div>
              <div className="text-xs opacity-90">Study Group</div>
            </div>
          </div>
        </button>

        {/* 3D Floating Ring */}
        <div className="absolute inset-0 rounded-2xl bg-green-500 opacity-20 animate-ping"></div>
        <div className="absolute inset-0 rounded-2xl bg-green-500 opacity-10 animate-pulse"></div>
      </div>

      <WhatsAppSplash isVisible={showSplash} onComplete={handleSplashComplete} />
    </>
  )
}
