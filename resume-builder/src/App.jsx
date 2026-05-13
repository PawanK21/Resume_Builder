import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ResumeProvider } from './context/ResumeContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Layout/Header';
import CustomizationBar from './components/Layout/CustomizationBar';
import Sidebar from './components/Layout/Sidebar';
import PreviewPane from './components/Layout/PreviewPane';
import FormRouter from './components/FormRouter';

function ProgressBar() {
  const { accentColor } = useTheme();
  // The actual completion comes from Header; we just show a placeholder colored bar synced via CSS variable.
  return (
    <div style={{ height: '3px', background: 'var(--border-color)', position: 'sticky', top: '60px', zIndex: 99 }}>
      <div id="progress-bar" style={{
        height: '100%',
        background: accentColor,
        transition: 'width 0.3s',
        width: 'var(--progress, 0%)',
      }} />
    </div>
  );
}

function AppLayout() {
  const [activeSection, setActiveSection] = useState('personal');
  const [mobileView, setMobileView] = useState('form');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Header
        mobileView={mobileView}
        setMobileView={setMobileView}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />
      <ProgressBar />
      <CustomizationBar />

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 130px)' }}>
        <div className={mobileView === 'preview' ? 'hide-mobile' : ''}>
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        </div>

        <div
          className={mobileView === 'preview' ? 'hide-mobile' : ''}
          style={{ flex: 1, display: 'flex' }}
        >
          <FormRouter activeSection={activeSection} />
        </div>

        <div
          className={mobileView === 'form' ? 'hide-mobile' : ''}
          style={{ flex: 1, display: 'flex' }}
        >
          <PreviewPane />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ResumeProvider>
        <Toaster position="top-right" toastOptions={{
          style: {
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
          },
        }} />
        <AppLayout />
      </ResumeProvider>
    </ThemeProvider>
  );
}
