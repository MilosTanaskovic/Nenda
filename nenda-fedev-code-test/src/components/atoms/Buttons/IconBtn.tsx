import React from 'react'
import { IconButton } from '@mui/material'

interface IconBtnProps {
    children: React.ReactNode;
    handleOnClick?: any;
}

const IconBtn: React.FC<IconBtnProps> = ({children, handleOnClick}) => {
    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleOnClick}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            {children}
        </IconButton>
    )
}

export default IconBtn
