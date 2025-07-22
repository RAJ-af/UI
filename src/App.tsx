"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import SplashScreen from "./components/SplashScreen"
import WelcomeModal from "./components/WelcomeModal"
import TapBubbleProvider from "./components/TapBubbleProvider"
import Home from "./pages/Home"
import Library from "./pages/Library"
import AskAI from "./pages/AskAI"
import ScanDoubts from "./pages/ScanDoubts"
import Timer from "./pages/Timer"
import JoinGroup from "./pages/JoinGroup"

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    // Show splash for 3 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false)

      // Check if first visit
      const hasVisited = localStorage.getItem("homework-club-visited")
      if (!hasVisited) {
        setShowWelcome(true)
        localStorage.setItem("homework-club-visited", "true")
      }
    }, 3000)

    return () => clearTimeout(splashTimer)
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <TapBubbleProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/ask-ai" element={<AskAI />} />
            <Route path="/scan-doubts" element={<ScanDoubts />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/join-group" element={<JoinGroup />} />
          </Routes>
        </Layout>
        {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
      </Router>
    </TapBubbleProvider>
  )
}

export default App
