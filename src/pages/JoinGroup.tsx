"use client"

import type React from "react"
import { useState } from "react"
import { Users, MessageCircle, Star, Shield, Clock, BookOpen } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import WhatsAppButton from "../components/WhatsAppButton"

const JoinGroup: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)

  const studyGroups = [
    {
      id: "general",
      name: "General Study Group",
      description: "Main group for all subjects and general discussions",
      members: 245,
      subject: "All Subjects",
      class: "All Classes",
      icon: Users,
      color: "blue",
      link: "https://chat.whatsapp.com/general-study-group",
    },
    {
      id: "math",
      name: "Mathematics Help",
      description: "Dedicated group for math problems and solutions",
      members: 156,
      subject: "Mathematics",
      class: "10-12",
      icon: BookOpen,
      color: "green",
      link: "https://chat.whatsapp.com/math-help-group",
    },
    {
      id: "science",
      name: "Science Study Circle",
      description: "Physics, Chemistry, and Biology discussions",
      members: 189,
      subject: "Science",
      class: "11-12",
      icon: BookOpen,
      color: "yellow",
      link: "https://chat.whatsapp.com/science-study-group",
    },
    {
      id: "exam",
      name: "Exam Preparation",
      description: "Focus group for board exam preparation",
      members: 98,
      subject: "All Subjects",
      class: "10, 12",
      icon: Star,
      color: "red",
      link: "https://chat.whatsapp.com/exam-prep-group",
    },
  ]

  const groupRules = [
    "Be respectful to all members",
    "Share study materials and help others",
    "No spam or irrelevant messages",
    "Use appropriate language",
    "Ask questions freely - no question is too small",
    "Share your knowledge and experiences",
  ]

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Learn together with classmates and seniors",
    },
    {
      icon: MessageCircle,
      title: "Instant Help",
      description: "Get quick answers to your doubts",
    },
    {
      icon: BookOpen,
      title: "Study Materials",
      description: "Access shared notes and resources",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Help available round the clock",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <StudentCharacter type="happy" size="large" className="character-float" />
        </div>
        <h1 className="text-4xl font-bold text-notebook-text sketch-underline">Join Study Groups</h1>
        <p className="text-xl text-notebook-text/80">Connect with fellow students and get help with your studies</p>
      </div>

      {/* Benefits */}
      <div className="notebook-card">
        <h2 className="text-2xl font-bold text-notebook-text mb-6 text-center">Why Join Our Study Groups?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-notebook-blue/10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-notebook-blue" />
                </div>
                <h3 className="font-bold text-notebook-text">{benefit.title}</h3>
                <p className="text-sm text-notebook-text/70">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Study Groups */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-notebook-text text-center sketch-underline">Available Study Groups</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {studyGroups.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.id} className="notebook-card hover:transform hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 bg-notebook-${group.color} rounded-full flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-notebook-text">{group.name}</h3>
                        <p className="text-sm text-notebook-text/70">{group.members} members</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-notebook-text/80">{group.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-notebook-text/70">Subject:</span>
                      <span className="font-medium text-notebook-text">{group.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-notebook-text/70">Classes:</span>
                      <span className="font-medium text-notebook-text">{group.class}</span>
                    </div>
                  </div>

                  <WhatsAppButton groupLink={group.link} className="w-full justify-center" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Group Rules */}
      <div className="notebook-card bg-notebook-yellow/10 border-notebook-yellow">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-notebook-yellow mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-notebook-text mb-4">Group Rules & Guidelines</h3>
            <ul className="space-y-2">
              {groupRules.map((rule, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-notebook-yellow font-bold">•</span>
                  <span className="text-notebook-text/80">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="notebook-card bg-notebook-blue/10 border-notebook-blue">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-bold text-notebook-text">Need Help or Have Questions?</h3>
          <p className="text-notebook-text/80">Contact our study group moderators for assistance</p>
          <div className="space-y-2 text-sm text-notebook-text/70">
            <p>📧 Email: homeworkclub@lcshs.edu</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>🏫 Lal Chand Sharma Higher Secondary School</p>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="notebook-card">
        <h3 className="text-lg font-bold text-notebook-text mb-4 text-center">Success Stories</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-notebook-green/10 p-4 rounded-lg border-l-4 border-notebook-green">
            <div className="flex items-start space-x-3">
              <StudentCharacter type="happy" size="small" />
              <div>
                <p className="text-notebook-text/80 mb-2">
                  "The math group helped me improve my grades from C to A! The seniors are so helpful."
                </p>
                <p className="text-sm text-notebook-text/60">- Anita, Class 11</p>
              </div>
            </div>
          </div>

          <div className="bg-notebook-blue/10 p-4 rounded-lg border-l-4 border-notebook-blue">
            <div className="flex items-start space-x-3">
              <StudentCharacter type="studying" size="small" />
              <div>
                <p className="text-notebook-text/80 mb-2">
                  "Found my study partner through the group. We motivate each other every day!"
                </p>
                <p className="text-sm text-notebook-text/60">- Rohit, Class 12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinGroup
