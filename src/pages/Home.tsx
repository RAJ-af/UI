import { Link } from "react-router-dom"
import { BookOpen, MessageSquare, Camera, Timer, Users, ArrowRight } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"
import WhatsAppButton from "../components/WhatsAppButton"

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Study Library",
      description: "Upload and organize your study materials, notes, and documents",
      href: "/library",
      color: "bg-notebook-blue",
    },
    {
      icon: MessageSquare,
      title: "Ask AI",
      description: "Get instant help with your homework and study questions",
      href: "/ask-ai",
      color: "bg-notebook-green",
    },
    {
      icon: Camera,
      title: "Scan Doubts",
      description: "Take photos of problems and get step-by-step solutions",
      href: "/scan-doubts",
      color: "bg-notebook-yellow",
    },
    {
      icon: Timer,
      title: "Study Timer",
      description: "Track your study sessions and build consistent habits",
      href: "/timer",
      color: "bg-notebook-red",
    },
  ]

  return (
    <div className="min-h-screen bg-notebook-bg">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <StudentCharacter type="happy" size="xl" className="character-float" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 font-notebook sketch-underline">
              Welcome to Homework Club
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your digital study companion for academic success at Lal Chand Sharma Higher Secondary School
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/library">
                <LoadingButton className="btn-notebook btn-blue">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </LoadingButton>
              </Link>
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-notebook sketch-underline">
              Everything You Need to Excel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to support your learning journey and academic growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link key={index} to={feature.href} className="group">
                  <div className="notebook-card h-full hover:transform hover:scale-105 transition-all duration-200 cursor-pointer">
                    <div
                      className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 sketch-border group-hover:animate-wiggle`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-notebook">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                    <div className="mt-4 flex items-center text-notebook-blue text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="notebook-card">
              <div className="text-3xl font-bold text-notebook-blue mb-2 font-notebook">500+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div className="notebook-card">
              <div className="text-3xl font-bold text-notebook-green mb-2 font-notebook">1000+</div>
              <div className="text-gray-600">Problems Solved</div>
            </div>
            <div className="notebook-card">
              <div className="text-3xl font-bold text-notebook-red mb-2 font-notebook">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="notebook-card">
            <div className="flex justify-center mb-6">
              <StudentCharacter type="studying" size="lg" className="character-float" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-notebook">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of students who are already improving their grades with Homework Club
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join-group">
                <LoadingButton className="btn-notebook btn-green">
                  <Users className="w-5 h-5 mr-2" />
                  Join Study Group
                </LoadingButton>
              </Link>
              <Link to="/ask-ai">
                <LoadingButton className="btn-notebook btn-blue">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Ask Your First Question
                </LoadingButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
