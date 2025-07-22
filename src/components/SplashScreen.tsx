import type React from "react"
import { BookOpen, Users, Sparkles } from "lucide-react"
import StudentCharacter from "./StudentCharacter"

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-notebook-paper to-notebook-blue/10 flex items-center justify-center z-50">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="relative">
          <div className="text-6xl font-bold text-sketch-black mb-4 animate-bounce">📚 Homework Club</div>
          <div className="absolute -top-2 -right-2">
            <Sparkles className="w-8 h-8 text-notebook-yellow animate-spin" />
          </div>
        </div>

        {/* Student Character */}
        <div className="flex justify-center">
          <StudentCharacter type="studying" size="large" className="animate-float" />
        </div>

        {/* Features Icons */}
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center space-y-2 animate-pulse">
            <BookOpen className="w-8 h-8 text-notebook-blue" />
            <span className="text-sm text-sketch-gray">Study</span>
          </div>
          <div className="flex flex-col items-center space-y-2 animate-pulse delay-100">
            <Users className="w-8 h-8 text-notebook-green" />
            <span className="text-sm text-sketch-gray">Connect</span>
          </div>
          <div className="flex flex-col items-center space-y-2 animate-pulse delay-200">
            <Sparkles className="w-8 h-8 text-notebook-red" />
            <span className="text-sm text-sketch-gray">Excel</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-sketch-gray animate-pulse">Loading your study companion...</div>
      </div>
    </div>
  )
}

export default SplashScreen
