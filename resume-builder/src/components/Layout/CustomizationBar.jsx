import React from 'react';
import { Palette, Type } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTheme } from '../../context/ThemeContext';
import { TEMPLATES, COLORS, FONTS } from '../../utils/constants';

export default function CustomizationBar() {
  const { template, setTemplate, accentColor, setAccentColor, font, setFont } = useTheme();

  return (
    <div
      style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        fontSize: '13px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Template:</span>
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTemplate(t.id);
                toast.success(`${t.name} template applied`);
              }}
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                border: `1px solid ${template === t.id ? accentColor : 'var(--border-color)'}`,
                background: template === t.id ? `${accentColor}15` : 'transparent',
                color: template === t.id ? accentColor : 'var(--text-primary)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition)',
              }}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Palette size={14} style={{ color: 'var(--text-secondary)' }} />
        <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Color:</span>
        <div style={{ display: 'flex', gap: '6px' }}>
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => setAccentColor(c)}
              style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: c,
                border: accentColor === c ? '2px solid var(--text-primary)' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                transform: accentColor === c ? 'scale(1.15)' : 'scale(1)',
              }}
              title={c}
            />
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Type size={14} style={{ color: 'var(--text-secondary)' }} />
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          style={{ padding: '6px 10px', fontSize: '12px', width: 'auto', cursor: 'pointer' }}
        >
          {FONTS.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
