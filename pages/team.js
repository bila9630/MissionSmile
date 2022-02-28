import Stack from "@mui/material/Stack";
import React from "react";
import Layout from "../components/layout";
import { Avatar, Typography } from "@mui/material";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import WindowWidth from "../contexts/Bgcontext";

const Team = () => {
    //set background images
    const imageUrl =
        WindowWidth >= 650
            ? "./background-white-mobile.jpg"
            : "./background-white.jpg";

    return (
        <div>
            <Head>
                <title>Team</title>
            </Head>
            <Layout>

                <Typography variant="h4" textAlign="center" m={2}>Our team</Typography>
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    justifyContent="center"
                    textAlign="center"
                    style={{ minHeight: "100vh" }}
                    sx={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <Grid item xs={12} sm={6} md={4} align="center">
                        <Avatar mx="auto" style={{ width: 280, height: 280, border: "0.8vh solid orange" }}>
                            <Image src="/images/sofie.jpg" alt="logo" width="280" height="280" />
                        </Avatar>
                        <Typography variant="h5">Sofie Pischl</Typography>
                        <Typography>Developer</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} align="center">
                        <Avatar style={{ width: 280, height: 280, border: "0.8vh solid orange" }}>
                            <Image src="/images/duc.jpg" alt="logo" width="280" height="280" />
                        </Avatar>
                        <Typography variant="h5">Viet Duc Kieu</Typography>
                        <Typography>Developer</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} align="center">
                        <Avatar style={{ width: 280, height: 280, border: "0.8vh solid orange" }}>
                            <Image src="/images/HannahL.jpg" alt="logo" width="280" height="280" />
                        </Avatar>
                        <Typography variant="h5">Hannah Laier</Typography>
                        <Typography>Developer</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} align="center">
                        <Avatar style={{ width: 280, height: 280, border: "0.8vh solid orange" }}>
                            <Image src="/images/Alisa.jpg" alt="logo" width="280" height="280" />
                        </Avatar>
                        <Typography variant="h5">Alisa Rogner</Typography>
                        <Typography>Scrum Master</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} align="center">
                        <Avatar style={{ width: 280, height: 280, border: "0.8vh solid orange" }}>
                            <Image src="/images/Patrick.jpg" alt="logo" width="280" height="280" />
                        </Avatar>
                        <Typography variant="h5">Patrick Niesen</Typography>
                        <Typography>Projekt Owner</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} align="center">
                        <Avatar style={{ width: 280, height: 280, border: "0.8vh solid orange" }}>
                            <Image src="/images/HannahE.jpg" alt="logo" width="280" height="280" />
                        </Avatar>
                        <Typography variant="h5">Hannah Schult</Typography>
                        <Typography>Developer</Typography>
                    </Grid>
                </Grid>
            </Layout>
        </div >
    );
};

export default Team;
