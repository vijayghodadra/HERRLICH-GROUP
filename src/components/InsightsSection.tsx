import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { insightsArticles } from '../data/insights';

export const InsightsSection: React.FC = () => {
  const featured = insightsArticles.find(a => a.isFeatured) || insightsArticles[0];
  const supporting = insightsArticles.filter(a => a.id !== featured.id).slice(0, 3);

  return (
    <section className="section" id="insights" aria-labelledby="insights-heading">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <BookOpen size={14} color="#0071E3" />
            <span>PERSPECTIVES & ANALYSIS</span>
          </div>
          <h2 id="insights-heading" className="section-title">
            Forensic & Governance Briefings.
          </h2>
          <p className="section-subtitle">
            Specialized commentaries, advisory memos, and methodology overviews for board leaders, legal counsel, and compliance officers.
          </p>
        </div>

        {/* Editorial Layout: Featured on Left/Top, Supporting on Right */}
        <div className="insights-split">
          {/* Featured Editorial Card */}
          <article 
            className="solid-card" 
            style={{ 
              padding: '40px 36px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              background: '#FFFFFF' 
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{ 
                  fontSize: '11px', 
                  fontWeight: 650, 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase', 
                  color: '#0071E3',
                  background: 'rgba(0, 113, 227, 0.08)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)'
                }}>
                  {featured.category}
                </span>

                <span style={{ fontSize: '12px', color: '#86868B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} />
                  <span>{featured.readTime}</span>
                </span>

                <span style={{ fontSize: '11px', color: '#86868B', background: 'rgba(0,0,0,0.04)', padding: '2px 8px', borderRadius: '4px' }}>
                  {featured.dateLabel}
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 700, color: '#1D1D1F', marginBottom: '16px', lineHeight: 1.25 }}>
                {featured.title}
              </h3>

              <p style={{ fontSize: '15.5px', color: '#6E6E73', lineHeight: 1.6, marginBottom: '28px' }}>
                {featured.summary}
              </p>

              {/* Key Takeaways Preview */}
              <div style={{ background: 'var(--bg-primary)', borderRadius: '16px', padding: '20px', marginBottom: '28px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#1D1D1F', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                  Core Analytical Takeaways:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {featured.keyTakeaways.map((point, idx) => (
                    <li key={idx} style={{ fontSize: '13.5px', color: '#48484A', display: 'flex', gap: '8px', lineHeight: 1.45 }}>
                      <span style={{ color: '#0071E3', fontWeight: 700 }}>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link 
              to={`/insights#${featured.id}`}
              className="btn-primary" 
              style={{ width: 'fit-content' }}
            >
              <span>Read Complete Briefing</span>
              <ArrowRight size={14} />
            </Link>
          </article>

          {/* Supporting Briefings Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {supporting.map((art) => (
              <article 
                key={art.id}
                className="solid-card"
                style={{ 
                  padding: '24px 28px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  background: '#FFFFFF' 
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#0071E3' }}>
                      {art.category}
                    </span>
                    <span style={{ color: '#86868B', fontSize: '12px' }}>•</span>
                    <span style={{ fontSize: '12px', color: '#86868B' }}>
                      {art.readTime}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '17px', fontWeight: 650, color: '#1D1D1F', marginBottom: '8px', lineHeight: 1.35 }}>
                    {art.title}
                  </h4>

                  <p style={{ fontSize: '13.5px', color: '#6E6E73', lineHeight: 1.5, marginBottom: '16px' }}>
                    {art.summary}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link 
                    to={`/insights#${art.id}`}
                    style={{ fontSize: '13px', fontWeight: 600, color: '#1D1D1F', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>Read Article</span>
                    <ArrowUpRight size={13} />
                  </Link>
                  <span style={{ fontSize: '10.5px', color: '#86868B' }}>
                    Demonstration Memo
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All Insights Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/insights" className="btn-secondary">
            <span>Explore All Research Briefings & Publications</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
