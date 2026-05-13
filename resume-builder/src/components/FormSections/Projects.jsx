import React from 'react';
import { FolderGit2, Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { useTheme } from '../../context/ThemeContext';
import toast from 'react-hot-toast';
import Button from '../UI/Button';
import Card from '../UI/Card';

export default function Projects() {
  const { data, dispatch } = useResume();
  const { accentColor } = useTheme();

  const update = (id, field, value) =>
    dispatch({ type: 'UPDATE_PROJECT', id, field, value });

  const remove = (id) => {
    dispatch({ type: 'REMOVE_PROJECT', id });
    toast.success('Project removed');
  };

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FolderGit2 size={20} /> Projects
        </h2>
        <Button
          variant="primary"
          onClick={() => dispatch({ type: 'ADD_PROJECT' })}
          style={{ background: accentColor, borderColor: accentColor }}
        >
          <Plus size={14} /> Add
        </Button>
      </div>

      {data.projects.map((proj, idx) => (
        <Card key={proj.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: accentColor, textTransform: 'uppercase' }}>
              Project #{idx + 1}
            </span>
            <Button variant="danger" size="sm" onClick={() => remove(proj.id)}>
              <Trash2 size={12} /> Remove
            </Button>
          </div>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <label>Project Title</label>
              <input value={proj.title} onChange={(e) => update(proj.id, 'title', e.target.value)} />
            </div>
            <div>
              <label>Tech Stack</label>
              <input
                value={proj.tech}
                onChange={(e) => update(proj.id, 'tech', e.target.value)}
                placeholder="React, Node.js, MongoDB"
              />
            </div>
            <div>
              <label>Link</label>
              <input value={proj.link} onChange={(e) => update(proj.id, 'link', e.target.value)} />
            </div>
            <div>
              <label>Description</label>
              <textarea
                value={proj.description}
                onChange={(e) => update(proj.id, 'description', e.target.value)}
                rows={3}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
