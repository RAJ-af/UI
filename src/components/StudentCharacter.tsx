interface StudentCharacterProps {
  type: "studying" | "reading" | "thinking" | "happy"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export default function StudentCharacter({ type, size = "md", className = "" }: StudentCharacterProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  }

  const getCharacterSVG = () => {
    const baseProps = {
      viewBox: "0 0 100 100",
      className: `${sizeClasses[size]} ${className}`,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    }

    switch (type) {
      case "studying":
        return (
          <svg {...baseProps}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#fdbcb4" stroke="#000" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 10 65 20 Q60 15 50 15 Q40 15 35 20" fill="#8b4513" stroke="#000" strokeWidth="1" />
            {/* Eyes */}
            <circle cx="45" cy="28" r="2" fill="#000" />
            <circle cx="55" cy="28" r="2" fill="#000" />
            {/* Mouth */}
            <path d="M47 35 Q50 37 53 35" stroke="#000" strokeWidth="1" fill="none" />
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

      case "reading":
        return (
          <svg {...baseProps}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#fdbcb4" stroke="#000" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 10 65 20 Q60 15 50 15 Q40 15 35 20" fill="#d2691e" stroke="#000" strokeWidth="1" />
            {/* Eyes looking down */}
            <circle cx="45" cy="30" r="2" fill="#000" />
            <circle cx="55" cy="30" r="2" fill="#000" />
            {/* Mouth */}
            <path d="M47 35 Q50 37 53 35" stroke="#000" strokeWidth="1" fill="none" />
            {/* Body */}
            <rect x="40" y="45" width="20" height="25" fill="#00b894" stroke="#000" strokeWidth="2" rx="3" />
            {/* Arms holding book */}
            <line x1="40" y1="55" x2="35" y2="65" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="55" x2="65" y2="65" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            {/* Book */}
            <rect x="35" y="60" width="30" height="15" fill="#fdcb6e" stroke="#000" strokeWidth="2" rx="2" />
            <line x1="40" y1="65" x2="60" y2="65" stroke="#000" strokeWidth="1" />
            <line x1="40" y1="70" x2="60" y2="70" stroke="#000" strokeWidth="1" />
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
          <svg {...baseProps}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#fdbcb4" stroke="#000" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 10 65 20 Q60 15 50 15 Q40 15 35 20" fill="#654321" stroke="#000" strokeWidth="1" />
            {/* Eyes */}
            <circle cx="45" cy="28" r="2" fill="#000" />
            <circle cx="55" cy="28" r="2" fill="#000" />
            {/* Mouth */}
            <path d="M47 35 Q50 33 53 35" stroke="#000" strokeWidth="1" fill="none" />
            {/* Thought bubble */}
            <circle cx="70" cy="15" r="8" fill="#fff" stroke="#000" strokeWidth="1" />
            <circle cx="65" cy="22" r="4" fill="#fff" stroke="#000" strokeWidth="1" />
            <circle cx="62" cy="26" r="2" fill="#fff" stroke="#000" strokeWidth="1" />
            {/* Question mark in bubble */}
            <text x="70" y="20" fontSize="8" textAnchor="middle" fill="#000">
              ?
            </text>
            {/* Body */}
            <rect x="40" y="45" width="20" height="25" fill="#e17055" stroke="#000" strokeWidth="2" rx="3" />
            {/* Arms */}
            <line x1="40" y1="50" x2="30" y2="55" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="50" x2="70" y2="55" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            {/* Hand to chin */}
            <circle cx="30" cy="55" r="3" fill="#fdbcb4" stroke="#000" strokeWidth="1" />
            {/* Legs */}
            <line x1="45" y1="70" x2="45" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <line x1="55" y1="70" x2="55" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            {/* Feet */}
            <ellipse cx="42" cy="87" rx="5" ry="3" fill="#000" />
            <ellipse cx="58" cy="87" rx="5" ry="3" fill="#000" />
          </svg>
        )

      case "happy":
      default:
        return (
          <svg {...baseProps}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#fdbcb4" stroke="#000" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 10 65 20 Q60 15 50 15 Q40 15 35 20" fill="#ff6b6b" stroke="#000" strokeWidth="1" />
            {/* Eyes */}
            <circle cx="45" cy="28" r="2" fill="#000" />
            <circle cx="55" cy="28" r="2" fill="#000" />
            {/* Happy mouth */}
            <path d="M45 35 Q50 40 55 35" stroke="#000" strokeWidth="2" fill="none" />
            {/* Body */}
            <rect x="40" y="45" width="20" height="25" fill="#74b9ff" stroke="#000" strokeWidth="2" rx="3" />
            {/* Arms raised */}
            <line x1="40" y1="50" x2="25" y2="40" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="50" x2="75" y2="40" stroke="#fdbcb4" strokeWidth="4" strokeLinecap="round" />
            {/* Hands */}
            <circle cx="25" cy="40" r="3" fill="#fdbcb4" stroke="#000" strokeWidth="1" />
            <circle cx="75" cy="40" r="3" fill="#fdbcb4" stroke="#000" strokeWidth="1" />
            {/* Legs */}
            <line x1="45" y1="70" x2="45" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <line x1="55" y1="70" x2="55" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            {/* Feet */}
            <ellipse cx="42" cy="87" rx="5" ry="3" fill="#000" />
            <ellipse cx="58" cy="87" rx="5" ry="3" fill="#000" />
          </svg>
        )
    }
  }

  return getCharacterSVG()
}
