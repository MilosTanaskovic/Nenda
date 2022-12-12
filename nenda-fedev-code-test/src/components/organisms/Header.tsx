import React, {useState} from 'react';

import { Box } from "@mui/material";
import { NavBar } from '../molecules';

interface HeaderProps {
    children?: React.ReactNode;

    window?: () => Window;
}

const Header: React.FC<HeaderProps> = ({window}) => {

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar 
                container={container}
            />
        </Box>
    )
}

export default Header
