"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
}

export default function AskAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Hello! I'm your AI study assistant. I can help you with homework questions, explain concepts, solve problems, and provide study guidance. What would you like to learn about today?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
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
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: `I understand you're asking about "${inputMessage}". Let me help you with that! This is a simulated response. In a real implementation, this would connect to an AI service to provide detailed explanations, step-by-step solutions, and helpful study guidance tailored to your question.`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "Explain quadratic equations",
    "Help with essay structure",
    "Physics motion problems",
    "Chemistry periodic table",
    "History timeline help",
    "Math word problems",
  ]

  return (
    <div className="min-h-screen bg-notebook-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-notebook-blue bg-opacity-20 rounded-full flex items-center justify-center border border-dashed border-notebook-blue">
              <Sparkles className="w-6 h-6 text-notebook-blue" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-notebook-text mb-2 sketch-underline">AI Study Assistant</h1>
          <p className="text-gray-600">Get instant help with your homework and study questions</p>
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-notebook-text mb-4 sketch-underline">Quick Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="p-3 text-left bg-white rounded-lg border border-notebook-line hover:border-notebook-blue hover:bg-blue-50 transition-colors sketch-border-hover"
                >
                  <span className="text-sm text-gray-700">{question}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Container */}
        <div className="sketch-card flex flex-col h-[600px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === "user" ? "bg-notebook-blue ml-3" : "bg-notebook-yellow mr-3"
                    }`}
                  >
                    {message.type === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg p-4 sketch-border ${
                      message.type === "user" ? "bg-notebook-blue text-white" : "bg-gray-100 text-notebook-text"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-2 ${message.type === "user" ? "text-blue-200" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-notebook-yellow mr-3 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 sketch-border">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin text-notebook-blue" />
                      <span className="text-gray-500">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-notebook-line p-4">
            <div className="flex space-x-4">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your studies..."
                className="flex-1 resize-none border border-notebook-line rounded-lg px-4 py-2 focus:ring-2 focus:ring-notebook-blue focus:border-transparent sketch-input"
                rows={1}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift+Enter for new line</p>
          </div>
        </div>
      </div>
    </div>
  )
}
