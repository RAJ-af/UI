"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, BookOpen, Brain, Camera, Timer, Library, Users } from "lucide-react"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Home", icon: BookOpen },
    { path: "/library", label: "Library", icon: Library },
    { path: "/ask-ai", label: "Ask AI", icon: Brain },
    { path: "/scan-doubts", label: "Scan", icon: Camera },
    { path: "/timer", label: "Timer", icon: Timer },
    { path: "/join-group", label: "Join", icon: Users },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-notebook-paper border-b-4 border-dashed border-sketch-black sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-notebook-blue rounded-full flex items-center justify-center border-2 border-dashed border-sketch-black group-hover:animate-spin">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-sketch-black">Homework Club</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-dashed
                    transition-all duration-200 hover:scale-105
                    ${
                      isActive(item.path)
                        ? "bg-notebook-blue text-white border-notebook-blue"
                        : "text-sketch-black border-transparent hover:border-sketch-gray hover:bg-sketch-gray/10"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full border-2 border-dashed border-sketch-black hover:bg-sketch-gray/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-dashed border-sketch-gray">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg border-2 border-dashed
                      transition-all duration-200
                      ${
                        isActive(item.path)
                          ? "bg-notebook-blue text-white border-notebook-blue"
                          : "text-sketch-black border-transparent hover:border-sketch-gray hover:bg-sketch-gray/10"
                      }
                    `}
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
