"use client"

import type React from "react"
import { useState } from "react"
import { Search, Download, BookOpen, FileText, Video, ImageIcon, Filter } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"

interface LibraryItem {
  id: number
  title: string
  type: "pdf" | "video" | "image" | "document"
  subject: string
  grade: string
  downloads: number
  size: string
}

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedGrade, setSelectedGrade] = useState("all")

  const libraryItems: LibraryItem[] = [
    {
      id: 1,
      title: "Mathematics Class 10 - Quadratic Equations",
      type: "pdf",
      subject: "Mathematics",
      grade: "10",
      downloads: 1250,
      size: "2.5 MB",
    },
    {
      id: 2,
      title: "Physics - Laws of Motion Video Lecture",
      type: "video",
      subject: "Physics",
      grade: "11",
      downloads: 890,
      size: "45 MB",
    },
    {
      id: 3,
      title: "Chemistry - Periodic Table Chart",
      type: "image",
      subject: "Chemistry",
      grade: "9",
      downloads: 2100,
      size: "1.2 MB",
    },
    {
      id: 4,
      title: "English Grammar - Tenses Practice Sheet",
      type: "document",
      subject: "English",
      grade: "8",
      downloads: 1680,
      size: "800 KB",
    },
    {
      id: 5,
      title: "Biology - Human Body Systems",
      type: "pdf",
      subject: "Biology",
      grade: "12",
      downloads: 945,
      size: "3.8 MB",
    },
    {
      id: 6,
      title: "History - World War 2 Documentary",
      type: "video",
      subject: "History",
      grade: "10",
      downloads: 756,
      size: "120 MB",
    },
  ]

  const subjects = ["all", "Mathematics", "Physics", "Chemistry", "Biology", "English", "History"]
  const grades = ["all", "8", "9", "10", "11", "12"]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pdf":
      case "document":
        return FileText
      case "video":
        return Video
      case "image":
        return ImageIcon
      default:
        return FileText
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "bg-notebook-red"
      case "video":
        return "bg-notebook-blue"
      case "image":
        return "bg-notebook-green"
      case "document":
        return "bg-notebook-yellow"
      default:
        return "bg-gray-500"
    }
  }

  const filteredItems = libraryItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || item.subject === selectedSubject
    const matchesGrade = selectedGrade === "all" || item.grade === selectedGrade

    return matchesSearch && matchesSubject && matchesGrade
  })

  const handleDownload = async (item: LibraryItem) => {
    // Simulate download
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(`Downloading: ${item.title}`)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="mb-6">
          <StudentCharacter type="studying" size="large" className="mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-notebook-text mb-4 font-notebook">Digital Library</h1>
        <p className="text-xl text-gray-600 font-notebook">
          Access thousands of study materials, notes, and educational resources
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg sketch-border p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-notebook-line rounded-lg focus:border-notebook-blue outline-none font-notebook"
            />
          </div>

          {/* Subject Filter */}
          <div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full p-3 border-2 border-notebook-line rounded-lg focus:border-notebook-blue outline-none font-notebook"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject === "all" ? "All Subjects" : subject}
                </option>
              ))}
            </select>
          </div>

          {/* Grade Filter */}
          <div>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full p-3 border-2 border-notebook-line rounded-lg focus:border-notebook-blue outline-none font-notebook"
            >
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade === "all" ? "All Grades" : `Class ${grade}`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600 font-notebook">
          Showing {filteredItems.length} of {libraryItems.length} materials
        </p>
        <div className="flex items-center space-x-2 text-gray-600">
          <Filter className="w-4 h-4" />
          <span className="font-notebook text-sm">Filtered Results</span>
        </div>
      </div>

      {/* Library Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const TypeIcon = getTypeIcon(item.type)
          const typeColor = getTypeColor(item.type)

          return (
            <div
              key={item.id}
              className="bg-white rounded-lg sketch-border p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Type Icon */}
              <div className={`w-12 h-12 ${typeColor} rounded-lg flex items-center justify-center mb-4`}>
                <TypeIcon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-notebook-text mb-2 font-notebook line-clamp-2">{item.title}</h3>

              <div className="space-y-2 mb-4 text-sm text-gray-600 font-notebook">
                <div className="flex justify-between">
                  <span>Subject:</span>
                  <span className="font-medium">{item.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span>Grade:</span>
                  <span className="font-medium">Class {item.grade}</span>
                </div>
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span className="font-medium">{item.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Downloads:</span>
                  <span className="font-medium">{item.downloads.toLocaleString()}</span>
                </div>
              </div>

              {/* Download Button */}
              <LoadingButton onClick={() => handleDownload(item)} variant="primary" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download
              </LoadingButton>
            </div>
          )
        })}
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <StudentCharacter type="confused" size="medium" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold text-notebook-text mb-4 font-notebook">No materials found</h3>
          <p className="text-gray-600 font-notebook">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* Upload Section */}
      <div className="bg-gradient-to-r from-notebook-green to-notebook-blue rounded-lg text-white p-8 text-center">
        <BookOpen className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4 font-notebook">Have study materials to share?</h3>
        <p className="mb-6 opacity-90 font-notebook">Help other students by uploading your notes and resources</p>
        <LoadingButton variant="secondary" className="bg-white text-notebook-blue hover:bg-gray-100">
          Upload Materials
        </LoadingButton>
      </div>
    </div>
  )
}

export default Library
