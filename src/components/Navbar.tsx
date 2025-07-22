"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, BookOpen, Brain, Camera, Clock, Library } from "lucide-react"
import LoadingButton from "./LoadingButton"
import StudentCharacter from "./StudentCharacter"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/", icon: BookOpen, color: "text-notebook-blue" },
    { name: "Library", path: "/library", icon: Library, color: "text-notebook-green" },
    { name: "Ask AI", path: "/ask-ai", icon: Brain, color: "text-notebook-yellow" },
    { name: "Scan Doubts", path: "/scan-doubts", icon: Camera, color: "text-notebook-red" },
    { name: "Timer", path: "/timer", icon: Clock, color: "text-notebook-blue" },
  ]

  return (
    <nav className="bg-white border-b-2 border-dashed border-notebook-line sticky top-0 z-40 sketch-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <StudentCharacter type="reading" size="sm" color="blue" />
              <span className="text-xl font-bold text-notebook-text sketch-underline">Homework Club</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl text-notebook-text hover:bg-gray-100 transition-all duration-300 hover:scale-105 sketch-border-hover"
                >
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LoadingButton
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-notebook-text hover:bg-gray-100 rounded-xl"
              loadingText=""
              animationType="stars"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </LoadingButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t-2 border-dashed border-notebook-line">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-3 text-notebook-text hover:bg-gray-100 block px-4 py-3 rounded-xl font-medium transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className={`w-5 h-5 ${item.color}`} />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
