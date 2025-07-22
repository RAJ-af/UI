import type React from "react"
import { Heart, Mail, Phone, MapPin } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-notebook-text text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-notebook font-bold text-lg mb-4">Homework Club</h3>
            <p className="text-gray-300 font-notebook">
              Study together, grow together. Join our community of learners and achieve academic excellence.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-notebook font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-notebook">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="font-notebook">help@homeworkclub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="font-notebook">Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-notebook font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-300 font-notebook">
              <div>Study Materials</div>
              <div>Practice Tests</div>
              <div>Video Lectures</div>
              <div>Discussion Forum</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p className="text-gray-300 font-notebook flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for students
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
