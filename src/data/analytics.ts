export type AnalyticsPeriod = '24h' | '7d' | '30d';

export interface AnalyticsSeriesPoint {
  timestamp: number;
  pageviews: number;
  visitors: number;
}

export interface AnalyticsPeriodOption {
  label: string;
  value: AnalyticsPeriod;
}

export const analyticsPeriods: AnalyticsPeriodOption[] = [
  { label: 'Last 24 Hours', value: '24h' },
  { label: 'Last 7 Days', value: '7d' },
  { label: 'Last 30 Days', value: '30d' },
];

export const mockAnalyticsData: Record<AnalyticsPeriod, { points: AnalyticsSeriesPoint[]; totalViews: number; totalVisitors: number }> = {
  '24h': {
    totalViews: 412,
    totalVisitors: 289,
    points: Array.from({ length: 24 }, (_, i) => ({
      timestamp: Date.now() - (23 - i) * 3600 * 1000,
      pageviews: Math.floor(Math.random() * 30) + 5,
      visitors: Math.floor(Math.random() * 20) + 3,
    })),
  },
  '7d': {
    totalViews: 3840,
    totalVisitors: 2150,
    points: Array.from({ length: 7 }, (_, i) => ({
      timestamp: Date.now() - (6 - i) * 24 * 3600 * 1000,
      pageviews: Math.floor(Math.random() * 600) + 200,
      visitors: Math.floor(Math.random() * 400) + 150,
    })),
  },
  '30d': {
    totalViews: 18450,
    totalVisitors: 9800,
    points: Array.from({ length: 30 }, (_, i) => ({
      timestamp: Date.now() - (29 - i) * 24 * 3600 * 1000,
      pageviews: Math.floor(Math.random() * 800) + 300,
      visitors: Math.floor(Math.random() * 500) + 200,
    })),
  },
};
