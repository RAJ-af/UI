import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Library from "./pages/Library"
import AskAI from "./pages/AskAI"
import ScanDoubts from "./pages/ScanDoubts"
import Timer from "./pages/Timer"
import JoinGroup from "./pages/JoinGroup"
import TapBubbleProvider from "./components/TapBubbleProvider"
import SplashScreen from "./components/SplashScreen"

function App() {
  return (
    <TapBubbleProvider>
      <SplashScreen />
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
    </TapBubbleProvider>
  )
}

export default App
