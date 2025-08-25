'use client';

interface StatsProps {
  stats: {
    total: number;
    completed: number;
    correct: number;
    incorrect: number;
    remaining: number;
  };
  progressPercentage: number;
  accuracyPercentage: number;
  onReset: () => void;
}

export default function Stats({ stats, progressPercentage, accuracyPercentage, onReset }: StatsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Study Progress</h3>
          {stats.completed > 0 && (
            <button
              onClick={onReset}
              className="text-sm text-gray-500 hover:text-red-600 transition-colors duration-200"
            >
              Reset Progress
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* Total Cards */}
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Cards</div>
          </div>

          {/* Completed */}
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{stats.completed}</div>
            <div className="text-sm text-blue-600">Completed</div>
          </div>

          {/* Correct Answers */}
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{stats.correct}</div>
            <div className="text-sm text-green-600">Correct</div>
          </div>

          {/* Incorrect Answers */}
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">{stats.incorrect}</div>
            <div className="text-sm text-red-600">Incorrect</div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-4">
          {/* Overall Progress */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm text-gray-600">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Accuracy */}
          {stats.completed > 0 && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Accuracy</span>
                <span className="text-sm text-gray-600">{accuracyPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    accuracyPercentage >= 80
                      ? 'bg-green-500'
                      : accuracyPercentage >= 60
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${accuracyPercentage}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Detailed breakdown */}
        {stats.completed > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Remaining:</span>
                <span className="font-medium text-gray-800">{stats.remaining}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Success Rate:</span>
                <span className={`font-medium ${
                  accuracyPercentage >= 80 ? 'text-green-600' : 
                  accuracyPercentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {accuracyPercentage}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Study Session:</span>
                <span className="font-medium text-blue-600">
                  {stats.completed}/{stats.total}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Motivational message */}
        {stats.completed > 0 && (
          <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <p className="text-sm text-center">
              {progressPercentage === 100 ? (
                <span className="text-green-600 font-medium">
                  🎉 Congratulations! You&apos;ve completed all cards in this set!
                </span>
              ) : accuracyPercentage >= 80 ? (
                <span className="text-green-600">
                  Excellent work! You&apos;re doing great! 💪
                </span>
              ) : accuracyPercentage >= 60 ? (
                <span className="text-yellow-600">
                  Good progress! Keep it up! 📚
                </span>
              ) : (
                <span className="text-blue-600">
                  Don&apos;t worry, practice makes perfect! 🚀
                </span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}