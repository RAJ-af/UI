import type React from "react"

interface StudentCharacterProps {
  type: "studying" | "thinking" | "happy" | "writing" | "reading" | "waving"
  size?: "small" | "medium" | "large"
  className?: string
}

const StudentCharacter: React.FC<StudentCharacterProps> = ({ type, size = "medium", className = "" }) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "w-16 h-16"
      case "large":
        return "w-32 h-32"
      default:
        return "w-24 h-24"
    }
  }

  const getCharacterEmoji = () => {
    switch (type) {
      case "studying":
        return "👨‍🎓"
      case "thinking":
        return "🤔"
      case "happy":
        return "😊"
      case "writing":
        return "✍️"
      case "reading":
        return "📖"
      case "waving":
        return "👋"
      default:
        return "👨‍🎓"
    }
  }

  return (
    <div
      className={`
      ${getSizeClasses()} 
      bg-notebook-paper border-2 border-dashed border-sketch-black rounded-full
      flex items-center justify-center text-4xl
      hover:animate-bounce transition-all duration-200
      ${className}
    `}
    >
      {getCharacterEmoji()}
    </div>
  )
}

export default StudentCharacter
