"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Camera, Upload, Zap, CheckCircle, AlertCircle, ImageIcon } from "lucide-react"
import LoadingButton from "../components/LoadingButton"
import StudentCharacter from "../components/StudentCharacter"

export default function ScanDoubts() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setAnalysis(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    if (!selectedImage) return

    setIsAnalyzing(true)

    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(`
**Problem Identified:** Mathematical equation solving

**Step-by-Step Solution:**

1. **Identify the equation type:** This appears to be a quadratic equation
2. **Apply the quadratic formula:** x = (-b ± √(b²-4ac)) / 2a
3. **Substitute values:** Insert the coefficients from your equation
4. **Calculate discriminant:** Determine b²-4ac
5. **Find solutions:** Calculate both possible values of x

**Key Concepts:**
- Quadratic equations have two solutions
- The discriminant tells us about the nature of solutions
- Always check your answers by substituting back

**Practice Tips:**
- Practice identifying equation types
- Memorize the quadratic formula
- Double-check your arithmetic

Would you like me to explain any of these steps in more detail?
      `)
      setIsAnalyzing(false)
    }, 3000)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="min-h-screen bg-notebook-bg py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <StudentCharacter type="thinking" size="lg" className="character-float" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 sketch-underline">Scan Your Doubts</h1>
          <p className="text-gray-600">Take a photo of any problem and get instant step-by-step solutions</p>
        </div>

        {/* Upload Section */}
        <div className="notebook-card mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Upload Problem Image</h2>

          {!selectedImage ? (
            <div className="border-2 border-dashed border-gray-400 rounded-lg p-12 text-center hover:border-notebook-blue transition-colors bg-gray-50">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Take a Photo or Upload Image</h3>
              <p className="text-gray-600 mb-6">Capture your homework problem clearly for best results</p>

              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LoadingButton
                  onClick={triggerFileInput}
                  className="btn-notebook btn-blue flex items-center justify-center"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Choose Image
                </LoadingButton>
                <LoadingButton
                  onClick={triggerFileInput}
                  className="btn-notebook btn-green flex items-center justify-center"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Take Photo
                </LoadingButton>
              </div>

              <p className="text-sm text-gray-500 mt-4">Supported formats: JPG, PNG, WEBP (Max 5MB)</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <img
                  src={selectedImage || "/placeholder.png"}
                  alt="Uploaded problem"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <button
                  onClick={() => {
                    setSelectedImage(null)
                    setAnalysis(null)
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="text-center">
                <LoadingButton
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="btn-notebook btn-blue flex items-center justify-center mx-auto"
                  loadingText="Analyzing..."
                  loadingDuration={3000}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Analyze Problem
                </LoadingButton>
              </div>
            </div>
          )}
        </div>

        {/* Analysis Results */}
        {analysis && (
          <div className="notebook-card mb-8">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-notebook-green mr-2" />
              <h2 className="text-xl font-semibold text-gray-800">Solution Analysis</h2>
            </div>
            <div className="prose max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">{analysis}</div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <LoadingButton className="btn-notebook btn-green flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Mark as Solved
              </LoadingButton>
              <LoadingButton className="btn-notebook btn-yellow flex items-center justify-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Need More Help
              </LoadingButton>
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="notebook-card text-center">
            <ImageIcon className="w-8 h-8 text-notebook-blue mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Clear Images</h3>
            <p className="text-sm text-gray-600">Ensure text is readable and well-lit</p>
          </div>
          <div className="notebook-card text-center">
            <Camera className="w-8 h-8 text-notebook-green mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Focus on Problem</h3>
            <p className="text-sm text-gray-600">Crop to show only the relevant question</p>
          </div>
          <div className="notebook-card text-center">
            <Zap className="w-8 h-8 text-notebook-yellow mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Instant Results</h3>
            <p className="text-sm text-gray-600">Get solutions in seconds</p>
          </div>
        </div>
      </div>
    </div>
  )
}
</merged_code>
