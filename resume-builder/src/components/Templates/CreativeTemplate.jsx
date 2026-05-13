import React, { memo } from 'react';

function CreativeTemplate({ data, accentColor, font }) {
  return (
    <div style={{ fontFamily: font, color: '#1f2937', minHeight: '1100px' }}>
      <header style={{
        background: `linear-gradient(135deg, ${accentColor}, ${accentColor}AA)`,
        color: 'white',
        padding: '50px 50px 70px',
        position: 'relative',
      }}>
        <h1 style={{ fontSize: '40px', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
          {data.personal.fullName}
        </h1>
        <p style={{ fontSize: '18px', margin: '8px 0 20px', opacity: 0.95, fontWeight: 300 }}>
          {data.personal.title}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '13px' }}>
          {data.personal.email && <span>✉ {data.personal.email}</span>}
          {data.personal.phone && <span>☎ {data.personal.phone}</span>}
          {data.personal.location && <span>📍 {data.personal.location}</span>}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '12px', marginTop: '6px', opacity: 0.9 }}>
          {data.personal.linkedin && <span>in {data.personal.linkedin}</span>}
          {data.personal.github && <span>⌥ {data.personal.github}</span>}
          {data.personal.website && <span>🌐 {data.personal.website}</span>}
        </div>
      </header>

      <div style={{ padding: '30px 50px' }}>
        {data.summary && (
          <section style={{
            marginBottom: '28px', padding: '20px',
            background: `${accentColor}10`, borderLeft: `4px solid ${accentColor}`,
            borderRadius: '0 8px 8px 0',
          }}>
            <p style={{ fontSize: '14px', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>{data.summary}</p>
          </section>
        )}

        {data.experience.length > 0 && (
          <section style={{ marginBottom: '28px' }}>
            <h2 style={{
              fontSize: '22px', fontWeight: 800, color: accentColor,
              marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <span style={{ width: '40px', height: '4px', background: accentColor, borderRadius: '2px' }}></span>
              Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} style={{
                marginBottom: '18px', paddingLeft: '20px',
                borderLeft: `2px dashed ${accentColor}60`,
              }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 2px', color: '#111827' }}>{exp.role}</h3>
                <p style={{ fontSize: '13px', color: accentColor, fontWeight: 600, margin: '0 0 6px' }}>
                  {exp.company} • {exp.startDate} - {exp.endDate}
                </p>
                <p style={{ fontSize: '12px', lineHeight: 1.6, margin: 0, color: '#374151', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </section>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            {data.education.length > 0 && (
              <section style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 800, color: accentColor, marginBottom: '12px' }}>Education</h2>
                {data.education.map((edu) => (
                  <div key={edu.id} style={{ marginBottom: '10px' }}>
                    <strong style={{ fontSize: '13px' }}>{edu.degree}</strong>
                    <p style={{ fontSize: '12px', margin: '2px 0', color: accentColor }}>{edu.institution}</p>
                    <p style={{ fontSize: '11px', margin: 0, color: '#6B7280' }}>
                      {edu.startDate} - {edu.endDate}{edu.gpa && ` • GPA: ${edu.gpa}`}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {data.certifications.length > 0 && (
              <section>
                <h2 style={{ fontSize: '18px', fontWeight: 800, color: accentColor, marginBottom: '12px' }}>Certifications</h2>
                {data.certifications.map((cert) => (
                  <div key={cert.id} style={{ marginBottom: '8px', fontSize: '12px' }}>
                    <strong>{cert.name}</strong>
                    <p style={{ margin: 0, color: '#6B7280' }}>{cert.issuer} • {cert.date}</p>
                  </div>
                ))}
              </section>
            )}
          </div>

          <div>
            {data.skills.technical.length > 0 && (
              <section style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 800, color: accentColor, marginBottom: '12px' }}>Skills</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {[...data.skills.technical, ...data.skills.tools].map((s, i) => (
                    <span key={i} style={{
                      background: `${accentColor}15`, color: accentColor,
                      padding: '4px 10px', borderRadius: '20px',
                      fontSize: '11px', fontWeight: 600,
                    }}>{s}</span>
                  ))}
                </div>
              </section>
            )}

            {data.projects.length > 0 && (
              <section>
                <h2 style={{ fontSize: '18px', fontWeight: 800, color: accentColor, marginBottom: '12px' }}>Projects</h2>
                {data.projects.map((proj) => (
                  <div key={proj.id} style={{ marginBottom: '10px' }}>
                    <strong style={{ fontSize: '13px' }}>{proj.title}</strong>
                    <p style={{ fontSize: '11px', margin: '2px 0', color: accentColor, fontStyle: 'italic' }}>{proj.tech}</p>
                    <p style={{ fontSize: '11px', margin: 0, lineHeight: 1.5, color: '#374151' }}>{proj.description}</p>
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CreativeTemplate);
