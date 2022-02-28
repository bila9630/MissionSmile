import { Grid } from "@mui/material";
import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import WindowWidth from "../contexts/Bgcontext";
import PricingCard from "../components/pricingCard";

const Pricing = () => {
  //set background images
  const imageUrl =
    WindowWidth >= 650
      ? "./background-white-mobile.jpg"
      : "./background-white.jpg";

  return (
    <div>
      <Head>
        <title>Pricing</title>
      </Head>
      <Layout>
        <Grid
          container
          justify="center"
          style={{ minHeight: "100vh", marginTop: "3rem" }}
          sx={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <PricingCard number={"1"} time={"3"} price={"150"} />
          <PricingCard number={"2"} time={"12"} price={"125"} />
          <PricingCard number={"3"} time={"24"} price={"100"} />
        </Grid>
      </Layout>
    </div>
  );
};

export default Pricing;
