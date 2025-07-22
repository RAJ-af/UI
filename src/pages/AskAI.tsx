"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Lightbulb, BookOpen, Calculator, Beaker } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"

interface Message {
  id: number
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

const AskAI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI tutor. I can help you with homework, explain concepts, solve problems, and answer questions across all subjects. What would you like to learn today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickQuestions = [
    { icon: Calculator, text: "Help me solve this math problem", subject: "Mathematics" },
    { icon: Beaker, text: "Explain this chemistry concept", subject: "Chemistry" },
    { icon: BookOpen, text: "Help with English grammar", subject: "English" },
    { icon: Lightbulb, text: "I need study tips", subject: "General" },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateAIResponse = (userMessage: string): string => {
    const responses = [
      "That's a great question! Let me break this down for you step by step...",
      "I understand what you're asking. Here's how we can approach this problem...",
      "Excellent! This is a fundamental concept. Let me explain it clearly...",
      "I can definitely help you with that. Here's what you need to know...",
      "Good thinking! Let's work through this together...",
    ]

    const randomResponse = responses[Math.floor(Math.random() * responses.length)]

    if (userMessage.toLowerCase().includes("math") || userMessage.toLowerCase().includes("solve")) {
      return `${randomResponse} For mathematical problems, I recommend: 1) Identify what's given and what you need to find, 2) Choose the right formula or method, 3) Work step by step, 4) Check your answer. Would you like me to help you with a specific problem?`
    }

    if (userMessage.toLowerCase().includes("chemistry") || userMessage.toLowerCase().includes("science")) {
      return `${randomResponse} In chemistry, it's important to understand the underlying principles. Try to visualize what's happening at the molecular level and connect it to real-world examples. What specific chemistry topic are you working on?`
    }

    if (userMessage.toLowerCase().includes("english") || userMessage.toLowerCase().includes("grammar")) {
      return `${randomResponse} English grammar can be tricky, but with practice it becomes natural. Focus on understanding the rules and then practice with examples. What specific grammar concept would you like help with?`
    }

    return `${randomResponse} I'm here to help you understand any concept or solve any problem. Feel free to ask me specific questions about your homework or studies!`
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const aiResponse: Message = {
      id: messages.length + 2,
      text: generateAIResponse(inputText),
      sender: "ai",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, aiResponse])
    setIsTyping(false)
  }

  const handleQuickQuestion = (question: string) => {
    setInputText(question)
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
      <div className="text-center">
        <div className="mb-6">
          <StudentCharacter type="thinking" size="large" className="mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-notebook-text mb-4 font-notebook">Ask AI Tutor</h1>
        <p className="text-xl text-gray-600 font-notebook">
          Get instant help with your homework and doubts from our AI assistant
        </p>
      </div>

      {/* Quick Questions */}
      <div className="bg-white rounded-lg sketch-border p-6">
        <h3 className="font-bold text-notebook-text mb-4 font-notebook">Quick Questions:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {quickQuestions.map((question, index) => {
            const Icon = question.icon
            return (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question.text)}
                className="flex items-center space-x-3 p-3 border-2 border-notebook-line rounded-lg hover:border-notebook-blue hover:bg-notebook-blue/5 transition-all duration-200 text-left"
              >
                <div className="w-8 h-8 bg-notebook-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-notebook font-medium text-notebook-text">{question.text}</div>
                  <div className="text-sm text-gray-500 font-notebook">{question.subject}</div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-lg sketch-border overflow-hidden">
        {/* Messages */}
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === "user" ? "bg-notebook-blue text-white" : "bg-gray-100 text-notebook-text"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.sender === "ai" && <Bot className="w-5 h-5 mt-1 flex-shrink-0" />}
                  {message.sender === "user" && <User className="w-5 h-5 mt-1 flex-shrink-0" />}
                  <div>
                    <p className="font-notebook">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-gray-100 text-notebook-text">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5" />
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

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t-2 border-notebook-line p-4">
          <div className="flex space-x-4">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your studies..."
              className="flex-1 p-3 border-2 border-notebook-line rounded-lg focus:border-notebook-blue outline-none resize-none font-notebook"
              rows={2}
            />
            <LoadingButton
              onClick={handleSendMessage}
              variant="primary"
              disabled={!inputText.trim() || isTyping}
              className="px-6"
            >
              <Send className="w-5 h-5" />
            </LoadingButton>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gradient-to-r from-notebook-yellow to-notebook-green rounded-lg text-white p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Lightbulb className="w-6 h-6" />
          <h3 className="text-xl font-bold font-notebook">Pro Tips for Better Learning</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-notebook">
          <div>• Ask specific questions for better answers</div>
          <div>• Include context about your grade level</div>
          <div>• Share what you've already tried</div>
          <div>• Ask for step-by-step explanations</div>
        </div>
      </div>
    </div>
  )
}

export default AskAI
