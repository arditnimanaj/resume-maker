import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useResumeStore } from "../store";


const ExtraSectionsEditor: React.FC = () => {
    const { sections, addSection, removeSection, updateSection } = useResumeStore();
    return (
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
    );
};

export default ExtraSectionsEditor;