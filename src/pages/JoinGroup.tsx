import { Users, MessageCircle, BookOpen, Lightbulb, ArrowRight } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import WhatsAppButton from "../components/WhatsAppButton"

export default function JoinGroup() {
  const benefits = [
    {
      icon: Users,
      title: "Study Together",
      description: "Connect with classmates and study in groups",
    },
    {
      icon: MessageCircle,
      title: "Ask Questions",
      description: "Get help from peers and share knowledge",
    },
    {
      icon: BookOpen,
      title: "Share Resources",
      description: "Exchange notes, books, and study materials",
    },
    {
      icon: Lightbulb,
      title: "Get Tips",
      description: "Learn effective study techniques from others",
    },
  ]

  return (
    <div className="min-h-screen bg-notebook-bg py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <StudentCharacter type="happy" size="xl" className="character-float" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 sketch-underline">Join Our Study Group</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with fellow students from Lal Chand Sharma Higher Secondary School and excel together!
          </p>

          <div className="flex justify-center">
            <WhatsAppButton groupLink="https://chat.whatsapp.com/homework-club-group" className="text-lg px-8 py-4" />
          </div>
        </div>

        {/* Benefits */}
        <div className="notebook-card mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Why Join Our WhatsApp Group?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-notebook-blue rounded-lg flex items-center justify-center sketch-border flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Group Rules */}
        <div className="notebook-card mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Group Guidelines</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-notebook-green mb-4">✓ Do's</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Be respectful to all members</li>
                <li>• Share helpful study resources</li>
                <li>• Ask questions when you need help</li>
                <li>• Help others when you can</li>
                <li>• Stay on topic (academics)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-notebook-red mb-4">✗ Don'ts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• No spam or irrelevant messages</li>
                <li>• Don't share personal information</li>
                <li>• No offensive language or content</li>
                <li>• Don't ask for direct answers to exams</li>
                <li>• Avoid late-night messages</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="notebook-card text-center">
            <div className="text-3xl font-bold text-notebook-blue mb-2">150+</div>
            <div className="text-gray-600">Active Members</div>
          </div>

          <div className="notebook-card text-center">
            <div className="text-3xl font-bold text-notebook-green mb-2">24/7</div>
            <div className="text-gray-600">Study Support</div>
          </div>

          <div className="notebook-card text-center">
            <div className="text-3xl font-bold text-notebook-yellow mb-2">95%</div>
            <div className="text-gray-600">Helpful Responses</div>
          </div>
        </div>

        {/* CTA */}
        <div className="notebook-card text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Join?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Click the button below to join our WhatsApp group and start your collaborative learning journey today!
          </p>

          <WhatsAppButton
            groupLink="https://chat.whatsapp.com/homework-club-group"
            className="text-lg px-8 py-4 mx-auto"
          />

          <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
            <ArrowRight className="w-4 h-4 mr-2" />
            You'll be redirected to WhatsApp
          </div>
        </div>
      </div>
    </div>
  )
}
