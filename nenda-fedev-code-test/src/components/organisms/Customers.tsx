import React, {useState} from 'react';
import { Paper } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { HeaderTwo } from '../atoms/Typography';
import { AccordianBox } from '../molecules';
import { CustomerType } from '../../particles/model/customer';

interface CustomersProps {
    customers: CustomerType[];
} 

const Customers: React.FC<CustomersProps> = ({customers}) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Paper 
            sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
        >
            <HeaderTwo>Customers</HeaderTwo>
            {/** Accordion */}
            <AccordianBox customers={customers} />
        </Paper>
    )
}

export default Customers