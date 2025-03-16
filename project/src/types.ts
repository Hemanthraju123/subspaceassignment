export interface Article {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  source: string;
  publishedAt: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  isRead: boolean;
  isSaved: boolean;
}

export interface NewsPreferences {
  categories: string[];
  sources: string[];
  updateFrequency: 'realtime' | 'daily' | 'weekly';
  contentLength: 'short' | 'medium' | 'long';
}