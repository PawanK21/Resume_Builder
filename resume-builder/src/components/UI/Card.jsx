import React from 'react';

export default function Card({ children, style }) {
  return (
    <div
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        marginBottom: 'var(--space-4)',
        animation: 'fadeIn 0.3s',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
