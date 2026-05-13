import React from 'react';
import { FileText } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export default function Summary() {
  const { data, dispatch } = useResume();

  return (
    <div className="fade-in">
      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FileText size={20} /> Professional Summary
      </h2>
      <label>Summary / Objective</label>
      <textarea
        value={data.summary || ''}
        onChange={(e) => dispatch({ type: 'UPDATE_SUMMARY', value: e.target.value })}
        placeholder="Write a brief professional summary..."
        rows={6}
      />
      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px' }}>
        💡 Tip: Keep it 2-4 sentences. Highlight your key strengths and career goals.
      </p>
    </div>
  );
}
