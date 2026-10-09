import React, { useEffect, useState } from 'react';
import { BookOpen, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { insightsArticles, type InsightArticle } from '../data/insights';

export const Insights: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    document.title = 'Perspectives & Forensics Briefings | HERRLICH GROUP';
    window.scrollTo(0, 0);

    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const match = insightsArticles.find(a => a.id === hash);
      if (match) setSelectedArticle(match);
    }
  }, []);

  const categories = ['All', 'Forensic Due Diligence', 'Corporate Governance', 'Fraud Risk Advisory', 'Dispute Advisory'];

  const filteredArticles = activeCategory === 'All'
    ? insightsArticles
    : insightsArticles.filter(a => a.category === activeCategory);

  return (
    <div className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow">
            <BookOpen size={14} color="#0071E3" />
            <span>EXECUTIVE BRIEFINGS & PERSPECTIVES</span>
          </div>
          <h1 className="section-title">
            Forensic Intelligence & Governance Analysis.
          </h1>
          <p className="section-subtitle">
            Critical analysis and investigative methodologies designed to empower board audit committees, general counsels, and risk managers with actionable insights.
          </p>

          {/* Demonstration Notice */}
          <div 
            style={{ 
              marginTop: '20px', 
              padding: '10px 18px', 
              background: 'rgba(0, 113, 227, 0.06)', 
              border: '1px solid rgba(0, 113, 227, 0.14)',
              borderRadius: 'var(--radius-pill)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12.5px',
              color: '#0066CC'
            }}
          >
            <span>Notice: Sample analytical briefings for corporate presentation demonstration.</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '13px',
                fontWeight: activeCategory === cat ? 600 : 500,
                background: activeCategory === cat ? '#1D1D1F' : '#FFFFFF',
                color: activeCategory === cat ? '#FFFFFF' : '#6E6E73',
                border: '1px solid',
                borderColor: activeCategory === cat ? '#1D1D1F' : 'rgba(0, 0, 0, 0.08)',
                transition: 'all 160ms ease',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Detailed Article Reader Modal / Section if Selected */}
        {selectedArticle && (
          <div 
            id="reader-view"
            className="solid-card" 
            style={{ 
              padding: '48px 40px', 
              background: '#FFFFFF', 
              borderRadius: '24px', 
              marginBottom: '56px',
              border: '1px solid rgba(0, 113, 227, 0.3)',
              boxShadow: '0 12px 36px rgba(0, 113, 227, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#0071E3', background: 'rgba(0, 113, 227, 0.08)', padding: '4px 12px', borderRadius: '999px' }}>
                  {selectedArticle.category}
                </span>
                <span style={{ fontSize: '13px', color: '#86868B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={14} />
                  <span>{selectedArticle.readTime}</span>
                </span>
              </div>
              <button
                type="button"
                className="btn-glass"
                onClick={() => setSelectedArticle(null)}
                style={{ fontSize: '12.5px', padding: '6px 14px' }}
              >
                Close Full Reader
              </button>
            </div>

            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1D1D1F', marginBottom: '20px', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              {selectedArticle.title}
            </h2>

            <div style={{ background: 'var(--bg-primary)', borderRadius: '18px', padding: '24px', marginBottom: '32px' }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1D1D1F', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                Key Advisory Takeaways
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: '#1D1D1F' }}>
                    <CheckCircle2 size={16} color="#0071E3" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '16px', color: '#48484A', lineHeight: 1.75, maxWidth: '840px' }}>
              {selectedArticle.contentParagraphs.map((para, pIdx) => (
                <p key={pIdx} style={{ color: '#48484A' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Grid of Articles */}
        <div className="grid-2">
          {filteredArticles.map((art) => (
            <article 
              key={art.id} 
              id={art.id}
              className="solid-card"
              style={{ 
                padding: '36px 32px', 
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11px', fontWeight: 650, color: '#0071E3', background: 'rgba(0, 113, 227, 0.08)', padding: '3px 10px', borderRadius: '999px' }}>
                    {art.category}
                  </span>
                  <span style={{ fontSize: '12px', color: '#86868B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 650, color: '#1D1D1F', marginBottom: '12px', lineHeight: 1.3 }}>
                  {art.title}
                </h3>

                <p style={{ fontSize: '14.5px', color: '#6E6E73', lineHeight: 1.6, marginBottom: '24px' }}>
                  {art.summary}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '18px', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedArticle(art);
                    setTimeout(() => {
                      const el = document.getElementById('reader-view');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    fontSize: '13.5px', 
                    fontWeight: 600, 
                    color: '#1D1D1F' 
                  }}
                >
                  <span>Read Full Briefing</span>
                  <ArrowRight size={14} />
                </button>
                <span style={{ fontSize: '11px', color: '#86868B' }}>
                  Sample Note
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
