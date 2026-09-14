import React, { useState } from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ReactECharts from 'echarts-for-react';
import { analyticsPeriods, AnalyticsPeriod, mockAnalyticsData } from '../../data/analytics';

export const AnalyticsLayout: React.FC = () => {
  const [period, setPeriod] = useState<AnalyticsPeriod>('7d');
  const currentData = mockAnalyticsData[period];

  const timestamps = currentData.points.map(p => {
    const d = new Date(p.timestamp);
    return period === '24h' ? `${d.getHours()}:00` : `${d.getMonth() + 1}/${d.getDate()}`;
  });

  const pageviews = currentData.points.map(p => p.pageviews);
  const visitors = currentData.points.map(p => p.visitors);

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#1a1b1c',
      borderColor: '#444',
      textStyle: { color: '#fff' },
    },
    legend: {
      data: ['Pageviews', 'Visitors'],
      textStyle: { color: '#b3b3b3' },
      top: 0,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: timestamps,
      axisLine: { lineStyle: { color: '#444' } },
      axisLabel: { color: '#71767b' },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#444' } },
      splitLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.05)' } },
      axisLabel: { color: '#71767b' },
    },
    series: [
      {
        name: 'Pageviews',
        type: 'line',
        smooth: true,
        data: pageviews,
        itemStyle: { color: '#3b82f6' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(59, 130, 246, 0.3)' },
              { offset: 1, color: 'rgba(59, 130, 246, 0.0)' },
            ],
          },
        },
      },
      {
        name: 'Visitors',
        type: 'line',
        smooth: true,
        data: visitors,
        itemStyle: { color: '#22c55e' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(34, 197, 94, 0.3)' },
              { offset: 1, color: 'rgba(34, 197, 94, 0.0)' },
            ],
          },
        },
      },
    ],
  };

  return (
    <div className="analytics-page animate-fade-in">
      <SectionTitle>Site Analytics Dashboard</SectionTitle>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Real-time metrics, pageviews, and unique visitors.
        </p>

        <div style={{ display: 'flex', gap: '6px' }}>
          {analyticsPeriods.map(p => (
            <button
              key={p.value}
              onClick={() => setPeriod(p.value)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid var(--border-default)',
                backgroundColor: period === p.value ? 'var(--text-primary)' : 'var(--bg-surface)',
                color: period === p.value ? 'var(--bg-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: 'var(--bg-surface-elevated)', border: '1px solid var(--border-default)', padding: '16px', borderRadius: '6px', flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {currentData.totalViews.toLocaleString()}
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Total Pageviews</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface-elevated)', border: '1px solid var(--border-default)', padding: '16px', borderRadius: '6px', flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {currentData.totalVisitors.toLocaleString()}
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Unique Visitors</div>
          </div>
        </div>

        <ReactECharts option={option} style={{ height: '320px', width: '100%' }} />
      </div>
    </div>
  );
};

export default AnalyticsLayout;
