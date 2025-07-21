"use client"

import type React from "react"
import { useState } from "react"
import { Send, Bot, User, Lightbulb, BookOpen, Calculator, Beaker } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"

interface Message {
  id: number
  type: "user" | "ai"
  content: string
  timestamp: Date
}

const AskAI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm your AI study assistant. I can help you with homework, explain concepts, solve problems, and answer questions across all subjects. What would you like to learn today?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const quickQuestions = [
    {
      icon: Calculator,
      text: "Solve this math problem",
      color: "blue",
    },
    {
      icon: Beaker,
      text: "Explain a science concept",
      color: "green",
    },
    {
      icon: BookOpen,
      text: "Help with literature analysis",
      color: "yellow",
    },
    {
      icon: Lightbulb,
      text: "Study tips and techniques",
      color: "red",
    },
  ]

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "ai",
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 2000)
  }

  const generateAIResponse = (question: string): string => {
    const responses = [
      "Great question! Let me break this down step by step for you...",
      "I'd be happy to help you understand this concept. Here's a detailed explanation...",
      "This is an interesting problem. Let's solve it together using the following approach...",
      "That's a common question many students have. Here's what you need to know...",
      "Excellent! This topic is fundamental to understanding the subject. Let me explain...",
    ]

    return (
      responses[Math.floor(Math.random() * responses.length)] +
      " (This is a demo response. In a real implementation, this would connect to an actual AI service.)"
    )
  }

  const handleQuickQuestion = (questionText: string) => {
    setInputMessage(questionText)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <StudentCharacter type="thinking" size="large" className="character-float" />
        </div>
        <h1 className="text-4xl font-bold text-notebook-text sketch-underline">Ask AI Assistant</h1>
        <p className="text-xl text-notebook-text/80">Get instant help with your homework and study questions</p>
      </div>

      {/* Quick Questions */}
      <div className="notebook-card">
        <h3 className="text-lg font-bold text-notebook-text mb-4">Quick Questions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickQuestions.map((question, index) => {
            const Icon = question.icon
            return (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question.text)}
                className={`p-3 rounded-lg border-2 border-notebook-${question.color} text-notebook-${question.color} hover:bg-notebook-${question.color} hover:text-white transition-all duration-200 text-sm font-medium`}
              >
                <Icon className="w-5 h-5 mx-auto mb-2" />
                {question.text}
              </button>
            )
          })}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="notebook-card min-h-96 max-h-96 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex items-start space-x-3 max-w-xs md:max-w-md ${
                  message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === "user" ? "bg-notebook-blue" : "bg-notebook-green"
                  }`}
                >
                  {message.type === "user" ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    message.type === "user" ? "bg-notebook-blue text-white" : "bg-gray-100 text-notebook-text"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.type === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-notebook-green flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-notebook-green rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-notebook-green rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-notebook-green rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="notebook-card">
        <div className="flex space-x-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about your studies..."
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-notebook-blue focus:outline-none"
            disabled={isLoading}
          />
          <LoadingButton
            onClick={handleSendMessage}
            variant="blue"
            className="px-6 py-3"
            disabled={!inputMessage.trim() || isLoading}
          >
            <Send className="w-5 h-5" />
          </LoadingButton>
        </div>
        <p className="text-xs text-notebook-text/60 mt-2">Press Enter to send, Shift+Enter for new line</p>
      </div>

      {/* Tips */}
      <div className="notebook-card bg-notebook-yellow/10 border-notebook-yellow">
        <h3 className="text-lg font-bold text-notebook-text mb-3">💡 Tips for better answers:</h3>
        <ul className="space-y-2 text-notebook-text/80">
          <li>• Be specific about your question or problem</li>
          <li>• Include relevant context (subject, grade level, etc.)</li>
          <li>• Ask for step-by-step explanations when needed</li>
          <li>• Don't hesitate to ask follow-up questions</li>
        </ul>
      </div>
    </div>
  )
}

export default AskAI
