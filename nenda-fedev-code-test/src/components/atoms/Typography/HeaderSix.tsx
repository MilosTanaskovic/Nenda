import React from 'react';
import { Typography } from '@mui/material';

interface HeaderSixProps {
    children?: React.ReactNode;
}

const HeaderSix: React.FC<HeaderSixProps> = ({children}) => {
    return (
        <Typography
            component="h6" 
            variant="h6"
            color="primary"
        >
            {children}
        </Typography>
    )
}

export default HeaderSix