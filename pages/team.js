import Stack from '@mui/material/Stack';
import React from 'react'
import Layout from '../components/layout'
import { Typography } from '@mui/material'
import Head from 'next/head'
import Grid from '@mui/material/Grid';
import Image from 'next/image'



const Team = () => {
    return (
        <div>
            <Head>
                <title>Team</title>
            </Head>
            <Layout>
                    <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    >

                    <h1 style={{  width:'10%', paddingTop:10,   textAlignVertical: "center"}}> 
                    Unser Team
                    </h1>
                    <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <item style={{ width:300, paddingTop:20, paddingLeft:50}}> 
                            <Image src="/images/sofie.jpg" alt="logo" width="300" height= '300'/>
                            <Typography variant="h5">Sofie Pischl</Typography>
                            <Typography>Developer</Typography>
                        </item>
                        <item style={{ width:300, paddingTop:20, paddingLeft:100}}>
                        <Image src="/images/duc.jpg" alt="logo" width="300" height= '300'/>
                            <Typography variant="h5">Viet Duc Kieu</Typography>
                            <Typography>Developer</Typography>
                        </item>
                        <item style={{ width:300, paddingTop:20, paddingLeft:100}}>
                        <Image src="/images/HannahL.jpg" alt="logo" width="300" height= '300'/>
                            <Typography variant="h5">Hannah Leier</Typography>
                            <Typography>Developer</Typography>
                        </item>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <item style={{ width:300, paddingTop:20, paddingLeft:50}}>
                        <Image src="/images/Alisa.jpg" alt="logo" width="300" height= '300' flex='1' resizeMode= 'contain'/>
                            <Typography variant="h5">Alisa Rogner</Typography>
                            <Typography>Scrum Master</Typography>
                        </item>
                        <item style={{ width:300, paddingTop:20, paddingLeft:100}}>
                        <Image src="/images/Patrick.jpg" alt="logo" width="300" height= '300'/>
                            <Typography variant="h5">Patrick Niesen</Typography>
                            <Typography>Projekt Owner</Typography>
                        </item>
                        <item style={{ width:300, paddingTop:20, paddingLeft:100}}>
                        <Image src="/images/HannahE.jpg" alt="logo" width="300" height= '300'/>
                            <Typography variant="h5">Hannah Schult</Typography>
                            <Typography>Developer</Typography>
                        </item>
                    </Stack>
                    </Grid>
            </Layout>
        </div>
    )
}

<<<<<<< HEAD
export default Team
=======
>>>>>>> 6196fe74e9265b5c473a950511b8ed87a39b7f18

export default team
