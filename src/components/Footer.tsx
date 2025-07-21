import { Mail, Phone, GraduationCap, BookOpen } from "lucide-react"
import StudentCharacter from "./StudentCharacter"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white border-t-4 border-gray-600 notebook-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <StudentCharacter type="studying" size="sm" />
              <span className="text-xl font-bold sketch-underline">Homework Club</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your ultimate educational companion for homework help, AI assistance, and productivity tracking. Join
              students improving their academic performance every day.
            </p>
            <div className="flex space-x-2">
              {["bg-notebook-red", "bg-notebook-yellow", "bg-notebook-green", "bg-notebook-blue"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 ${color} rounded-full animate-bounce border border-dashed border-gray-400`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-notebook-blue sketch-underline">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Library", href: "/library" },
                { name: "Ask AI", href: "/ask-ai" },
                { name: "Timer", href: "/timer" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 hover:translate-x-1 transform"
                  >
                    <BookOpen className="w-4 h-4 text-notebook-green" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-notebook-green sketch-underline">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-notebook-red" />
                <span className="text-sm">himanshubhatnagar.in@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-notebook-yellow" />
                <span>7011476556</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-300">
                <GraduationCap className="w-4 h-4 text-notebook-blue mt-1" />
                <span className="text-sm">Lal Chand Sharma Higher Secondary School</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>© 2024 Homework Club. Made with</span>
            <span className="text-notebook-red animate-pulse">♥</span>
            <span>for students worldwide.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
