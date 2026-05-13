import React from 'react';
import { User, FileText, Briefcase, GraduationCap, Code, FolderGit2, Award, Heart } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const SECTIONS = [
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'summary', label: 'Summary', icon: FileText },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'hobbies', label: 'Hobbies', icon: Heart },
];

export default function Sidebar({ activeSection, setActiveSection, isOpen, onClose }) {
  const { accentColor } = useTheme();

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="show-mobile"
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.4)', zIndex: 90,
          }}
        />
      )}
      <aside
        style={{
          width: '220px',
          background: 'var(--bg-secondary)',
          borderRight: '1px solid var(--border-color)',
          padding: '20px 12px',
          position: 'sticky',
          top: '125px',
          height: 'calc(100vh - 125px)',
          overflowY: 'auto',
          flexShrink: 0,
        }}
      >
        {SECTIONS.map((s) => {
          const Icon = s.icon;
          const active = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => {
                setActiveSection(s.id);
                onClose && onClose();
              }}
              style={{
                width: '100%',
                padding: '10px 14px',
                marginBottom: '4px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: active ? `${accentColor}15` : 'transparent',
                color: active ? accentColor : 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: active ? 600 : 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'left',
                transition: 'var(--transition)',
              }}
            >
              <Icon size={16} />
              {s.label}
            </button>
          );
        })}
      </aside>
    </>
  );
}
