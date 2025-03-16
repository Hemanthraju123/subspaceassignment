import React from 'react';
import { Settings, BookMarked, Home, TrendingUp } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'trending', icon: TrendingUp, label: 'Trending' },
    { id: 'saved', icon: BookMarked, label: 'Saved' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-16 bg-white border-r border-gray-200 h-screen flex flex-col items-center py-8">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`p-3 rounded-lg mb-4 transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title={tab.label}
          >
            <Icon size={24} />
          </button>
        );
      })}
    </div>
  );
}