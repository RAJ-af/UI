import type React from "react"
import { Link } from "react-router-dom"
import { BookOpen, MessageCircle, Camera, Timer, Users, TrendingUp, Award } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"

const Home: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Access thousands of study materials, notes, and resources",
      color: "bg-notebook-blue",
      link: "/library",
    },
    {
      icon: MessageCircle,
      title: "Ask AI Tutor",
      description: "Get instant help with your homework and doubts",
      color: "bg-notebook-green",
      link: "/ask-ai",
    },
    {
      icon: Camera,
      title: "Scan & Solve",
      description: "Take a photo of your problem and get solutions",
      color: "bg-notebook-yellow",
      link: "/scan-doubts",
    },
    {
      icon: Timer,
      title: "Study Timer",
      description: "Use Pomodoro technique to boost productivity",
      color: "bg-notebook-red",
      link: "/timer",
    },
  ]

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Students" },
    { icon: BookOpen, value: "5,000+", label: "Study Materials" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: TrendingUp, value: "24/7", label: "AI Support" },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="mb-8">
          <StudentCharacter type="happy" size="large" className="mx-auto animate-bounce-slow" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-notebook-text mb-6 font-notebook">
          Welcome to <span className="text-notebook-blue">Homework Club</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-notebook">
          Your ultimate study companion! Get help with homework, access study materials, and join a community of
          learners working towards academic excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/join-group">
            <LoadingButton variant="primary" className="w-full sm:w-auto">
              <Users className="w-5 h-5 mr-2" />
              Join Study Group
            </LoadingButton>
          </Link>

          <Link to="/library">
            <LoadingButton variant="secondary" className="w-full sm:w-auto">
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Library
            </LoadingButton>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center text-notebook-text mb-8 font-notebook">
          Everything You Need to Excel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Link
                key={index}
                to={feature.link}
                className="group p-6 bg-white rounded-lg sketch-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-notebook-text mb-2 font-notebook">{feature.title}</h3>

                <p className="text-gray-600 font-notebook">{feature.description}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white rounded-lg sketch-border p-8">
        <h2 className="text-3xl font-bold text-center text-notebook-text mb-8 font-notebook">
          Join Thousands of Successful Students
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-notebook-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-notebook-text font-notebook">{stat.value}</div>
                <div className="text-gray-600 font-notebook text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-gradient-to-r from-notebook-blue to-notebook-green rounded-lg text-white">
        <div className="mb-6">
          <StudentCharacter type="studying" size="medium" className="mx-auto" />
        </div>

        <h2 className="text-3xl font-bold mb-4 font-notebook">Ready to Start Your Learning Journey?</h2>

        <p className="text-xl mb-8 opacity-90 font-notebook">
          Join our WhatsApp group and connect with fellow students today!
        </p>

        <Link to="/join-group">
          <LoadingButton variant="secondary" className="bg-white text-notebook-blue hover:bg-gray-100">
            <MessageCircle className="w-5 h-5 mr-2" />
            Join WhatsApp Group Now
          </LoadingButton>
        </Link>
      </section>
    </div>
  )
}

export default Home
