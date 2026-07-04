import React, { useState } from 'react';

export default function AddingFlag({ tenantId, onClose, onCreated }) {
  const [key, setKey] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!key) return alert("Flag Key string parameter is mandatory!");
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/feature-flags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key: key.trim().toLowerCase().replace(/\s+/g, '-'), // Enforce Kebab-case formatting configuration
          tenantId,
          description
        })
      });

      if (response.ok) {
        onCreated(); 
        onClose();   
      } else {
        alert("Server network gateway validation mapping failed.");
      }
    } catch (err) {
      console.error("Error pushing configuration payload entity details:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card" style={{ textAlign: 'left', maxWidth: '28rem' }}>
        <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
          Register Runtime Hook
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Flag Key String</label>
            <input 
              type="text" required placeholder="e.g., custom-sidebar-v3" className="custom-input"
              style={{ fontFamily: 'monospace' }}
              value={key} onChange={e => setKey(e.target.value)}
            />
          </div>

          <div className="input-group" style={{ marginBottom: '2rem' }}>
            <label className="input-label">Description</label>
            <textarea 
              rows="3" placeholder="Explain what logic operations this switch isolates..." className="custom-input"
              style={{ resize: 'none', fontFamily: 'inherit' }}
              value={description} onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', fontSize: '0.85rem' }}>
            <button 
              type="button" onClick={onClose} 
              style={{ background: 'none', border: 'none', color: '#71717a', cursor: 'pointer', fontWeight: '700' }}
            >
              Abort
            </button>
            <button 
              type="submit" disabled={loading} className="btn-primary" 
              style={{ width: 'auto', padding: '0.5rem 1.25rem' }}
            >
              {loading ? 'Pushing...' : 'Push Flag'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}