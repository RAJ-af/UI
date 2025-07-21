"use client"

import { useState } from "react"
import type React from "react"
import AnimationScreen from "./AnimationScreen"

interface LoadingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  loadingText?: string
  type?: "button" | "submit"
  animationType?: "success" | "loading" | "thumbsUp" | "stars"
}

export default function LoadingButton({
  children,
  onClick,
  className = "btn-primary",
  disabled = false,
  loadingText = "Loading...",
  type = "button",
  animationType = "thumbsUp",
}: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)

  const handleClick = async () => {
    if (onClick && !isLoading && !disabled) {
      setIsLoading(true)
      setShowAnimation(true)

      // Simulate loading time
      await new Promise((resolve) => setTimeout(resolve, 800))

      setIsLoading(false)
    }
  }

  const handleAnimationComplete = () => {
    setShowAnimation(false)
    if (onClick) {
      onClick()
    }
  }

  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled || isLoading}
        className={`${className} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden`}
      >
        {isLoading ? (
          <>
            <div className="loading-spinner mr-2"></div>
            {loadingText}
          </>
        ) : (
          children
        )}
      </button>
      <AnimationScreen isVisible={showAnimation} onComplete={handleAnimationComplete} type={animationType} />
    </>
  )
}
