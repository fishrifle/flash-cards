'use client';

import { useState, useEffect, useMemo } from 'react';
import { FlashCard, flashcards, shuffleCards, getCardsByCategory, searchCards } from '@/data/flashcards';

export interface FlashCardFilters {
  category?: FlashCard['category'] | 'all';
  difficulty?: FlashCard['difficulty'] | 'all';
  searchQuery?: string;
}

export interface FlashCardProgress {
  currentIndex: number;
  totalCards: number;
  completedCards: Set<number>;
  correctAnswers: Set<number>;
  incorrectAnswers: Set<number>;
}

export function useFlashCards(initialFilters: FlashCardFilters = {}) {
  const [filters, setFilters] = useState<FlashCardFilters>({
    category: 'all',
    difficulty: 'all',
    searchQuery: '',
    ...initialFilters
  });

  const [progress, setProgress] = useState<FlashCardProgress>({
    currentIndex: 0,
    totalCards: 0,
    completedCards: new Set(),
    correctAnswers: new Set(),
    incorrectAnswers: new Set()
  });

  const [isShuffled, setIsShuffled] = useState(false);

  // Filter and process cards
  const filteredCards = useMemo(() => {
    let cards = [...flashcards];

    // Apply category filter
    if (filters.category && filters.category !== 'all') {
      cards = getCardsByCategory(filters.category);
    }

    // Apply difficulty filter
    if (filters.difficulty && filters.difficulty !== 'all') {
      cards = cards.filter(card => card.difficulty === filters.difficulty);
    }

    // Apply search filter
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      cards = searchCards(filters.searchQuery).filter(card => 
        cards.some(c => c.id === card.id)
      );
    }

    // Shuffle if requested
    if (isShuffled) {
      cards = shuffleCards(cards);
    }

    return cards;
  }, [filters, isShuffled]);

  // Update progress when filtered cards change
  useEffect(() => {
    setProgress(prev => ({
      ...prev,
      totalCards: filteredCards.length,
      currentIndex: Math.min(prev.currentIndex, filteredCards.length - 1)
    }));
  }, [filteredCards]);

  // Navigation functions
  const goToNext = () => {
    setProgress(prev => ({
      ...prev,
      currentIndex: Math.min(prev.currentIndex + 1, prev.totalCards - 1)
    }));
  };

  const goToPrevious = () => {
    setProgress(prev => ({
      ...prev,
      currentIndex: Math.max(prev.currentIndex - 1, 0)
    }));
  };

  const goToCard = (index: number) => {
    if (index >= 0 && index < filteredCards.length) {
      setProgress(prev => ({
        ...prev,
        currentIndex: index
      }));
    }
  };

  const shuffle = () => {
    setIsShuffled(!isShuffled);
    setProgress(prev => ({
      ...prev,
      currentIndex: 0
    }));
  };

  // Progress tracking functions
  const markCardCompleted = (cardId: number) => {
    setProgress(prev => ({
      ...prev,
      completedCards: new Set([...prev.completedCards, cardId])
    }));
  };

  const markCorrect = (cardId: number) => {
    setProgress(prev => {
      const newIncorrectAnswers = new Set(prev.incorrectAnswers);
      newIncorrectAnswers.delete(cardId);
      
      return {
        ...prev,
        correctAnswers: new Set([...prev.correctAnswers, cardId]),
        incorrectAnswers: newIncorrectAnswers,
        completedCards: new Set([...prev.completedCards, cardId])
      };
    });
  };

  const markIncorrect = (cardId: number) => {
    setProgress(prev => {
      const newCorrectAnswers = new Set(prev.correctAnswers);
      newCorrectAnswers.delete(cardId);
      
      return {
        ...prev,
        correctAnswers: newCorrectAnswers,
        incorrectAnswers: new Set([...prev.incorrectAnswers, cardId]),
        completedCards: new Set([...prev.completedCards, cardId])
      };
    });
  };

  const resetProgress = () => {
    setProgress({
      currentIndex: 0,
      totalCards: filteredCards.length,
      completedCards: new Set(),
      correctAnswers: new Set(),
      incorrectAnswers: new Set()
    });
  };

  // Filter update functions
  const updateFilters = (newFilters: Partial<FlashCardFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setProgress(prev => ({ ...prev, currentIndex: 0 }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      difficulty: 'all',
      searchQuery: ''
    });
    setIsShuffled(false);
  };

  // Computed values
  const currentCard = filteredCards[progress.currentIndex] || null;
  const progressPercentage = progress.totalCards > 0 
    ? Math.round((progress.completedCards.size / progress.totalCards) * 100)
    : 0;
  const accuracyPercentage = progress.completedCards.size > 0
    ? Math.round((progress.correctAnswers.size / progress.completedCards.size) * 100)
    : 0;

  const canGoNext = progress.currentIndex < progress.totalCards - 1;
  const canGoPrevious = progress.currentIndex > 0;

  return {
    // Current state
    currentCard,
    filteredCards,
    filters,
    progress,
    isShuffled,
    
    // Navigation
    goToNext,
    goToPrevious,
    goToCard,
    canGoNext,
    canGoPrevious,
    shuffle,
    
    // Progress tracking
    markCardCompleted,
    markCorrect,
    markIncorrect,
    resetProgress,
    progressPercentage,
    accuracyPercentage,
    
    // Filters
    updateFilters,
    clearFilters,
    
    // Stats
    stats: {
      total: progress.totalCards,
      completed: progress.completedCards.size,
      correct: progress.correctAnswers.size,
      incorrect: progress.incorrectAnswers.size,
      remaining: progress.totalCards - progress.completedCards.size
    }
  };
}