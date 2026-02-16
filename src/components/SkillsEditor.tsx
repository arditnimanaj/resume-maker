import { Accordion, AccordionSummary, Typography, AccordionDetails, TextField } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useResumeStore } from "../store";

const SkillsEditor: React.FC = () => {
    const { skills, setSkills } = useResumeStore();
    return (
        <Accordion className="mb-4 shadow-sm border border-slate-200" defaultExpanded>
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
    );
};

export default SkillsEditor;
