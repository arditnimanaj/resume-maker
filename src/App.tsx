import React from 'react';
import { Box, Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import ResumeEditor from './components/ResumeEditor';
import ResumePreview from './components/ResumePreview';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Box className="h-screen w-screen overflow-hidden flex flex-col">
      {/* Top Navbar */}
      <Box id="navbar" className="h-14 bg-white border-b border-slate-200 flex items-center px-6 justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">R</div>
          <span className="font-bold text-slate-800 text-lg uppercase tracking-wider">ResumeCraft</span>
        </div>
        <div>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            className="rounded-full shadow-sm hover:shadow-md transition-all normal-case font-bold"
          >
            Download PDF
          </Button>
        </div>
      </Box>

      {/* Main Content */}
      <Box className="flex-1 overflow-hidden flex flex-col md:flex-row">
        {/* Editor Side */}
        <Box id="resume-editor" className="w-full md:w-1/3 lg:w-1/4 h-1/2 md:h-full">
          <ResumeEditor />
        </Box>

        {/* Preview Side */}
        <Box id="resume-preview-container" className="w-full md:w-2/3 lg:w-3/4 h-1/2 md:h-full">
          <ResumePreview />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
