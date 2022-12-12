import React, {useState} from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomerType } from '../../particles/model/customer';
import { AccordionDetailBox } from '.';

interface AccordianBoxProps {
    customers: CustomerType[];
} 

const AccordianBox: React.FC<AccordianBoxProps> = ({customers}) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (  
        <div>
            {customers?.map((data: any) => {
                return (
                    <Accordion
                        key={data?.name}
                        elevation={0} 
                        expanded={expanded === `${data?.name}`} 
                        onChange={handleChange(`${data?.name}`)}
                    >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {data?.name}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{data?.type}</Typography>
                        </AccordionSummary>
                        {/** more info */}
                        <AccordionDetailBox screens={data?.screens} />
                    </Accordion>
                )
            })}
            
        </div>
    )
}

export default AccordianBox