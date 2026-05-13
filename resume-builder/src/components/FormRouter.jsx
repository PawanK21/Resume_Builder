import React from 'react';
import PersonalInfo from './FormSections/PersonalInfo';
import Summary from './FormSections/Summary';
import Experience from './FormSections/Experience';
import Education from './FormSections/Education';
import Skills from './FormSections/Skills';
import Projects from './FormSections/Projects';
import Certifications from './FormSections/Certifications';
import Hobbies from './FormSections/Hobbies';

export default function FormRouter({ activeSection }) {
  const sections = {
    personal: <PersonalInfo />,
    summary: <Summary />,
    experience: <Experience />,
    education: <Education />,
    skills: <Skills />,
    projects: <Projects />,
    certifications: <Certifications />,
    hobbies: <Hobbies />,
  };

  return (
    <main style={{
      flex: 1,
      padding: '28px',
      overflowY: 'auto',
      maxWidth: '650px',
    }}>
      {sections[activeSection] || <PersonalInfo />}
    </main>
  );
}
