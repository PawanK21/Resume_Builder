import React, { memo } from 'react';

function ClassicTemplate({ data, accentColor }) {
  return (
    <div style={{ padding: '50px 60px', fontFamily: 'Georgia, serif', color: '#1f2937', minHeight: '1100px' }}>
      <header style={{
        textAlign: 'center',
        borderBottom: `3px double ${accentColor}`,
        paddingBottom: '18px',
        marginBottom: '24px',
      }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 6px', letterSpacing: '2px', color: '#111827' }}>
          {data.personal.fullName.toUpperCase()}
        </h1>
        <p style={{ fontSize: '15px', fontStyle: 'italic', margin: '0 0 10px', color: accentColor }}>
          {data.personal.title}
        </p>
        <p style={{ fontSize: '12px', margin: 0, color: '#4B5563' }}>
          {[data.personal.email, data.personal.phone, data.personal.location].filter(Boolean).join(' • ')}
        </p>
        <p style={{ fontSize: '12px', margin: '4px 0 0', color: '#4B5563' }}>
          {[data.personal.linkedin, data.personal.github, data.personal.website].filter(Boolean).join(' • ')}
        </p>
      </header>

      {data.summary && (
        <Section title="OBJECTIVE" accentColor={accentColor}>
          <p style={{ fontSize: '13px', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>{data.summary}</p>
        </Section>
      )}

      {data.experience.length > 0 && (
        <Section title="PROFESSIONAL EXPERIENCE" accentColor={accentColor}>
          {data.experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '14px' }}>{exp.company}</strong>
                <em style={{ fontSize: '12px' }}>{exp.startDate} - {exp.endDate}</em>
              </div>
              <p style={{ fontSize: '13px', fontStyle: 'italic', margin: '2px 0 6px', color: accentColor }}>
                {exp.role} | {exp.location}
              </p>
              <p style={{ fontSize: '12px', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line' }}>
                {exp.description}
              </p>
            </div>
          ))}
        </Section>
      )}

      {data.education.length > 0 && (
        <Section title="EDUCATION" accentColor={accentColor}>
          {data.education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '13px' }}>{edu.degree}</strong>
                <em style={{ fontSize: '12px' }}>{edu.startDate} - {edu.endDate}</em>
              </div>
              <p style={{ fontSize: '12px', margin: '2px 0', fontStyle: 'italic' }}>
                {edu.institution}, {edu.location}
              </p>
              {edu.gpa && <p style={{ fontSize: '12px', margin: 0 }}>GPA: {edu.gpa}</p>}
            </div>
          ))}
        </Section>
      )}

      {data.skills.technical.length > 0 && (
        <Section title="SKILLS" accentColor={accentColor}>
          <p style={{ fontSize: '12px', lineHeight: 1.7, margin: 0 }}>
            <strong>Technical:</strong> {data.skills.technical.join(', ')}<br />
            {data.skills.soft.length > 0 && (
              <><strong>Soft:</strong> {data.skills.soft.join(', ')}<br /></>
            )}
            {data.skills.tools.length > 0 && (
              <><strong>Tools:</strong> {data.skills.tools.join(', ')}</>
            )}
          </p>
        </Section>
      )}

      {data.projects.length > 0 && (
        <Section title="PROJECTS" accentColor={accentColor}>
          {data.projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: '10px' }}>
              <strong style={{ fontSize: '13px' }}>{proj.title}</strong>
              <em style={{ fontSize: '12px' }}> — {proj.tech}</em>
              <p style={{ fontSize: '12px', margin: '2px 0 0', lineHeight: 1.5 }}>{proj.description}</p>
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
  );
}

function Section({ title, accentColor, children }) {
  return (
    <section style={{ marginBottom: '20px' }}>
      <h2 style={{
        fontSize: '14px', fontWeight: 700, color: accentColor,
        marginBottom: '10px',
        borderBottom: `1px solid ${accentColor}40`,
        paddingBottom: '4px',
        letterSpacing: '1.5px',
      }}>{title}</h2>
      {children}
    </section>
  );
}

export default memo(ClassicTemplate);
