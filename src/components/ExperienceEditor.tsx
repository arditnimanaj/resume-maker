import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { useResumeStore } from "../store";
import AddIcon from '@mui/icons-material/Add';

const ExperienceEditor: React.FC = () => {

    const { experiences, removeExperience, updateExperience,addExperience } = useResumeStore();

    return (
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
    );
};

export default ExperienceEditor;