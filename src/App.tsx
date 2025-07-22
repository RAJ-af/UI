"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import SplashScreen from "./components/SplashScreen"
import TapBubbleProvider from "./components/TapBubbleProvider"
import Home from "./pages/Home"
import Library from "./pages/Library"
import AskAI from "./pages/AskAI"
import ScanDoubts from "./pages/ScanDoubts"
import Timer from "./pages/Timer"
import JoinGroup from "./pages/JoinGroup"

function App() {
  const [isFirstVisit, setIsFirstVisit] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedHomeworkClub")
    if (!hasVisited) {
      setIsFirstVisit(true)
      localStorage.setItem("hasVisitedHomeworkClub", "true")
    }

    // Show splash screen for 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <TapBubbleProvider>
      <Router>
        <Layout showWelcome={isFirstVisit}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/ask-ai" element={<AskAI />} />
            <Route path="/scan-doubts" element={<ScanDoubts />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/join-group" element={<JoinGroup />} />
          </Routes>
        </Layout>
      </Router>
    </TapBubbleProvider>
  )
}

export default App
