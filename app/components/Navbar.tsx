"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, BookOpen, Brain, Camera, Clock, Library } from "lucide-react"
import LoadingButton from "./LoadingButton"
import StudentCharacter3D from "./StudentCharacter3D"
import AOSWrapper from "./AOSWrapper"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/", icon: BookOpen, color: "text-blue-500" },
    { name: "Library", href: "/library", icon: Library, color: "text-green-500" },
    { name: "Ask AI", href: "/ask-ai", icon: Brain, color: "text-yellow-500" },
    { name: "Scan Doubts", href: "/scan-doubts", icon: Camera, color: "text-red-500" },
    { name: "Timer", href: "/timer", icon: Clock, color: "text-blue-500" },
  ]

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <AOSWrapper animation="fade-right">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <StudentCharacter3D
                  src="/images/student-main.jpeg"
                  alt="Homework Club Mascot"
                  size="sm"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xl font-bold text-black notion-text">Homework Club</span>
              </Link>
            </div>
          </AOSWrapper>

          {/* Desktop Navigation */}
          <AOSWrapper animation="fade-left">
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-105 glass-morphism hover:shadow-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className={`w-4 h-4 ${item.color}`} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </AOSWrapper>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LoadingButton
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-xl glass-morphism"
              loadingText=""
              animationType="stars"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </LoadingButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <AOSWrapper animation="fade-up">
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md border-t border-gray-200 rounded-b-xl">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 block px-4 py-3 rounded-xl font-medium transition-all duration-300 glass-morphism"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className={`w-5 h-5 ${item.color}`} />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </AOSWrapper>
        )}
      </div>
    </nav>
  )
}
