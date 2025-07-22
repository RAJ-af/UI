import type React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-notebook-bg notebook-paper">
      <Navbar />
      <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-140px)]">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
