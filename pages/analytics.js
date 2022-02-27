import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout";
import { Typography } from "@mui/material";
import Head from "next/head";
import { AuthContext } from "../contexts/AuthContext";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import moment from "moment";
import WindowWidth from "../contexts/Bgcontext";

const Analytics = () => {
  const { currentUser } = useContext(AuthContext);
  const [emotionCollection, setEmotionCollection] = useState([
    { time: "", emotion: "", id: "" },
  ]);

  // init database
  const db = getFirestore();

  // get collection data
  useEffect(() => {
    // collection reference
    const colRef = collection(db, "emotions");
    // queries
    const q = query(
      colRef,
      where("userId", "==", currentUser.uid),
      orderBy("createdAt", "desc")
    );
    const unsubCol = onSnapshot(q, (snapshot) => {
      let emotionData = [];
      setEmotionCollection([]);
      snapshot.docs.forEach((doc) => {
        emotionData.push({ ...doc.data(), id: doc.id });
      });

      emotionData.forEach((item) => {
        let momentTime = moment(item.createdAt.toDate()).format("lll");
        setEmotionCollection((emotionCollection) => [
          ...emotionCollection,
          { time: momentTime, emotion: item.emotion, id: item.id },
        ]);
      });
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Analytics</title>
      </Head>
      <Layout>
        {emotionCollection.map((emotionItem) => (
          <Typography key={emotionItem.id}>
            {emotionItem.time} {emotionItem.emotion}
          </Typography>
        ))}
      </Layout>
    </div>
  );
};

export default Analytics;
