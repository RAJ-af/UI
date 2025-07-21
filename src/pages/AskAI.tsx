"use client"

import { useState } from "react"
import { Send, Bot, User, Lightbulb, BookOpen, Calculator, Beaker } from "lucide-react"
import LoadingButton from "../components/LoadingButton"
import StudentCharacter from "../components/StudentCharacter"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function AskAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI study assistant. Ask me anything about your homework, and I'll help you understand the concepts step by step!",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickQuestions = [
    { text: "Explain photosynthesis", icon: Beaker },
    { text: "Help with algebra", icon: Calculator },
    { text: "History essay tips", icon: BookOpen },
    { text: "Study techniques", icon: Lightbulb },
  ]

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `I understand you're asking about "${inputText}". Let me break this down for you step by step:\n\n1. First, let's identify the key concepts\n2. Then we'll work through the solution\n3. Finally, I'll give you some practice tips\n\nWould you like me to explain any specific part in more detail?`,
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)
  }

  const handleQuickQuestion = (question: string) => {
    setInputText(question)
  }

  return (
    <div className="min-h-screen bg-notebook-bg py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <StudentCharacter type="thinking" size="lg" className="character-float" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 sketch-underline">Ask AI Assistant</h1>
          <p className="text-gray-600">Get instant help with your homework and study questions</p>
        </div>

        {/* Quick Questions */}
        <div className="notebook-card mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickQuestions.map((question, index) => {
              const Icon = question.icon
              return (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question.text)}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <Icon className="w-5 h-5 text-notebook-blue mr-3" />
                  <span className="text-gray-700">{question.text}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Chat Container */}
        <div className="notebook-card">
          {/* Messages */}
          <div className="h-96 overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user" ? "bg-notebook-blue" : "bg-notebook-green"}`}
                  >
                    {message.sender === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg p-3 ${message.sender === "user" ? "bg-notebook-blue text-white" : "bg-gray-100 text-gray-800"}`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-notebook-green flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask me anything about your homework..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-notebook-blue focus:outline-none sketch-border"
              disabled={isTyping}
            />
            <LoadingButton
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="btn-notebook btn-blue px-4 py-3"
            >
              <Send className="w-5 h-5" />
            </LoadingButton>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="notebook-card text-center">
            <Lightbulb className="w-8 h-8 text-notebook-yellow mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Be Specific</h3>
            <p className="text-sm text-gray-600">Ask detailed questions for better answers</p>
          </div>
          <div className="notebook-card text-center">
            <BookOpen className="w-8 h-8 text-notebook-blue mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Include Context</h3>
            <p className="text-sm text-gray-600">Mention your grade level and subject</p>
          </div>
          <div className="notebook-card text-center">
            <Bot className="w-8 h-8 text-notebook-green mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Follow Up</h3>
            <p className="text-sm text-gray-600">Ask for clarification if needed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
