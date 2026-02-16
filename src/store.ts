import { create } from 'zustand';

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
}

interface ResumeState {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experiences: Experience[];
  education: Education[];
  skills: string[];
  sections: Section[];
  
  setPersonalInfo: (info: Partial<ResumeState['personalInfo']>) => void;
  addExperience: () => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  setSkills: (skills: string[]) => void;
  addSection: () => void;
  updateSection: (id: string, section: Partial<Section>) => void;
  removeSection: (id: string) => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  personalInfo: {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    location: 'New York, NY',
    summary: 'Passionate software engineer with 5 years of experience in building scalable web applications.',
  },
  experiences: [
    {
      id: '1',
      company: 'Tech Corp',
      role: 'Senior Developer',
      duration: '2020 - Present',
      description: 'Leading the frontend team to build amazing products.',
    },
  ],
  education: [
    {
      id: '1',
      school: 'University of Technology',
      degree: 'B.S. in Computer Science',
      year: '2016 - 2020',
    },
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
  sections: [],
  setPersonalInfo: (info) =>
    set((state) => ({
      personalInfo: { ...state.personalInfo, ...info },
    })),

  addExperience: () =>
    set((state) => ({
      experiences: [
        ...state.experiences,
        { id: Math.random().toString(), company: '', role: '', duration: '', description: '' },
      ],
    })),

  updateExperience: (id, exp) =>
    set((state) => ({
      experiences: state.experiences.map((e) => (e.id === id ? { ...e, ...exp } : e)),
    })),

  removeExperience: (id) =>
    set((state) => ({
      experiences: state.experiences.filter((e) => e.id !== id),
    })),

  addEducation: () =>
    set((state) => ({
      education: [
        ...state.education,
        { id: Math.random().toString(), school: '', degree: '', year: '' },
      ],
    })),

  updateEducation: (id, edu) =>
    set((state) => ({
      education: state.education.map((e) => (e.id === id ? { ...e, ...edu } : e)),
    })),

  removeEducation: (id) =>
    set((state) => ({
      education: state.education.filter((e) => e.id !== id),
    })),

  setSkills: (skills) => set({ skills }),
  addSection: () =>
    set((state) => ({
      sections: [
        ...state.sections,
        { id: Math.random().toString(), title: '', content: '' },
      ],
    })),
  updateSection: (id, section) =>
    set((state) => ({
      sections: state.sections.map((s) => (s.id === id ? { ...s, ...section } : s)),
    })),
  removeSection: (id) =>
    set((state) => ({
      sections: state.sections.filter((s) => s.id !== id),
    })),
}));
