import React from 'react';
import { Container, Grid, Paper } from '@mui/material';

import Layout from '../templates/Layout';
import { Customers, Packages } from '../components/organisms';

const customerData = require("../particles/data.json");

const packages = customerData.availablePackages;
const customers = customerData.customers;

interface AdminProps {
    children?: React.ReactNode;
}

const Admin: React.FC<AdminProps> = () => {
    return (
        <Layout>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/** Packages */}
                    <Grid item xs={12}>
                        <Packages packages={packages} />
                    </Grid>
                    {/** Customers */}
                    <Grid item xs={12}>
                        <Customers customers={customers} />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default Admin
