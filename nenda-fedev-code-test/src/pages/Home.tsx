import React from 'react';
import { Typography } from '@mui/material';

import Layout from '../templates/Layout';

interface HomeProps {
    children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({}) => {


    return (
        <Layout>
            <Typography>One-Click Admin!</Typography>
        </Layout>
    )
}

export default Home
