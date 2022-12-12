import React from 'react';
import { Paper, List } from '@mui/material';
import { HeaderTwo } from '../atoms/Typography';
import { Package } from '../molecules';

interface PackagesProps {
    packages: string[];
} 

const Packages: React.FC<PackagesProps> = ({packages}) => {
    return (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <HeaderTwo>Available Packages</HeaderTwo>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="contacts"
            >
            {packages?.map((data) => {

                return (
                   <Package data={data} />
                )
            })}
            </List>
        </Paper>
    )
}

export default Packages
