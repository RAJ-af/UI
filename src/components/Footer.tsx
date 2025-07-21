import type React from "react"
import { Mail, Phone, MapPin } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-notebook-text text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Homework Club</h3>
            <p className="text-gray-300 mb-4">Lal Chand Sharma Higher Secondary School</p>
            <p className="text-gray-300 text-sm">
              Empowering students through collaborative learning and academic excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-notebook-blue" />
                <span className="text-gray-300">homeworkclub@lcshs.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-notebook-green" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-notebook-red" />
                <span className="text-gray-300">School Campus, Education District</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-notebook-blue transition-colors">
                Study Materials
              </a>
              <a href="#" className="block text-gray-300 hover:text-notebook-green transition-colors">
                Assignment Help
              </a>
              <a href="#" className="block text-gray-300 hover:text-notebook-yellow transition-colors">
                Exam Preparation
              </a>
              <a href="#" className="block text-gray-300 hover:text-notebook-red transition-colors">
                Student Support
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 Homework Club - Lal Chand Sharma Higher Secondary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
