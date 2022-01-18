import React from 'react'
import Layout from '../components/layout'
import { Typography } from '@mui/material'
import Head from 'next/head'

const analytics = () => {
    return (
        <div>
            <Head>
                <title>Analytics</title>
            </Head>
            <Layout>
                <Typography>Analytics page</Typography>
            </Layout>
        </div>
    )
}

export default analytics
