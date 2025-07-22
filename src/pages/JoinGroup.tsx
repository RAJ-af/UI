"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, Users, Star, CheckCircle, Heart } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import WhatsAppButton from "../components/WhatsAppButton"

const JoinGroup: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)

  const studyGroups = [
    {
      id: "general",
      name: "General Study Group",
      description: "Main group for all subjects and general discussions",
      members: 2500,
      subjects: ["All Subjects", "General Help", "Study Tips"],
      link: "https://chat.whatsapp.com/general-study-group",
      color: "bg-notebook-blue",
    },
    {
      id: "math",
      name: "Mathematics Club",
      description: "Dedicated group for math problems and solutions",
      members: 1200,
      subjects: ["Algebra", "Calculus", "Geometry", "Statistics"],
      link: "https://chat.whatsapp.com/math-club",
      color: "bg-notebook-green",
    },
    {
      id: "science",
      name: "Science Hub",
      description: "Physics, Chemistry, and Biology discussions",
      members: 980,
      subjects: ["Physics", "Chemistry", "Biology"],
      link: "https://chat.whatsapp.com/science-hub",
      color: "bg-notebook-yellow",
    },
    {
      id: "competitive",
      name: "Competitive Exams",
      description: "Preparation for JEE, NEET, and other competitive exams",
      members: 1800,
      subjects: ["JEE Prep", "NEET Prep", "Mock Tests"],
      link: "https://chat.whatsapp.com/competitive-exams",
      color: "bg-notebook-red",
    },
  ]

  const features = [
    {
      icon: Users,
      title: "24/7 Active Community",
      description: "Connect with thousands of students anytime",
    },
    {
      icon: MessageCircle,
      title: "Instant Doubt Resolution",
      description: "Get quick answers to your questions",
    },
    {
      icon: Star,
      title: "Expert Guidance",
      description: "Learn from top performers and mentors",
    },
    {
      icon: CheckCircle,
      title: "Study Resources",
      description: "Access shared notes and materials",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      grade: "Class 12",
      message: "This group helped me improve my Physics scores by 40%! The community is so supportive.",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      grade: "Class 10",
      message: "Amazing study materials and instant help. Highly recommend joining!",
      rating: 5,
    },
    {
      name: "Ananya Singh",
      grade: "Class 11",
      message: "Found my study buddies here. We motivate each other every day.",
      rating: 5,
    },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="mb-6">
          <StudentCharacter type="happy" size="large" className="mx-auto animate-bounce-slow" />
        </div>
        <h1 className="text-4xl font-bold text-notebook-text mb-4 font-notebook">Join Our Study Groups</h1>
        <p className="text-xl text-gray-600 font-notebook max-w-2xl mx-auto">
          Connect with thousands of students, share knowledge, and achieve academic excellence together
        </p>
      </div>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="bg-white rounded-lg sketch-border p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-notebook-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-notebook-text mb-2 font-notebook">{feature.title}</h3>
              <p className="text-gray-600 text-sm font-notebook">{feature.description}</p>
            </div>
          )
        })}
      </section>

      {/* Study Groups */}
      <section>
        <h2 className="text-3xl font-bold text-center text-notebook-text mb-8 font-notebook">
          Choose Your Study Group
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyGroups.map((group) => (
            <div
              key={group.id}
              className={`bg-white rounded-lg sketch-border p-6 hover:shadow-lg transition-all duration-300 ${
                selectedGroup === group.id ? "ring-2 ring-notebook-blue" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${group.color} rounded-lg flex items-center justify-center`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 font-notebook">Members</div>
                  <div className="font-bold text-notebook-text font-notebook">{group.members.toLocaleString()}+</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-notebook-text mb-2 font-notebook">{group.name}</h3>

              <p className="text-gray-600 mb-4 font-notebook">{group.description}</p>

              <div className="mb-4">
                <div className="text-sm font-medium text-notebook-text mb-2 font-notebook">Subjects Covered:</div>
                <div className="flex flex-wrap gap-2">
                  {group.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-notebook"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <WhatsAppButton groupLink={group.link} className="w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white rounded-lg sketch-border p-8">
        <h2 className="text-3xl font-bold text-center text-notebook-text mb-8 font-notebook">What Students Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-notebook-yellow fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic font-notebook mb-4">"{testimonial.message}"</p>
              </div>
              <div>
                <div className="font-bold text-notebook-text font-notebook">{testimonial.name}</div>
                <div className="text-sm text-gray-500 font-notebook">{testimonial.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Group Rules */}
      <section className="bg-gradient-to-r from-notebook-blue to-notebook-green rounded-lg text-white p-8">
        <h2 className="text-2xl font-bold mb-6 font-notebook text-center">Group Guidelines</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-notebook">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Be respectful and helpful to all members</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Share study materials and resources</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Ask questions and help others learn</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>No spam or irrelevant messages</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Use appropriate language at all times</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Support and motivate fellow students</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-12 bg-white rounded-lg sketch-border">
        <div className="mb-6">
          <StudentCharacter type="studying" size="medium" className="mx-auto" />
        </div>

        <h2 className="text-3xl font-bold text-notebook-text mb-4 font-notebook">Ready to Start Learning Together?</h2>

        <p className="text-xl text-gray-600 mb-8 font-notebook">
          Join thousands of students who are already achieving their academic goals
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton groupLink="https://chat.whatsapp.com/general-study-group" className="flex items-center" />

          <div className="flex items-center text-gray-500 font-notebook">
            <Heart className="w-4 h-4 mr-1 text-red-500" />
            <span className="text-sm">Join 10,000+ happy students</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JoinGroup
