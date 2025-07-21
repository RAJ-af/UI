"use client"

import type React from "react"
import { useState } from "react"
import { Upload, Download, Search, Filter, FileText, Trash2, Eye, Plus } from "lucide-react"
import LoadingButton from "../components/LoadingButton"
import StudentCharacter from "../components/StudentCharacter"

interface Document {
  id: string
  name: string
  type: string
  size: string
  uploadDate: string
  subject: string
}

export default function Library() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [documents] = useState<Document[]>([
    {
      id: "1",
      name: "Calculus Chapter 5 Notes.pdf",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      subject: "Mathematics",
    },
    {
      id: "2",
      name: "Physics Lab Report.pdf",
      type: "PDF",
      size: "1.8 MB",
      uploadDate: "2024-01-14",
      subject: "Physics",
    },
    {
      id: "3",
      name: "History Essay Draft.pdf",
      type: "PDF",
      size: "956 KB",
      uploadDate: "2024-01-13",
      subject: "History",
    },
    {
      id: "4",
      name: "Chemistry Formulas.pdf",
      type: "PDF",
      size: "1.2 MB",
      uploadDate: "2024-01-12",
      subject: "Chemistry",
    },
  ])

  const subjects = ["all", "Mathematics", "Physics", "Chemistry", "History", "English", "Biology"]

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || doc.subject === selectedSubject
    return matchesSearch && matchesSubject
  })

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      console.log("Files selected:", files)
    }
  }

  return (
    <div className="min-h-screen bg-notebook-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <StudentCharacter type="reading" size="lg" className="character-float" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 sketch-underline">Study Library</h1>
          <p className="text-gray-600">Upload, organize, and access your study materials</p>
        </div>

        {/* Upload Section */}
        <div className="notebook-card mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Upload Documents</h2>
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center hover:border-notebook-blue transition-colors bg-gray-50">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Drag and drop your files here, or click to browse</p>
            <input
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <LoadingButton className="btn-notebook btn-blue cursor-pointer inline-flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Choose Files
              </LoadingButton>
            </label>
            <p className="text-sm text-gray-500 mt-2">Supported formats: PDF, DOC, DOCX, TXT (Max 10MB each)</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="notebook-card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-notebook-blue focus:outline-none sketch-border"
              />
            </div>
            <div className="relative">
              <Filter className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="pl-10 pr-8 py-3 border-2 border-gray-300 rounded-lg focus:border-notebook-blue focus:outline-none appearance-none bg-white sketch-border"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject === "all" ? "All Subjects" : subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="notebook-card">
          <div className="p-6 border-b-2 border-dashed border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800">Your Documents ({filteredDocuments.length})</h2>
          </div>

          {filteredDocuments.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-800 mb-2">No documents found</h3>
              <p className="text-gray-500">
                {searchTerm || selectedSubject !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "Upload your first document to get started"}
              </p>
            </div>
          ) : (
            <div className="divide-y-2 divide-dashed divide-gray-200">
              {filteredDocuments.map((doc) => (
                <div key={doc.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-notebook-red rounded-lg flex items-center justify-center sketch-border">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">{doc.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="font-medium">{doc.subject}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>Uploaded {new Date(doc.uploadDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <LoadingButton className="p-2 text-gray-400 hover:text-notebook-blue transition-colors bg-transparent border-none">
                        <Eye className="w-5 h-5" />
                      </LoadingButton>
                      <LoadingButton className="p-2 text-gray-400 hover:text-notebook-green transition-colors bg-transparent border-none">
                        <Download className="w-5 h-5" />
                      </LoadingButton>
                      <LoadingButton className="p-2 text-gray-400 hover:text-notebook-red transition-colors bg-transparent border-none">
                        <Trash2 className="w-5 h-5" />
                      </LoadingButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="notebook-card text-center">
            <Plus className="w-8 h-8 text-notebook-blue mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Upload Notes</h3>
            <p className="text-sm text-gray-600">Add your handwritten or typed notes</p>
          </div>
          <div className="notebook-card text-center">
            <FileText className="w-8 h-8 text-notebook-green mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Organize Files</h3>
            <p className="text-sm text-gray-600">Sort by subject, date, or type</p>
          </div>
          <div className="notebook-card text-center">
            <Download className="w-8 h-8 text-notebook-yellow mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 mb-1">Access Anywhere</h3>
            <p className="text-sm text-gray-600">Download and view on any device</p>
          </div>
        </div>
      </div>
    </div>
  )
}
