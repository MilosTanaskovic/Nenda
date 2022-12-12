import React from 'react';
import { Typography } from '@mui/material';

interface BodyProps {
    children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({children}) => {
    return (
        <Typography
            variant="body1"
            component="p"
        >
            {children}
        </Typography>
    )
}

export default Body
