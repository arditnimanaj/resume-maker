import Accordion from "@mui/material/Accordion/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import Typography from "@mui/material/Typography/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import TextField from "@mui/material/TextField/TextField";
import { useResumeStore } from "../store";

const PersonalInfoEditor: React.FC = () => {
    const { 
        personalInfo, setPersonalInfo
    } = useResumeStore();

    return (
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
    );
};

export default PersonalInfoEditor;