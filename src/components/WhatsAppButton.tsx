"use client"

import { useState } from "react"
import { MessageCircle, CheckCircle } from "lucide-react"
import { useTapBubble } from "./TapBubbleProvider"

export default function WhatsAppButton() {
  const [isJoining, setIsJoining] = useState(false)
  const [hasJoined, setHasJoined] = useState(false)
  const { addTapBubble } = useTapBubble()

  const handleJoinWhatsApp = async () => {
    setIsJoining(true)

    // Add success bubble
    addTapBubble(window.innerWidth - 100, window.innerHeight - 100, "border-green-500 bg-green-500", "Joining Group!")

    setTimeout(() => {
      setIsJoining(false)
      setHasJoined(true)

      // Add success bubble
      addTapBubble(window.innerWidth - 100, window.innerHeight - 100, "border-green-600 bg-green-600", "Success!")

      // Open WhatsApp (replace with actual group link)
      setTimeout(() => {
        window.open("https://chat.whatsapp.com/your-group-link-here", "_blank")
      }, 500)

      // Reset after 3 seconds
      setTimeout(() => {
        setHasJoined(false)
      }, 3000)
    }, 1500)
  }

  if (hasJoined) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-green-500 text-white px-4 py-3 rounded-lg flex items-center space-x-3 sketch-border animate-bounce">
          <CheckCircle className="w-5 h-5" />
          <span className="font-bold">Joined Successfully!</span>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleJoinWhatsApp}
        disabled={isJoining}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 character-float disabled:opacity-50 sketch-border"
      >
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-6 h-6" />
          <div className="hidden sm:block">
            <div className="text-sm font-bold">
              {isJoining ? <span className="loading-dots">Joining</span> : "Join WhatsApp"}
            </div>
            <div className="text-xs opacity-90">Study Group</div>
          </div>
        </div>
      </button>

      {/* Animated rings */}
      <div className="absolute inset-0 rounded-2xl bg-green-500 opacity-20 animate-ping pointer-events-none"></div>
      <div className="absolute inset-0 rounded-2xl bg-green-500 opacity-10 animate-pulse pointer-events-none"></div>
    </div>
  )
}
