"use client"

import { useState } from "react"
import { MessageCircle, Check } from "lucide-react"
import LoadingButton from "./LoadingButton"

interface WhatsAppButtonProps {
  groupLink?: string
  className?: string
}

export default function WhatsAppButton({
  groupLink = "https://chat.whatsapp.com/your-group-link",
  className = "",
}: WhatsAppButtonProps) {
  const [isJoined, setIsJoined] = useState(false)

  const handleJoinGroup = () => {
    setTimeout(() => {
      setIsJoined(true)
      window.open(groupLink, "_blank")
    }, 1500)
  }

  if (isJoined) {
    return (
      <div className={`btn-notebook btn-green flex items-center justify-center ${className}`}>
        <Check className="w-5 h-5 mr-2" />
        Joined Successfully!
      </div>
    )
  }

  return (
    <LoadingButton
      onClick={handleJoinGroup}
      className={`btn-notebook btn-green flex items-center justify-center ${className}`}
      loadingText="Joining..."
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Join WhatsApp Group
    </LoadingButton>
  )
}
