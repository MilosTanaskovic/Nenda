import React from 'react';
import { Container } from '@mui/material';
import { Body } from '../components/atoms/Typography';
import Layout from '../templates/Layout';

interface NotFoundProps {

}

const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <Layout>
            <Container component="section">
                <Body>
                    Not Found Page
                </Body>
            </Container>
        </Layout>
    )
}

export default NotFound
