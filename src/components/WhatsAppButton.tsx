"use client"

import { useState } from "react"
import { MessageCircle, CheckCircle } from "lucide-react"
import LoadingButton from "./LoadingButton"

export default function WhatsAppButton() {
  const [isJoining, setIsJoining] = useState(false)
  const [hasJoined, setHasJoined] = useState(false)

  const handleJoinWhatsApp = async () => {
    setIsJoining(true)

    // Simulate joining process
    await new Promise((resolve) => setTimeout(resolve, 2000))

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
        <div className="bg-notebook-green text-white px-6 py-4 rounded-2xl flex items-center space-x-3 animate-bounce sketch-border">
          <CheckCircle className="w-6 h-6" />
          <span className="font-medium">Successfully Joined!</span>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <LoadingButton
        onClick={handleJoinWhatsApp}
        className="bg-notebook-green hover:bg-green-600 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow sketch-border"
        animationType="sparkles"
        loadingText="Joining..."
      >
        <div className="flex items-center space-x-3">
          <MessageCircle className="w-6 h-6" />
          <div className="hidden sm:block">
            <div className="text-sm font-bold">Join WhatsApp</div>
            <div className="text-xs opacity-90">Study Group</div>
          </div>
        </div>
      </LoadingButton>

      {/* 3D Floating Ring */}
      <div className="absolute inset-0 rounded-2xl bg-notebook-green opacity-20 animate-ping"></div>
      <div className="absolute inset-0 rounded-2xl bg-notebook-green opacity-10 animate-pulse"></div>
    </div>
  )
}
