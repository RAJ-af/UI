"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Home, BookOpen, MessageCircle, Scan, Timer, Users } from "lucide-react"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/library", label: "Library", icon: BookOpen },
    { path: "/ask-ai", label: "Ask AI", icon: MessageCircle },
    { path: "/scan-doubts", label: "Scan Doubts", icon: Scan },
    { path: "/timer", label: "Timer", icon: Timer },
    { path: "/join-group", label: "Join Group", icon: Users },
  ]

  return (
    <nav className="bg-white shadow-lg border-b-4 border-notebook-margin">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-notebook-blue rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-notebook-text">Homework Club</h1>
              <p className="text-sm text-notebook-text/70">LCSHS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-notebook-blue text-white shadow-lg"
                      : "text-notebook-text hover:bg-notebook-blue/10 hover:text-notebook-blue"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive ? "bg-notebook-blue text-white" : "text-notebook-text hover:bg-notebook-blue/10"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
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

export default Navbar
