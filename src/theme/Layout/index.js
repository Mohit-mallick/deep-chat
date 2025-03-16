import React from 'react';
import OriginalLayout from '@theme-original/Layout';

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props} />
      <div style={{ 
        position: 'fixed',
        bottom: '20px',
        right: '40px',
        textAlign: 'right',
        padding: '8px 12px',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        color: '#1c1e21',
        fontWeight: 500,
        fontSize: '14px',
        animation: 'fadeIn 0.5s ease-in-out',
        borderRadius: '8px',
      }}>
        <style>
          {`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
        Built by{' '}
        <a 
          href="https://www.linkedin.com/in/mohitmallickwz" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: '#0d5297', 
            textDecoration: 'none', 
            fontWeight: 600,
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#1e6cc7'}
          onMouseLeave={(e) => e.target.style.color = '#0d5297'}
        >
          Mohit Mallick
        </a>
      </div>
    </>
  );
} 