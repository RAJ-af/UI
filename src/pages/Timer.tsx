"use client"

import { useState, useEffect } from "react"
import { Play, Pause, RotateCcw, Trophy, Target, Clock } from "lucide-react"
import LoadingButton from "../components/LoadingButton"
import StudentCharacter from "../components/StudentCharacter"

export default function Timer() {
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [sessions, setSessions] = useState(0)
  const [streak, setStreak] = useState(7)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (time === 0) {
      setIsRunning(false)
      if (!isBreak) {
        setSessions((prev) => prev + 1)
        setTime(5 * 60) // 5 minute break
        setIsBreak(true)
      } else {
        setTime(25 * 60) // Back to 25 minutes
        setIsBreak(false)
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, time, isBreak])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime(25 * 60)
    setIsBreak(false)
  }

  const progress = isBreak ? ((5 * 60 - time) / (5 * 60)) * 100 : ((25 * 60 - time) / (25 * 60)) * 100

  return (
    <div className="min-h-screen bg-notebook-bg py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <StudentCharacter type="studying" size="lg" className="character-float" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 sketch-underline">Study Timer</h1>
          <p className="text-gray-600">Use the Pomodoro technique to boost your productivity</p>
        </div>

        {/* Timer Display */}
        <div className="notebook-card mb-8 text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{isBreak ? "Break Time!" : "Focus Time"}</h2>
            <div
              className={`w-48 h-48 mx-auto rounded-full border-8 flex items-center justify-center relative ${
                isBreak ? "border-notebook-green" : "border-notebook-blue"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 font-mono">{formatTime(time)}</div>
                <div className="text-sm text-gray-600 mt-2">{isBreak ? "Take a break" : "Stay focused"}</div>
              </div>

              {/* Progress ring */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={`${progress * 5.53} 553`}
                  className={isBreak ? "text-notebook-green" : "text-notebook-blue"}
                  style={{ transition: "stroke-dasharray 1s ease" }}
                />
              </svg>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            {!isRunning ? (
              <LoadingButton onClick={handleStart} className="btn-notebook btn-green flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Start
              </LoadingButton>
            ) : (
              <LoadingButton onClick={handlePause} className="btn-notebook btn-yellow flex items-center">
                <Pause className="w-5 h-5 mr-2" />
                Pause
              </LoadingButton>
            )}

            <LoadingButton onClick={handleReset} className="btn-notebook btn-red flex items-center">
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </LoadingButton>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="notebook-card text-center">
            <Trophy className="w-8 h-8 text-notebook-yellow mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800 mb-1">{sessions}</div>
            <div className="text-sm text-gray-600">Sessions Today</div>
          </div>

          <div className="notebook-card text-center">
            <Target className="w-8 h-8 text-notebook-green mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800 mb-1">{streak}</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>

          <div className="notebook-card text-center">
            <Clock className="w-8 h-8 text-notebook-blue mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800 mb-1">{sessions * 25}</div>
            <div className="text-sm text-gray-600">Minutes Focused</div>
          </div>
        </div>

        {/* Tips */}
        <div className="notebook-card">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Pomodoro Technique Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">During Focus Time:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Eliminate all distractions</li>
                <li>• Focus on one task only</li>
                <li>• Don't check social media</li>
                <li>• Take notes of ideas for later</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">During Break Time:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Step away from your desk</li>
                <li>• Do some light stretching</li>
                <li>• Hydrate and have a snack</li>
                <li>• Avoid screens if possible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
