import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Emotionmeter from "../components/emotionmeter";
import Layout from "../components/layout";
import WindowWidth from "../contexts/Bgcontext";
import { useEmotions } from "../contexts/EmotionContext";
import Grid from "@mui/material/Grid";

const Analytics = () => {
  const [emotionResult, setEmotionResult] = useState(0);

  const { emotionScore, resultEmotion, calcResult } = useEmotions();
  const [score, setScore] = useState(0);

  //set backgroundimage
  const imageUrl =
    WindowWidth >= 650
      ? "./background-white-mobile.jpg"
      : "./background-white.jpg";

  // get collection data
  useEffect(() => {
    // collection reference
    setEmotionResult(calcResult());
    setScore(emotionScore);
  }, [resultEmotion]);

  return (
    <div>
      <Head>
        <title>Analytics</title>
      </Head>
      <Layout sx={{}}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "80vh",
          }}
        >
          <Stack>
            <div component="div" display="inline">
              <br></br>
              <br></br>
              <br></br>
              <Typography>
                Here you can see the average of all your emotions.
              </Typography>
              <br></br>
              <br></br>
              <Emotionmeter emotion={resultEmotion} value={emotionResult} />
              <Typography>
                Current Emotion:{" "}
                <Box sx={{ fontWeight: "bold" }} display="inline">
                  {resultEmotion}
                </Box>
              </Typography>
            </div>

            <Typography component="div" sx={{ paddingTop: "1.5rem" }}>
              Your current average Emotion result:
              <Box sx={{ fontWeight: "bold" }} display="inline">
                {emotionResult}
              </Box>
            </Typography>
          </Stack>
        </Grid>
      </Layout>
    </div>
  );
};

export default Analytics;
