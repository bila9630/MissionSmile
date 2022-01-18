import { Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'

const pricing = () => {
    return (
        <div>
            <Head>
                <title>Pricing</title>
            </Head>
            <Layout>
                <Typography>Pricing Page</Typography>
            </Layout>
        </div>
    )
}

export default pricing
