interface StudentCharacterProps {
  type: "reading" | "writing" | "thinking" | "studying"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export default function StudentCharacter({ type, size = "md", className = "" }: StudentCharacterProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }

  const getCharacterSVG = () => {
    const baseProps = {
      viewBox: "0 0 100 100",
      className: `${sizeClasses[size]} ${className}`,
      fill: "none",
      stroke: "#2d3436",
      strokeWidth: "2",
    }

    switch (type) {
      case "reading":
        return (
          <svg {...baseProps}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#ffeaa7" stroke="#2d3436" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 15 65 20" stroke="#2d3436" strokeWidth="3" fill="none" />
            {/* Eyes */}
            <circle cx="45" cy="28" r="2" fill="#2d3436" />
            <circle cx="55" cy="28" r="2" fill="#2d3436" />
            {/* Smile */}
            <path d="M45 35 Q50 38 55 35" stroke="#2d3436" strokeWidth="2" fill="none" />
            {/* Body */}
            <rect x="40" y="45" width="20" height="30" rx="5" fill="#74b9ff" stroke="#2d3436" />
            {/* Arms */}
            <line x1="35" y1="55" x2="25" y2="65" stroke="#2d3436" strokeWidth="3" />
            <line x1="65" y1="55" x2="75" y2="65" stroke="#2d3436" strokeWidth="3" />
            {/* Book */}
            <rect x="20" y="60" width="12" height="8" rx="1" fill="#ffffff" stroke="#2d3436" />
            <line x1="22" y1="62" x2="30" y2="62" stroke="#2d3436" />
            <line x1="22" y1="64" x2="30" y2="64" stroke="#2d3436" />
            <line x1="22" y1="66" x2="28" y2="66" stroke="#2d3436" />
            {/* Legs */}
            <line x1="45" y1="75" x2="45" y2="85" stroke="#2d3436" strokeWidth="3" />
            <line x1="55" y1="75" x2="55" y2="85" stroke="#2d3436" strokeWidth="3" />
          </svg>
        )

      case "writing":
        return (
          <svg {...baseProps}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#ffeaa7" stroke="#2d3436" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 15 65 20" stroke="#2d3436" strokeWidth="3" fill="none" />
            {/* Eyes looking down */}
            <circle cx="45" cy="30" r="2" fill="#2d3436" />
            <circle cx="55" cy="30" r="2" fill="#2d3436" />
            {/* Focused expression */}
            <path d="M47 35 Q50 37 53 35" stroke="#2d3436" strokeWidth="2" fill="none" />
            {/* Body */}
            <rect x="40" y="45" width="20" height="30" rx="5" fill="#00b894" stroke="#2d3436" />
            {/* Arms */}
            <line x1="35" y1="55" x2="30" y2="70" stroke="#2d3436" strokeWidth="3" />
            <line x1="65" y1="55" x2="70" y2="65" stroke="#2d3436" strokeWidth="3" />
            {/* Pencil */}
            <line x1="70" y1="65" x2="75" y2="70" stroke="#fdcb6e" strokeWidth="3" />
            <circle cx="75" cy="70" r="1" fill="#2d3436" />
            {/* Paper */}
            <rect x="25" y="65" width="15" height="12" rx="1" fill="#ffffff" stroke="#2d3436" />
            <line x1="27" y1="68" x2="37" y2="68" stroke="#2d3436" />
            <line x1="27" y1="71" x2="35" y2="71" stroke="#2d3436" />
            <line x1="27" y1="74" x2="38" y2="74" stroke="#2d3436" />
            {/* Legs */}
            <line x1="45" y1="75" x2="45" y2="85" stroke="#2d3436" strokeWidth="3" />
            <line x1="55" y1="75" x2="55" y2="85" stroke="#2d3436" strokeWidth="3" />
          </svg>
        )

      case "thinking":
        return (
          <svg {...baseProps}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#ffeaa7" stroke="#2d3436" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 15 65 20" stroke="#2d3436" strokeWidth="3" fill="none" />
            {/* Eyes looking up */}
            <circle cx="45" cy="26" r="2" fill="#2d3436" />
            <circle cx="55" cy="26" r="2" fill="#2d3436" />
            {/* Thinking expression */}
            <path d="M47 35 Q50 33 53 35" stroke="#2d3436" strokeWidth="2" fill="none" />
            {/* Body */}
            <rect x="40" y="45" width="20" height="30" rx="5" fill="#fdcb6e" stroke="#2d3436" />
            {/* Arms - one hand to chin */}
            <line x1="35" y1="55" x2="30" y2="45" stroke="#2d3436" strokeWidth="3" />
            <line x1="65" y1="55" x2="70" y2="65" stroke="#2d3436" strokeWidth="3" />
            {/* Hand to chin */}
            <circle cx="30" cy="45" r="3" fill="#ffeaa7" stroke="#2d3436" />
            {/* Thought bubble */}
            <circle cx="70" cy="20" r="8" fill="#ffffff" stroke="#2d3436" />
            <circle cx="65" cy="30" r="4" fill="#ffffff" stroke="#2d3436" />
            <circle cx="62" cy="35" r="2" fill="#ffffff" stroke="#2d3436" />
            {/* Question mark in thought */}
            <path d="M67 17 Q70 14 73 17 Q73 20 70 20" stroke="#2d3436" strokeWidth="2" fill="none" />
            <circle cx="70" cy="23" r="1" fill="#2d3436" />
            {/* Legs */}
            <line x1="45" y1="75" x2="45" y2="85" stroke="#2d3436" strokeWidth="3" />
            <line x1="55" y1="75" x2="55" y2="85" stroke="#2d3436" strokeWidth="3" />
          </svg>
        )

      case "studying":
      default:
        return (
          <svg {...baseProps}>
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#ffeaa7" stroke="#2d3436" strokeWidth="2" />
            {/* Hair */}
            <path d="M35 20 Q50 15 65 20" stroke="#2d3436" strokeWidth="3" fill="none" />
            {/* Eyes */}
            <circle cx="45" cy="28" r="2" fill="#2d3436" />
            <circle cx="55" cy="28" r="2" fill="#2d3436" />
            {/* Smile */}
            <path d="M45 35 Q50 38 55 35" stroke="#2d3436" strokeWidth="2" fill="none" />
            {/* Body */}
            <rect x="40" y="45" width="20" height="30" rx="5" fill="#e17055" stroke="#2d3436" />
            {/* Arms */}
            <line x1="35" y1="55" x2="25" y2="65" stroke="#2d3436" strokeWidth="3" />
            <line x1="65" y1="55" x2="75" y2="65" stroke="#2d3436" strokeWidth="3" />
            {/* Books stack */}
            <rect x="20" y="60" width="12" height="3" rx="1" fill="#74b9ff" stroke="#2d3436" />
            <rect x="20" y="63" width="12" height="3" rx="1" fill="#00b894" stroke="#2d3436" />
            <rect x="20" y="66" width="12" height="3" rx="1" fill="#fdcb6e" stroke="#2d3436" />
            {/* Laptop */}
            <rect x="70" y="60" width="15" height="8" rx="1" fill="#2d3436" stroke="#2d3436" />
            <rect x="71" y="61" width="13" height="6" rx="1" fill="#74b9ff" />
            {/* Legs */}
            <line x1="45" y1="75" x2="45" y2="85" stroke="#2d3436" strokeWidth="3" />
            <line x1="55" y1="75" x2="55" y2="85" stroke="#2d3436" strokeWidth="3" />
          </svg>
        )
    }
  }

  return getCharacterSVG()
}
