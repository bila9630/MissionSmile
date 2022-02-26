import Stack from '@mui/material/Stack';
import React from 'react'
import Layout from '../components/layout'
import { Avatar, responsiveFontSizes, Typography } from '@mui/material'
import Head from 'next/head'
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import { responsiveProperty } from '@mui/material/styles/cssUtils';



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
                    alignItems= "center"
                    justify="center"
                    textAlign={"center"}
                    marginBottom={20}
                    >

                    <Typography variant="h3">Unser Team</Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 12, sm: 12, md: 4 }}>
                        <item style={{ width:320, height:320, paddingLeft:50, marginTop:40, responsiveProperty }}> 
                            <Avatar style={{width:280, height:280, alignContent: "center", backgroundColor:'orange', border: '5px solid orange', responsiveProperty}}>
                                <Image src="/images/sofie.jpg" alt="logo" width="300" height= '300'/>
                            </Avatar>
                            <Typography variant="h5">Sofie Pischl</Typography>
                            <Typography>Developer</Typography>
                        </item>
                        <item style={{ width:320, height:320, paddingLeft:50, marginTop:40,responsiveProperty}}>
                            <Avatar style={{width:280, height:280, backgroundColor:'orange', border: '5px solid orange', responsiveProperty}}>    
                                <Image src="/images/duc.jpg" alt="logo" width="300" height= '300'/>
                            </Avatar>    
                            <Typography variant="h5">Viet Duc Kieu</Typography>
                            <Typography>Developer</Typography>
                        </item>
                        <item style={{ width:320, height:320, paddingLeft:50, marginTop:40, responsiveProperty}}>
                            <Avatar style={{width:280, height:280, backgroundColor:'orange', border: '5px solid orange', responsiveProperty}}>
                                <Image src="/images/HannahL.jpg" alt="logo" width="300" height= '300'/>
                            </Avatar>
                            <Typography variant="h5">Hannah Laier</Typography>
                            <Typography style={{marginBottom:20}}>Developer</Typography>
                        </item>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 12, sm: 12, md: 4 }}>
                        <item style={{ width:320, height:320, paddingLeft:50, marginTop:40,  responsiveProperty }}>
                            <Avatar style={{width:280, height:280, backgroundColor:'orange', border: '5px solid orange', responsiveProperty}}>
                                <Image src="/images/Alisa.jpg" alt="logo" width="300" height= '300' flex='1' resizeMode= 'contain'/>
                            </Avatar>
                            <Typography variant="h5">Alisa Rogner</Typography>
                            <Typography>Scrum Master</Typography>
                        </item>
                        <item style={{ width:320, height:320,  paddingLeft:50, marginTop:40, responsiveProperty}}>
                            <Avatar style={{width:280, height:280, backgroundColor:'orange', border: '5px solid orange', responsiveProperty}}>
                                <Image src="/images/Patrick.jpg" alt="logo" width="300" height= '300'/>
                            </Avatar>
                            <Typography variant="h5">Patrick Niesen</Typography>
                            <Typography>Projekt Owner</Typography>
                        </item>
                        <item style={{ width:320, height:320, paddingLeft:50, marginTop:40, responsiveProperty}}>
                            <Avatar style={{width:280, height:280, backgroundColor:'orange', border: '5px solid orange', responsiveProperty}}>
                                <Image src="/images/HannahE.jpg" alt="logo" width="300" height= '300'/>
                            </Avatar>
                            <Typography variant="h5">Hannah Schult</Typography>
                            <Typography>Developer</Typography>
                        </item>
                    </Stack>
                    </Grid>
            </Layout>
        </div>
    )
}

export default Team

