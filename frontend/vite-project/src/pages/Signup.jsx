import React, { useState } from 'react';

export default function Signup({ onLoginSuccess }) {
  const [tenantName, setTenantName] = useState('');
  const [tenantIdInput, setTenantIdInput] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tenantName || !tenantIdInput) return alert("Please fill in fields.");
    setShowPopup(true);
  };

  const handleCopyAndProceed = () => {
    navigator.clipboard.writeText(tenantIdInput);
    setCopied(true);
    setTimeout(() => {
      onLoginSuccess({ id: tenantIdInput.trim(), name: tenantName.trim() });
    }, 800);
  };

  return (
    <div className="split-container">
      
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="brand-header">
          Nexus<span className="brand-green">Flags</span>
        </div>

        <form onSubmit={handleSubmit} className="form-wrapper">
          <h2 className="form-title">Access Console</h2>
          
          <div className="input-group">
            <label className="input-label">Workspace Name</label>
            <input 
              type="text" placeholder="e.g., demosignup" required className="custom-input"
              value={tenantName} onChange={e => setTenantName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Tenant ID</label>
            <input 
              type="text" placeholder="e.g., bfb97b64-..." required className="custom-input"
              value={tenantIdInput} onChange={e => setTenantIdInput(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-primary">Launch Workspace</button>
        </form>

        <div style={{fontSize: '0.75rem', color: '#3f3f46', fontFamily: 'monospace'}}>v1.0.0 // Vanilla Pipeline</div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <h1 style={{fontSize: '2.25rem', color: '#ffffff', fontWeight: '800', marginBottom: '1rem'}}>
          Control dynamic delivery pipelines seamlessly.
        </h1>
        <p style={{color: '#a1a1aa', fontSize: '1rem', lineHeight: '1.6'}}>
          A minimal open-source developer workflow framework mapping live configuration structures instantly over lightning-fast channels.
        </p>
      </div>

      {/* POST-LOGIN CREDENTIALS POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3 style={{color: '#ffffff', marginBottom: '0.5rem'}}>Save Your Connection Credentials</h3>
            <p style={{fontSize: '0.75rem', color: '#71717a'}}>Copy this token ID string directly inside your integration code structures.</p>
            <div className="token-box">{tenantIdInput}</div>
            <button onClick={handleCopyAndProceed} className="btn-primary">
              {copied ? '✓ Token Copied!' : 'Copy ID & Enter Workspace'}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}