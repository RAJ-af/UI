import type React from "react"

interface StudentCharacterProps {
  type: "studying" | "thinking" | "happy" | "reading" | "writing"
  size?: "small" | "medium" | "large"
  className?: string
}

const StudentCharacter: React.FC<StudentCharacterProps> = ({ type, size = "medium", className = "" }) => {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  }

  const renderCharacter = () => {
    switch (type) {
      case "studying":
        return (
          <svg viewBox="0 0 100 100" className={`${sizeClasses[size]} ${className}`}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#fdbcb4" stroke="#000" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 10 65 20 Q60 15 50 15 Q40 15 35 20" fill="#8b4513" stroke="#000" strokeWidth="1" />
            {/* Eyes */}
            <circle cx="45" cy="28" r="2" fill="#000" />
            <circle cx="55" cy="28" r="2" fill="#000" />
            {/* Smile */}
            <path d="M45 35 Q50 38 55 35" stroke="#000" strokeWidth="2" fill="none" />
            {/* Body */}
            <rect x="40" y="45" width="20" height="25" fill="#4a90e2" stroke="#000" strokeWidth="2" rx="3" />
            {/* Arms */}
            <line x1="40" y1="50" x2="30" y2="60" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="50" x2="70" y2="60" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            {/* Book */}
            <rect x="25" y="58" width="12" height="8" fill="#ff6b6b" stroke="#000" strokeWidth="1" rx="1" />
            {/* Legs */}
            <line x1="45" y1="70" x2="45" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <line x1="55" y1="70" x2="55" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            {/* Feet */}
            <ellipse cx="42" cy="87" rx="5" ry="3" fill="#000" />
            <ellipse cx="58" cy="87" rx="5" ry="3" fill="#000" />
          </svg>
        )

      case "thinking":
        return (
          <svg viewBox="0 0 100 100" className={`${sizeClasses[size]} ${className}`}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#fdbcb4" stroke="#000" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 10 65 20 Q60 15 50 15 Q40 15 35 20" fill="#d2691e" stroke="#000" strokeWidth="1" />
            {/* Eyes (closed) */}
            <path d="M42 28 Q45 26 48 28" stroke="#000" strokeWidth="2" fill="none" />
            <path d="M52 28 Q55 26 58 28" stroke="#000" strokeWidth="2" fill="none" />
            {/* Mouth */}
            <circle cx="50" cy="35" r="1" fill="#000" />
            {/* Thought bubble */}
            <circle cx="70" cy="15" r="8" fill="#fff" stroke="#000" strokeWidth="1" />
            <circle cx="65" cy="20" r="3" fill="#fff" stroke="#000" strokeWidth="1" />
            <circle cx="62" cy="23" r="2" fill="#fff" stroke="#000" strokeWidth="1" />
            {/* Question mark in bubble */}
            <text x="70" y="20" textAnchor="middle" fontSize="8" fill="#000">
              ?
            </text>
            {/* Body */}
            <rect x="40" y="45" width="20" height="25" fill="#50c878" stroke="#000" strokeWidth="2" rx="3" />
            {/* Arms (one hand to chin) */}
            <line x1="40" y1="50" x2="35" y2="40" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="50" x2="70" y2="55" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            {/* Legs */}
            <line x1="45" y1="70" x2="45" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <line x1="55" y1="70" x2="55" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            {/* Feet */}
            <ellipse cx="42" cy="87" rx="5" ry="3" fill="#000" />
            <ellipse cx="58" cy="87" rx="5" ry="3" fill="#000" />
          </svg>
        )

      case "happy":
        return (
          <svg viewBox="0 0 100 100" className={`${sizeClasses[size]} ${className}`}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#fdbcb4" stroke="#000" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 10 65 20 Q60 15 50 15 Q40 15 35 20" fill="#ff69b4" stroke="#000" strokeWidth="1" />
            {/* Eyes */}
            <circle cx="45" cy="28" r="2" fill="#000" />
            <circle cx="55" cy="28" r="2" fill="#000" />
            {/* Big smile */}
            <path d="M42 35 Q50 42 58 35" stroke="#000" strokeWidth="2" fill="none" />
            {/* Body */}
            <rect x="40" y="45" width="20" height="25" fill="#ffd700" stroke="#000" strokeWidth="2" rx="3" />
            {/* Arms (raised) */}
            <line x1="40" y1="50" x2="25" y2="35" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="50" x2="75" y2="35" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            {/* Legs */}
            <line x1="45" y1="70" x2="45" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <line x1="55" y1="70" x2="55" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            {/* Feet */}
            <ellipse cx="42" cy="87" rx="5" ry="3" fill="#000" />
            <ellipse cx="58" cy="87" rx="5" ry="3" fill="#000" />
          </svg>
        )

      case "reading":
        return (
          <svg viewBox="0 0 100 100" className={`${sizeClasses[size]} ${className}`}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#fdbcb4" stroke="#000" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 10 65 20 Q60 15 50 15 Q40 15 35 20" fill="#654321" stroke="#000" strokeWidth="1" />
            {/* Glasses */}
            <circle cx="45" cy="28" r="6" fill="none" stroke="#000" strokeWidth="2" />
            <circle cx="55" cy="28" r="6" fill="none" stroke="#000" strokeWidth="2" />
            <line x1="51" y1="28" x2="49" y2="28" stroke="#000" strokeWidth="2" />
            {/* Eyes */}
            <circle cx="45" cy="28" r="2" fill="#000" />
            <circle cx="55" cy="28" r="2" fill="#000" />
            {/* Mouth */}
            <path d="M47 35 Q50 37 53 35" stroke="#000" strokeWidth="2" fill="none" />
            {/* Body */}
            <rect x="40" y="45" width="20" height="25" fill="#9370db" stroke="#000" strokeWidth="2" rx="3" />
            {/* Arms holding book */}
            <line x1="40" y1="55" x2="30" y2="65" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="55" x2="70" y2="65" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            {/* Book */}
            <rect x="35" y="60" width="30" height="20" fill="#00b894" stroke="#000" strokeWidth="2" rx="2" />
            <line x1="50" y1="60" x2="50" y2="80" stroke="#000" strokeWidth="1" />
            {/* Legs */}
            <line x1="45" y1="70" x2="45" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <line x1="55" y1="70" x2="55" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            {/* Feet */}
            <ellipse cx="42" cy="87" rx="5" ry="3" fill="#000" />
            <ellipse cx="58" cy="87" rx="5" ry="3" fill="#000" />
          </svg>
        )

      case "writing":
        return (
          <svg viewBox="0 0 100 100" className={`${sizeClasses[size]} ${className}`}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#fdbcb4" stroke="#000" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 10 65 20 Q60 15 50 15 Q40 15 35 20" fill="#2f4f4f" stroke="#000" strokeWidth="1" />
            {/* Eyes (focused) */}
            <circle cx="45" cy="28" r="2" fill="#000" />
            <circle cx="55" cy="28" r="2" fill="#000" />
            {/* Concentrated expression */}
            <path d="M47 35 L53 35" stroke="#000" strokeWidth="2" />
            {/* Body */}
            <rect x="40" y="45" width="20" height="25" fill="#ff6347" stroke="#000" strokeWidth="2" rx="3" />
            {/* Arms */}
            <line x1="40" y1="50" x2="25" y2="65" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="50" x2="75" y2="60" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            {/* Pencil */}
            <rect x="70" y="58" width="12" height="3" fill="#ffd700" stroke="#000" strokeWidth="1" />
            <polygon points="82,58 85,59.5 82,61" fill="#ff69b4" />
            {/* Paper */}
            <rect x="20" y="65" width="15" height="20" fill="#fff" stroke="#000" strokeWidth="1" />
            <line x1="22" y1="70" x2="33" y2="70" stroke="#000" strokeWidth="0.5" />
            <line x1="22" y1="75" x2="33" y2="75" stroke="#000" strokeWidth="0.5" />
            <line x1="22" y1="80" x2="30" y2="80" stroke="#000" strokeWidth="0.5" />
            {/* Legs */}
            <line x1="45" y1="70" x2="45" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <line x1="55" y1="70" x2="55" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            {/* Feet */}
            <ellipse cx="42" cy="87" rx="5" ry="3" fill="#000" />
            <ellipse cx="58" cy="87" rx="5" ry="3" fill="#000" />
          </svg>
        )

      default:
        return null
    }
  }

  return renderCharacter()
}

export default StudentCharacter
