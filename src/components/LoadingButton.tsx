"use client"

import type React from "react"
import { useState } from "react"
import { Loader2, Sparkles, ThumbsUp, Star } from "lucide-react"

interface LoadingButtonProps {
  children: React.ReactNode
  onClick?: () => void | Promise<void>
  className?: string
  disabled?: boolean
  loadingText?: string
  animationType?: "default" | "sparkles" | "thumbsUp" | "stars"
}

export default function LoadingButton({
  children,
  onClick,
  className = "",
  disabled = false,
  loadingText = "Loading...",
  animationType = "default",
}: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)

  const handleClick = async () => {
    if (disabled || isLoading) return

    setIsLoading(true)
    setShowAnimation(true)

    try {
      if (onClick) {
        await onClick()
      }

      // Simulate minimum loading time for better UX
      await new Promise((resolve) => setTimeout(resolve, 800))
    } finally {
      setIsLoading(false)
      setTimeout(() => setShowAnimation(false), 300)
    }
  }

  const getAnimationIcon = () => {
    switch (animationType) {
      case "sparkles":
        return <Sparkles className="w-4 h-4 animate-spin" />
      case "thumbsUp":
        return <ThumbsUp className="w-4 h-4 animate-bounce" />
      case "stars":
        return <Star className="w-4 h-4 animate-pulse" />
      default:
        return <Loader2 className="w-4 h-4 animate-spin" />
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`relative overflow-hidden ${className} ${
        isLoading ? "cursor-not-allowed" : "cursor-pointer"
      } transition-all duration-300 transform hover:scale-105 active:scale-95`}
    >
      <div className={`flex items-center justify-center transition-opacity ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            {getAnimationIcon()}
            {loadingText && <span>{loadingText}</span>}
          </div>
        </div>
      )}

      {showAnimation && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      )}
    </button>
  )
}
