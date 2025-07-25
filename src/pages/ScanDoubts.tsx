"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Camera, Upload, X, Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface ScanResult {
  id: string
  image: string
  question: string
  solution: string
  steps: string[]
  timestamp: Date
}

export default function ScanDoubts() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const [scanHistory, setScanHistory] = useState<ScanResult[]>([])
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

  const handleScan = async () => {
    if (!selectedImage) return

    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      const result: ScanResult = {
        id: Date.now().toString(),
        image: selectedImage,
        question: "Solve for x: 2x + 5 = 13",
        solution: "x = 4",
        steps: [
          "Start with the equation: 2x + 5 = 13",
          "Subtract 5 from both sides: 2x = 13 - 5",
          "Simplify: 2x = 8",
          "Divide both sides by 2: x = 8 ÷ 2",
          "Final answer: x = 4",
        ],
        timestamp: new Date(),
      }

      setScanResult(result)
      setScanHistory((prev) => [result, ...prev])
      setIsProcessing(false)
    }, 3000)
  }

  const clearImage = () => {
    setSelectedImage(null)
    setScanResult(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen bg-notebook-bg py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-notebook-red bg-opacity-20 rounded-full flex items-center justify-center border border-dashed border-notebook-red">
              <Camera className="w-6 h-6 text-notebook-red" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-notebook-text mb-2 sketch-underline">Scan & Solve Doubts</h1>
          <p className="text-gray-600">Take a photo of your problem and get instant solutions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="sketch-card p-6">
              <h2 className="text-xl font-semibold mb-4 text-notebook-text sketch-underline">Upload Problem Image</h2>

              {!selectedImage ? (
                <div className="border-2 border-dashed border-notebook-line rounded-lg p-8 text-center hover:border-notebook-red transition-colors">
                  <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Take a photo or upload an image of your problem</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="btn-primary cursor-pointer inline-flex items-center">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose Image
                  </label>
                  <p className="text-sm text-gray-500 mt-2">Supported formats: JPG, PNG, GIF (Max 5MB)</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Uploaded problem"
                      className="w-full h-64 object-contain bg-gray-100 rounded-lg sketch-border"
                    />
                    <button
                      onClick={clearImage}
                      className="absolute top-2 right-2 p-1 bg-notebook-red text-white rounded-full hover:bg-red-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={handleScan}
                    disabled={isProcessing}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Camera className="w-4 h-4 mr-2" />
                        Scan & Solve
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="bg-notebook-blue bg-opacity-10 border border-notebook-blue rounded-lg p-4">
              <h3 className="font-semibold text-notebook-blue mb-2">Tips for better results:</h3>
              <ul className="text-sm text-notebook-text space-y-1">
                <li>• Ensure good lighting and clear text</li>
                <li>• Keep the image straight and focused</li>
                <li>• Include the complete problem statement</li>
                <li>• Avoid shadows or glare on the paper</li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {scanResult && (
              <div className="sketch-card p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-notebook-green mr-2" />
                  <h2 className="text-xl font-semibold text-notebook-text sketch-underline">Solution Found!</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-notebook-text mb-2">Detected Problem:</h3>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded sketch-border">{scanResult.question}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-notebook-text mb-2">Answer:</h3>
                    <p className="text-lg font-bold text-notebook-green bg-green-50 p-3 rounded sketch-border">
                      {scanResult.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-notebook-text mb-2">Step-by-step Solution:</h3>
                    <ol className="space-y-2">
                      {scanResult.steps.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-notebook-blue text-white text-sm rounded-full flex items-center justify-center mr-3 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {isProcessing && (
              <div className="sketch-card p-6">
                <div className="flex items-center justify-center">
                  <Loader2 className="w-8 h-8 animate-spin text-notebook-blue mr-3" />
                  <div>
                    <h3 className="font-semibold text-notebook-text">Analyzing your problem...</h3>
                    <p className="text-gray-600">This may take a few seconds</p>
                  </div>
                </div>
              </div>
            )}

            {!selectedImage && !isProcessing && !scanResult && (
              <div className="sketch-card p-6 text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-notebook-text mb-2">Ready to help!</h3>
                <p className="text-gray-600">
                  Upload an image of your math problem, homework question, or any doubt you have, and I'll provide a
                  detailed solution with step-by-step explanations.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Scan History */}
        {scanHistory.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-notebook-text mb-6 sketch-underline">Recent Scans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scanHistory.slice(0, 4).map((scan) => (
                <div key={scan.id} className="sketch-card p-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={scan.image || "/placeholder.svg"}
                      alt="Scanned problem"
                      className="w-16 h-16 object-cover rounded sketch-border"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-notebook-text mb-1">{scan.question}</p>
                      <p className="text-sm text-notebook-green mb-2">Answer: {scan.solution}</p>
                      <p className="text-xs text-gray-500">
                        {scan.timestamp.toLocaleDateString()} at {scan.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
