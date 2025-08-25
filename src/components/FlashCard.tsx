'use client';

import { useState } from 'react';
import { FlashCard as FlashCardType } from '@/data/flashcards';

interface FlashCardProps {
  card: FlashCardType;
  showDifficulty?: boolean;
  showCategory?: boolean;
}

export default function FlashCard({ 
  card, 
  showDifficulty = true, 
  showCategory = true 
}: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'algorithms':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'system-design':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'frontend':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'backend':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'database':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'general':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`relative w-full h-96 cursor-pointer transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleFlip}
      >
        {/* Front of card (Question) */}
        <div className={`absolute inset-0 w-full h-full backface-hidden ${
          isFlipped ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}>
          <div className="bg-white rounded-xl shadow-lg border-2 border-gray-100 h-full p-6 flex flex-col">
            {/* Header with badges */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-2 flex-wrap">
                {showCategory && (
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(card.category)}`}>
                    {card.category.replace('-', ' ')}
                  </span>
                )}
                {showDifficulty && (
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(card.difficulty)}`}>
                    {card.difficulty}
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500">#{card.id}</div>
            </div>

            {/* Question */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">QUESTION</div>
                <h2 className="text-lg font-semibold text-gray-800 leading-relaxed">
                  {card.question}
                </h2>
              </div>
            </div>

            {/* Tags */}
            {card.tags && card.tags.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-1">
                  {card.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Click indicator */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-400">Click to reveal answer</p>
            </div>
          </div>
        </div>

        {/* Back of card (Answer) */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${
          isFlipped ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border-2 border-blue-100 h-full p-6 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm text-blue-600 font-medium">ANSWER</div>
              <div className="text-sm text-gray-500">#{card.id}</div>
            </div>

            {/* Answer */}
            <div className="flex-1 overflow-y-auto">
              <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                {card.answer}
              </div>
              
              {/* Code block if present */}
              {card.code && (
                <div className="mt-4 p-4 bg-gray-900 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    <code>{card.code}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Tags */}
            {card.tags && card.tags.length > 0 && (
              <div className="mt-4 pt-4 border-t border-blue-100">
                <div className="flex flex-wrap gap-1">
                  {card.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Click indicator */}
            <div className="text-center mt-4">
              <p className="text-sm text-blue-400">Click to see question</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}