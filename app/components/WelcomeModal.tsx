"use client"
import { X, BookOpen, Sparkles, Target, Users } from "lucide-react"
import StudentCharacter from "./StudentCharacter"

interface WelcomeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  if (!isOpen) return null

  const features = [
    { icon: BookOpen, text: "Access digital library", color: "blue" as const },
    { icon: Sparkles, text: "Get AI assistance", color: "yellow" as const },
    { icon: Target, text: "Track study progress", color: "green" as const },
    { icon: Users, text: "Join study community", color: "red" as const },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 bounce-in sketch-border">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <StudentCharacter type="reading" size="lg" color="blue" />
          </div>
          <h2 className="text-2xl font-bold text-black mb-2 sketch-underline">Welcome to Homework Club!</h2>
          <p className="text-gray-600">Your educational journey starts here</p>
        </div>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex items-center space-x-3 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border border-dashed border-gray-400">
                  <Icon className={`w-4 h-4 text-${feature.color}-500`} />
                </div>
                <span className="text-gray-700">{feature.text}</span>
              </div>
            )
          })}
        </div>

        <div className="space-y-3">
          <button onClick={onClose} className="w-full btn-primary">
            Let's Start Learning!
          </button>
          <p className="text-xs text-gray-500 text-center">Tap anywhere on the screen to discover helpful tips</p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
