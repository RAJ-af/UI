import type React from "react"
import StudentCharacter from "./StudentCharacter"

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-notebook-blue to-notebook-green flex items-center justify-center z-50">
      <div className="text-center animate-splash">
        <div className="mb-8">
          <StudentCharacter type="studying" size="large" className="mx-auto animate-bounce-slow" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-notebook">Homework Club</h1>
        <p className="text-xl text-white/90 font-notebook">Study Together, Grow Together</p>
        <div className="mt-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
