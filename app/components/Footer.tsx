import { Mail, Phone, GraduationCap } from "lucide-react"
import StudentCharacter from "./StudentCharacter"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-dashed border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <StudentCharacter type="studying" size="sm" color="blue" />
              <span className="text-xl font-bold sketch-underline">Homework Club</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your ultimate educational companion for homework help, AI assistance, and productivity tracking. Join
              students improving their academic performance.
            </p>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse border border-dashed border-red-300"></div>
              <div
                className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse border border-dashed border-yellow-300"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-green-500 rounded-full animate-pulse border border-dashed border-green-300"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="w-3 h-3 bg-blue-500 rounded-full animate-pulse border border-dashed border-blue-300"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400 sketch-underline">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Library", href: "/library" },
                { name: "Ask AI", href: "/ask-ai" },
                { name: "Timer", href: "/timer" },
              ].map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block border-b border-dashed border-transparent hover:border-gray-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400 sketch-underline">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 text-red-400" />
                <span className="text-sm">himanshubhatnagar.in@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>7011476556</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <GraduationCap className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-sm">Lal Chand Sharma Higher Secondary School</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © 2024 Homework Club. Made with care for students worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
