import React, { useRef } from "react";
import { EMOTIONEN } from "../constants/emotionen";

export default function Emotionmeter({ emotion, value = 0 }) {
  const RANGE = 100;
  const emotionvalue = EMOTIONEN[emotion.toUpperCase()];
  const width = 32 * 16;
  const length = Object.keys(EMOTIONEN).length;
  const arrowpos = (width / length) * emotionvalue;
  console.log(arrowpos);

  if (value !== 0) {
    arrowpos = (width / RANGE) * value;
  }

  return (
    <div>
      <div
        style={{
          height: "2rem",
          width: "32rem",
          background:
            "linear-gradient(90deg, rgba(251,97,7,1) 0%, rgba(255,192,0,1) 50%, rgba(92,128,1,1) 100%)",
        }}
      ></div>
      <div style={{ height: "2rem", position: "relative" }}>
        {(emotionvalue || value !== 0) && (
          <div
            style={{
              width: 0,
              height: "0",
              borderStyle: "solid",
              borderWidth: "0 17px 20px 17px",
              borderColor: "transparent transparent #000 transparent",
              transform: `translate(calc(${arrowpos}px - 17px),0)`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
