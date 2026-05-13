import React from 'react';
import { Briefcase, Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { useTheme } from '../../context/ThemeContext';
import toast from 'react-hot-toast';
import Button from '../UI/Button';
import Card from '../UI/Card';

export default function Experience() {
  const { data, dispatch } = useResume();
  const { accentColor } = useTheme();

  const update = (id, field, value) =>
    dispatch({ type: 'UPDATE_EXPERIENCE', id, field, value });

  const remove = (id) => {
    dispatch({ type: 'REMOVE_EXPERIENCE', id });
    toast.success('Experience removed');
  };

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Briefcase size={20} /> Work Experience
        </h2>
        <Button
          variant="primary"
          onClick={() => dispatch({ type: 'ADD_EXPERIENCE' })}
          style={{ background: accentColor, borderColor: accentColor }}
        >
          <Plus size={14} /> Add
        </Button>
      </div>

      {data.experience.map((exp, idx) => (
        <Card key={exp.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: accentColor, textTransform: 'uppercase' }}>
              Experience #{idx + 1}
            </span>
            <Button variant="danger" size="sm" onClick={() => remove(exp.id)}>
              <Trash2 size={12} /> Remove
            </Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label>Job Title</label>
              <input value={exp.role} onChange={(e) => update(exp.id, 'role', e.target.value)} />
            </div>
            <div>
              <label>Company</label>
              <input value={exp.company} onChange={(e) => update(exp.id, 'company', e.target.value)} />
            </div>
            <div>
              <label>Location</label>
              <input value={exp.location} onChange={(e) => update(exp.id, 'location', e.target.value)} />
            </div>
            <div>
              <label>Start Date</label>
              <input value={exp.startDate} onChange={(e) => update(exp.id, 'startDate', e.target.value)} placeholder="Jan 2023" />
            </div>
            <div>
              <label>End Date</label>
              <input value={exp.endDate} onChange={(e) => update(exp.id, 'endDate', e.target.value)} placeholder="Present" />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label>Description (use • for bullets)</label>
              <textarea
                value={exp.description}
                onChange={(e) => update(exp.id, 'description', e.target.value)}
                rows={5}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
