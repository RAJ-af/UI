"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Camera, Upload, ImageIcon, Zap, CheckCircle, AlertCircle } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"

interface ScannedResult {
  id: number
  question: string
  solution: string
  subject: string
  confidence: number
  timestamp: Date
}

const ScanDoubts: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState<ScannedResult[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleScan = async () => {
    if (!selectedImage) return

    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      const mockResult: ScannedResult = {
        id: results.length + 1,
        question: "Solve the quadratic equation: x² + 5x + 6 = 0",
        solution: `To solve x² + 5x + 6 = 0, we can use factoring:

Step 1: Look for two numbers that multiply to 6 and add to 5
Those numbers are 2 and 3 (2 × 3 = 6, 2 + 3 = 5)

Step 2: Factor the equation
x² + 5x + 6 = (x + 2)(x + 3) = 0

Step 3: Solve for x
x + 2 = 0  →  x = -2
x + 3 = 0  →  x = -3

Therefore, x = -2 or x = -3`,
        subject: "Mathematics",
        confidence: 95,
        timestamp: new Date(),
      }

      setResults((prev) => [mockResult, ...prev])
      setIsProcessing(false)
      setSelectedImage(null)
    }, 3000)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <StudentCharacter type="thinking" size="large" className="character-float" />
        </div>
        <h1 className="text-4xl font-bold text-notebook-text sketch-underline">Scan Your Doubts</h1>
        <p className="text-xl text-notebook-text/80">Upload images of problems and get instant solutions</p>
      </div>

      {/* Upload Section */}
      <div className="notebook-card">
        <div className="space-y-6">
          {!selectedImage ? (
            <div className="border-2 border-dashed border-notebook-blue rounded-lg p-8 text-center">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <ImageIcon className="w-16 h-16 text-notebook-blue/50" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-notebook-text mb-2">Upload a problem image</h3>
                  <p className="text-notebook-text/70 mb-4">Take a photo or upload an image of your homework problem</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <LoadingButton onClick={triggerFileInput} variant="blue" className="px-6 py-3">
                    <Upload className="w-5 h-5 mr-2" />
                    Choose File
                  </LoadingButton>
                  <LoadingButton onClick={triggerFileInput} variant="green" className="px-6 py-3">
                    <Camera className="w-5 h-5 mr-2" />
                    Take Photo
                  </LoadingButton>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Uploaded problem"
                  className="w-full max-h-64 object-contain rounded-lg border-2 border-gray-300"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
                >
                  ×
                </button>
              </div>
              <div className="flex justify-center">
                <LoadingButton
                  onClick={handleScan}
                  variant="green"
                  className="px-8 py-3 text-lg"
                  disabled={isProcessing}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  {isProcessing ? "Processing..." : "Scan & Solve"}
                </LoadingButton>
              </div>
            </div>
          )}

          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </div>
      </div>

      {/* Processing Animation */}
      {isProcessing && (
        <div className="notebook-card bg-notebook-blue/5 border-notebook-blue">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-notebook-blue"></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-notebook-text">Processing your image...</h3>
              <p className="text-notebook-text/70">Our AI is analyzing the problem and preparing a solution</p>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-notebook-text sketch-underline">Recent Solutions</h2>

          {results.map((result) => (
            <div key={result.id} className="notebook-card">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-notebook-green" />
                    <div>
                      <h3 className="text-lg font-bold text-notebook-text">Problem Solved</h3>
                      <div className="flex items-center space-x-4 text-sm text-notebook-text/70">
                        <span>Subject: {result.subject}</span>
                        <span>Confidence: {result.confidence}%</span>
                        <span>{result.timestamp.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Question */}
                <div className="bg-notebook-blue/10 p-4 rounded-lg border-l-4 border-notebook-blue">
                  <h4 className="font-bold text-notebook-text mb-2">Question:</h4>
                  <p className="text-notebook-text/80">{result.question}</p>
                </div>

                {/* Solution */}
                <div className="bg-notebook-green/10 p-4 rounded-lg border-l-4 border-notebook-green">
                  <h4 className="font-bold text-notebook-text mb-2">Solution:</h4>
                  <pre className="text-notebook-text/80 whitespace-pre-wrap font-sans">{result.solution}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tips */}
      <div className="notebook-card bg-notebook-yellow/10 border-notebook-yellow">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-6 h-6 text-notebook-yellow mt-1" />
          <div>
            <h3 className="text-lg font-bold text-notebook-text mb-3">Tips for better results:</h3>
            <ul className="space-y-2 text-notebook-text/80">
              <li>• Ensure the image is clear and well-lit</li>
              <li>• Make sure the text/equations are clearly visible</li>
              <li>• Crop the image to focus on the specific problem</li>
              <li>• Avoid blurry or tilted images</li>
              <li>• Include any relevant context or instructions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Supported Subjects */}
      <div className="notebook-card">
        <h3 className="text-lg font-bold text-notebook-text mb-4">Supported Subjects:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Mathematics", "Physics", "Chemistry", "Biology"].map((subject) => (
            <div key={subject} className="text-center p-3 bg-notebook-blue/10 rounded-lg">
              <span className="font-medium text-notebook-text">{subject}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScanDoubts
