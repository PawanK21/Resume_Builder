import React from 'react';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { useTheme } from '../../context/ThemeContext';
import toast from 'react-hot-toast';
import Button from '../UI/Button';
import Card from '../UI/Card';

export default function Education() {
  const { data, dispatch } = useResume();
  const { accentColor } = useTheme();

  const update = (id, field, value) =>
    dispatch({ type: 'UPDATE_EDUCATION', id, field, value });

  const remove = (id) => {
    dispatch({ type: 'REMOVE_EDUCATION', id });
    toast.success('Education removed');
  };

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <GraduationCap size={20} /> Education
        </h2>
        <Button
          variant="primary"
          onClick={() => dispatch({ type: 'ADD_EDUCATION' })}
          style={{ background: accentColor, borderColor: accentColor }}
        >
          <Plus size={14} /> Add
        </Button>
      </div>

      {data.education.map((edu, idx) => (
        <Card key={edu.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: accentColor, textTransform: 'uppercase' }}>
              Education #{idx + 1}
            </span>
            <Button variant="danger" size="sm" onClick={() => remove(edu.id)}>
              <Trash2 size={12} /> Remove
            </Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label>Degree</label>
              <input value={edu.degree} onChange={(e) => update(edu.id, 'degree', e.target.value)} />
            </div>
            <div>
              <label>Institution</label>
              <input value={edu.institution} onChange={(e) => update(edu.id, 'institution', e.target.value)} />
            </div>
            <div>
              <label>Location</label>
              <input value={edu.location} onChange={(e) => update(edu.id, 'location', e.target.value)} />
            </div>
            <div>
              <label>Start Year</label>
              <input value={edu.startDate} onChange={(e) => update(edu.id, 'startDate', e.target.value)} />
            </div>
            <div>
              <label>End Year</label>
              <input value={edu.endDate} onChange={(e) => update(edu.id, 'endDate', e.target.value)} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label>GPA (optional)</label>
              <input value={edu.gpa} onChange={(e) => update(edu.id, 'gpa', e.target.value)} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
