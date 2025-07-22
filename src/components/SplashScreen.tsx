import StudentCharacter from "./StudentCharacter"

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-notebook-blue to-notebook-green flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8 animate-bounce-slow">
          <StudentCharacter type="reading" size="xl" color="white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 sketch-underline">Homework Club</h1>
        <p className="text-xl text-white/90 mb-8">Your Learning Adventure Begins...</p>
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}
