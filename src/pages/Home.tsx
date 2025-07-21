import type React from "react"
import { Link } from "react-router-dom"
import { BookOpen, MessageCircle, Scan, Timer, Users, Star } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"

const Home: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Access study materials, notes, and resources",
      color: "blue",
      path: "/library",
    },
    {
      icon: MessageCircle,
      title: "Ask AI",
      description: "Get instant help with your homework questions",
      color: "green",
      path: "/ask-ai",
    },
    {
      icon: Scan,
      title: "Scan Doubts",
      description: "Upload images of problems for quick solutions",
      color: "yellow",
      path: "/scan-doubts",
    },
    {
      icon: Timer,
      title: "Study Timer",
      description: "Track your study sessions with Pomodoro technique",
      color: "red",
      path: "/timer",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="relative">
          <StudentCharacter type="happy" size="large" className="character-float mx-auto mb-6" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-notebook-text sketch-underline">
            Welcome to Homework Club!
          </h1>
          <p className="text-xl text-notebook-text/80 max-w-2xl mx-auto">
            Your one-stop destination for academic success at Lal Chand Sharma Higher Secondary School
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/join-group">
            <LoadingButton variant="green" className="text-lg px-8 py-4">
              <Users className="w-5 h-5 mr-2" />
              Join Study Group
            </LoadingButton>
          </Link>
          <Link to="/library">
            <LoadingButton variant="blue" className="text-lg px-8 py-4">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Library
            </LoadingButton>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Link key={index} to={feature.path}>
              <div className="notebook-card hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-notebook-${feature.color} flex items-center justify-center`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-notebook-text">{feature.title}</h3>
                  <p className="text-notebook-text/70">{feature.description}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </section>

      {/* Stats Section */}
      <section className="notebook-card">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-notebook-blue">500+</div>
            <div className="text-notebook-text/70">Active Students</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-notebook-green">1000+</div>
            <div className="text-notebook-text/70">Problems Solved</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-notebook-yellow">50+</div>
            <div className="text-notebook-text/70">Study Materials</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-notebook-text sketch-underline">What Students Say</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="notebook-card">
            <div className="flex items-start space-x-4">
              <StudentCharacter type="studying" size="small" />
              <div className="space-y-2">
                <div className="flex text-notebook-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-notebook-text/80">
                  "The AI help feature is amazing! It explains concepts so clearly."
                </p>
                <p className="text-sm text-notebook-text/60">- Priya, Class 12</p>
              </div>
            </div>
          </div>

          <div className="notebook-card">
            <div className="flex items-start space-x-4">
              <StudentCharacter type="reading" size="small" />
              <div className="space-y-2">
                <div className="flex text-notebook-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-notebook-text/80">
                  "Study timer helps me stay focused. My grades improved significantly!"
                </p>
                <p className="text-sm text-notebook-text/60">- Rahul, Class 11</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
