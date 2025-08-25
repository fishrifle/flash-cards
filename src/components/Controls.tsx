'use client';

interface ControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: () => void;
  onMarkCorrect: () => void;
  onMarkIncorrect: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  currentIndex: number;
  totalCards: number;
  isShuffled: boolean;
}

export default function Controls({
  onPrevious,
  onNext,
  onShuffle,
  onMarkCorrect,
  onMarkIncorrect,
  canGoPrevious,
  canGoNext,
  currentIndex,
  totalCards,
  isShuffled
}: ControlsProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-6 text-center">
        <div className="text-sm text-gray-500 mb-2">
          Card {currentIndex + 1} of {totalCards}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${totalCards > 0 ? ((currentIndex + 1) / totalCards) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Main navigation controls */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-600 disabled:cursor-not-allowed transition-all duration-200"
          aria-label="Previous card"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="text-lg font-semibold text-gray-700 min-w-[100px] text-center">
          {currentIndex + 1} / {totalCards}
        </div>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-600 disabled:cursor-not-allowed transition-all duration-200"
          aria-label="Next card"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <button
          onClick={onMarkIncorrect}
          className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg border border-red-200 hover:bg-red-100 hover:border-red-300 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Incorrect
        </button>

        <button
          onClick={onShuffle}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
            isShuffled
              ? 'bg-purple-100 text-purple-700 border-purple-300'
              : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          {isShuffled ? 'Shuffled' : 'Shuffle'}
        </button>

        <button
          onClick={onMarkCorrect}
          className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Correct
        </button>
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="text-xs text-gray-400 text-center">
        <p>
          Use arrow keys to navigate • Space to flip • C for correct • X for incorrect • S to shuffle
        </p>
      </div>
    </div>
  );
}