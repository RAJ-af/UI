interface StudentCharacterProps {
  type?: "reading" | "thinking" | "writing" | "studying"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export default function StudentCharacter({ type = "reading", size = "md", className = "" }: StudentCharacterProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  }

  const renderCharacter = () => {
    switch (type) {
      case "reading":
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Head */}
            <circle cx="50" cy="25" r="12" fill="#ffeaa7" stroke="#2d3436" strokeWidth="2" strokeDasharray="2,1" />
            {/* Hair */}
            <path d="M38 18 Q50 10 62 18" fill="#6c5ce7" stroke="#2d3436" strokeWidth="2" />
            {/* Body */}
            <ellipse
              cx="50"
              cy="45"
              rx="8"
              ry="15"
              fill="#74b9ff"
              stroke="#2d3436"
              strokeWidth="2"
              strokeDasharray="3,1"
            />
            {/* Arms */}
            <path d="M42 40 Q35 45 38 52" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            <path d="M58 40 Q65 45 62 52" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            {/* Book */}
            <rect
              x="40"
              y="50"
              width="20"
              height="15"
              fill="#ffffff"
              stroke="#2d3436"
              strokeWidth="2"
              strokeDasharray="2,1"
            />
            <line x1="43" y1="55" x2="57" y2="55" stroke="#2d3436" strokeWidth="1" />
            <line x1="43" y1="58" x2="55" y2="58" stroke="#2d3436" strokeWidth="1" />
            {/* Legs */}
            <path d="M45 60 Q42 70 45 80" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            <path d="M55 60 Q58 70 55 80" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      case "thinking":
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="25" r="12" fill="#ffeaa7" stroke="#2d3436" strokeWidth="2" strokeDasharray="2,1" />
            <path d="M38 18 Q50 10 62 18" fill="#fd79a8" stroke="#2d3436" strokeWidth="2" />
            <ellipse
              cx="50"
              cy="45"
              rx="8"
              ry="15"
              fill="#00b894"
              stroke="#2d3436"
              strokeWidth="2"
              strokeDasharray="3,1"
            />
            <path d="M42 40 Q38 35 40 30" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            <path d="M58 40 Q60 35 58 30" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            {/* Thought bubble */}
            <circle cx="65" cy="15" r="8" fill="#ffffff" stroke="#2d3436" strokeWidth="2" strokeDasharray="1,1" />
            <circle cx="60" cy="22" r="3" fill="#ffffff" stroke="#2d3436" strokeWidth="1" />
            <circle cx="57" cy="26" r="1.5" fill="#ffffff" stroke="#2d3436" strokeWidth="1" />
            <text x="65" y="18" textAnchor="middle" fontSize="8" fill="#2d3436">
              ?
            </text>
            <path d="M45 60 Q42 70 45 80" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            <path d="M55 60 Q58 70 55 80" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      case "writing":
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="25" r="12" fill="#ffeaa7" stroke="#2d3436" strokeWidth="2" strokeDasharray="2,1" />
            <path d="M38 18 Q50 10 62 18" fill="#e17055" stroke="#2d3436" strokeWidth="2" />
            <ellipse
              cx="50"
              cy="45"
              rx="8"
              ry="15"
              fill="#fdcb6e"
              stroke="#2d3436"
              strokeWidth="2"
              strokeDasharray="3,1"
            />
            <path d="M42 40 Q35 45 32 50" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            <path d="M58 40 Q60 45 62 50" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            {/* Pencil */}
            <rect x="28" y="48" width="10" height="2" fill="#fdcb6e" stroke="#2d3436" strokeWidth="1" />
            <polygon points="28,48 25,49 25,51 28,52" fill="#2d3436" />
            {/* Paper */}
            <rect
              x="45"
              y="55"
              width="18"
              height="12"
              fill="#ffffff"
              stroke="#2d3436"
              strokeWidth="2"
              strokeDasharray="2,1"
            />
            <line x1="48" y1="59" x2="58" y2="59" stroke="#2d3436" strokeWidth="1" />
            <line x1="48" y1="62" x2="55" y2="62" stroke="#2d3436" strokeWidth="1" />
            <path d="M45 60 Q42 70 45 80" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            <path d="M55 60 Q58 70 55 80" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      default:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="25" r="12" fill="#ffeaa7" stroke="#2d3436" strokeWidth="2" strokeDasharray="2,1" />
            <path d="M38 18 Q50 10 62 18" fill="#a29bfe" stroke="#2d3436" strokeWidth="2" />
            <ellipse
              cx="50"
              cy="45"
              rx="8"
              ry="15"
              fill="#55a3ff"
              stroke="#2d3436"
              strokeWidth="2"
              strokeDasharray="3,1"
            />
            <path d="M42 40 Q35 45 38 52" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            <path d="M58 40 Q65 45 62 52" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            <path d="M45 60 Q42 70 45 80" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
            <path d="M55 60 Q58 70 55 80" fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
    }
  }

  return <div className={`${sizeClasses[size]} ${className} edu-icon`}>{renderCharacter()}</div>
}
