import type React from "react"
import { cn } from "../lib/utils"

interface StudentCharacterProps {
  type: "studying" | "thinking" | "happy" | "confused"
  size?: "small" | "medium" | "large"
  className?: string
}

const StudentCharacter: React.FC<StudentCharacterProps> = ({ type, size = "medium", className }) => {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  }

  const characters = {
    studying: (
      <svg viewBox="0 0 100 100" className={cn(sizeClasses[size], className)}>
        {/* Head */}
        <circle cx="50" cy="35" r="15" fill="#fdbcb4" stroke="#2d3436" strokeWidth="2" />
        {/* Hair */}
        <path d="M35 25 Q50 15 65 25 Q60 20 50 20 Q40 20 35 25" fill="#2d3436" />
        {/* Eyes */}
        <circle cx="45" cy="32" r="2" fill="#2d3436" />
        <circle cx="55" cy="32" r="2" fill="#2d3436" />
        {/* Mouth */}
        <path d="M47 38 Q50 40 53 38" stroke="#2d3436" strokeWidth="1" fill="none" />
        {/* Body */}
        <rect x="40" y="50" width="20" height="25" fill="#74b9ff" stroke="#2d3436" strokeWidth="2" rx="3" />
        {/* Arms */}
        <line x1="40" y1="55" x2="30" y2="65" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="55" x2="70" y2="65" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
        {/* Book */}
        <rect x="25" y="62" width="10" height="8" fill="#fdcb6e" stroke="#2d3436" strokeWidth="1" />
        {/* Legs */}
        <line x1="45" y1="75" x2="45" y2="85" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="75" x2="55" y2="85" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    thinking: (
      <svg viewBox="0 0 100 100" className={cn(sizeClasses[size], className)}>
        {/* Head */}
        <circle cx="50" cy="35" r="15" fill="#fdbcb4" stroke="#2d3436" strokeWidth="2" />
        {/* Hair */}
        <path d="M35 25 Q50 15 65 25 Q60 20 50 20 Q40 20 35 25" fill="#2d3436" />
        {/* Eyes looking up */}
        <circle cx="45" cy="30" r="2" fill="#2d3436" />
        <circle cx="55" cy="30" r="2" fill="#2d3436" />
        {/* Mouth */}
        <circle cx="50" cy="38" r="1" fill="#2d3436" />
        {/* Thought bubble */}
        <circle cx="70" cy="20" r="8" fill="white" stroke="#2d3436" strokeWidth="1" />
        <circle cx="65" cy="25" r="3" fill="white" stroke="#2d3436" strokeWidth="1" />
        <circle cx="62" cy="28" r="2" fill="white" stroke="#2d3436" strokeWidth="1" />
        {/* Question mark in bubble */}
        <text x="70" y="25" textAnchor="middle" fontSize="8" fill="#2d3436">
          ?
        </text>
        {/* Body */}
        <rect x="40" y="50" width="20" height="25" fill="#00b894" stroke="#2d3436" strokeWidth="2" rx="3" />
        {/* Arms */}
        <line x1="40" y1="55" x2="35" y2="50" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="55" x2="65" y2="50" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
        {/* Hand on chin */}
        <circle cx="35" cy="45" r="3" fill="#fdbcb4" stroke="#2d3436" strokeWidth="1" />
        {/* Legs */}
        <line x1="45" y1="75" x2="45" y2="85" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="75" x2="55" y2="85" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    happy: (
      <svg viewBox="0 0 100 100" className={cn(sizeClasses[size], className)}>
        {/* Head */}
        <circle cx="50" cy="35" r="15" fill="#fdbcb4" stroke="#2d3436" strokeWidth="2" />
        {/* Hair */}
        <path d="M35 25 Q50 15 65 25 Q60 20 50 20 Q40 20 35 25" fill="#2d3436" />
        {/* Eyes */}
        <path d="M42 30 Q45 28 48 30" stroke="#2d3436" strokeWidth="2" fill="none" />
        <path d="M52 30 Q55 28 58 30" stroke="#2d3436" strokeWidth="2" fill="none" />
        {/* Smile */}
        <path d="M45 38 Q50 42 55 38" stroke="#2d3436" strokeWidth="2" fill="none" />
        {/* Body */}
        <rect x="40" y="50" width="20" height="25" fill="#fdcb6e" stroke="#2d3436" strokeWidth="2" rx="3" />
        {/* Arms raised */}
        <line x1="40" y1="55" x2="25" y2="45" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="55" x2="75" y2="45" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
        {/* Hands */}
        <circle cx="25" cy="45" r="3" fill="#fdbcb4" stroke="#2d3436" strokeWidth="1" />
        <circle cx="75" cy="45" r="3" fill="#fdbcb4" stroke="#2d3436" strokeWidth="1" />
        {/* Legs */}
        <line x1="45" y1="75" x2="45" y2="85" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="75" x2="55" y2="85" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    confused: (
      <svg viewBox="0 0 100 100" className={cn(sizeClasses[size], className)}>
        {/* Head */}
        <circle cx="50" cy="35" r="15" fill="#fdbcb4" stroke="#2d3436" strokeWidth="2" />
        {/* Hair messy */}
        <path d="M35 25 Q40 18 45 22 Q50 15 55 22 Q60 18 65 25" fill="#2d3436" />
        {/* Eyes confused */}
        <circle cx="45" cy="32" r="2" fill="#2d3436" />
        <circle cx="55" cy="32" r="2" fill="#2d3436" />
        <path d="M42 29 L48 29" stroke="#2d3436" strokeWidth="1" />
        <path d="M52 29 L58 29" stroke="#2d3436" strokeWidth="1" />
        {/* Mouth confused */}
        <path d="M47 38 Q50 36 53 38 Q50 40 47 38" stroke="#2d3436" strokeWidth="1" fill="none" />
        {/* Body */}
        <rect x="40" y="50" width="20" height="25" fill="#e17055" stroke="#2d3436" strokeWidth="2" rx="3" />
        {/* Arms */}
        <line x1="40" y1="55" x2="32" y2="60" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="55" x2="68" y2="60" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
        {/* Hands scratching head */}
        <circle cx="32" cy="60" r="3" fill="#fdbcb4" stroke="#2d3436" strokeWidth="1" />
        <circle cx="68" cy="60" r="3" fill="#fdbcb4" stroke="#2d3436" strokeWidth="1" />
        {/* Legs */}
        <line x1="45" y1="75" x2="45" y2="85" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="75" x2="55" y2="85" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  }

  return characters[type]
}

export default StudentCharacter
