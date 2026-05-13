import React, { memo } from 'react';

function ModernTemplate({ data, accentColor, font }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', minHeight: '1100px', fontFamily: font }}>
      <div style={{ background: accentColor, color: 'white', padding: '40px 28px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 6px', lineHeight: 1.2 }}>
          {data.personal.fullName}
        </h1>
        <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 28px' }}>{data.personal.title}</p>

        <SidebarSection title="CONTACT">
          {data.personal.email && <div>✉ {data.personal.email}</div>}
          {data.personal.phone && <div>☎ {data.personal.phone}</div>}
          {data.personal.location && <div>📍 {data.personal.location}</div>}
          {data.personal.linkedin && <div>in {data.personal.linkedin}</div>}
          {data.personal.github && <div>⌥ {data.personal.github}</div>}
          {data.personal.website && <div>🌐 {data.personal.website}</div>}
        </SidebarSection>

        {data.skills.technical.length > 0 && (
          <SidebarSection title="SKILLS">
            <p style={{ fontWeight: 600, marginBottom: '4px', opacity: 0.9, fontSize: '12px' }}>Technical</p>
            <p style={{ margin: '0 0 10px', lineHeight: 1.6, fontSize: '12px' }}>{data.skills.technical.join(' • ')}</p>
            {data.skills.tools.length > 0 && (
              <>
                <p style={{ fontWeight: 600, marginBottom: '4px', opacity: 0.9, fontSize: '12px' }}>Tools</p>
                <p style={{ margin: '0 0 10px', lineHeight: 1.6, fontSize: '12px' }}>{data.skills.tools.join(' • ')}</p>
              </>
            )}
            {data.skills.soft.length > 0 && (
              <>
                <p style={{ fontWeight: 600, marginBottom: '4px', opacity: 0.9, fontSize: '12px' }}>Soft Skills</p>
                <p style={{ margin: 0, lineHeight: 1.6, fontSize: '12px' }}>{data.skills.soft.join(' • ')}</p>
              </>
            )}
          </SidebarSection>
        )}

        {data.skills.languages.length > 0 && (
          <SidebarSection title="LANGUAGES">
            {data.skills.languages.map((l, i) => <div key={i}>{l}</div>)}
          </SidebarSection>
        )}

        {data.hobbies.length > 0 && (
          <SidebarSection title="INTERESTS">
            <p style={{ margin: 0, lineHeight: 1.6, fontSize: '12px' }}>{data.hobbies.join(' • ')}</p>
          </SidebarSection>
        )}
      </div>

      <div style={{ padding: '40px 32px', color: '#1f2937' }}>
        {data.summary && (
          <MainSection title="Profile" accentColor={accentColor}>
            <p style={{ fontSize: '13px', lineHeight: 1.6, margin: 0, color: '#374151' }}>{data.summary}</p>
          </MainSection>
        )}

        {data.experience.length > 0 && (
          <MainSection title="Experience" accentColor={accentColor}>
            {data.experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>{exp.role}</h3>
                  <span style={{ fontSize: '12px', color: '#6B7280' }}>{exp.startDate} - {exp.endDate}</span>
                </div>
                <p style={{ fontSize: '13px', color: accentColor, fontWeight: 600, margin: '0 0 8px' }}>
                  {exp.company}{exp.location && ` • ${exp.location}`}
                </p>
                <p style={{ fontSize: '12px', lineHeight: 1.6, margin: 0, color: '#374151', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </MainSection>
        )}

        {data.projects.length > 0 && (
          <MainSection title="Projects" accentColor={accentColor}>
            {data.projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: '12px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 2px', color: '#111827' }}>{proj.title}</h3>
                <p style={{ fontSize: '11px', color: accentColor, margin: '0 0 4px', fontStyle: 'italic' }}>{proj.tech}</p>
                <p style={{ fontSize: '12px', lineHeight: 1.5, margin: 0, color: '#374151' }}>{proj.description}</p>
              </div>
            ))}
          </MainSection>
        )}

        {data.education.length > 0 && (
          <MainSection title="Education" accentColor={accentColor}>
            {data.education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: '13px', fontWeight: 700, margin: 0, color: '#111827' }}>{edu.degree}</h3>
                  <span style={{ fontSize: '12px', color: '#6B7280' }}>{edu.startDate} - {edu.endDate}</span>
                </div>
                <p style={{ fontSize: '12px', color: accentColor, margin: '2px 0', fontWeight: 600 }}>{edu.institution}</p>
                {edu.gpa && <p style={{ fontSize: '11px', color: '#6B7280', margin: 0 }}>GPA: {edu.gpa}</p>}
              </div>
            ))}
          </MainSection>
        )}

        {data.certifications.length > 0 && (
          <MainSection title="Certifications" accentColor={accentColor}>
            {data.certifications.map((cert) => (
              <div key={cert.id} style={{ marginBottom: '8px', fontSize: '12px' }}>
                <strong style={{ color: '#111827' }}>{cert.name}</strong>
                <span style={{ color: '#6B7280' }}> — {cert.issuer} ({cert.date})</span>
              </div>
            ))}
          </MainSection>
        )}
      </div>
    </div>
  );
}

function SidebarSection({ title, children }) {
  return (
    <div style={{ marginBottom: '22px' }}>
      <h3 style={{
        fontSize: '13px', fontWeight: 700, marginBottom: '10px',
        letterSpacing: '1px',
        borderBottom: '2px solid rgba(255,255,255,0.3)',
        paddingBottom: '6px',
      }}>{title}</h3>
      <div style={{ fontSize: '12px', lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

function MainSection({ title, accentColor, children }) {
  return (
    <section style={{ marginBottom: '20px' }}>
      <h2 style={{
        fontSize: '16px', fontWeight: 700, color: accentColor,
        marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px',
      }}>{title}</h2>
      {children}
    </section>
  );
}

export default memo(ModernTemplate);
