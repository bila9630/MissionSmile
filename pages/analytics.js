import React from 'react'
import Layout from '../components/layout'
import { Button, Typography } from '@mui/material'
import Head from 'next/head'

const Analytics = () => {
    const url_heroku = "https://smile-emotion-recognition.herokuapp.com/helloWorld"
    const url_local = "http://127.0.0.1:5000/uploadImage"

    const handleAPI = async () => {
        const response = await fetch(url_heroku, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": "Response from frontend received" })
        })
        let data = await response.json()
        console.log(data)
    }
    return (
        <div>
            <Head>
                <title>Analytics</title>
            </Head>
            <Layout>
                <Button variant="contained" onClick={() => handleAPI()}>Call API</Button>
                <Typography>Analytics page</Typography>
                <Typography>14.01.2022: Happy</Typography>
                <Typography>16.01.2022: Sad</Typography>
                <Typography>17.01.2022: Angry</Typography>
            </Layout>
        </div>
    )
}

export default Analytics
