"use client"

import type React from "react"
import { useState } from "react"

interface LoadingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "blue" | "green" | "yellow" | "red"
  disabled?: boolean
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "blue",
  disabled = false,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (disabled || isLoading) return

    setIsLoading(true)

    if (onClick) {
      await onClick()
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`btn-notebook btn-${variant} ${className} ${isLoading ? "opacity-75 cursor-not-allowed" : ""}`}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="loading-dots"></span>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  )
}

export default LoadingButton
