"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Loader2, Sparkles, BookOpen } from "lucide-react"
import LoadingButton from "../components/LoadingButton"
import StudentCharacter from "../components/StudentCharacter"

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
            <div className="w-12 h-12 bg-notebook-yellow rounded-full flex items-center justify-center sketch-border mr-3">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <StudentCharacter type="thinking" size="md" className="character-float" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 sketch-underline">AI Study Assistant</h1>
          <p className="text-gray-600">Get instant help with your homework and study questions</p>
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickQuestions.map((question, index) => (
                <LoadingButton
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="p-3 text-left bg-white border-2 border-gray-300 hover:border-notebook-blue text-gray-700 rounded-lg transition-colors sketch-border"
                >
                  <span className="text-sm">{question}</span>
                </LoadingButton>
              ))}
            </div>
          </div>
        )}

        {/* Chat Container */}
        <div className="notebook-card flex flex-col h-[600px] p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 notebook-paper">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === "user" ? "bg-notebook-blue ml-3" : "bg-notebook-yellow mr-3"
                    } sketch-border`}
                  >
                    {message.type === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg p-4 sketch-border ${
                      message.type === "user" ? "bg-notebook-blue text-white" : "bg-gray-100 text-gray-800"
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
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-notebook-yellow mr-3 flex items-center justify-center sketch-border">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 sketch-border">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                      <span className="text-gray-500 loading-dots">AI is thinking</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t-2 border-dashed border-gray-300 p-4">
            <div className="flex space-x-4">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your studies..."
                className="flex-1 resize-none border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-notebook-blue focus:outline-none sketch-border"
                rows={1}
                disabled={isLoading}
              />
              <LoadingButton
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="btn-notebook btn-blue disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <Send className="w-4 h-4" />
              </LoadingButton>
            </div>
            <p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift+Enter for new line</p>
          </div>
        </div>

        {/* AI Tips */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="notebook-card text-center">
            <BookOpen className="w-8 h-8 text-notebook-green mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Study Tips</h3>
            <p className="text-sm text-gray-600">Ask for study strategies and learning techniques</p>
          </div>
          <div className="notebook-card text-center">
            <Sparkles className="w-8 h-8 text-notebook-yellow mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Step-by-Step Solutions</h3>
            <p className="text-sm text-gray-600">Get detailed explanations for complex problems</p>
          </div>
        </div>
      </div>
    </div>
  )
}
