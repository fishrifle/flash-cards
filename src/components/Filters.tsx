'use client';

import { FlashCard } from '@/data/flashcards';

interface FiltersProps {
  category: string;
  difficulty: string;
  searchQuery: string;
  onCategoryChange: (category: FlashCard['category'] | 'all') => void;
  onDifficultyChange: (difficulty: FlashCard['difficulty'] | 'all') => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
  totalCards: number;
  filteredCards: number;
}

export default function Filters({
  category,
  difficulty,
  searchQuery,
  onCategoryChange,
  onDifficultyChange,
  onSearchChange,
  onClearFilters,
  totalCards,
  filteredCards
}: FiltersProps) {
  const categories: Array<{ value: FlashCard['category'] | 'all'; label: string; color: string }> = [
    { value: 'all', label: 'All Categories', color: 'text-gray-600' },
    { value: 'algorithms', label: 'Algorithms', color: 'text-blue-600' },
    { value: 'system-design', label: 'System Design', color: 'text-purple-600' },
    { value: 'frontend', label: 'Frontend', color: 'text-pink-600' },
    { value: 'backend', label: 'Backend', color: 'text-indigo-600' },
    { value: 'database', label: 'Database', color: 'text-orange-600' },
    { value: 'general', label: 'General', color: 'text-teal-600' }
  ];

  const difficulties: Array<{ value: FlashCard['difficulty'] | 'all'; label: string; color: string }> = [
    { value: 'all', label: 'All Levels', color: 'text-gray-600' },
    { value: 'easy', label: 'Easy', color: 'text-green-600' },
    { value: 'medium', label: 'Medium', color: 'text-yellow-600' },
    { value: 'hard', label: 'Hard', color: 'text-red-600' }
  ];

  const hasActiveFilters = category !== 'all' || difficulty !== 'all' || searchQuery.trim() !== '';

  return (
    <div className="w-full max-w-6xl mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search */}
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Questions
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by question, answer, or tags..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="lg:w-48">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => onCategoryChange(e.target.value as FlashCard['category'] | 'all')}
              className="block w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="lg:w-40">
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty
            </label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => onDifficultyChange(e.target.value as FlashCard['difficulty'] | 'all')}
              className="block w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            >
              {difficulties.map((diff) => (
                <option key={diff.value} value={diff.value}>
                  {diff.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter summary and clear button */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            Showing {filteredCards} of {totalCards} cards
            {hasActiveFilters && (
              <span className="ml-2 text-blue-600">
                (filtered)
              </span>
            )}
          </div>
          
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="text-sm text-gray-500 hover:text-red-600 transition-colors duration-200"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Quick category buttons */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm font-medium text-gray-700 mb-3">Quick categories:</div>
          <div className="flex flex-wrap gap-2">
            {categories.filter(cat => cat.value !== 'all').map((cat) => (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
                  category === cat.value
                    ? `${cat.color} bg-blue-50 border-blue-200`
                    : 'text-gray-600 bg-gray-50 border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}