import React from 'react';
import { User } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export default function PersonalInfo() {
  const { data, dispatch } = useResume();
  const update = (field, value) => dispatch({ type: 'UPDATE_PERSONAL', field, value });

  const fields = [
    { key: 'fullName', label: 'Full Name', full: true },
    { key: 'title', label: 'Professional Title', full: true },
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'phone', label: 'Phone' },
    { key: 'location', label: 'Location' },
    { key: 'website', label: 'Website' },
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'github', label: 'GitHub' },
  ];

  return (
    <div className="fade-in">
      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <User size={20} /> Personal Information
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        {fields.map((f) => (
          <div key={f.key} style={{ gridColumn: f.full ? '1 / -1' : 'auto' }}>
            <label>{f.label}</label>
            <input
              type={f.type || 'text'}
              value={data.personal[f.key] || ''}
              onChange={(e) => update(f.key, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
