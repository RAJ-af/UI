"use client"

import { useState } from "react"
import { MessageCircle, Users, BookOpen, Lightbulb, CheckCircle, ArrowRight } from "lucide-react"
import LoadingButton from "../components/LoadingButton"
import StudentCharacter from "../components/StudentCharacter"

export default function JoinGroup() {
  const [isJoining, setIsJoining] = useState(false)
  const [hasJoined, setHasJoined] = useState(false)

  const handleJoinGroup = async () => {
    setIsJoining(true)

    // Simulate joining process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsJoining(false)
    setHasJoined(true)

    // Open WhatsApp group link
    setTimeout(() => {
      window.open("https://chat.whatsapp.com/your-group-link", "_blank")
    }, 1000)
  }

  const features = [
    {
      icon: Users,
      title: "Study Together",
      description: "Connect with fellow students and form study groups",
      color: "text-notebook-blue",
    },
    {
      icon: BookOpen,
      title: "Share Resources",
      description: "Exchange notes, materials, and study guides",
      color: "text-notebook-green",
    },
    {
      icon: Lightbulb,
      title: "Get Help",
      description: "Ask questions and get answers from peers",
      color: "text-notebook-yellow",
    },
    {
      icon: MessageCircle,
      title: "Daily Updates",
      description: "Stay updated with study tips and reminders",
      color: "text-notebook-red",
    },
  ]

  const benefits = [
    "24/7 active community support",
    "Daily study challenges and tips",
    "Peer-to-peer homework help",
    "Motivational study content",
    "Exam preparation strategies",
    "Resource sharing and collaboration",
  ]

  return (
    <div className="min-h-screen bg-notebook-bg py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <StudentCharacter type="studying" size="xl" color="green" />
          </div>
          <h1 className="text-4xl font-bold text-notebook-text mb-4 sketch-underline">Join Our Study Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with thousands of students, share resources, and achieve academic success together
          </p>
        </div>

        {hasJoined ? (
          <div className="sketch-card p-8 text-center">
            <CheckCircle className="w-16 h-16 text-notebook-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-notebook-text mb-4">Successfully Joined!</h2>
            <p className="text-gray-600 mb-6">
              Welcome to the Homework Club community! You should be redirected to WhatsApp shortly.
            </p>
            <div className="bg-notebook-green bg-opacity-10 border border-notebook-green rounded-lg p-4">
              <p className="text-notebook-green font-medium">
                If you weren't redirected automatically, click the WhatsApp button in the bottom right corner.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="sketch-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-notebook-text mb-2 sketch-underline">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Benefits Section */}
            <div className="sketch-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-notebook-text mb-6 text-center sketch-underline">
                What You'll Get
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-notebook-green flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Join Button */}
            <div className="sketch-card p-8 text-center">
              <h2 className="text-2xl font-bold text-notebook-text mb-4">Ready to Join?</h2>
              <p className="text-gray-600 mb-6">
                Click below to join our WhatsApp study group and start connecting with fellow students
              </p>

              <LoadingButton
                onClick={handleJoinGroup}
                className="btn-primary bg-notebook-green hover:bg-green-600 text-white px-8 py-4 text-lg"
                loadingText="Joining Group..."
                animationType="sparkles"
              >
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Join WhatsApp Group
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </LoadingButton>

              <p className="text-sm text-gray-500 mt-4">Free to join • Active 24/7 • 10,000+ students</p>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { number: "10K+", label: "Active Members", color: "text-notebook-blue" },
                { number: "500+", label: "Daily Messages", color: "text-notebook-green" },
                { number: "95%", label: "Satisfaction Rate", color: "text-notebook-yellow" },
              ].map((stat, index) => (
                <div key={index} className="sketch-card p-6 text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
