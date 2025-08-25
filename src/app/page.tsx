'use client';

import { useEffect } from 'react';
import FlashCard from '@/components/FlashCard';
import Controls from '@/components/Controls';
import Filters from '@/components/Filters';
import Stats from '@/components/Stats';
import { useFlashCards } from '@/hooks/useFlashCards';

export default function Home() {
  const {
    currentCard,
    filteredCards,
    filters,
    progress,
    isShuffled,
    goToNext,
    goToPrevious,
    canGoNext,
    canGoPrevious,
    shuffle,
    markCorrect,
    markIncorrect,
    resetProgress,
    progressPercentage,
    accuracyPercentage,
    updateFilters,
    clearFilters,
    stats
  } = useFlashCards();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Prevent action if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case ' ': // Space bar
          event.preventDefault();
          // Flip card logic is handled in FlashCard component
          break;
        case 'c':
        case 'C':
          event.preventDefault();
          if (currentCard) {
            markCorrect(currentCard.id);
          }
          break;
        case 'x':
        case 'X':
          event.preventDefault();
          if (currentCard) {
            markIncorrect(currentCard.id);
          }
          break;
        case 's':
        case 'S':
          event.preventDefault();
          shuffle();
          break;
        case 'r':
        case 'R':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            resetProgress();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentCard, goToNext, goToPrevious, markCorrect, markIncorrect, shuffle, resetProgress]);

  if (filteredCards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="container mx-auto py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Full-Stack Flash Cards
            </h1>
            <p className="text-gray-600">Master your interview skills</p>
          </div>

          <Filters
            category={filters.category || 'all'}
            difficulty={filters.difficulty || 'all'}
            searchQuery={filters.searchQuery || ''}
            onCategoryChange={(cat) => updateFilters({ category: cat })}
            onDifficultyChange={(diff) => updateFilters({ difficulty: diff })}
            onSearchChange={(query) => updateFilters({ searchQuery: query })}
            onClearFilters={clearFilters}
            totalCards={stats.total}
            filteredCards={filteredCards.length}
          />

          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No cards found</h2>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Full-Stack Flash Cards
          </h1>
          <p className="text-gray-600">
            Master algorithms, system design, and full-stack development
          </p>
        </div>

        {/* Stats */}
        <Stats
          stats={stats}
          progressPercentage={progressPercentage}
          accuracyPercentage={accuracyPercentage}
          onReset={resetProgress}
        />

        {/* Filters */}
        <Filters
          category={filters.category || 'all'}
          difficulty={filters.difficulty || 'all'}
          searchQuery={filters.searchQuery || ''}
          onCategoryChange={(cat) => updateFilters({ category: cat })}
          onDifficultyChange={(diff) => updateFilters({ difficulty: diff })}
          onSearchChange={(query) => updateFilters({ searchQuery: query })}
          onClearFilters={clearFilters}
          totalCards={stats.total}
          filteredCards={filteredCards.length}
        />

        {/* Main Card Area */}
        <div className="mb-8">
          {currentCard && <FlashCard card={currentCard} />}
        </div>

        {/* Controls */}
        <Controls
          onPrevious={goToPrevious}
          onNext={goToNext}
          onShuffle={shuffle}
          onMarkCorrect={() => currentCard && markCorrect(currentCard.id)}
          onMarkIncorrect={() => currentCard && markIncorrect(currentCard.id)}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
          currentIndex={progress.currentIndex}
          totalCards={progress.totalCards}
          isShuffled={isShuffled}
        />

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Use keyboard shortcuts for faster navigation • Built with Next.js & TypeScript
          </p>
        </footer>
      </div>
    </div>
  );
}