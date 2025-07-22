"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, X, Users, Zap, BookOpen } from "lucide-react"

const WhatsAppButton: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleJoinWhatsApp = () => {
    // Replace with actual WhatsApp group link
    window.open("https://wa.me/917011476556?text=Hi! I want to join the Homework Club community 📚", "_blank")
    setShowPopup(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-notebook-green text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 animate-pulse"
      >
        <MessageCircle className="w-8 h-8 mx-auto" />
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-notebook-paper border-4 border-dashed border-sketch-black rounded-lg max-w-md w-full">
            {/* Header */}
            <div className="p-6 border-b-2 border-dashed border-sketch-gray relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 hover:bg-sketch-gray/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-notebook-green rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-sketch-black mb-2">Join Our Study Community! 🎓</h3>
                <p className="text-sketch-gray">Connect with fellow students and get instant help</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-notebook-blue" />
                  <span className="text-sketch-black">500+ Active Students</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-notebook-yellow" />
                  <span className="text-sketch-black">Instant Doubt Resolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-notebook-red" />
                  <span className="text-sketch-black">Free Study Materials</span>
                </div>
              </div>

              {/* Join Button */}
              <button
                onClick={handleJoinWhatsApp}
                className="w-full bg-notebook-green text-white py-4 rounded-full font-bold text-lg hover:bg-notebook-green/90 transition-all transform hover:scale-105 border-2 border-dashed border-transparent hover:border-sketch-black"
              >
                Join WhatsApp Group 🚀
              </button>

              <p className="text-xs text-sketch-gray text-center">
                Free to join • No spam • Study-focused discussions only
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WhatsAppButton
