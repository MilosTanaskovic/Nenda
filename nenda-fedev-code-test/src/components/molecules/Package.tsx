import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';


interface PackageProps {
    data: string;
}

const Package: React.FC<PackageProps> = ({data}) => {
    return (
        <>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary={data} />
                </ListItemButton>
            </ListItem>
        </>
    )
}

export default Package
