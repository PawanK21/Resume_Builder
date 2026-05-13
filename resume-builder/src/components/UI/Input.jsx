import React from 'react';

export default function Input({ label, value, onChange, type = 'text', placeholder, fullWidth }) {
  return (
    <div style={{ marginBottom: fullWidth ? '0' : '12px' }}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export function Textarea({ label, value, onChange, placeholder, rows = 4 }) {
  return (
    <div>
      {label && <label>{label}</label>}
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
}
