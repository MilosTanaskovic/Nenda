import React from 'react';
import { Typography } from '@mui/material';

interface HeaderTwoProps {
    children?: React.ReactNode;
}

const HeaderTwo: React.FC<HeaderTwoProps> = ({children}) => {
    return (
        <Typography
            component="h2" 
            variant="h6" 
            color="primary" 
            gutterBottom
        >
            {children}
        </Typography>
    )
}

export default HeaderTwo
