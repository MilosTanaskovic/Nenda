import React from 'react';
import { Typography } from '@mui/material';

interface LogoProps {
    children: React.ReactNode;
    classes?: any;
}

const Logo: React.FC<LogoProps> = ({children, classes}) => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={classes}
        >
            {children}
        </Typography>
    )
}

export default Logo
