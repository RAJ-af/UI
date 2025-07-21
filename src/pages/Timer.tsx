"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw, Settings, Trophy, Flame, Target, Clock } from "lucide-react"
import LoadingButton from "../components/LoadingButton"
import StudentCharacter from "../components/StudentCharacter"

interface StudySession {
  id: string
  subject: string
  duration: number
  date: Date
}

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentSubject, setCurrentSubject] = useState("Mathematics")
  const [studyStreak, setStudyStreak] = useState(7)
  const [totalStudyTime, setTotalStudyTime] = useState(1250) // in minutes
  const [sessionsToday, setSessionsToday] = useState(3)
  const [showSettings, setShowSettings] = useState(false)
  const [customTime, setCustomTime] = useState(25)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "History", "English", "Computer Science", "Other"]

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsActive(false)
            setIsPaused(false)
            alert("Study session completed! Great job! 🎉")
            setSessionsToday((prev) => prev + 1)
            return customTime * 60
          }
          return time - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isActive, isPaused, customTime])

  const toggleTimer = () => {
    if (!isActive) {
      setIsActive(true)
      setIsPaused(false)
    } else {
      setIsPaused(!isPaused)
    }
  }

  const resetTimer = () => {
    setIsActive(false)
    setIsPaused(false)
    setTimeLeft(customTime * 60)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const progress = ((customTime * 60 - timeLeft) / (customTime * 60)) * 100

  const recentSessions: StudySession[] = [
    { id: "1", subject: "Mathematics", duration: 25, date: new Date() },
    { id: "2", subject: "Physics", duration: 25, date: new Date(Date.now() - 3600000) },
    { id: "3", subject: "Chemistry", duration: 25, date: new Date(Date.now() - 7200000) },
  ]

  return (
    <div className="min-h-screen bg-notebook-bg py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-notebook-blue rounded-full flex items-center justify-center sketch-border mr-3">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <StudentCharacter type="studying" size="md" className="character-float" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 sketch-underline">Study Timer</h1>
          <p className="text-gray-600">Stay focused and track your study progress</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timer Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Timer */}
            <div className="notebook-card text-center">
              <div className="mb-6">
                <select
                  value={currentSubject}
                  onChange={(e) => setCurrentSubject(e.target.value)}
                  className="text-lg font-medium bg-transparent border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-notebook-blue focus:outline-none text-gray-700 sketch-border"
                  disabled={isActive}
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Circular Progress */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-gray-200"
                    strokeDasharray="3,1"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                    className="text-notebook-blue transition-all duration-1000 ease-in-out"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-800 mb-2 font-mono">{formatTime(timeLeft)}</div>
                    <div className="text-sm text-gray-500">
                      {isActive ? (isPaused ? "Paused" : "Studying") : "Ready to start"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <LoadingButton
                  onClick={toggleTimer}
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-colors border-none ${
                    isActive && !isPaused ? "bg-notebook-red hover:bg-red-600" : "bg-notebook-green hover:bg-green-600"
                  }`}
                >
                  {isActive && !isPaused ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </LoadingButton>
                <LoadingButton
                  onClick={resetTimer}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors border-2 border-gray-400"
                >
                  <RotateCcw className="w-5 h-5" />
                </LoadingButton>
                <LoadingButton
                  onClick={() => setShowSettings(!showSettings)}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors border-2 border-gray-400"
                >
                  <Settings className="w-5 h-5" />
                </LoadingButton>
              </div>

              {/* Settings Panel */}
              {showSettings && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg sketch-border">
                  <h3 className="font-semibold mb-3 text-gray-800">Timer Settings</h3>
                  <div className="flex items-center justify-center space-x-4">
                    <label className="text-sm text-gray-600 font-medium">Duration (minutes):</label>
                    <input
                      type="number"
                      min="1"
                      max="120"
                      value={customTime}
                      onChange={(e) => {
                        const newTime = Number.parseInt(e.target.value)
                        setCustomTime(newTime)
                        if (!isActive) {
                          setTimeLeft(newTime * 60)
                        }
                      }}
                      className="w-20 px-2 py-1 border-2 border-gray-300 rounded focus:border-notebook-blue focus:outline-none sketch-border"
                      disabled={isActive}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Recent Sessions */}
            <div className="notebook-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Sessions</h2>
              <div className="space-y-3">
                {recentSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg sketch-border"
                  >
                    <div>
                      <div className="font-medium text-gray-800">{session.subject}</div>
                      <div className="text-sm text-gray-500">
                        {session.date.toLocaleTimeString()} • {session.duration} minutes
                      </div>
                    </div>
                    <div className="text-notebook-green font-semibold flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      Completed
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            {/* Today's Progress */}
            <div className="notebook-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Today's Progress</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-notebook-blue" />
                    <span className="text-gray-700 font-medium">Sessions</span>
                  </div>
                  <span className="font-semibold text-gray-800">{sessionsToday}/6</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 sketch-border">
                  <div
                    className="bg-notebook-blue h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(sessionsToday / 6) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Study Streak */}
            <div className="notebook-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Study Streak</h2>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Flame className="w-8 h-8 text-orange-500 mr-2 animate-bounce" />
                  <span className="text-3xl font-bold text-gray-800">{studyStreak}</span>
                </div>
                <p className="text-gray-600 font-medium">days in a row</p>
                <p className="text-sm text-gray-500 mt-2">Keep it up! You're doing great!</p>
              </div>
            </div>

            {/* Total Study Time */}
            <div className="notebook-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Total Study Time</h2>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-8 h-8 text-notebook-yellow mr-2 animate-bounce" />
                  <span className="text-3xl font-bold text-gray-800">
                    {Math.floor(totalStudyTime / 60)}h {totalStudyTime % 60}m
                  </span>
                </div>
                <p className="text-gray-600 font-medium">this month</p>
              </div>
            </div>

            {/* Quick Start Buttons */}
            <div className="notebook-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Start</h2>
              <div className="space-y-2">
                {[15, 25, 45, 60].map((minutes) => (
                  <LoadingButton
                    key={minutes}
                    onClick={() => {
                      setCustomTime(minutes)
                      setTimeLeft(minutes * 60)
                      setShowSettings(false)
                    }}
                    disabled={isActive}
                    className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 border-2 border-gray-300 hover:border-notebook-blue rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed sketch-border"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{minutes} minutes</span>
                      <Clock className="w-4 h-4 text-gray-500" />
                    </div>
                  </LoadingButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
