import React from 'react';
import { Code } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export default function Skills() {
  const { data, dispatch } = useResume();

  const update = (category, value) => {
    const arr = value.split(',').map((s) => s.trim()).filter(Boolean);
    dispatch({ type: 'UPDATE_SKILLS', category, value: arr });
  };

  const categories = [
    { key: 'technical', label: 'Technical Skills', placeholder: 'JavaScript, React, Node.js...' },
    { key: 'soft', label: 'Soft Skills', placeholder: 'Leadership, Communication...' },
    { key: 'tools', label: 'Tools & Software', placeholder: 'Git, Docker, Figma...' },
    { key: 'languages', label: 'Languages', placeholder: 'English (Native), Spanish...' },
  ];

  return (
    <div className="fade-in">
      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Code size={20} /> Skills
      </h2>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
        Enter skills separated by commas
      </p>
      {categories.map((c) => (
        <div key={c.key} style={{ marginBottom: '16px' }}>
          <label>{c.label}</label>
          <input
            value={data.skills[c.key].join(', ')}
            onChange={(e) => update(c.key, e.target.value)}
            placeholder={c.placeholder}
          />
        </div>
      ))}
    </div>
  );
}
