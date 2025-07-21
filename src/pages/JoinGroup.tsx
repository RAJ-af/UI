"use client"

import { useState } from "react"
import { MessageCircle, Users, BookOpen, Brain, CheckCircle2, ArrowRight } from "lucide-react"
import LoadingButton from "../components/LoadingButton"
import StudentCharacter from "../components/StudentCharacter"
import { useTapBubble } from "../components/TapBubbleProvider"

export default function JoinGroup() {
  const [isJoining, setIsJoining] = useState(false)
  const [hasJoined, setHasJoined] = useState(false)
  const { addTapBubble } = useTapBubble()

  const benefits = [
    {
      icon: Users,
      title: "Study Together",
      description: "Connect with fellow students, share notes, and solve problems collaboratively.",
      color: "text-notebook-blue",
    },
    {
      icon: BookOpen,
      title: "Resource Sharing",
      description: "Access shared study materials, past papers, and helpful resources.",
      color: "text-notebook-green",
    },
    {
      icon: Brain,
      title: "Quick Help",
      description: "Get instant help from peers and mentors when you are stuck.",
      color: "text-notebook-yellow",
    },
    {
      icon: MessageCircle,
      title: "24/7 Active Community",
      description: "Our study group is active round the clock with helpful members.",
      color: "text-notebook-red",
    },
  ]

  const handleJoinWhatsApp = async () => {
    setIsJoining(true)

    // Add joining bubble
    addTapBubble(
      window.innerWidth / 2,
      window.innerHeight / 2,
      "border-green-500 bg-green-500",
      "Joining WhatsApp Group...",
    )

    // Simulate joining process
    setTimeout(() => {
      setIsJoining(false)
      setHasJoined(true)

      // Add success bubbles
      addTapBubble(window.innerWidth / 2 - 50, window.innerHeight / 2, "border-green-600 bg-green-600", "Welcome!")

      setTimeout(() => {
        addTapBubble(window.innerWidth / 2 + 50, window.innerHeight / 2, "border-blue-500 bg-blue-500", "Success!")
      }, 300)

      // Open WhatsApp group (replace with actual link)
      setTimeout(() => {
        window.open("https://chat.whatsapp.com/your-homework-club-group-link", "_blank")
      }, 1000)
    }, 2000)
  }

  if (hasJoined) {
    return (
      <div className="min-h-screen bg-notebook-bg flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="notebook-card">
            <div className="animate-bounce mb-6">
              <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 sketch-underline">Welcome to the Family!</h1>
            <p className="text-xl text-gray-600 mb-8">
              You've successfully joined the Homework Club WhatsApp group. You should now see the group chat opening in
              WhatsApp.
            </p>
            <div className="flex justify-center space-x-4">
              <StudentCharacter type="reading" size="md" className="character-float" />
              <StudentCharacter type="writing" size="md" className="character-float" />
              <StudentCharacter type="thinking" size="md" className="character-float" />
            </div>
            <p className="text-gray-500 mt-6">
              If WhatsApp didn't open automatically, please check your browser's popup settings.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-notebook-bg py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <StudentCharacter type="studying" size="xl" className="character-float" />
              <div className="absolute -top-2 -right-2">
                <MessageCircle className="w-12 h-12 text-green-500 animate-bounce" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 sketch-underline">
            Join Our Study Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with thousands of students in our active WhatsApp group. Get help, share resources, and study
            together!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "5000+", label: "Active Members" },
            { number: "24/7", label: "Support Available" },
            { number: "1000+", label: "Problems Solved Daily" },
            { number: "95%", label: "Response Rate" },
          ].map((stat, index) => (
            <div key={index} className="notebook-card text-center">
              <div className="text-2xl md:text-3xl font-bold text-notebook-blue mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 sketch-underline">
            Why Join Our WhatsApp Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="notebook-card text-center">
                  <div className="mb-4">
                    <Icon className={`w-12 h-12 ${benefit.color} mx-auto`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Group Rules */}
        <div className="mb-12">
          <div className="notebook-card">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 sketch-underline text-center">Group Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-notebook-green mb-3">✅ What to Do</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ask homework and study related questions</li>
                  <li>• Share helpful study resources</li>
                  <li>• Help fellow students with their queries</li>
                  <li>• Be respectful and supportive</li>
                  <li>• Use proper language and be kind</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-notebook-red mb-3">❌ What Not to Do</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Share personal information</li>
                  <li>• Send unrelated messages or spam</li>
                  <li>• Share inappropriate content</li>
                  <li>• Ask others to do your homework completely</li>
                  <li>• Be disrespectful to any member</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Join Button */}
        <div className="text-center">
          <div className="notebook-card max-w-2xl mx-auto">
            <div className="mb-6">
              <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Join?</h3>
              <p className="text-gray-600">
                Click the button below to join our active WhatsApp study group and start your collaborative learning
                journey!
              </p>
            </div>

            <LoadingButton
              onClick={handleJoinWhatsApp}
              disabled={isJoining}
              className="btn-notebook btn-green text-xl py-4 px-8"
            >
              {isJoining ? (
                <span className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 animate-spin" />
                  <span className="loading-dots">Joining Group</span>
                </span>
              ) : (
                <span className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Join WhatsApp Group
                  <ArrowRight className="w-6 h-6 ml-3" />
                </span>
              )}
            </LoadingButton>

            <p className="text-sm text-gray-500 mt-4">
              By joining, you agree to follow our group guidelines and be a positive member of our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
