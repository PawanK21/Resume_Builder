import React from 'react';
import { Award, Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { useTheme } from '../../context/ThemeContext';
import toast from 'react-hot-toast';
import Button from '../UI/Button';
import Card from '../UI/Card';

export default function Certifications() {
  const { data, dispatch } = useResume();
  const { accentColor } = useTheme();

  const update = (id, field, value) =>
    dispatch({ type: 'UPDATE_CERTIFICATION', id, field, value });

  const remove = (id) => {
    dispatch({ type: 'REMOVE_CERTIFICATION', id });
    toast.success('Certification removed');
  };

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Award size={20} /> Certifications
        </h2>
        <Button
          variant="primary"
          onClick={() => dispatch({ type: 'ADD_CERTIFICATION' })}
          style={{ background: accentColor, borderColor: accentColor }}
        >
          <Plus size={14} /> Add
        </Button>
      </div>

      {data.certifications.map((cert, idx) => (
        <Card key={cert.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: accentColor, textTransform: 'uppercase' }}>
              Certification #{idx + 1}
            </span>
            <Button variant="danger" size="sm" onClick={() => remove(cert.id)}>
              <Trash2 size={12} /> Remove
            </Button>
          </div>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <label>Certification Name</label>
              <input value={cert.name} onChange={(e) => update(cert.id, 'name', e.target.value)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label>Issuer</label>
                <input value={cert.issuer} onChange={(e) => update(cert.id, 'issuer', e.target.value)} />
              </div>
              <div>
                <label>Date</label>
                <input value={cert.date} onChange={(e) => update(cert.id, 'date', e.target.value)} />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
