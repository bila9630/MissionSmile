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
                <Typography>14.01.2022: Happy</Typography>
                <Typography>16.01.2022: Sad</Typography>
                <Typography>17.01.2022: Angry</Typography>
            </Layout>
        </div>
    )
}

export default analytics
