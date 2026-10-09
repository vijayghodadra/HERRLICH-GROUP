import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Lock, Send, CheckCircle2, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: 'Corporate Investigations',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; refId: string } | null>(null);

  useEffect(() => {
    document.title = 'Confidential Consultation & Office Desks | HERRLICH GROUP';
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid corporate email';
    }
    if (formData.phone && !/^[+0-9\s\-()]{7,20}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid telephone format';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide preliminary engagement scope';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Inquiry must be at least 15 characters';
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must confirm confidential triage consent';
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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        name: formData.name,
        refId: 'VAL-' + Math.floor(100000 + Math.random() * 900000),
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceCategory: 'Corporate Investigations',
        message: '',
        privacyConsent: false,
      });
    }, 1000);
  };

  return (
    <div className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow">
            <Lock size={14} color="#0071E3" />
            <span>PRIVILEGED COMMUNICATIONS</span>
          </div>
          <h1 className="section-title">
            Direct Consultation with Senior Partners.
          </h1>
          <p className="section-subtitle">
            Initiate a preliminary evaluation regarding corporate investigations, transaction due diligence, or internal fraud exposure under privileged protocols.
          </p>
        </div>

        <div className="contact-split">
          {/* Form Card */}
          <div className="solid-card" style={{ padding: '44px 36px', background: '#FFFFFF' }}>
            {submittedData ? (
              <div style={{ textAlign: 'center', padding: '36px 16px' }}>
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
                  Thank you, <strong>{submittedData.name}</strong>. Reference ID: <code>{submittedData.refId}</code>. An engagement partner will reach out directly to your verified email.
                </p>
                <div style={{ background: 'var(--bg-primary)', borderRadius: '12px', padding: '14px', fontSize: '12.5px', color: '#86868B', marginBottom: '24px' }}>
                  Note: This form executes interactive client validation and demonstrates frontend state dispatch.
                </div>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setSubmittedData(null)}
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1D1D1F', marginBottom: '8px' }}>
                  Engagement Briefing Form
                </h2>
                <p style={{ fontSize: '13.5px', color: '#6E6E73', marginBottom: '28px' }}>
                  All information submitted is protected by confidential non-disclosure privilege.
                </p>

                <div className="form-row-2">
                  <div>
                    <label htmlFor="p-name" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      id="p-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Michael Thorne"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.name}</div>}
                  </div>

                  <div>
                    <label htmlFor="p-email" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Corporate Email *
                    </label>
                    <input
                      id="p-email"
                      type="email"
                      className="form-input"
                      placeholder="m.thorne@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.email}</div>}
                  </div>
                </div>

                <div className="form-row-2">
                  <div>
                    <label htmlFor="p-phone" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Direct Telephone (Optional)
                    </label>
                    <input
                      id="p-phone"
                      type="tel"
                      className="form-input"
                      placeholder="+91 / International"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.phone}</div>}
                  </div>

                  <div>
                    <label htmlFor="p-company" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Organization Name
                    </label>
                    <input
                      id="p-company"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Apex Corporation"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="p-cat" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                    Primary Discipline of Inquiry *
                  </label>
                  <select
                    id="p-cat"
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
                    <option value="Special Situations Dispute Support">Special Situations Dispute Support</option>
                  </select>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label htmlFor="p-message" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                    Engagement Scope / Situation Outline *
                  </label>
                  <textarea
                    id="p-message"
                    className="form-textarea"
                    rows={4}
                    placeholder="Outline relevant context, operational timelines, or target jurisdictions..."
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
                      I agree to the processing of this inquiry under Valence Advisory's strict non-disclosure covenant and confirm I am authorized to represent this entity.
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
                      <span>Transmitting Privileged Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Confidential Briefing</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Regional Desks & Direct Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="solid-card" style={{ padding: '28px', background: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <MapPin size={18} color="#0071E3" />
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1D1D1F' }}>
                  Metropolitan Advisory Desks
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', color: '#6E6E73', lineHeight: 1.6, marginBottom: '16px' }}>
                Regional partner representations for on-ground client coordination and document examination:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#1D1D1F' }}>
                <div style={{ padding: '10px 14px', background: 'var(--bg-primary)', borderRadius: '10px' }}>
                  <strong>New Delhi NCR Desk:</strong> Connaught Place / Aerocity District
                </div>
                <div style={{ padding: '10px 14px', background: 'var(--bg-primary)', borderRadius: '10px' }}>
                  <strong>Mumbai Financial Center:</strong> Bandra Kurla Complex (BKC)
                </div>
                <div style={{ padding: '10px 14px', background: 'var(--bg-primary)', borderRadius: '10px' }}>
                  <strong>Bengaluru Technology Corridor:</strong> Outer Ring Road Precinct
                </div>
              </div>
              <div style={{ fontSize: '11.5px', color: '#86868B', marginTop: '12px', fontStyle: 'italic' }}>
                Note: Operational desks maintain strict access control. In-person partner consultations require prior security registration.
              </div>
            </div>

            <div className="solid-card" style={{ padding: '28px', background: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Mail size={18} color="#0071E3" />
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1D1D1F' }}>
                  Encrypted Digital Despatch
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', color: '#6E6E73', lineHeight: 1.55, marginBottom: '12px' }}>
                For high-sensitivity whistleblower evidence dossiers, we provide secure SFTP dropboxes and end-to-end PGP key exchanges upon preliminary partner verification.
              </p>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#1D1D1F' }}>
                secure-intake@valence-risk.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
