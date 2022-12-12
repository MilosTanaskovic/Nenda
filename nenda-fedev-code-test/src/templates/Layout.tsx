import React from 'react';
import { Container } from '@mui/material';

import { Footer, Header } from '../components/organisms';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Container component="header">
                <Header />
            </Container>
            <Container 
                component="main"
                sx={{ p: 10 }}
            >
                {children}
            </Container>
            <Container component="footer">
                <Footer />
            </Container>
        </>
    )
}

export default Layout