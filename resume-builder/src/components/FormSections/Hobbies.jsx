import React from 'react';
import { Heart } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export default function Hobbies() {
  const { data, dispatch } = useResume();

  const update = (value) => {
    const hobbies = value.split(',').map((s) => s.trim()).filter(Boolean);
    dispatch({ type: 'UPDATE_HOBBIES', value: hobbies });
  };

  return (
    <div className="fade-in">
      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Heart size={20} /> Hobbies & Interests
      </h2>
      <label>Hobbies (comma-separated)</label>
      <input
        value={data.hobbies.join(', ')}
        onChange={(e) => update(e.target.value)}
        placeholder="Photography, Hiking, Reading..."
      />
    </div>
  );
}
