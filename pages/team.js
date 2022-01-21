import React from 'react'
import Layout from '../components/layout'
import { Typography } from '@mui/material'
import Head from 'next/head'

const Team = () => {
    return (
        <div>
            <Head>
                <title>Team</title>
            </Head>
            <Layout>
                <Typography>Team page</Typography>
                <Typography>A project from Hannah L, Patrick, Sofie, Alisa, Hannah S. and Duc</Typography>
            </Layout>
        </div>
    )
}

export default Team
