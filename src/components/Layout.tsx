import type React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import WhatsAppButton from "./WhatsAppButton"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-notebook-paper flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Layout
