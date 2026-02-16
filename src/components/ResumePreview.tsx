import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useResumeStore } from '../store';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ResumePreview: React.FC = () => {
  const { personalInfo, experiences, education, skills, sections } = useResumeStore();

  return (
    <Box className="h-full overflow-y-auto p-12 bg-slate-200 flex justify-center">
      <Paper 
        elevation={6} 
        className="w-[210mm] min-h-[297mm] bg-white p-12 shadow-2xl flex flex-col gap-8 text-slate-800"
        id="resume-content"
      >
        {/* Header */}
        <section className="text-center">
          <Typography variant="h3" className="font-bold text-slate-900 mb-2 uppercase tracking-tight">
            {personalInfo.fullName || 'Your Name'}
          </Typography>
          <Box className="flex justify-center gap-6 text-slate-600">
            {personalInfo.email && (
              <div className="flex items-center gap-1 text-sm">
                <EmailIcon fontSize="inherit" /> {personalInfo.email}
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-1 text-sm">
                <PhoneIcon fontSize="inherit" /> {personalInfo.phone}
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-1 text-sm">
                <LocationOnIcon fontSize="inherit" /> {personalInfo.location}
              </div>
            )}
          </Box>
        </section>

        {/* Summary */}
        {personalInfo.summary && (
          <section>
            <Typography variant="h6" className="font-bold text-blue-800 border-b-2 border-blue-800 mb-2 uppercase text-sm tracking-widest">
              Professional Summary
            </Typography>
            <Typography variant="body2" className="leading-relaxed whitespace-pre-wrap">
              {personalInfo.summary}
            </Typography>
          </section>
        )}

        {/* Experience */}
        <section>
          <Typography variant="h6" className="font-bold text-blue-800 border-b-2 border-blue-800 mb-3 uppercase text-sm tracking-widest">
            Experience
          </Typography>
          <div className="flex flex-col gap-6">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <Typography className="font-bold text-slate-900">
                    {exp.role || 'Role'} @ <span className="text-blue-700">{exp.company || 'Company'}</span>
                  </Typography>
                  <Typography className="text-xs font-semibold text-slate-500 italic">
                    {exp.duration || 'Duration'}
                  </Typography>
                </div>
                <Typography variant="body2" className="text-slate-700 whitespace-pre-wrap">
                  {exp.description}
                </Typography>
              </div>
            ))}
          </div>
        </section>

      {education.length > 0 && (
        <section>
          <Typography variant="h6" className="font-bold text-blue-800 border-b-2 border-blue-800 mb-3 uppercase text-sm tracking-widest">
            Education
          </Typography>
          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <Typography className="font-bold text-slate-900">
                    {edu.school || 'School'}
                  </Typography>
                  <Typography variant="body2" className="text-slate-700">
                    {edu.degree || 'Degree'}
                  </Typography>
                </div>
                <Typography className="text-xs font-semibold text-slate-500 italic">
                  {edu.year || 'Year'}
                </Typography>
              </div>
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <Typography variant="h6" className="font-bold text-blue-800 border-b-2 border-blue-800 mb-3 uppercase text-sm tracking-widest">
            Technical Skills
          </Typography>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Box 
                key={index} 
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold border border-slate-200"
              >
                {skill}
              </Box>
            ))}
          </div>
        </section>
      )}

      {sections.map((section) => (
        section.title && (
          <section key={section.id}>
            <Typography variant="h6" className="font-bold text-blue-800 border-b-2 border-blue-800 mb-2 uppercase text-sm tracking-widest">
              {section.title}
            </Typography>
            <Typography variant="body2" className="leading-relaxed whitespace-pre-wrap">
              {section.content}
            </Typography>
          </section>
        )
      ))}
      </Paper>
    </Box>
  );
};

export default ResumePreview;
