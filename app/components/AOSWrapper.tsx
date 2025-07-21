"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"

interface AOSWrapperProps {
  children: React.ReactNode
  animation?: "fade-up" | "fade-left" | "fade-right" | "zoom-in"
  delay?: number
  duration?: number
  className?: string
}

export default function AOSWrapper({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
}: AOSWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`aos-${animation} ${isVisible ? "aos-animate" : ""} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}
