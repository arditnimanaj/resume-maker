import { Accordion, AccordionSummary, Typography, AccordionDetails, Box, IconButton, TextField, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useResumeStore } from "../store";
const EducationEditor: React.FC = () => {
    const { education, addEducation, updateEducation, removeEducation } = useResumeStore();
    return (
        <Accordion className="mb-4 shadow-sm border border-slate-200" defaultExpanded>
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
    );
};

export default EducationEditor; 