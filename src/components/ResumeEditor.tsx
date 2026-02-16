import React from 'react';
import { 
  Box, 
  Typography, 
} from '@mui/material';

import PersonalInfoEditor from './PersonalInfoEditor';
import ExperienceEditor from './ExperienceEditor';
import EducationEditor from './EducationEditor';
import SkillsEditor from './SkillsEditor';
import ExtraSectionsEditor from './ExtraSectionsEditor';

const ResumeEditor: React.FC = () => {

  return (
    <Box id="resume-editor" className="h-full overflow-y-auto p-6 bg-slate-50 border-r border-slate-200 shadow-inner">
      <Typography variant="h5" className="font-bold mb-6 text-slate-800">Editor</Typography>
      {/* Personal Info */}
      <PersonalInfoEditor/>

      {/* Experience */}
      <ExperienceEditor/>

      {/* Education */}
     <EducationEditor/>

      {/* Skills */}
     <SkillsEditor/>

      {/* Extra Sections */}
    <ExtraSectionsEditor/>
    </Box>
  );
};

export default ResumeEditor;