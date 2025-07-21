import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-notebook">Homework Club</h3>
            <p className="text-gray-300 text-sm">
              Supporting students at Lal Chand Sharma Higher Secondary School with their academic journey.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-notebook">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>himanshubhatnagar.in@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>7011476556</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Lal Chand Sharma Higher Secondary School</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-notebook">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <div>
                <a href="/library" className="hover:text-notebook-blue transition-colors">
                  Study Library
                </a>
              </div>
              <div>
                <a href="/ask-ai" className="hover:text-notebook-blue transition-colors">
                  Ask AI
                </a>
              </div>
              <div>
                <a href="/timer" className="hover:text-notebook-blue transition-colors">
                  Study Timer
                </a>
              </div>
              <div>
                <a href="/join-group" className="hover:text-notebook-blue transition-colors">
                  Join WhatsApp Group
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Homework Club. Made with ❤️ for students.</p>
        </div>
      </div>
    </footer>
  )
}
