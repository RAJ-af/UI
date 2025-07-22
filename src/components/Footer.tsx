import type React from "react"
import { BookOpen, Mail, Phone, MapPin, Heart } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-sketch-black text-notebook-paper border-t-4 border-dashed border-sketch-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-notebook-blue rounded-full flex items-center justify-center border-2 border-dashed border-notebook-paper">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Homework Club</span>
            </div>
            <p className="text-sketch-gray text-sm">
              Your AI-powered study companion helping students excel in their academic journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-notebook-yellow">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-sketch-gray hover:text-notebook-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/library" className="text-sketch-gray hover:text-notebook-blue transition-colors">
                  Library
                </a>
              </li>
              <li>
                <a href="/ask-ai" className="text-sketch-gray hover:text-notebook-blue transition-colors">
                  Ask AI
                </a>
              </li>
              <li>
                <a href="/scan-doubts" className="text-sketch-gray hover:text-notebook-blue transition-colors">
                  Scan Doubts
                </a>
              </li>
              <li>
                <a href="/timer" className="text-sketch-gray hover:text-notebook-blue transition-colors">
                  Study Timer
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-notebook-green">Features</h3>
            <ul className="space-y-2 text-sm text-sketch-gray">
              <li>AI Homework Assistant</li>
              <li>Document Library</li>
              <li>Photo Problem Solver</li>
              <li>Study Timer & Streaks</li>
              <li>WhatsApp Community</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-notebook-red">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-notebook-red mt-0.5 flex-shrink-0" />
                <span className="text-sketch-gray">Lal Chand Sharma Higher Secondary School</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-notebook-blue flex-shrink-0" />
                <a
                  href="mailto:himanshubhatnagar.in@gmail.com"
                  className="text-sketch-gray hover:text-notebook-blue transition-colors"
                >
                  himanshubhatnagar.in@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-notebook-green flex-shrink-0" />
                <a href="tel:7011476556" className="text-sketch-gray hover:text-notebook-green transition-colors">
                  7011476556
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-dashed border-sketch-gray">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sketch-gray text-sm">
              © 2024 Homework Club. Made with <Heart className="w-4 h-4 text-notebook-red inline mx-1" /> for students.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-sketch-gray hover:text-notebook-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sketch-gray hover:text-notebook-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sketch-gray hover:text-notebook-blue transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
