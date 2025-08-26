import React, { useState } from 'react';
import { Code, Trophy, Clock, CheckCircle, Lock, Lightbulb, Play } from 'lucide-react';
import { CodingProject } from '../types';
import { CodeEditor } from './CodeEditor';

interface ProjectsProps {
  projects: CodingProject[];
  onSubmitCode: (projectId: number, code: string) => Promise<boolean>;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onSubmitCode }) => {
  const [selectedProject, setSelectedProject] = useState<CodingProject | null>(null);
  const [showHints, setShowHints] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPointsColor = (points: number) => {
    if (points <= 200) return 'text-green-600';
    if (points <= 400) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <Code className="w-5 h-5" />
              <span>Back to Projects</span>
            </button>
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Project Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedProject.title}</h1>
                    <p className="text-gray-600 text-lg">{selectedProject.description}</p>
                  </div>
                  {selectedProject.completed && (
                    <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Completed!</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedProject.difficulty)}`}>
                    {selectedProject.difficulty}
                  </span>
                  <div className={`flex items-center space-x-1 ${getPointsColor(selectedProject.points)}`}>
                    <Trophy className="w-4 h-4" />
                    <span className="font-semibold">{selectedProject.points} points</span>
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedProject.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Test Cases */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Test Cases</h3>
                  <div className="space-y-3">
                    {selectedProject.testCases.map((testCase) => (
                      <div key={testCase.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm font-medium text-gray-800 mb-1">{testCase.description}</div>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-mono bg-blue-100 px-2 py-1 rounded">{testCase.input}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Expected: <span className="font-mono bg-green-100 px-2 py-1 rounded">{testCase.expectedOutput}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hints */}
                <div>
                  <button
                    onClick={() => setShowHints(!showHints)}
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors mb-3"
                  >
                    <Lightbulb className="w-5 h-5" />
                    <span>{showHints ? 'Hide' : 'Show'} Hints</span>
                  </button>
                  {showHints && (
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <ul className="space-y-2">
                        {selectedProject.hints.map((hint, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-yellow-800 text-sm">{hint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Code Editor */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Code Editor</h3>
              <CodeEditor
                project={selectedProject}
                onSubmit={(code) => onSubmitCode(selectedProject.id, code)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Coding Projects</h1>
          <p className="text-xl text-gray-600">
            Apply your Python skills to real-world coding challenges
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all transform hover:scale-[1.02] ${
                project.unlocked 
                  ? 'cursor-pointer hover:shadow-xl' 
                  : 'opacity-60 cursor-not-allowed'
              }`}
              onClick={() => project.unlocked && setSelectedProject(project)}
            >
              <div className="flex items-center p-6">
                {/* Project Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-6 ${
                  project.completed 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                    : project.unlocked
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                      : 'bg-gray-400'
                }`}>
                  {project.completed ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : project.unlocked ? (
                    <Code className="w-8 h-8" />
                  ) : (
                    <Lock className="w-8 h-8" />
                  )}
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  
                  {/* Project stats */}
                  <div className="flex items-center space-x-4 text-sm">
                    <div className={`flex items-center space-x-1 ${getPointsColor(project.points)}`}>
                      <Trophy className="w-4 h-4" />
                      <span className="font-semibold">{project.points} points</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600">
                      <Play className="w-4 h-4" />
                      <span>{project.testCases.length} test cases</span>
                    </div>
                    {project.completed && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status Icon */}
                <div className="ml-4">
                  {project.completed ? (
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  ) : project.unlocked ? (
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Lock className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};