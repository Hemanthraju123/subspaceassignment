import React from 'react';
import { NewsPreferences } from '../types';

interface PreferencesPanelProps {
  preferences: NewsPreferences;
  onUpdatePreferences: (preferences: NewsPreferences) => void;
}

export function PreferencesPanel({ preferences, onUpdatePreferences }: PreferencesPanelProps) {
  const categories = ['Technology', 'Business', 'Science', 'Health', 'Entertainment', 'Sports'];
  const sources = ['Reuters', 'Associated Press', 'Bloomberg', 'TechCrunch', 'The Verge'];

  const handleCategoryToggle = (category: string) => {
    const updatedCategories = preferences.categories.includes(category)
      ? preferences.categories.filter(c => c !== category)
      : [...preferences.categories, category];
    
    onUpdatePreferences({
      ...preferences,
      categories: updatedCategories,
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">News Categories</h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={`p-2 rounded-lg text-sm transition-colors ${
                preferences.categories.includes(category)
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Update Frequency</h3>
        <select
          value={preferences.updateFrequency}
          onChange={(e) => onUpdatePreferences({
            ...preferences,
            updateFrequency: e.target.value as NewsPreferences['updateFrequency'],
          })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="realtime">Real-time</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Content Length</h3>
        <div className="flex gap-3">
          {['short', 'medium', 'long'].map(length => (
            <button
              key={length}
              onClick={() => onUpdatePreferences({
                ...preferences,
                contentLength: length as NewsPreferences['contentLength'],
              })}
              className={`flex-1 p-2 rounded-lg text-sm capitalize transition-colors ${
                preferences.contentLength === length
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {length}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}