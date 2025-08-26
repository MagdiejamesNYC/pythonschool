import React, { useState } from 'react';
import { Play, CheckCircle, XCircle, Loader } from 'lucide-react';
import { CodingProject } from '../types';

interface CodeEditorProps {
  project: CodingProject;
  onSubmit: (code: string) => Promise<boolean>;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ project, onSubmit }) => {
  const [code, setCode] = useState(project.submittedCode || project.starterCode);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastResult, setLastResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setLastResult(null);
    
    try {
      const success = await onSubmit(code);
      setLastResult({
        success,
        message: success 
          ? `Congratulations! You earned ${project.points} points!` 
          : 'Some test cases failed. Check your code and try again.'
      });
    } catch (error) {
      setLastResult({
        success: false,
        message: 'An error occurred while testing your code. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setCode(project.starterCode);
    setLastResult(null);
  };

  return (
    <div className="space-y-4">
      {/* Code Textarea */}
      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-96 p-4 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          placeholder="Write your Python code here..."
          spellCheck={false}
        />
        <div className="absolute top-2 right-2 text-xs text-gray-500 bg-white px-2 py-1 rounded">
          Python
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleReset}
          className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Reset Code
        </button>
        
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || !code.trim()}
          className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-semibold transition-all ${
            isSubmitting || !code.trim()
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Testing...</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              <span>Run Tests</span>
            </>
          )}
        </button>
      </div>

      {/* Result Display */}
      {lastResult && (
        <div className={`p-4 rounded-lg border ${
          lastResult.success 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          <div className="flex items-center space-x-2">
            {lastResult.success ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
            <span className="font-medium">{lastResult.message}</span>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
        <p className="font-medium mb-2">Instructions:</p>
        <ul className="space-y-1 text-xs">
          <li>• Write your code in the editor above</li>
          <li>• Make sure your function name matches the requirements</li>
          <li>• Click "Run Tests" to validate your solution</li>
          <li>• All test cases must pass to earn points</li>
        </ul>
      </div>
    </div>
  );
};