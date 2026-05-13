import React from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'secondary',
  size = 'md',
  onClick,
  disabled,
  type = 'button',
  style,
  title,
  className = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={style}
      className={`btn btn-${variant} btn-${size} ${className}`}
    >
      {children}
    </button>
  );
}
