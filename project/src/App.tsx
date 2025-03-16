import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ArticleCard } from './components/ArticleCard';
import { PreferencesPanel } from './components/PreferencesPanel';
import { Article, NewsPreferences } from './types';

// Mock data for demonstration
const mockArticles: Article[] = [
  {
    id: '1',
    title: 'The Future of AI in Healthcare',
    summary: 'Artificial Intelligence is revolutionizing healthcare with breakthrough innovations in diagnosis and treatment...',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800',
    source: 'TechHealth Today',
    publishedAt: '2 hours ago',
    sentiment: 'positive',
    isRead: false,
    isSaved: false,
  },
  {
    id: '2',
    title: 'Global Markets React to Economic Policy Changes',
    summary: 'Markets worldwide show mixed reactions as central banks announce new economic policies...',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800',
    source: 'Financial Times',
    publishedAt: '4 hours ago',
    sentiment: 'neutral',
    isRead: false,
    isSaved: true,
  },
  {
    id: '3',
    title: 'Climate Change: New Study Shows Alarming Trends',
    summary: 'Recent research indicates accelerating climate change effects across global ecosystems...',
    imageUrl: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?auto=format&fit=crop&w=800',
    source: 'Environmental Report',
    publishedAt: '6 hours ago',
    sentiment: 'negative',
    isRead: true,
    isSaved: false,
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  const [preferences, setPreferences] = useState<NewsPreferences>({
    categories: ['Technology', 'Business'],
    sources: ['Reuters', 'TechCrunch'],
    updateFrequency: 'daily',
    contentLength: 'medium',
  });

  const handleToggleSave = (id: string) => {
    setArticles(articles.map(article =>
      article.id === id ? { ...article, isSaved: !article.isSaved } : article
    ));
  };

  const handleShare = (id: string) => {
    // Implement sharing functionality
    console.log('Sharing article:', id);
  };

  const handleMarkRead = (id: string) => {
    setArticles(articles.map(article =>
      article.id === id ? { ...article, isRead: !article.isRead } : article
    ));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'settings':
        return (
          <div className="max-w-2xl mx-auto py-8">
            <h2 className="text-2xl font-bold mb-6">News Preferences</h2>
            <PreferencesPanel
              preferences={preferences}
              onUpdatePreferences={setPreferences}
            />
          </div>
        );
      case 'saved':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            {articles.filter(article => article.isSaved).map(article => (
              <ArticleCard
                key={article.id}
                article={article}
                onToggleSave={handleToggleSave}
                onShare={handleShare}
                onMarkRead={handleMarkRead}
              />
            ))}
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            {articles.map(article => (
              <ArticleCard
                key={article.id}
                article={article}
                onToggleSave={handleToggleSave}
                onShare={handleShare}
                onMarkRead={handleMarkRead}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;