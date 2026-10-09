import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Loader2, ShieldAlert, Lock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'Corporate Investigations',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; refId: string } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business email address';
    }
    if (formData.phone && !/^[+0-9\s\-()]{7,20}$/.test(formData.phone)) {
      errs.phone = 'Please provide a valid phone format if included';
    }
    if (!formData.message.trim()) {
      errs.message = 'Inquiry details are required';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing the scope';
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must confirm the privacy & non-disclosure acknowledgement';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Front-end demonstration simulation with authentic async delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        name: formData.name,
        refId: 'VAL-' + Math.floor(100000 + Math.random() * 900000),
      });
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceCategory: 'Corporate Investigations',
        message: '',
        privacyConsent: false,
      });
    }, 1000);
  };

  return (
    <section className="section section-lg" id="contact" style={{ background: '#FFFFFF' }} aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-split">
          {/* Left Column: Contact Positioning & Placeholders */}
          <div>
            <div className="eyebrow">
              <Lock size={14} color="#0071E3" />
              <span>CONFIDENTIAL INQUIRY</span>
            </div>

            <h2 id="contact-heading" className="section-title">
              Initiate a Privileged Consultation.
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              Whether addressing an emerging operational anomaly, evaluating an acquisition target, or safeguarding corporate assets, our partners are available for confidential discussions under mutual NDA.
            </p>

            {/* Office Desks / Official Inquiries */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              <div className="solid-card" style={{ padding: '20px', background: 'var(--bg-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <MapPin size={16} color="#1D1D1F" />
                  <span style={{ fontSize: '14px', fontWeight: 650, color: '#1D1D1F' }}>
                    Corporate Advisory Desks (India & Liaison Hubs)
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#6E6E73', margin: 0, lineHeight: 1.5 }}>
                  Executive advisory presence across key metropolitan commercial centers: New Delhi NCR, Mumbai Financial District, Bengaluru Technology Corridor.
                </p>
                <div style={{ fontSize: '11.5px', color: '#86868B', marginTop: '6px', fontStyle: 'italic' }}>
                  (Physical office visits by prior formal appointment only)
                </div>
              </div>

              <div className="solid-card" style={{ padding: '20px', background: 'var(--bg-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Mail size={16} color="#1D1D1F" />
                  <span style={{ fontSize: '14px', fontWeight: 650, color: '#1D1D1F' }}>
                    Direct Confidential Partner Channel
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#6E6E73', margin: 0, lineHeight: 1.5 }}>
                  PGP/GPG encrypted electronic communication supported upon request for high-sensitivity matters.
                </p>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#0071E3', marginTop: '6px' }}>
                  inquiries@valence-advisory.com
                </div>
              </div>
            </div>

            {/* Data Protection Note */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12.5px', color: '#86868B', lineHeight: 1.5 }}>
              <ShieldAlert size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>
                All inquiries submitted are treated under attorney-work-product and confidential evaluation privilege. We never disclose or monetize client information.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div 
            className="solid-card" 
            style={{ 
              padding: '40px 36px', 
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.08)'
            }}
          >
            {submittedData ? (
              <div style={{ textAlign: 'center', padding: '32px 12px' }}>
                <div 
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '999px', 
                    background: 'rgba(52, 199, 89, 0.12)', 
                    color: '#34C759',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1D1D1F', marginBottom: '10px' }}>
                  Inquiry Dispatched Successfully
                </h3>
                <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.6, marginBottom: '20px' }}>
                  Thank you, <strong>{submittedData.name}</strong>. Your inquiry reference identifier is <code>{submittedData.refId}</code>. A senior partner will contact your verified corporate address within 24 hours.
                </p>
                <div style={{ background: 'var(--bg-primary)', borderRadius: '12px', padding: '14px', fontSize: '12.5px', color: '#86868B', marginBottom: '24px' }}>
                  <em>Note: This is an active front-end demonstration of the corporate consultation workflow. Production deployments integrate directly with secure on-premise CRM / encryption nodes.</em>
                </div>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setSubmittedData(null)}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1D1D1F', marginBottom: '6px' }}>
                  Confidential Engagement Inquiry
                </h3>
                <p style={{ fontSize: '13.5px', color: '#6E6E73', marginBottom: '24px' }}>
                  Fields marked with an asterisk (*) are required for engagement triage.
                </p>

                <div className="form-row-2">
                  <div>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Rachel Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.name}</div>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Business Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="rachel@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.email}</div>}
                  </div>
                </div>

                <div className="form-row-2">
                  <div>
                    <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Contact Number (Optional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="form-input"
                      placeholder="+91 (or country code)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.phone}</div>}
                  </div>

                  <div>
                    <label htmlFor="contact-category" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Area of Inquiry *
                    </label>
                    <select
                      id="contact-category"
                      className="form-select"
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    >
                      <option value="Corporate Investigations">Corporate Investigations</option>
                      <option value="Forensic Due Diligence">Forensic Due Diligence</option>
                      <option value="Fraud Risk Assessment">Fraud Risk Assessment</option>
                      <option value="Background Verification">Background Verification</option>
                      <option value="Business Intelligence & Asset Tracing">Business Intelligence & Asset Tracing</option>
                      <option value="Risk Advisory & Digital Forensics">Risk Advisory & Digital Forensics</option>
                      <option value="General Leadership Consultation">General Leadership Consultation</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                    Situational Summary / Engagement Scope *
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    rows={4}
                    placeholder="Provide an overview of the scenario, key jurisdictional parameters, or desired deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.message}</div>}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      style={{ marginTop: '3px' }}
                    />
                    <span style={{ fontSize: '12.5px', color: '#6E6E73', lineHeight: 1.45 }}>
                      I agree to the processing of this inquiry under Herrlich Group's strict non-disclosure covenant and confirm I am authorized to represent this entity.
                    </span>
                  </label>
                  {errors.privacyConsent && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.privacyConsent}</div>}
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius-pill)', opacity: isSubmitting ? 0.75 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Validating & Dispatching...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Privileged Inquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
