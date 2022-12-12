import React from 'react';
import { Typography } from '@mui/material';

interface HeaderOneProps {
    children?: React.ReactNode;
}

const HeaderOne: React.FC<HeaderOneProps> = ({children}) => {
    return (
        <Typography
            component="h1" 
            variant="h1"
        >
            {children}
        </Typography>
    )
}

export default HeaderOne
