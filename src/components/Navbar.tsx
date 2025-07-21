"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, BookOpen, Brain, Camera, Clock, Library, Users } from "lucide-react"
import LoadingButton from "./LoadingButton"
import StudentCharacter from "./StudentCharacter"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/", icon: BookOpen, color: "text-notebook-blue" },
    { name: "Library", path: "/library", icon: Library, color: "text-notebook-green" },
    { name: "Ask AI", path: "/ask-ai", icon: Brain, color: "text-notebook-yellow" },
    { name: "Scan Doubts", path: "/scan-doubts", icon: Camera, color: "text-notebook-red" },
    { name: "Timer", path: "/timer", icon: Clock, color: "text-notebook-blue" },
    { name: "Join Group", path: "/join-group", icon: Users, color: "text-notebook-green" },
  ]

  return (
    <nav className="bg-white border-b-4 border-gray-800 sticky top-0 z-40 sketch-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <StudentCharacter type="reading" size="sm" className="group-hover:animate-wiggle" />
            <span className="text-xl font-bold text-gray-800 sketch-underline">Homework Club</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100 ${
                    isActive ? "bg-gray-100 sketch-border" : ""
                  }`}
                >
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-gray-800">{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <LoadingButton
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </LoadingButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-3 text-gray-800 hover:bg-gray-100 block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive ? "bg-gray-100 sketch-border" : ""
                    }`}
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
