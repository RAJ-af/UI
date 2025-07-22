"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw, Settings, Coffee, BookOpen, Target } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"

interface TimerSettings {
  workDuration: number
  shortBreak: number
  longBreak: number
  sessionsUntilLongBreak: number
}

type TimerMode = "work" | "shortBreak" | "longBreak"

const Timer: React.FC = () => {
  const [settings, setSettings] = useState<TimerSettings>({
    workDuration: 25,
    shortBreak: 5,
    longBreak: 15,
    sessionsUntilLongBreak: 4,
  })

  const [currentMode, setCurrentMode] = useState<TimerMode>("work")
  const [timeLeft, setTimeLeft] = useState(settings.workDuration * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [completedSessions, setCompletedSessions] = useState(0)
  const [showSettings, setShowSettings] = useState(false)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
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
  }, [isRunning, timeLeft])

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      handleTimerComplete()
    }
  }, [timeLeft, isRunning])

  const handleTimerComplete = () => {
    setIsRunning(false)

    if (currentMode === "work") {
      const newCompletedSessions = completedSessions + 1
      setCompletedSessions(newCompletedSessions)

      if (newCompletedSessions % settings.sessionsUntilLongBreak === 0) {
        setCurrentMode("longBreak")
        setTimeLeft(settings.longBreak * 60)
      } else {
        setCurrentMode("shortBreak")
        setTimeLeft(settings.shortBreak * 60)
      }
    } else {
      setCurrentMode("work")
      setTimeLeft(settings.workDuration * 60)
    }

    // Play notification sound (browser notification)
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Pomodoro Timer", {
        body: currentMode === "work" ? "Time for a break!" : "Time to get back to work!",
        icon: "/favicon.ico",
      })
    }
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setCurrentMode("work")
    setTimeLeft(settings.workDuration * 60)
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const getProgress = (): number => {
    const totalTime =
      currentMode === "work"
        ? settings.workDuration * 60
        : currentMode === "shortBreak"
          ? settings.shortBreak * 60
          : settings.longBreak * 60

    return ((totalTime - timeLeft) / totalTime) * 100
  }

  const getModeInfo = () => {
    switch (currentMode) {
      case "work":
        return {
          title: "Focus Time",
          color: "bg-notebook-blue",
          character: "studying" as const,
          description: "Time to concentrate and get things done!",
        }
      case "shortBreak":
        return {
          title: "Short Break",
          color: "bg-notebook-green",
          character: "happy" as const,
          description: "Take a quick break and recharge!",
        }
      case "longBreak":
        return {
          title: "Long Break",
          color: "bg-notebook-yellow",
          character: "happy" as const,
          description: "Great job! Enjoy your well-deserved break!",
        }
    }
  }

  const modeInfo = getModeInfo()

  const requestNotificationPermission = () => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission()
    }
  }

  useEffect(() => {
    requestNotificationPermission()
  }, [])

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="mb-6">
          <StudentCharacter type={modeInfo.character} size="large" className="mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-notebook-text mb-4 font-notebook">Study Timer</h1>
        <p className="text-xl text-gray-600 font-notebook">Use the Pomodoro Technique to boost your productivity</p>
      </div>

      {/* Timer Display */}
      <div className="bg-white rounded-lg sketch-border p-8 text-center">
        <div className={`w-4 h-4 ${modeInfo.color} rounded-full mx-auto mb-4`}></div>

        <h2 className="text-2xl font-bold text-notebook-text mb-2 font-notebook">{modeInfo.title}</h2>

        <p className="text-gray-600 mb-8 font-notebook">{modeInfo.description}</p>

        {/* Circular Progress */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle cx="50" cy="50" r="45" stroke="#e5e5e5" strokeWidth="8" fill="none" />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke={currentMode === "work" ? "#74b9ff" : currentMode === "shortBreak" ? "#00b894" : "#fdcb6e"}
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - getProgress() / 100)}`}
              className="transition-all duration-1000 ease-in-out"
              strokeLinecap="round"
            />
          </svg>

          {/* Time display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-notebook-text font-mono">{formatTime(timeLeft)}</div>
              <div className="text-sm text-gray-500 font-notebook">Session {completedSessions + 1}</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4">
          <LoadingButton onClick={toggleTimer} variant="primary" className="flex items-center px-8">
            {isRunning ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Start
              </>
            )}
          </LoadingButton>

          <LoadingButton onClick={resetTimer} variant="secondary" className="flex items-center">
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </LoadingButton>

          <LoadingButton
            onClick={() => setShowSettings(!showSettings)}
            variant="secondary"
            className="flex items-center"
          >
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </LoadingButton>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="bg-white rounded-lg sketch-border p-6">
          <h3 className="text-xl font-bold text-notebook-text mb-4 font-notebook">Timer Settings</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-notebook-text mb-2 font-notebook">
                Work Duration (minutes)
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={settings.workDuration}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, workDuration: Number.parseInt(e.target.value) || 25 }))
                }
                className="w-full p-3 border-2 border-notebook-line rounded-lg focus:border-notebook-blue outline-none font-notebook"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-notebook-text mb-2 font-notebook">
                Short Break (minutes)
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={settings.shortBreak}
                onChange={(e) => setSettings((prev) => ({ ...prev, shortBreak: Number.parseInt(e.target.value) || 5 }))}
                className="w-full p-3 border-2 border-notebook-line rounded-lg focus:border-notebook-blue outline-none font-notebook"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-notebook-text mb-2 font-notebook">
                Long Break (minutes)
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={settings.longBreak}
                onChange={(e) => setSettings((prev) => ({ ...prev, longBreak: Number.parseInt(e.target.value) || 15 }))}
                className="w-full p-3 border-2 border-notebook-line rounded-lg focus:border-notebook-blue outline-none font-notebook"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-notebook-text mb-2 font-notebook">
                Sessions until Long Break
              </label>
              <input
                type="number"
                min="2"
                max="10"
                value={settings.sessionsUntilLongBreak}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, sessionsUntilLongBreak: Number.parseInt(e.target.value) || 4 }))
                }
                className="w-full p-3 border-2 border-notebook-line rounded-lg focus:border-notebook-blue outline-none font-notebook"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <LoadingButton
              onClick={() => {
                setShowSettings(false)
                resetTimer()
              }}
              variant="primary"
            >
              Apply Settings
            </LoadingButton>
          </div>
        </div>
      )}

      {/* Statistics */}
      <div className="bg-white rounded-lg sketch-border p-6">
        <h3 className="text-xl font-bold text-notebook-text mb-4 font-notebook">Today's Progress</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-notebook-blue rounded-lg flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-notebook-text font-notebook">{completedSessions}</div>
            <div className="text-gray-600 font-notebook text-sm">Completed Sessions</div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-notebook-green rounded-lg flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-notebook-text font-notebook">
              {Math.floor((completedSessions * settings.workDuration) / 60)}h{" "}
              {(completedSessions * settings.workDuration) % 60}m
            </div>
            <div className="text-gray-600 font-notebook text-sm">Study Time</div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-notebook-yellow rounded-lg flex items-center justify-center mx-auto mb-3">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-notebook-text font-notebook">
              {Math.floor(completedSessions / settings.sessionsUntilLongBreak)}
            </div>
            <div className="text-gray-600 font-notebook text-sm">Long Breaks Earned</div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-r from-notebook-red to-notebook-blue rounded-lg text-white p-6">
        <h3 className="text-xl font-bold mb-4 font-notebook">Pomodoro Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-notebook">
          <div>• Focus on one task during work sessions</div>
          <div>• Take breaks away from your study area</div>
          <div>• Stay hydrated and stretch during breaks</div>
          <div>• Turn off distractions during focus time</div>
        </div>
      </div>
    </div>
  )
}

export default Timer
