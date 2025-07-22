interface StudentCharacterProps {
  type?: "reading" | "thinking" | "writing" | "studying"
  size?: "sm" | "md" | "lg" | "xl"
  color?: "blue" | "green" | "yellow" | "red" | "white"
}

export default function StudentCharacter({ type = "reading", size = "md", color = "blue" }: StudentCharacterProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  }

  const colorClasses = {
    blue: "border-notebook-blue",
    green: "border-notebook-green",
    yellow: "border-notebook-yellow",
    red: "border-notebook-red",
    white: "border-white",
  }

  return (
    <div className="student-character">
      <div
        className={`${sizeClasses[size]} bg-gray-100 rounded-full border-3 border-dashed ${colorClasses[color]} relative overflow-hidden`}
      >
        {/* Head */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-200 rounded-full border border-dashed border-yellow-600"></div>

        {/* Body */}
        <div
          className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-${color === "white" ? "blue" : color}-200 rounded border border-dashed border-${color === "white" ? "blue" : color}-600`}
        ></div>

        {/* Book/Notes */}
        {type === "reading" && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-white border border-dashed border-gray-400 rounded-sm">
            <div className="absolute top-0.5 left-0.5 right-0.5 h-0.5 bg-gray-300"></div>
            <div className="absolute top-1.5 left-0.5 right-0.5 h-0.5 bg-gray-300"></div>
          </div>
        )}

        {/* Thinking bubble */}
        {type === "thinking" && (
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white border border-dashed border-gray-400 rounded-full">
            <div className="absolute top-1 left-1 w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  )
}
