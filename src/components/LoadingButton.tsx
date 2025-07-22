"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "../lib/utils"

interface LoadingButtonProps {
  children: React.ReactNode
  onClick?: () => void | Promise<void>
  className?: string
  variant?: "primary" | "secondary" | "success"
  disabled?: boolean
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  onClick,
  className,
  variant = "primary",
  disabled = false,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (onClick && !isLoading && !disabled) {
      setIsLoading(true)
      try {
        await onClick()
      } finally {
        setIsLoading(false)
      }
    }
  }

  const baseClasses =
    "px-6 py-3 rounded-lg font-notebook font-bold transition-all duration-300 sketch-border relative overflow-hidden"

  const variantClasses = {
    primary: "bg-notebook-blue text-white hover:bg-blue-600",
    secondary: "bg-notebook-yellow text-notebook-text hover:bg-yellow-500",
    success: "bg-notebook-green text-white hover:bg-green-600",
  }

  return (
    <button
      onClick={handleClick}
      disabled={isLoading || disabled}
      className={cn(baseClasses, variantClasses[variant], isLoading && "opacity-75 cursor-not-allowed", className)}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default LoadingButton
