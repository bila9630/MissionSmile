import { Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'

const profile = () => {
    return (
        <div>
            <Head>
                <title>Profile</title>
            </Head>
            <Layout>
                <Typography>Profile Page</Typography>
            </Layout>
        </div>
    )
}

export default profile
