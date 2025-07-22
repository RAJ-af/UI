"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import WhatsAppButton from "./WhatsAppButton"
import WelcomeModal from "./WelcomeModal"

interface LayoutProps {
  children: React.ReactNode
  showWelcome: boolean
}

export default function Layout({ children, showWelcome }: LayoutProps) {
  const [showWelcomeModal, setShowWelcomeModal] = useState(showWelcome)

  return (
    <div className="min-h-screen bg-notebook-bg">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />

      <WelcomeModal isOpen={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} />
    </div>
  )
}
