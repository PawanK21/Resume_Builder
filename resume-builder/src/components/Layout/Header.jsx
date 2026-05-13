import React from 'react';
import { Sun, Moon, Download, Printer, RotateCcw, FileText, Menu, Edit3, Eye } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useResume } from '../../context/ResumeContext';
import { generatePDF, printResume } from '../../utils/pdfGenerator';
import { calculateCompletion } from '../../utils/validators';
import toast from 'react-hot-toast';
import Button from '../UI/Button';

export default function Header({ mobileView, setMobileView, onMenuClick }) {
  const { theme, toggleTheme, accentColor } = useTheme();
  const { data, dispatch } = useResume();
  const completion = calculateCompletion(data);

  const handleDownload = async () => {
    const t = toast.loading('Generating PDF...');
    try {
      await generatePDF('resume-preview', `${data.personal.fullName || 'resume'}.pdf`);
      toast.success('PDF downloaded!', { id: t });
    } catch {
      toast.error('Failed to generate PDF', { id: t });
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all resume data to defaults? This cannot be undone.')) {
      dispatch({ type: 'RESET' });
      toast.success('Resume reset');
    }
  };

  return (
    <header
      style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        padding: '12px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Button variant="secondary" className="show-mobile btn-icon" onClick={onMenuClick}>
          <Menu size={18} />
        </Button>
        <div
          style={{
            width: '36px', height: '36px', borderRadius: '8px',
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <FileText size={20} color="white" />
        </div>
        <div>
          <h1 style={{ fontSize: '17px', fontWeight: 700 }}>Resume Builder</h1>
          <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
            {completion}% complete
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <div
          className="show-mobile"
          style={{
            display: 'flex', gap: '4px',
            background: 'var(--bg-primary)', padding: '4px',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          <button
            onClick={() => setMobileView('form')}
            style={{
              padding: '6px 12px', borderRadius: '4px', border: 'none',
              background: mobileView === 'form' ? accentColor : 'transparent',
              color: mobileView === 'form' ? '#fff' : 'var(--text-primary)',
              fontSize: '12px', fontWeight: 600, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '4px',
            }}
          >
            <Edit3 size={14} /> Edit
          </button>
          <button
            onClick={() => setMobileView('preview')}
            style={{
              padding: '6px 12px', borderRadius: '4px', border: 'none',
              background: mobileView === 'preview' ? accentColor : 'transparent',
              color: mobileView === 'preview' ? '#fff' : 'var(--text-primary)',
              fontSize: '12px', fontWeight: 600, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '4px',
            }}
          >
            <Eye size={14} /> Preview
          </button>
        </div>

        <Button variant="secondary" onClick={toggleTheme} title="Toggle theme" className="btn-icon">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
        <Button variant="secondary" onClick={handleReset} title="Reset" className="btn-icon">
          <RotateCcw size={16} />
        </Button>
        <Button variant="secondary" onClick={printResume}>
          <Printer size={16} /> Print
        </Button>
        <Button variant="primary" onClick={handleDownload} style={{ background: accentColor, borderColor: accentColor }}>
          <Download size={16} /> Download PDF
        </Button>
      </div>
    </header>
  );
}
