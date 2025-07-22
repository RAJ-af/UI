"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, Check } from "lucide-react"
import LoadingButton from "./LoadingButton"

interface WhatsAppButtonProps {
  groupLink?: string
  className?: string
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  groupLink = "https://chat.whatsapp.com/your-group-link",
  className,
}) => {
  const [joined, setJoined] = useState(false)

  const handleJoinGroup = async () => {
    // Simulate joining process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Open WhatsApp group
    window.open(groupLink, "_blank")

    setJoined(true)

    // Reset after 3 seconds
    setTimeout(() => setJoined(false), 3000)
  }

  if (joined) {
    return (
      <div
        className={`flex items-center justify-center p-4 bg-notebook-green text-white rounded-lg sketch-border animate-bounce ${className}`}
      >
        <Check className="w-6 h-6 mr-2" />
        <span className="font-notebook font-bold">Successfully Joined!</span>
      </div>
    )
  }

  return (
    <LoadingButton
      onClick={handleJoinGroup}
      variant="success"
      className={`flex items-center justify-center ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Join WhatsApp Group
    </LoadingButton>
  )
}

export default WhatsAppButton
