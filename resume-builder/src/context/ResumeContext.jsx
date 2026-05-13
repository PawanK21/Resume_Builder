import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ResumeContext = createContext();

export const DEFAULT_DATA = {
  personal: {
    fullName: 'John Doe',
    title: 'Full Stack Developer',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
    website: 'johndoe.dev',
  },
  summary: 'Passionate Full Stack Developer with 3+ years of experience building scalable web applications using React, Node.js, and modern cloud technologies. Proven track record of delivering high-quality software solutions and collaborating effectively in agile teams.',
  experience: [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      startDate: 'Jan 2023',
      endDate: 'Present',
      description: '• Led the development of a customer-facing dashboard serving 100K+ users\n• Improved page load performance by 40% through code-splitting and lazy loading\n• Mentored 3 junior developers and conducted code reviews',
    },
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'University of California',
      location: 'Berkeley, CA',
      startDate: '2019',
      endDate: '2023',
      gpa: '3.8/4.0',
    },
  ],
  skills: {
    technical: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'AWS'],
    soft: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration'],
    tools: ['Git', 'Docker', 'VS Code', 'Figma', 'Jira'],
    languages: ['English (Native)', 'Spanish (Conversational)'],
  },
  projects: [
    {
      id: 1,
      title: 'Resume Builder Platform',
      tech: 'React, Node.js, MongoDB',
      link: 'github.com/johndoe/resume-builder',
      description: 'Built a full-stack resume builder with customizable templates and PDF export functionality. Achieved 95+ Lighthouse score.',
    },
  ],
  certifications: [
    { id: 1, name: 'AWS Certified Developer', issuer: 'Amazon Web Services', date: '2024' },
  ],
  hobbies: ['Photography', 'Hiking', 'Open Source Contribution'],
  visibility: {
    summary: true, experience: true, education: true, skills: true,
    projects: true, certifications: true, hobbies: true,
  },
};

function resumeReducer(state, action) {
  switch (action.type) {
    case 'SET_ALL':
      return action.payload;
    case 'UPDATE_PERSONAL':
      return { ...state, personal: { ...state.personal, [action.field]: action.value } };
    case 'UPDATE_SUMMARY':
      return { ...state, summary: action.value };
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [...state.experience, {
          id: Date.now(), role: '', company: '', location: '',
          startDate: '', endDate: '', description: '',
        }],
      };
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map(e =>
          e.id === action.id ? { ...e, [action.field]: action.value } : e
        ),
      };
    case 'REMOVE_EXPERIENCE':
      return { ...state, experience: state.experience.filter(e => e.id !== action.id) };
    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [...state.education, {
          id: Date.now(), degree: '', institution: '', location: '',
          startDate: '', endDate: '', gpa: '',
        }],
      };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map(e =>
          e.id === action.id ? { ...e, [action.field]: action.value } : e
        ),
      };
    case 'REMOVE_EDUCATION':
      return { ...state, education: state.education.filter(e => e.id !== action.id) };
    case 'UPDATE_SKILLS':
      return {
        ...state,
        skills: { ...state.skills, [action.category]: action.value },
      };
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, {
          id: Date.now(), title: '', tech: '', link: '', description: '',
        }],
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map(p =>
          p.id === action.id ? { ...p, [action.field]: action.value } : p
        ),
      };
    case 'REMOVE_PROJECT':
      return { ...state, projects: state.projects.filter(p => p.id !== action.id) };
    case 'ADD_CERTIFICATION':
      return {
        ...state,
        certifications: [...state.certifications, {
          id: Date.now(), name: '', issuer: '', date: '',
        }],
      };
    case 'UPDATE_CERTIFICATION':
      return {
        ...state,
        certifications: state.certifications.map(c =>
          c.id === action.id ? { ...c, [action.field]: action.value } : c
        ),
      };
    case 'REMOVE_CERTIFICATION':
      return {
        ...state,
        certifications: state.certifications.filter(c => c.id !== action.id),
      };
    case 'UPDATE_HOBBIES':
      return { ...state, hobbies: action.value };
    case 'TOGGLE_VISIBILITY':
      return {
        ...state,
        visibility: { ...state.visibility, [action.section]: !state.visibility[action.section] },
      };
    case 'RESET':
      return DEFAULT_DATA;
    default:
      return state;
  }
}

export function ResumeProvider({ children }) {
  const [storedData, setStoredData] = useLocalStorage('resume-data', DEFAULT_DATA);
  const [data, dispatch] = useReducer(resumeReducer, storedData);

  // Auto-save (debounced via useEffect)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStoredData(data);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [data, setStoredData]);

  return (
    <ResumeContext.Provider value={{ data, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error('useResume must be used within ResumeProvider');
  return ctx;
};
