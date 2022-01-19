import Stack from '@mui/material/Stack';
import React from 'react'
import Layout from '../components/layout'
import { Typography } from '@mui/material'
import Head from 'next/head'



const team = () => {
    return (
        <div>
            <Head>
                <title>Team</title>
            </Head>
            <Layout>
            <div >
                <h1 style={{hight:250, width:250, paddingTop:10, paddingLeft:475 ,  textAlignVertical: "center"}}> 
                    Unser Team
                    </h1>
                    <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <item style={{ width:300, paddingTop:20, paddingLeft:50}}>
                            <img src="./images/sofie.jpg" alt="" 
                            style={{ width:300, paddingTop:20}}/>
                            <Typography variant="h5">Sofie Pischl</Typography>
                            <Typography>Developer</Typography>
                        </item>
                        <item style={{ width:300, paddingTop:20, paddingLeft:100}}>
                            <img src="./images/duc.jpg" alt="" 
                            style={{ width:300, paddingTop:20}}/>
                            <Typography variant="h5">Viet Duc Kieu</Typography>
                            <Typography>Developer</Typography>
                        </item>
                        <item style={{ width:300, paddingTop:20, paddingLeft:100}}>
                            <img src="./images/HannahL.jpg" alt="" name="Hannah" 
                            style={{ width:300, paddingTop:20}}/>
                            <Typography variant="h5">Hannah Leier</Typography>
                            <Typography>Developer</Typography>
                        </item>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <item style={{ width:300, paddingTop:20, paddingLeft:50}}>
                            <img src="./images/sofie.jpg" alt="" 
                            style={{ width:300, paddingTop:20}}/>
                            <Typography variant="h5">Alisa Rogner</Typography>
                            <Typography>Scrum Master</Typography>
                        </item>
                        <item style={{ width:300, paddingTop:20, paddingLeft:100}}>
                            <img src="./images/Patrick.jpg" alt="" 
                            style={{  width:300, paddingTop:20}}/>
                            <Typography variant="h5">Patrick Niesen</Typography>
                            <Typography>Projekt Owner</Typography>
                        </item>
                        <item style={{ width:300, paddingTop:20, paddingLeft:100}}>
                            <img src="./images/HannahE.jpg" alt="" 
                            style={{ width:300, paddingTop:20}}/>
                            <Typography variant="h5">Hannah Schult</Typography>
                            <Typography>Developer</Typography>
                        </item>
                    </Stack>
            </div>
            </Layout>
        </div>
    )
}

export default team

        
