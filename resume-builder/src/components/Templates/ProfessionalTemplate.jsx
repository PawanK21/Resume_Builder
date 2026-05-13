import React, { memo } from 'react';

function ProfessionalTemplate({ data, accentColor, font }) {
  return (
    <div style={{ fontFamily: font, color: '#1f2937', minHeight: '1100px' }}>
      <header style={{ padding: '40px 50px 24px', borderBottom: `4px solid ${accentColor}` }}>
        <h1 style={{ fontSize: '30px', fontWeight: 700, margin: '0 0 4px', color: '#111827' }}>
          {data.personal.fullName}
        </h1>
        <p style={{ fontSize: '16px', color: accentColor, fontWeight: 600, margin: '0 0 14px' }}>
          {data.personal.title}
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px',
          fontSize: '12px', color: '#4B5563',
        }}>
          {data.personal.email && <div>✉ {data.personal.email}</div>}
          {data.personal.phone && <div>☎ {data.personal.phone}</div>}
          {data.personal.location && <div>📍 {data.personal.location}</div>}
          {data.personal.linkedin && <div>in {data.personal.linkedin}</div>}
          {data.personal.github && <div>⌥ {data.personal.github}</div>}
          {data.personal.website && <div>🌐 {data.personal.website}</div>}
        </div>
      </header>

      <div style={{ padding: '24px 50px' }}>
        {data.summary && (
          <Section title="EXECUTIVE SUMMARY" accentColor={accentColor}>
            <p style={{ fontSize: '13px', lineHeight: 1.7, margin: 0, color: '#374151' }}>{data.summary}</p>
          </Section>
        )}

        {data.experience.length > 0 && (
          <Section title="PROFESSIONAL EXPERIENCE" accentColor={accentColor}>
            {data.experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0, color: '#111827' }}>{exp.role}</h3>
                  <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>{exp.startDate} - {exp.endDate}</span>
                </div>
                <p style={{ fontSize: '13px', color: accentColor, fontWeight: 600, margin: '0 0 6px' }}>
                  {exp.company}{exp.location && `, ${exp.location}`}
                </p>
                <p style={{ fontSize: '12px', lineHeight: 1.6, margin: 0, color: '#374151', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </Section>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {data.education.length > 0 && (
            <Section title="EDUCATION" accentColor={accentColor}>
              {data.education.map((edu) => (
                <div key={edu.id} style={{ marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '13px', fontWeight: 700, margin: 0 }}>{edu.degree}</h3>
                  <p style={{ fontSize: '12px', margin: '2px 0', color: accentColor }}>{edu.institution}</p>
                  <p style={{ fontSize: '11px', margin: 0, color: '#6B7280' }}>
                    {edu.startDate} - {edu.endDate}{edu.gpa && ` • GPA: ${edu.gpa}`}
                  </p>
                </div>
              ))}
            </Section>
          )}

          {data.skills.technical.length > 0 && (
            <Section title="CORE COMPETENCIES" accentColor={accentColor}>
              <p style={{ fontSize: '12px', lineHeight: 1.7, margin: 0 }}>
                <strong>Technical:</strong> {data.skills.technical.join(', ')}
              </p>
              {data.skills.tools.length > 0 && (
                <p style={{ fontSize: '12px', lineHeight: 1.7, margin: '6px 0 0' }}>
                  <strong>Tools:</strong> {data.skills.tools.join(', ')}
                </p>
              )}
            </Section>
          )}
        </div>

        {data.projects.length > 0 && (
          <Section title="KEY PROJECTS" accentColor={accentColor}>
            {data.projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: '10px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 2px' }}>{proj.title}</h3>
                <p style={{ fontSize: '11px', color: accentColor, margin: '0 0 4px', fontStyle: 'italic' }}>{proj.tech}</p>
                <p style={{ fontSize: '12px', margin: 0, lineHeight: 1.5, color: '#374151' }}>{proj.description}</p>
              </div>
            ))}
          </Section>
        )}

        {data.certifications.length > 0 && (
          <Section title="CERTIFICATIONS" accentColor={accentColor}>
            {data.certifications.map((cert) => (
              <p key={cert.id} style={{ fontSize: '12px', margin: '0 0 4px' }}>
                <strong>{cert.name}</strong> — {cert.issuer} ({cert.date})
              </p>
            ))}
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({ title, accentColor, children }) {
  return (
    <section style={{ marginBottom: '20px' }}>
      <h2 style={{
        fontSize: '13px', fontWeight: 700, color: 'white',
        background: accentColor, padding: '6px 12px',
        marginBottom: '12px', letterSpacing: '1px',
        display: 'inline-block', borderRadius: '3px',
      }}>{title}</h2>
      {children}
    </section>
  );
}

export default memo(ProfessionalTemplate);
