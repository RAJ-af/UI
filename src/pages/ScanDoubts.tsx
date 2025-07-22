"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Camera, Upload, ImageIcon, Zap, CheckCircle, AlertCircle } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"

interface ScanResult {
  problem: string
  solution: string
  steps: string[]
  confidence: number
}

const ScanDoubts: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setScanResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleScanImage = async () => {
    if (!selectedImage) return

    setIsProcessing(true)

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mock result
    const mockResult: ScanResult = {
      problem: "Solve for x: 2x + 5 = 13",
      solution: "x = 4",
      steps: [
        "Start with the equation: 2x + 5 = 13",
        "Subtract 5 from both sides: 2x = 13 - 5",
        "Simplify: 2x = 8",
        "Divide both sides by 2: x = 8 ÷ 2",
        "Final answer: x = 4",
      ],
      confidence: 95,
    }

    setScanResult(mockResult)
    setIsProcessing(false)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const sampleProblems = [
    { type: "Math", example: "Quadratic equations, calculus, geometry" },
    { type: "Physics", example: "Force diagrams, circuit problems" },
    { type: "Chemistry", example: "Chemical equations, molecular structures" },
    { type: "Biology", example: "Diagrams, classification charts" },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="mb-6">
          <StudentCharacter type="confused" size="large" className="mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-notebook-text mb-4 font-notebook">Scan & Solve Doubts</h1>
        <p className="text-xl text-gray-600 font-notebook">
          Take a photo of your problem and get instant step-by-step solutions
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg sketch-border p-8">
        <div className="text-center">
          {!selectedImage ? (
            <div className="space-y-6">
              <div className="w-24 h-24 bg-notebook-blue rounded-full flex items-center justify-center mx-auto">
                <Camera className="w-12 h-12 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-notebook-text mb-2 font-notebook">Upload Your Problem</h3>
                <p className="text-gray-600 font-notebook">
                  Take a clear photo or upload an image of your homework problem
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LoadingButton onClick={triggerFileInput} variant="primary" className="flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Choose Image
                </LoadingButton>

                <LoadingButton onClick={triggerFileInput} variant="secondary" className="flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Take Photo
                </LoadingButton>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                capture="environment"
              />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative inline-block">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Uploaded problem"
                  className="max-w-full max-h-64 rounded-lg sketch-border"
                />
                <button
                  onClick={() => {
                    setSelectedImage(null)
                    setScanResult(null)
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-notebook-red text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              </div>

              <LoadingButton
                onClick={handleScanImage}
                variant="primary"
                disabled={isProcessing}
                className="flex items-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                {isProcessing ? "Analyzing..." : "Scan & Solve"}
              </LoadingButton>
            </div>
          )}
        </div>
      </div>

      {/* Processing Animation */}
      {isProcessing && (
        <div className="bg-white rounded-lg sketch-border p-8 text-center">
          <div className="animate-spin w-12 h-12 border-4 border-notebook-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <h3 className="text-xl font-bold text-notebook-text mb-2 font-notebook">AI is analyzing your problem...</h3>
          <p className="text-gray-600 font-notebook">This usually takes a few seconds</p>
        </div>
      )}

      {/* Results */}
      {scanResult && (
        <div className="bg-white rounded-lg sketch-border p-8 space-y-6">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-8 h-8 text-notebook-green" />
            <div>
              <h3 className="text-xl font-bold text-notebook-text font-notebook">Problem Solved!</h3>
              <p className="text-gray-600 font-notebook">Confidence: {scanResult.confidence}%</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-notebook-text mb-2 font-notebook">Detected Problem:</h4>
              <p className="bg-gray-50 p-3 rounded-lg font-mono text-notebook-text">{scanResult.problem}</p>
            </div>

            <div>
              <h4 className="font-bold text-notebook-text mb-2 font-notebook">Solution:</h4>
              <p className="bg-notebook-green/10 p-3 rounded-lg font-bold text-notebook-green font-mono text-lg">
                {scanResult.solution}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-notebook-text mb-2 font-notebook">Step-by-Step Solution:</h4>
              <div className="space-y-2">
                {scanResult.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-notebook-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="font-notebook text-notebook-text">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <LoadingButton
              onClick={() => {
                setSelectedImage(null)
                setScanResult(null)
              }}
              variant="primary"
              className="flex items-center"
            >
              <Camera className="w-5 h-5 mr-2" />
              Scan Another Problem
            </LoadingButton>

            <LoadingButton variant="secondary" className="flex items-center">
              <ImageIcon className="w-5 h-5 mr-2" />
              Save Solution
            </LoadingButton>
          </div>
        </div>
      )}

      {/* Supported Problems */}
      <div className="bg-white rounded-lg sketch-border p-6">
        <h3 className="text-xl font-bold text-notebook-text mb-4 font-notebook">What can I scan?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sampleProblems.map((problem, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 border border-notebook-line rounded-lg">
              <div className="w-8 h-8 bg-notebook-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-notebook-text font-notebook">{problem.type}</h4>
                <p className="text-sm text-gray-600 font-notebook">{problem.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-r from-notebook-blue to-notebook-green rounded-lg text-white p-6">
        <h3 className="text-xl font-bold mb-4 font-notebook">Tips for Better Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-notebook">
          <div>• Ensure good lighting and clear image</div>
          <div>• Keep the problem text horizontal</div>
          <div>• Avoid shadows and reflections</div>
          <div>• Include the complete problem statement</div>
        </div>
      </div>
    </div>
  )
}

export default ScanDoubts
