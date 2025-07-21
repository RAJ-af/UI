"use client"

import { useState } from "react"

interface StudentCharacter3DProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  interactive?: boolean
}

export default function StudentCharacter3D({
  src,
  alt,
  size = "md",
  className = "",
  interactive = true,
}: StudentCharacter3DProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  }

  return (
    <div
      className={`${sizeClasses[size]} ${className} ${
        interactive ? "character-3d cursor-pointer" : ""
      } floating-animation sketch-shadow`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered && interactive ? "rotateY(15deg) rotateX(5deg) translateZ(20px) scale(1.1)" : "none",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="w-full h-full object-contain filter drop-shadow-lg"
        style={{
          filter: isHovered ? "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" : "drop-shadow(0 5px 10px rgba(0,0,0,0.1))",
        }}
      />
    </div>
  )
}
