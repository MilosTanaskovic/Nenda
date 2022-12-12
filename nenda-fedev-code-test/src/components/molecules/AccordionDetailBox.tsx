import React from 'react';
import { AccordionDetails, Typography, Divider } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { ScreenType } from '../../particles/model/customer';
import { HeaderSix } from '../atoms/Typography';

interface AccordionDetailBoxProps {
    children?: React.ReactNode;
    screens?: ScreenType[];
}

const AccordionDetailBox: React.FC<AccordionDetailBoxProps> = ({children, screens}) => {
  
    return (
        <AccordionDetails>
            
            <Typography variant="h6" fontWeight="bold">Screens</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Packages</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {screens?.map((data: any) => {
                    const {name, packages} = data;
                    return (
                        <TableRow
                            key={name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {name}
                            </TableCell>
                            <TableCell align="right">{packages}</TableCell>
                            
                        </TableRow>
                    )
                })}
                </TableBody>
                </Table>
            </TableContainer>
        </AccordionDetails>
    )
}

export default AccordionDetailBox
