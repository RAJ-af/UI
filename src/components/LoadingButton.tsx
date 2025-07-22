"use client"

import type React from "react"
import { useState } from "react"
import { Loader2, Sparkles, ThumbsUp, Star } from "lucide-react"

interface LoadingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "success" | "warning"
  loadingType?: "spinner" | "sparkles" | "thumbs" | "stars"
  className?: string
  disabled?: boolean
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  loadingType = "spinner",
  className = "",
  disabled = false,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (disabled || isLoading) return

    setIsLoading(true)

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      if (onClick) onClick()
    }, 2000)
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-notebook-blue hover:bg-notebook-blue/90 text-white"
      case "secondary":
        return "bg-sketch-gray hover:bg-sketch-gray/90 text-white"
      case "success":
        return "bg-notebook-green hover:bg-notebook-green/90 text-white"
      case "warning":
        return "bg-notebook-yellow hover:bg-notebook-yellow/90 text-sketch-black"
      default:
        return "bg-notebook-blue hover:bg-notebook-blue/90 text-white"
    }
  }

  const getLoadingIcon = () => {
    switch (loadingType) {
      case "sparkles":
        return <Sparkles className="w-4 h-4 animate-spin" />
      case "thumbs":
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
      className={`
        px-6 py-3 rounded-full font-bold border-2 border-dashed border-transparent
        transition-all duration-200 transform hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${getVariantClasses()}
        ${className}
      `}
    >
      <div className="flex items-center justify-center space-x-2">
        {isLoading && getLoadingIcon()}
        <span>{isLoading ? "Loading..." : children}</span>
      </div>
    </button>
  )
}

export default LoadingButton
