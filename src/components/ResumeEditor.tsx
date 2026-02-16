import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useResumeStore } from '../store';

const ResumeEditor: React.FC = () => {
  const { 
    personalInfo, setPersonalInfo,
    experiences, addExperience, updateExperience, removeExperience,
    education, addEducation, updateEducation, removeEducation,
    skills, setSkills,
    sections, addSection, updateSection, removeSection
  } = useResumeStore();

  return (
    <Box id="resume-editor" className="h-full overflow-y-auto p-6 bg-slate-50 border-r border-slate-200 shadow-inner">
      <Typography variant="h5" className="font-bold mb-6 text-slate-800">Editor</Typography>
      {/* Personal Info */}
      <Accordion className="mb-4 shadow-sm border border-slate-200" defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className="font-semibold">Personal Information</Typography>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-4">
          <TextField 
            label="Full Name" 
            fullWidth 
            size="small"
            value={personalInfo.fullName}
            onChange={(e) => setPersonalInfo({ fullName: e.target.value })}
          />
          <TextField 
            label="Email" 
            fullWidth 
            size="small"
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({ email: e.target.value })}
          />
          <TextField 
            label="Phone" 
            fullWidth 
            size="small"
            value={personalInfo.phone}
            onChange={(e) => setPersonalInfo({ phone: e.target.value })}
          />
          <TextField 
            label="Location" 
            fullWidth 
            size="small"
            value={personalInfo.location}
            onChange={(e) => setPersonalInfo({ location: e.target.value })}
          />
          <TextField 
            label="Professional Summary" 
            fullWidth 
            multiline 
            rows={3}
            size="small"
            value={personalInfo.summary}
            onChange={(e) => setPersonalInfo({ summary: e.target.value })}
          />
        </AccordionDetails>
      </Accordion>

      {/* Experience */}
      <Accordion className="mb-4 shadow-sm border border-slate-200" defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className="font-semibold">Work Experience</Typography>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <Box key={exp.id} className="p-4 border border-slate-100 rounded bg-white relative">
              <IconButton 
                className="absolute top-2 right-2 text-slate-400 hover:text-red-500"
                onClick={() => removeExperience(exp.id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              <div className="flex flex-col gap-3">
                <TextField 
                  label="Company" 
                  fullWidth size="small"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                />
                <TextField 
                  label="Role" 
                  fullWidth size="small"
                  value={exp.role}
                  onChange={(e) => updateExperience(exp.id, { role: e.target.value })}
                />
                <TextField 
                  label="Duration" 
                  fullWidth size="small"
                  value={exp.duration}
                  onChange={(e) => updateExperience(exp.id, { duration: e.target.value })}
                />
                <TextField 
                  label="Description" 
                  fullWidth multiline rows={2} size="small"
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                />
              </div>
            </Box>
          ))}
          <Button 
            startIcon={<AddIcon />} 
            onClick={addExperience}
            variant="outlined" 
            className="border-dashed"
            fullWidth
          >
            Add Experience
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Education */}
      <Accordion className="mb-4 shadow-sm border border-slate-200">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className="font-semibold">Education</Typography>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-6">
          {education.map((edu) => (
            <Box key={edu.id} className="p-4 border border-slate-100 rounded bg-white relative">
              <IconButton 
                className="absolute top-2 right-2 text-slate-400 hover:text-red-500"
                onClick={() => removeEducation(edu.id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              <div className="flex flex-col gap-3">
                <TextField 
                  label="School" 
                  fullWidth size="small"
                  value={edu.school}
                  onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                />
                <TextField 
                  label="Degree" 
                  fullWidth size="small"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                />
                <TextField 
                  label="Year" 
                  fullWidth size="small"
                  value={edu.year}
                  onChange={(e) => updateEducation(edu.id, { year: e.target.value })}
                />
              </div>
            </Box>
          ))}
          <Button 
            startIcon={<AddIcon />} 
            onClick={addEducation}
            variant="outlined" 
            className="border-dashed"
            fullWidth
          >
            Add Education
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Skills */}
      <Accordion className="mb-4 shadow-sm border border-slate-200">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className="font-semibold">Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField 
            label="Skills (comma separated)" 
            fullWidth 
            multiline 
            rows={2}
            size="small"
            value={skills.join(', ')}
            onChange={(e) => setSkills(e.target.value.split(',').filter(s => s !== '').map(s => s.trim()))}
            helperText="Enter skills separated by commas"
          />
        </AccordionDetails>
      </Accordion>

      {/* Extra Sections */}
      <Accordion className="mb-4 shadow-sm border border-slate-200">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className="font-semibold">Extra Sections</Typography>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-6">
          {sections.map((section) => (
            <Box key={section.id} className="p-4 border border-slate-100 rounded bg-white relative">
              <IconButton 
                className="absolute top-2 right-2 text-slate-400 hover:text-red-500"
                onClick={() => removeSection(section.id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              <div className="flex flex-col gap-3">
                <TextField 
                  label="Section Title" 
                  fullWidth 
                  size="small"
                  value={section.title}
                  placeholder="e.g. Certifications, Languages"
                  onChange={(e) => updateSection(section.id, { title: e.target.value })}
                />
                <TextField 
                  label="Content" 
                  fullWidth 
                  multiline 
                  rows={3} 
                  size="small"
                  value={section.content}
                  onChange={(e) => updateSection(section.id, { content: e.target.value })}
                />
              </div>
            </Box>
          ))}
          <Button 
            startIcon={<AddIcon />} 
            onClick={addSection}
            variant="outlined" 
            className="border-dashed"
            fullWidth
          >
            Add Section
          </Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ResumeEditor;