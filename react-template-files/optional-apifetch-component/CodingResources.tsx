'use client';

import { useState } from 'react';

// Interface defining the structure of a coding resource
interface CodingResource {
  id: number;
  description: string;
  url: string;
  types: string[];
  topics: string[];
  levels: string[];
}

/**
 * CodingResources Component
 * 
 * A component that fetches and displays coding resources from an external API.
 * Features include:
 * - Loading top 5 coding resources
 * - Filtering by topic and level
 * - Responsive grid layout
 * - Interactive UI with hover effects
 */
export default function CodingResources() {
  // State management for resources, loading state, and error handling
  const [resources, setResources] = useState<CodingResource[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  /**
   * Fetches coding resources from the API
   * Limits the results to top 5 resources
   * Handles loading states and error cases
   */
  const fetchResources = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.sampleapis.com/codingresources/codingResources');
      if (!response.ok) throw new Error('Failed to fetch resources');
      const data = await response.json();
      // Only take the first 5 resources
      setResources(data.slice(0, 5));
    } catch (err) {
      setError('Failed to fetch coding resources');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Extract unique topics and levels for filter dropdowns
  const allTopics = Array.from(new Set(resources.flatMap(r => r.topics)));
  const allLevels = Array.from(new Set(resources.flatMap(r => r.levels)));

  // Filter resources based on selected topic and level
  const filteredResources = resources.filter(resource => {
    const matchesTopic = selectedTopic === 'all' || resource.topics.includes(selectedTopic);
    const matchesLevel = selectedLevel === 'all' || resource.levels.includes(selectedLevel);
    return matchesTopic && matchesLevel;
  });

  return (
    <div className="w-full">
      {/* Load Resources Button */}
      <button
        onClick={fetchResources}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300 mb-6"
      >
        {loading ? 'Loading...' : 'Load Top 5 Coding Resources'}
      </button>

      {/* Error Message Display */}
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md mb-6">
          {error}
        </div>
      )}

      {/* Resources Display Section */}
      {resources.length > 0 && (
        <div className="space-y-6">
          {/* Filter Controls */}
          <div className="flex gap-4 mb-6">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-3 py-2 border rounded-md bg-white text-black"
              aria-label="Filter by topic"
            >
              <option value="all">All Topics</option>
              {allTopics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-2 border rounded-md bg-white text-black"
              aria-label="Filter by level"
            >
              <option value="all">All Levels</option>
              {allLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Resources Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map(resource => (
              <div key={resource.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  {/* Resource Description */}
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{resource.description}</h3>
                  
                  {/* Resource Types Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.types.map(type => (
                      <span key={type} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {type}
                      </span>
                    ))}
                  </div>
                  
                  {/* Resource Topics Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.topics.map(topic => (
                      <span key={topic} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  {/* Resource Levels Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.levels.map(level => (
                      <span key={level} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {level}
                      </span>
                    ))}
                  </div>
                  
                  {/* Resource Link */}
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Visit Resource →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 
