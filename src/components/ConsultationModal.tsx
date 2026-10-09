import React, { useState } from 'react';
import { X, CheckCircle2, Lock, Send, Loader2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    serviceCategory: 'Corporate Investigations',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please provide a valid corporate email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a summary of your inquiry';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Inquiry must be at least 10 characters';
    }
    if (!formData.consent) {
      errs.consent = 'Consent to confidential evaluation is required';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulated secure consultation dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div 
      className="modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2100,
        background: 'rgba(29, 29, 31, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 200ms ease forwards'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-consultation-title"
    >
      <div 
        className="modal-content"
        style={{
          width: '100%',
          maxWidth: '560px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(32px) saturate(190%)',
          WebkitBackdropFilter: 'blur(32px) saturate(190%)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          borderRadius: '28px',
          boxShadow: 'var(--shadow-modal)',
          padding: '32px 28px',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            background: 'rgba(0, 0, 0, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1D1D1F',
            transition: 'background 150ms ease'
          }}
          aria-label="Close consultation modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '36px 12px' }}>
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
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1D1D1F' }}>
              Consultation Request Received
            </h3>
            <p style={{ color: '#6E6E73', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
              Thank you, <strong>{formData.fullName}</strong>. Your inquiry has been routed to our Senior Partners under privileged confidential protocols. A partner will contact you directly within one business day.
            </p>
            <div style={{ background: 'rgba(0,0,0,0.03)', borderRadius: '14px', padding: '14px', fontSize: '12.5px', color: '#86868B', marginBottom: '24px' }}>
              Note: This demonstration prototype validates client input and demonstrates interactive consultation dispatch.
            </div>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              style={{ width: '100%' }}
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ color: '#0071E3' }}>
                <Lock size={15} />
              </div>
              <span style={{ fontSize: '12px', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868B' }}>
                Privileged & Confidential
              </span>
            </div>

            <h2 id="modal-consultation-title" style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '8px' }}>
              Request Advisory Briefing
            </h2>
            <p style={{ fontSize: '14px', color: '#6E6E73', marginBottom: '24px' }}>
              Initiate a confidential preliminary evaluation with our forensic and strategic advisory leadership.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row-2">
                <div>
                  <label htmlFor="modal-name" style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  {errors.fullName && <div style={{ color: '#FF3B30', fontSize: '11.5px', marginTop: '4px' }}>{errors.fullName}</div>}
                </div>

                <div>
                  <label htmlFor="modal-email" style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                    Corporate Email *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    className="form-input"
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  />
                  {errors.workEmail && <div style={{ color: '#FF3B30', fontSize: '11.5px', marginTop: '4px' }}>{errors.workEmail}</div>}
                </div>
              </div>

              <div className="form-row-2">
                <div>
                  <label htmlFor="modal-org" style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                    Organization / Entity
                  </label>
                  <input
                    id="modal-org"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Apex Holdings"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="modal-service" style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                    Practice Area
                  </label>
                  <select
                    id="modal-service"
                    className="form-select"
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                  >
                    <option value="Corporate Investigations">Corporate Investigations</option>
                    <option value="Forensic Due Diligence">Forensic Due Diligence</option>
                    <option value="Fraud Risk Assessment">Fraud Risk Assessment</option>
                    <option value="Background Verification">Background Verification</option>
                    <option value="Business Intelligence">Business Intelligence</option>
                    <option value="Risk Advisory">Risk Advisory & Forensics</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="modal-message" style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                  Nature of Inquiry / Scope *
                </label>
                <textarea
                  id="modal-message"
                  className="form-textarea"
                  rows={3}
                  placeholder="Outline the situational context or target advisory requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <div style={{ color: '#FF3B30', fontSize: '11.5px', marginTop: '4px' }}>{errors.message}</div>}
              </div>

              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    style={{ marginTop: '3px' }}
                  />
                  <span style={{ fontSize: '12px', color: '#6E6E73', lineHeight: 1.4 }}>
                    I understand this inquiry is transmitted under strict non-disclosure covenant and consent to confidential evaluation by senior partners.
                  </span>
                </label>
                {errors.consent && <div style={{ color: '#FF3B30', fontSize: '11.5px', marginTop: '4px' }}>{errors.consent}</div>}
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%', padding: '14px', borderRadius: '999px', opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Encrypting & Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Confidential Request</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
