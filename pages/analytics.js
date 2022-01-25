import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/layout'
import { Button, Typography } from '@mui/material'
import Head from 'next/head'
import Box from '@mui/material/Box';
import { AuthContext } from '../contexts/AuthContext'
import {
    getFirestore, collection, query,
    orderBy, onSnapshot, where,
} from 'firebase/firestore'

const Analytics = () => {
    const { currentUser } = useContext(AuthContext)
    const [emotionCollection, setEmotionCollection] = useState([{ time: "", emotion: "", id: "" }])

    // init database
    const db = getFirestore()

    // get collection data
    useEffect(() => {
        // collection reference
        const colRef = collection(db, "emotions")
        // queries
        const q = query(colRef, where("userId", "==", currentUser.uid))
        // orderBy("createdAt"),
        const unsubCol = onSnapshot(q, (snapshot) => {
            let emotionData = []
            setEmotionCollection([])
            snapshot.docs.forEach((doc) => {
                emotionData.push({ ...doc.data(), id: doc.id })
            })

            emotionData.forEach((item) => {
                let time = item.createdAt.toMillis()
                let time_decoded = new Date(time)
                let time_string = String(time_decoded)
                let emotion = item.emotion
                let item_id = item.id
                setEmotionCollection(emotionCollection => [...emotionCollection, { time: time_string, emotion: emotion, id: item_id }])
            })

        })
    }, []);

    const handleAPI = async () => {
        console.log(emotionCollection)
        console.log(currentUser.uid)
    }

    return (
        <div>
            <Head>
                <title>Analytics</title>
            </Head>
            <Layout>
                <Button variant="contained" onClick={() => handleAPI()}>Call API</Button>
                {emotionCollection.map(emotionItem => <Typography key={emotionItem.id}>{emotionItem.time} {emotionItem.emotion}</Typography>)}
            </Layout>
        </div>
    )
}

export default Analytics
