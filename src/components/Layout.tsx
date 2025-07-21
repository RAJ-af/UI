import type React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import WhatsAppButton from "./WhatsAppButton"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-notebook-bg">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
