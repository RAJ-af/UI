import Link from "next/link"
import { ArrowRight, BookOpen, Brain, Camera, Clock } from "lucide-react"
import LoadingButton from "./components/LoadingButton"
import StudentCharacter3D from "./components/StudentCharacter3D"
import AOSWrapper from "./components/AOSWrapper"

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Upload, organize, and access your study materials anytime, anywhere.",
      color: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      icon: Brain,
      title: "AI Assistant",
      description: "Get instant help with homework questions from our intelligent AI tutor.",
      color: "bg-yellow-500",
      textColor: "text-yellow-500",
    },
    {
      icon: Camera,
      title: "Scan & Solve",
      description: "Take a photo of your problem and get step-by-step solutions.",
      color: "bg-red-500",
      textColor: "text-red-500",
    },
    {
      icon: Clock,
      title: "Study Timer",
      description: "Track your study sessions and build consistent learning habits.",
      color: "bg-green-500",
      textColor: "text-green-500",
    },
  ]

  const stats = [
    { number: "10K+", label: "Active Students", color: "text-blue-500" },
    { number: "50K+", label: "Problems Solved", color: "text-green-500" },
    { number: "95%", label: "Success Rate", color: "text-yellow-500" },
    { number: "24/7", label: "AI Support", color: "text-red-500" },
  ]

  return (
    <div className="min-h-screen notion-bg">
      {/* Hero Section */}
      <section className="educational-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full rotate-3d"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rotate-45 bounce-3d"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full floating-animation"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <AOSWrapper animation="zoom-in" delay={200}>
              <div className="flex justify-center mb-8">
                <StudentCharacter3D
                  src="/images/student-main.jpeg"
                  alt="Student studying"
                  size="xl"
                  className="bounce-3d"
                />
              </div>
            </AOSWrapper>

            <AOSWrapper animation="fade-up" delay={400}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Educational Success
                <span className="block text-yellow-400">Starts Here</span>
              </h1>
            </AOSWrapper>

            <AOSWrapper animation="fade-up" delay={600}>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Join thousands of students who are acing their studies with AI-powered assistance, organized materials,
                and productivity tools.
              </p>
            </AOSWrapper>

            <AOSWrapper animation="fade-up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LoadingButton className="btn-primary bg-white text-black hover:bg-gray-100" animationType="stars">
                  <Link href="/ask-ai" className="flex items-center">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </LoadingButton>
                <LoadingButton
                  className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                  animationType="thumbsUp"
                >
                  <Link href="/library">Explore Library</Link>
                </LoadingButton>
              </div>
            </AOSWrapper>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AOSWrapper key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center notion-card p-6">
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 pulse-glow`}>{stat.number}</div>
                  <div className="text-gray-600 font-medium notion-text">{stat.label}</div>
                </div>
              </AOSWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 notion-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AOSWrapper animation="fade-up">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <StudentCharacter3D
                  src="/images/student-characters.png"
                  alt="Students learning"
                  size="lg"
                  className="floating-animation"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold notion-text mb-4">Everything You Need to Excel</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful educational tools designed specifically for students to enhance learning and boost academic
                performance.
              </p>
            </div>
          </AOSWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <AOSWrapper key={index} animation="fade-up" delay={index * 150}>
                  <div className="notion-card p-6 glass-morphism">
                    <div
                      className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 transform hover:scale-110 transition-transform duration-300 pulse-glow`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold notion-text mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </AOSWrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AOSWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold notion-text mb-4">How Homework Club Works</h2>
              <p className="text-xl text-gray-600">Simple steps to transform your study experience</p>
            </div>
          </AOSWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Upload or Ask",
                desc: "Upload your study materials or ask questions directly to our AI assistant.",
                color: "bg-blue-500",
              },
              {
                step: 2,
                title: "Get Instant Help",
                desc: "Receive detailed explanations, solutions, and study guidance in seconds.",
                color: "bg-yellow-500",
              },
              {
                step: 3,
                title: "Track Progress",
                desc: "Monitor your study time and build consistent learning habits with our timer.",
                color: "bg-green-500",
              },
            ].map((item, index) => (
              <AOSWrapper key={index} animation="zoom-in" delay={index * 200}>
                <div className="text-center notion-card p-8">
                  <div
                    className={`w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 bounce-3d`}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 notion-text">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </AOSWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 educational-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-24 h-24 border-2 border-white rounded-full floating-animation"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-white rotate-45 rotate-3d"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AOSWrapper animation="zoom-in">
            <div className="flex justify-center mb-8">
              <StudentCharacter3D
                src="/images/student-main.jpeg"
                alt="Ready to learn"
                size="lg"
                className="bounce-3d"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Studies?</h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Join thousands of students who are already achieving better grades with Homework Club.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LoadingButton className="btn-primary bg-white text-black hover:bg-gray-100" animationType="stars">
                <Link href="/ask-ai" className="flex items-center">
                  Start Learning Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </LoadingButton>
              <LoadingButton
                className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                animationType="thumbsUp"
              >
                <Link href="/library">Browse Resources</Link>
              </LoadingButton>
            </div>
          </AOSWrapper>
        </div>
      </section>
    </div>
  )
}
