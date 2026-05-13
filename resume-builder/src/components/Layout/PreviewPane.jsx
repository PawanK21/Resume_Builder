import React, { Suspense, lazy } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useResume } from '../../context/ResumeContext';

const ModernTemplate = lazy(() => import('../Templates/ModernTemplate'));
const ClassicTemplate = lazy(() => import('../Templates/ClassicTemplate'));
const CreativeTemplate = lazy(() => import('../Templates/CreativeTemplate'));
const MinimalTemplate = lazy(() => import('../Templates/MinimalTemplate'));
const ProfessionalTemplate = lazy(() => import('../Templates/ProfessionalTemplate'));

function TemplateLoader() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
      <div
        style={{
          width: '40px', height: '40px', margin: '0 auto 16px',
          border: '3px solid var(--border-color)',
          borderTopColor: 'var(--primary)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      Loading template...
    </div>
  );
}

export default function PreviewPane() {
  const { template, accentColor, font } = useTheme();
  const { data } = useResume();

  const props = { data, accentColor, font };

  const renderTemplate = () => {
    switch (template) {
      case 'classic': return <ClassicTemplate {...props} />;
      case 'creative': return <CreativeTemplate {...props} />;
      case 'minimal': return <MinimalTemplate {...props} />;
      case 'professional': return <ProfessionalTemplate {...props} />;
      default: return <ModernTemplate {...props} />;
    }
  };

  return (
    <section
      style={{
        flex: 1,
        background: 'var(--bg-tertiary)',
        padding: '24px',
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <div
        id="resume-preview"
        className="resume-preview"
        style={{
          width: '100%',
          maxWidth: '850px',
          minHeight: '1100px',
          background: '#fff',
          color: '#1f2937',
          boxShadow: 'var(--shadow-lg)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <Suspense fallback={<TemplateLoader />}>{renderTemplate()}</Suspense>
      </div>
    </section>
  );
}
