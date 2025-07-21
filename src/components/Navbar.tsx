"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, BookOpen, Brain, Camera, Clock, Users, Home } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Library", href: "/library", icon: BookOpen },
    { name: "Ask AI", href: "/ask-ai", icon: Brain },
    { name: "Scan Doubts", href: "/scan-doubts", icon: Camera },
    { name: "Timer", href: "/timer", icon: Clock },
    { name: "Join Group", href: "/join-group", icon: Users },
  ]

  return (
    <nav className="bg-white shadow-lg border-b-4 border-gray-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-notebook-red rounded-lg flex items-center justify-center sketch-border">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800 sketch-underline">Homework Club</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    isActive
                      ? "bg-notebook-blue text-white sketch-border"
                      : "text-gray-700 hover:bg-gray-100 hover:text-notebook-blue"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-notebook-blue p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-dashed border-gray-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 flex items-center space-x-3 ${
                    isActive
                      ? "bg-notebook-blue text-white sketch-border"
                      : "text-gray-700 hover:bg-gray-100 hover:text-notebook-blue"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
