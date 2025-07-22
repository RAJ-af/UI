import { Link } from "react-router-dom"
import { ArrowRight, BookOpen, Brain, Camera, Clock } from "lucide-react"
import LoadingButton from "../components/LoadingButton"
import StudentCharacter from "../components/StudentCharacter"

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Upload, organize, and access your study materials anytime, anywhere.",
      color: "bg-notebook-blue",
      textColor: "text-notebook-blue",
    },
    {
      icon: Brain,
      title: "AI Assistant",
      description: "Get instant help with homework questions from our intelligent AI tutor.",
      color: "bg-notebook-yellow",
      textColor: "text-notebook-yellow",
    },
    {
      icon: Camera,
      title: "Scan & Solve",
      description: "Take a photo of your problem and get step-by-step solutions.",
      color: "bg-notebook-red",
      textColor: "text-notebook-red",
    },
    {
      icon: Clock,
      title: "Study Timer",
      description: "Track your study sessions and build consistent learning habits.",
      color: "bg-notebook-green",
      textColor: "text-notebook-green",
    },
  ]

  const stats = [
    { number: "10K+", label: "Active Students", color: "text-notebook-blue" },
    { number: "50K+", label: "Problems Solved", color: "text-notebook-green" },
    { number: "95%", label: "Success Rate", color: "text-notebook-yellow" },
    { number: "24/7", label: "AI Support", color: "text-notebook-red" },
  ]

  return (
    <div className="min-h-screen bg-notebook-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-notebook-text to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-spin"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rotate-45 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <StudentCharacter type="reading" size="xl" color="white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Educational Success
              <span className="block text-notebook-yellow sketch-underline">Starts Here</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Join thousands of students who are acing their studies with AI-powered assistance, organized materials,
              and productivity tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LoadingButton
                className="btn-primary bg-white text-notebook-text hover:bg-gray-100"
                animationType="stars"
              >
                <Link to="/ask-ai" className="flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </LoadingButton>
              <LoadingButton
                className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-notebook-text"
                animationType="thumbsUp"
              >
                <Link to="/library">Explore Library</Link>
              </LoadingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center sketch-card p-6">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-notebook-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <StudentCharacter type="thinking" size="lg" color="blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-notebook-text mb-4 sketch-underline">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful educational tools designed specifically for students to enhance learning and boost academic
              performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="sketch-card p-6">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 transform hover:scale-110 transition-transform duration-300 animate-pulse`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-notebook-text mb-2 sketch-underline">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-notebook-text mb-4 sketch-underline">
              How Homework Club Works
            </h2>
            <p className="text-xl text-gray-600">Simple steps to transform your study experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Upload or Ask",
                desc: "Upload your study materials or ask questions directly to our AI assistant.",
                color: "bg-notebook-blue",
              },
              {
                step: 2,
                title: "Get Instant Help",
                desc: "Receive detailed explanations, solutions, and study guidance in seconds.",
                color: "bg-notebook-yellow",
              },
              {
                step: 3,
                title: "Track Progress",
                desc: "Monitor your study time and build consistent learning habits with our timer.",
                color: "bg-notebook-green",
              },
            ].map((item, index) => (
              <div key={index} className="text-center sketch-card p-8">
                <div
                  className={`w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 animate-bounce`}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-notebook-text sketch-underline">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-notebook-text to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-24 h-24 border-2 border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-white rotate-45 animate-spin"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <StudentCharacter type="studying" size="lg" color="white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 sketch-underline">Ready to Transform Your Studies?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join thousands of students who are already achieving better grades with Homework Club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LoadingButton className="btn-primary bg-white text-notebook-text hover:bg-gray-100" animationType="stars">
              <Link to="/ask-ai" className="flex items-center">
                Start Learning Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </LoadingButton>
            <LoadingButton
              className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-notebook-text"
              animationType="thumbsUp"
            >
              <Link to="/library">Browse Resources</Link>
            </LoadingButton>
          </div>
        </div>
      </section>
    </div>
  )
}
