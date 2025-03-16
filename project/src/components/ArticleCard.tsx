import React from 'react';
import { Share2, Bookmark, BookmarkCheck, Circle } from 'lucide-react';
import { Article } from '../types';
import { clsx } from 'clsx';

interface ArticleCardProps {
  article: Article;
  onToggleSave: (id: string) => void;
  onShare: (id: string) => void;
  onMarkRead: (id: string) => void;
}

export function ArticleCard({ article, onToggleSave, onShare, onMarkRead }: ArticleCardProps) {
  const sentimentColors = {
    positive: 'text-green-500',
    neutral: 'text-gray-500',
    negative: 'text-red-500',
  };

  return (
    <div 
      className={clsx(
        'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all',
        'hover:shadow-md transform hover:-translate-y-1',
        article.isRead && 'opacity-75'
      )}
    >
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">{article.source}</span>
          <Circle
            size={16}
            className={clsx('fill-current', sentimentColors[article.sentiment])}
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{article.summary}</p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-sm text-gray-500">{article.publishedAt}</span>
          <div className="flex gap-2">
            <button
              onClick={() => onMarkRead(article.id)}
              className={clsx(
                'text-sm px-2 py-1 rounded',
                article.isRead ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              )}
            >
              {article.isRead ? 'Read' : 'Mark as read'}
            </button>
            <button
              onClick={() => onToggleSave(article.id)}
              className="p-1 hover:text-blue-600 transition-colors"
            >
              {article.isSaved ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
            </button>
            <button
              onClick={() => onShare(article.id)}
              className="p-1 hover:text-blue-600 transition-colors"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}