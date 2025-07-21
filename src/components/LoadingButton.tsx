"use client"

import type React from "react"
import { useState } from "react"

interface LoadingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: "button" | "submit"
}

export default function LoadingButton({
  children,
  onClick,
  className = "btn-notebook",
  disabled = false,
  type = "button",
}: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (!disabled && !isLoading) {
      setIsLoading(true)

      // Simulate loading
      setTimeout(() => {
        setIsLoading(false)
        if (onClick) onClick()
      }, 800)
    }
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`${className} disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden`}
    >
      {isLoading ? <span className="loading-dots">Loading</span> : children}
    </button>
  )
}
