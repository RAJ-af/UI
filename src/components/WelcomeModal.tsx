"use client"

import type React from "react"
import { X, BookOpen, Brain, Camera, Timer, MessageCircle } from "lucide-react"
import StudentCharacter from "./StudentCharacter"

interface WelcomeModalProps {
  onClose: () => void
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-notebook-paper border-4 border-dashed border-sketch-black rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b-2 border-dashed border-sketch-gray relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-sketch-gray/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <StudentCharacter type="waving" size="medium" />
            </div>
            <h2 className="text-3xl font-bold text-sketch-black mb-2">Welcome to Homework Club! 🎉</h2>
            <p className="text-sketch-gray">Your AI-powered study companion is here to help you excel!</p>
          </div>
        </div>

        {/* Features */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 p-4 border-2 border-dashed border-notebook-blue/30 rounded-lg">
              <BookOpen className="w-8 h-8 text-notebook-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-sketch-black">Library</h3>
                <p className="text-sm text-sketch-gray">Upload & download study materials</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 border-2 border-dashed border-notebook-green/30 rounded-lg">
              <Brain className="w-8 h-8 text-notebook-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-sketch-black">Ask AI</h3>
                <p className="text-sm text-sketch-gray">Get instant homework help</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 border-2 border-dashed border-notebook-red/30 rounded-lg">
              <Camera className="w-8 h-8 text-notebook-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-sketch-black">Scan Doubts</h3>
                <p className="text-sm text-sketch-gray">Photo → Solution in seconds</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 border-2 border-dashed border-notebook-yellow/30 rounded-lg">
              <Timer className="w-8 h-8 text-notebook-yellow flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-sketch-black">Study Timer</h3>
                <p className="text-sm text-sketch-gray">Track focus & build streaks</p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-notebook-green/10 to-notebook-blue/10 p-6 rounded-lg border-2 border-dashed border-notebook-green/30 text-center">
            <MessageCircle className="w-12 h-12 text-notebook-green mx-auto mb-3" />
            <h3 className="text-xl font-bold text-sketch-black mb-2">Join Our Study Community!</h3>
            <p className="text-sketch-gray mb-4">Connect with fellow students, share notes, and get help 24/7</p>
            <button className="bg-notebook-green text-white px-6 py-3 rounded-full font-bold hover:bg-notebook-green/90 transition-colors">
              Join WhatsApp Group
            </button>
          </div>

          {/* Get Started Button */}
          <div className="text-center">
            <button
              onClick={onClose}
              className="bg-notebook-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-notebook-blue/90 transition-all transform hover:scale-105"
            >
              Let's Start Learning! 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal
