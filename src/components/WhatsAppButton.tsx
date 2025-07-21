"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, Check } from "lucide-react"

interface WhatsAppButtonProps {
  groupLink?: string
  className?: string
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  groupLink = "https://chat.whatsapp.com/your-group-link",
  className = "",
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)

      // Open WhatsApp group
      window.open(groupLink, "_blank")

      // Reset success state after animation
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 2000)
  }

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`btn-notebook btn-green flex items-center space-x-3 ${className} ${isSuccess ? "bg-green-500" : ""}`}
    >
      {isLoading ? (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          <span>Joining...</span>
        </>
      ) : isSuccess ? (
        <>
          <Check className="w-5 h-5" />
          <span>Joined Successfully!</span>
        </>
      ) : (
        <>
          <MessageCircle className="w-5 h-5" />
          <span>Join WhatsApp Group</span>
        </>
      )}
    </button>
  )
}

export default WhatsAppButton
