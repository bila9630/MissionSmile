import { Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import { Box, fontSize } from '@mui/system';
import Stack from '@mui/material/Stack';


const Pricing = () => {
    return (
        <div>
            <Head>
                <title>Pricing</title>
            </Head>
            <Layout>
                <h1 style={{paddingLeft:'45%', paddingRight:'45%'}}> Pricing </h1>
                <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    style={{paddingLeft:20, paddingRight:20}}>
                <Box sx={{ border:1, width: '80rem', height:'45rem',  borderRadius: 4, backgroundColor: '  lightblue '}}>
                    <h1 >Paket 1  </h1> 
                    <p style={{ fontSize: '22px' }}>Sicherung und Analyse der Daten sowie ein <br/> Abschließendes Beratungsgespräch</p>
                    <p style={{ fontSize: '22px' }}>Anfragen werden innerhalb von maximal <br/>2 Wochen bearbeitet</p>
                    <p style={{ fontSize: '22px' }}>Technischer Service durch: First Level Support,<br/> Second Level Support und Third Level Support</p>
                    <p style={{ fontSize: '22px' }}>Die App ist 24/7 verfügbar, der Service <br/> Wochentags 08:00 – 21:00 (MEZ) <br/> Samstags 08:00 – 14:00 (MEZ)</p>
                    <p style={{ fontSize: '22px' }}>Kündigungsfrist: 3 Monate</p> <br/>
                    <h1>Laufzeit: 3 Monate</h1>
                    <h1>Preis: 150€ pro Monat</h1>
                </Box>
                <Box sx={{border:1, width: '80rem', height:'45rem', borderRadius: 4, backgroundColor: ' lightblue ' }}>
                    <h1>Paket 2</h1>
                    <p style={{ fontSize: '22px' }}>Sicherung und Analyse der Daten sowie ein <br/> Abschließendes Beratungsgespräch</p>
                    <p style={{ fontSize: '22px' }}>Anfragen werden innerhalb von maximal <br/>2 Wochen bearbeitet</p>
                    <p style={{ fontSize: '22px' }}>Technischer Service durch: First Level Support,<br/> Second Level Support und Third Level Support</p>
                    <p style={{ fontSize: '22px' }}>Die App ist 24/7 verfügbar, der Service <br/> Wochentags 08:00 – 21:00 (MEZ) <br/> Samstags 08:00 – 14:00 (MEZ)</p>
                    <p style={{ fontSize: '22px' }}>Kündigungsfrist: 3 Monate</p> <br/>
                    <h1>Laufzeit: 1 Jahre</h1>
                    <h1>Preis: 125€ pro Monat</h1>
                    </Box>
                <Box sx={{border:1, width: '80rem', height:'45rem',  borderRadius: 4, backgroundColor: ' lightblue ' }}>
                    <h1>Paket 3 </h1>
                    <p style={{ fontSize: '22px' }}>Sicherung und Analyse der Daten sowie ein <br/> Abschließendes Beratungsgespräch</p>
                    <p style={{ fontSize: '22px' }}>Anfragen werden innerhalb von maximal <br/>2 Wochen bearbeitet</p>
                    <p style={{ fontSize: '22px' }}>Technischer Service durch: First Level Support,<br/> Second Level Support und Third Level Support</p>
                    <p style={{ fontSize: '22px' }}>Die App ist 24/7 verfügbar, der Service <br/> Wochentags 08:00 – 21:00 (MEZ) <br/> Samstags 08:00 – 14:00 (MEZ)</p>
                    <p style={{ fontSize: '22px' }}>Kündigungsfrist: 3 Monate</p> <br/>
                    <h1>Laufzeit: 2 Jahre</h1>
                    <h1>Preis: 100€ pro Monat </h1> 
                </Box>
                </Stack>
            </Layout>
        </div>
    )
}

export default Pricing
