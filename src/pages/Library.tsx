"use client"

import type React from "react"
import { useState } from "react"
import { Search, BookOpen, Download, Eye, Filter } from "lucide-react"
import StudentCharacter from "../components/StudentCharacter"
import LoadingButton from "../components/LoadingButton"

interface LibraryItem {
  id: number
  title: string
  subject: string
  type: "notes" | "assignment" | "reference" | "past-paper"
  class: string
  downloads: number
  uploadDate: string
}

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedClass, setSelectedClass] = useState("all")

  const libraryItems: LibraryItem[] = [
    {
      id: 1,
      title: "Physics Chapter 1: Motion in a Straight Line",
      subject: "Physics",
      type: "notes",
      class: "11",
      downloads: 245,
      uploadDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Mathematics Assignment: Trigonometry",
      subject: "Mathematics",
      type: "assignment",
      class: "10",
      downloads: 189,
      uploadDate: "2024-01-12",
    },
    {
      id: 3,
      title: "Chemistry Lab Manual",
      subject: "Chemistry",
      type: "reference",
      class: "12",
      downloads: 156,
      uploadDate: "2024-01-10",
    },
    {
      id: 4,
      title: "English Literature: Previous Year Papers",
      subject: "English",
      type: "past-paper",
      class: "12",
      downloads: 298,
      uploadDate: "2024-01-08",
    },
    {
      id: 5,
      title: "Biology Notes: Cell Structure",
      subject: "Biology",
      type: "notes",
      class: "11",
      downloads: 167,
      uploadDate: "2024-01-05",
    },
    {
      id: 6,
      title: "History Assignment: Indian Independence",
      subject: "History",
      type: "assignment",
      class: "10",
      downloads: 134,
      uploadDate: "2024-01-03",
    },
  ]

  const subjects = ["all", "Physics", "Mathematics", "Chemistry", "Biology", "English", "History"]
  const classes = ["all", "9", "10", "11", "12"]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "notes":
        return "blue"
      case "assignment":
        return "green"
      case "reference":
        return "yellow"
      case "past-paper":
        return "red"
      default:
        return "blue"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "notes":
        return "Notes"
      case "assignment":
        return "Assignment"
      case "reference":
        return "Reference"
      case "past-paper":
        return "Past Paper"
      default:
        return "Document"
    }
  }

  const filteredItems = libraryItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || item.subject === selectedSubject
    const matchesClass = selectedClass === "all" || item.class === selectedClass

    return matchesSearch && matchesSubject && matchesClass
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <StudentCharacter type="reading" size="large" className="character-float" />
        </div>
        <h1 className="text-4xl font-bold text-notebook-text sketch-underline">Digital Library</h1>
        <p className="text-xl text-notebook-text/80">Access study materials, notes, and resources for all subjects</p>
      </div>

      {/* Search and Filters */}
      <div className="notebook-card">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-notebook-text/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for notes, assignments, or subjects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-notebook-blue focus:outline-none"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-notebook-text/70" />
              <span className="text-notebook-text/70 font-medium">Filters:</span>
            </div>

            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-notebook-blue focus:outline-none"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject === "all" ? "All Subjects" : subject}
                </option>
              ))}
            </select>

            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-notebook-blue focus:outline-none"
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls === "all" ? "All Classes" : `Class ${cls}`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-notebook-text/70">
        Showing {filteredItems.length} of {libraryItems.length} items
      </div>

      {/* Library Items */}
      <div className="grid gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="notebook-card">
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-3">
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-6 h-6 text-notebook-blue mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-notebook-text mb-2">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full bg-notebook-${getTypeColor(item.type)} text-white font-medium`}
                      >
                        {getTypeLabel(item.type)}
                      </span>
                      <span className="text-notebook-text/70">Subject: {item.subject}</span>
                      <span className="text-notebook-text/70">Class: {item.class}</span>
                      <span className="text-notebook-text/70">{item.downloads} downloads</span>
                      <span className="text-notebook-text/70">
                        Uploaded: {new Date(item.uploadDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 ml-4">
                <LoadingButton
                  variant="blue"
                  className="px-4 py-2 text-sm"
                  onClick={() => console.log("Preview", item.id)}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Preview
                </LoadingButton>
                <LoadingButton
                  variant="green"
                  className="px-4 py-2 text-sm"
                  onClick={() => console.log("Download", item.id)}
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </LoadingButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <StudentCharacter type="thinking" size="large" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold text-notebook-text mb-2">No items found</h3>
          <p className="text-notebook-text/70">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* Upload Section */}
      <div className="notebook-card bg-notebook-blue/5 border-notebook-blue">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-notebook-text">Have study materials to share?</h3>
          <p className="text-notebook-text/70">Help your fellow students by uploading your notes and assignments</p>
          <LoadingButton variant="blue" className="px-6 py-3">
            Upload Materials
          </LoadingButton>
        </div>
      </div>
    </div>
  )
}

export default Library
