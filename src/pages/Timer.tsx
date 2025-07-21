"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw, Settings, BookOpen, Coffee } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"

interface TimerSession {
  id: number
  type: "study" | "break"
  duration: number
  completedAt: Date
}

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false)
  const [currentSession, setCurrentSession] = useState<"study" | "break">("study")
  const [studyDuration, setStudyDuration] = useState(25)
  const [breakDuration, setBreakDuration] = useState(5)
  const [completedSessions, setCompletedSessions] = useState<TimerSession[]>([])
  const [showSettings, setShowSettings] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      handleSessionComplete()
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
  }, [isActive, timeLeft])

  const handleSessionComplete = () => {
    setIsActive(false)

    const session: TimerSession = {
      id: completedSessions.length + 1,
      type: currentSession,
      duration: currentSession === "study" ? studyDuration : breakDuration,
      completedAt: new Date(),
    }

    setCompletedSessions((prev) => [session, ...prev])

    // Switch session type and reset timer
    if (currentSession === "study") {
      setCurrentSession("break")
      setTimeLeft(breakDuration * 60)
    } else {
      setCurrentSession("study")
      setTimeLeft(studyDuration * 60)
    }

    // Play notification sound (in a real app)
    console.log(`${currentSession} session completed!`)
  }

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(currentSession === "study" ? studyDuration * 60 : breakDuration * 60)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const getProgress = () => {
    const totalTime = currentSession === "study" ? studyDuration * 60 : breakDuration * 60
    return ((totalTime - timeLeft) / totalTime) * 100
  }

  const getTodayStats = () => {
    const today = new Date().toDateString()
    const todaySessions = completedSessions.filter((session) => session.completedAt.toDateString() === today)

    const studySessions = todaySessions.filter((s) => s.type === "study").length
    const totalStudyTime = todaySessions.filter((s) => s.type === "study").reduce((total, s) => total + s.duration, 0)

    return { studySessions, totalStudyTime }
  }

  const { studySessions, totalStudyTime } = getTodayStats()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <StudentCharacter
            type={currentSession === "study" ? "studying" : "happy"}
            size="large"
            className="character-float"
          />
        </div>
        <h1 className="text-4xl font-bold text-notebook-text sketch-underline">Study Timer</h1>
        <p className="text-xl text-notebook-text/80">Use the Pomodoro Technique to boost your productivity</p>
      </div>

      {/* Main Timer */}
      <div className="notebook-card text-center">
        <div className="space-y-6">
          {/* Session Type */}
          <div className="flex items-center justify-center space-x-3">
            {currentSession === "study" ? (
              <>
                <BookOpen className="w-8 h-8 text-notebook-blue" />
                <h2 className="text-2xl font-bold text-notebook-blue">Study Session</h2>
              </>
            ) : (
              <>
                <Coffee className="w-8 h-8 text-notebook-green" />
                <h2 className="text-2xl font-bold text-notebook-green">Break Time</h2>
              </>
            )}
          </div>

          {/* Timer Display */}
          <div className="relative">
            <div className="w-64 h-64 mx-auto relative">
              {/* Progress Circle */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="#e5e5e5" strokeWidth="8" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={currentSession === "study" ? "#74b9ff" : "#00b894"}
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - getProgress() / 100)}`}
                  className="transition-all duration-1000 ease-in-out"
                />
              </svg>

              {/* Time Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-notebook-text font-mono">
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-notebook-text/70 mt-2">
                    {currentSession === "study" ? "Focus Time" : "Break Time"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-4">
            <LoadingButton onClick={toggleTimer} variant={isActive ? "red" : "green"} className="px-8 py-4 text-lg">
              {isActive ? (
                <>
                  <Pause className="w-6 h-6 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-6 h-6 mr-2" />
                  Start
                </>
              )}
            </LoadingButton>

            <LoadingButton onClick={resetTimer} variant="yellow" className="px-8 py-4 text-lg">
              <RotateCcw className="w-6 h-6 mr-2" />
              Reset
            </LoadingButton>

            <LoadingButton onClick={() => setShowSettings(!showSettings)} variant="blue" className="px-8 py-4 text-lg">
              <Settings className="w-6 h-6 mr-2" />
              Settings
            </LoadingButton>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="notebook-card">
          <h3 className="text-xl font-bold text-notebook-text mb-4">Timer Settings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-notebook-text font-medium mb-2">Study Duration (minutes)</label>
              <input
                type="number"
                value={studyDuration}
                onChange={(e) => setStudyDuration(Number(e.target.value))}
                min="1"
                max="60"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-notebook-blue focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-notebook-text font-medium mb-2">Break Duration (minutes)</label>
              <input
                type="number"
                value={breakDuration}
                onChange={(e) => setBreakDuration(Number(e.target.value))}
                min="1"
                max="30"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-notebook-blue focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Today's Stats */}
      <div className="notebook-card">
        <h3 className="text-xl font-bold text-notebook-text mb-4">Today's Progress</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-notebook-blue">{studySessions}</div>
            <div className="text-notebook-text/70">Study Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-notebook-green">{totalStudyTime}</div>
            <div className="text-notebook-text/70">Minutes Studied</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-notebook-yellow">
              {Math.floor(totalStudyTime / 60)}h {totalStudyTime % 60}m
            </div>
            <div className="text-notebook-text/70">Total Time</div>
          </div>
        </div>
      </div>

      {/* Recent Sessions */}
      {completedSessions.length > 0 && (
        <div className="notebook-card">
          <h3 className="text-xl font-bold text-notebook-text mb-4">Recent Sessions</h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {completedSessions.slice(0, 10).map((session) => (
              <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {session.type === "study" ? (
                    <BookOpen className="w-5 h-5 text-notebook-blue" />
                  ) : (
                    <Coffee className="w-5 h-5 text-notebook-green" />
                  )}
                  <span className="font-medium text-notebook-text">
                    {session.type === "study" ? "Study" : "Break"} Session
                  </span>
                </div>
                <div className="text-right text-sm text-notebook-text/70">
                  <div>{session.duration} minutes</div>
                  <div>{session.completedAt.toLocaleTimeString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pomodoro Info */}
      <div className="notebook-card bg-notebook-blue/10 border-notebook-blue">
        <h3 className="text-lg font-bold text-notebook-text mb-3">🍅 About the Pomodoro Technique</h3>
        <ul className="space-y-2 text-notebook-text/80">
          <li>• Work for 25 minutes with full focus</li>
          <li>• Take a 5-minute break</li>
          <li>• After 4 study sessions, take a longer 15-30 minute break</li>
          <li>• Eliminate distractions during study time</li>
          <li>• Use breaks to rest and recharge</li>
        </ul>
      </div>
    </div>
  )
}

export default Timer
