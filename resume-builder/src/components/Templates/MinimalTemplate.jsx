import React, { memo } from 'react';

function MinimalTemplate({ data, accentColor, font }) {
  return (
    <div style={{ padding: '60px 70px', fontFamily: font, color: '#111827', minHeight: '1100px' }}>
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '34px', fontWeight: 300, margin: '0 0 4px', letterSpacing: '-0.5px' }}>
          {data.personal.fullName}
        </h1>
        <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 14px', fontWeight: 400 }}>
          {data.personal.title}
        </p>
        <div style={{ fontSize: '11px', color: '#6B7280', letterSpacing: '0.3px' }}>
          {[
            data.personal.email,
            data.personal.phone,
            data.personal.location,
            data.personal.linkedin,
            data.personal.github,
          ].filter(Boolean).join('  ·  ')}
        </div>
      </header>

      {data.summary && (
        <section style={{ marginBottom: '28px' }}>
          <p style={{ fontSize: '13px', lineHeight: 1.7, margin: 0, color: '#374151' }}>{data.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <Section title="Experience">
          {data.experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 600 }}>
                  {exp.role}, <span style={{ fontWeight: 400, color: '#6B7280' }}>{exp.company}</span>
                </h3>
                <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{exp.startDate} – {exp.endDate}</span>
              </div>
              <p style={{ fontSize: '12px', lineHeight: 1.6, margin: '6px 0 0', color: '#4B5563', whiteSpace: 'pre-line' }}>
                {exp.description}
              </p>
            </div>
          ))}
        </Section>
      )}

      {data.education.length > 0 && (
        <Section title="Education">
          {data.education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: 600 }}>{edu.degree}</h3>
                <p style={{ fontSize: '12px', margin: '2px 0', color: '#6B7280' }}>
                  {edu.institution}{edu.gpa && ` · GPA: ${edu.gpa}`}
                </p>
              </div>
              <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{edu.startDate} – {edu.endDate}</span>
            </div>
          ))}
        </Section>
      )}

      {data.skills.technical.length > 0 && (
        <Section title="Skills">
          <p style={{ fontSize: '12px', lineHeight: 1.8, margin: 0, color: '#4B5563' }}>
            {[...data.skills.technical, ...data.skills.tools, ...data.skills.soft].join(' · ')}
          </p>
        </Section>
      )}

      {data.projects.length > 0 && (
        <Section title="Projects">
          {data.projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: '10px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 600, margin: '0 0 2px' }}>
                {proj.title}{' '}
                <span style={{ fontWeight: 400, color: '#9CA3AF', fontSize: '11px' }}>· {proj.tech}</span>
              </h3>
              <p style={{ fontSize: '12px', margin: 0, lineHeight: 1.5, color: '#4B5563' }}>{proj.description}</p>
            </div>
          ))}
        </Section>
      )}

      {data.certifications.length > 0 && (
        <Section title="Certifications">
          {data.certifications.map((cert) => (
            <p key={cert.id} style={{ fontSize: '12px', margin: '0 0 4px', color: '#4B5563' }}>
              <strong style={{ color: '#111827', fontWeight: 600 }}>{cert.name}</strong> · {cert.issuer} · {cert.date}
            </p>
          ))}
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '20px' }}>
      <h2 style={{
        fontSize: '11px', fontWeight: 600, color: '#9CA3AF',
        marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px',
      }}>{title}</h2>
      {children}
    </section>
  );
}

export default memo(MinimalTemplate);
