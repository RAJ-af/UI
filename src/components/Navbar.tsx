"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, BookOpen, MessageSquare, Camera, Timer, Users, Home } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Library", href: "/library", icon: BookOpen },
    { name: "Ask AI", href: "/ask-ai", icon: MessageSquare },
    { name: "Scan Doubts", href: "/scan-doubts", icon: Camera },
    { name: "Timer", href: "/timer", icon: Timer },
    { name: "Join Group", href: "/join-group", icon: Users },
  ]

  return (
    <nav className="bg-white shadow-lg border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-notebook-red rounded-lg flex items-center justify-center mr-3 sketch-border">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gray-800 font-notebook">Homework Club</h1>
                <p className="text-xs text-gray-600">Lal Chand Sharma Higher Secondary School</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? "bg-notebook-blue text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t-2 border-dashed border-gray-300">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive ? "bg-notebook-blue text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
