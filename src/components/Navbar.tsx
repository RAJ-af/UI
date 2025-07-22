"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Home, BookOpen, MessageCircle, Camera, Timer, Users } from "lucide-react"
import { cn } from "../lib/utils"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/library", label: "Library", icon: BookOpen },
    { path: "/ask-ai", label: "Ask AI", icon: MessageCircle },
    { path: "/scan-doubts", label: "Scan", icon: Camera },
    { path: "/timer", label: "Timer", icon: Timer },
    { path: "/join-group", label: "Join", icon: Users },
  ]

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b-2 border-notebook-text sketch-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-notebook-blue rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-notebook font-bold text-xl text-notebook-text">Homework Club</span>
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
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg font-notebook font-medium transition-all duration-200",
                    isActive
                      ? "bg-notebook-blue text-white sketch-border"
                      : "text-notebook-text hover:bg-notebook-blue/10",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-notebook-blue/10">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-notebook-line">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex flex-col items-center space-y-1 p-3 rounded-lg font-notebook font-medium transition-all duration-200",
                      isActive
                        ? "bg-notebook-blue text-white sketch-border"
                        : "text-notebook-text hover:bg-notebook-blue/10",
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
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
