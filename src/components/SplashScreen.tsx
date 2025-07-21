import StudentCharacter from "./StudentCharacter"

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-notebook-blue to-notebook-green flex items-center justify-center z-50">
      <div className="text-center animate-splash">
        <div className="mb-8">
          <StudentCharacter type="studying" size="xl" className="mx-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-notebook">Homework Club</h1>
        <p className="text-xl text-white/90 mb-8">Lal Chand Sharma Higher Secondary School</p>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-white/50 rounded-full overflow-hidden">
            <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
