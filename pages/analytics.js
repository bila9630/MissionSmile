import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Emotionmeter from "../components/emotionmeter";
import Layout from "../components/layout";
import WindowWidth from "../contexts/Bgcontext";
import { useEmotions } from "../contexts/EmotionContext";

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
        <Stack
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "80vh",
          }}
          sx={{ mt: "4rem" }}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: "2rem", md: "4rem" }}
        >
          <div component="div" display="inline">
            <Emotionmeter emotion={resultEmotion} value={emotionResult} />
            <Typography>
              Emotion:{" "}
              <Box sx={{ fontWeight: "bold" }} display="inline">
                {resultEmotion}
              </Box>
            </Typography>
          </div>

          <Typography component="div" sx={{ paddingTop: "1.5rem" }}>
            Score:
            <Box sx={{ fontWeight: "bold" }} display="inline">
              {score}
            </Box>
          </Typography>

          <Typography component="div" sx={{ paddingTop: "1.5rem" }}>
            Emotion result:
            <Box sx={{ fontWeight: "bold" }} display="inline">
              {emotionResult}
            </Box>
          </Typography>
        </Stack>
      </Layout>
    </div>
  );
};

export default Analytics;
