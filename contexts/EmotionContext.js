import React, { useContext, useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { AuthContext } from "./AuthContext";

const EmotionContext = React.createContext();

export function useEmotions() {
  return useContext(EmotionContext);
}

export function EmotionProvider({ children }) {
  const [resultEmotion, setResultEmotion] = useState("nothing");

  const { currentUser } = useContext(AuthContext);

  // init database
  const db = getFirestore();

  const [emotionCollection, setEmotionCollection] = useState([]);
  const [emotionScore, setEmotionScore] = useState(0);

  function getData() {
    const colRef = collection(db, "emotions");
    // queries
    const q = query(
      colRef,
      where("userId", "==", currentUser.uid),
      orderBy("createdAt", "desc")
    );

    const unsubCol = onSnapshot(q, (snapshot) => {
      let emotionData = [];
      snapshot.docs.forEach((doc) => {
        emotionData.push({ ...doc.data(), id: doc.id });
      });
      emotionData.forEach((item) => {
        setEmotionCollection((emotionCollection) => [
          ...emotionCollection,
          { emotion: item.emotion, id: item.id },
        ]);
      });
    });
  }

  function calcResult() {
    let totalPoint = 0;
    let j = 0;

    emotionCollection.forEach((element) => {
      if (element.emotion === "happy") {
        totalPoint += 100;
      } else if (element.emotion === "sad") {
        totalPoint += 0;
      } else if (element.emotion === "angry") {
        totalPoint += 25;
      } else if (element.emotion === "neutral") {
        totalPoint += 50;
      } else if (element.emotion === "fear") {
        totalPoint += 0;
      } else if (element.emotion === "surprise") {
        totalPoint += 75;
      } else if (element.emotion === "disgust") {
        totalPoint += 25;
      }
      j++;
      return totalPoint, j;
    }),
      console.log(totalPoint / j);
    return totalPoint / j;
  }

  const value = {
    resultEmotion,
    setResultEmotion,
    emotionScore,
    setEmotionScore,
    getData,
    calcResult,
  };

  return (
    <EmotionContext.Provider value={value}>{children}</EmotionContext.Provider>
  );
}
