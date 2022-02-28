import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const PricingCard = ({ number, time, price }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        item
        container
        spacing={2}
        columns={{ xs: "12rem", sm: "6rem", md: "4 rem" }}
        sx={{
          backgroundColor: "primary.light",
          border: "0.8vh solid orange",
          borderRadius: 10,
          borderColor: "primary.backgroundDark",
          marginLeft: "2rem",
          marginRight: "2rem",
          marginBottom: "2rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "40rem",
          minHeight: "50rem",
        }}
      >
        <Typography
          variant="h4"
          mt={"3rem"}
          sx={{ textAlign: "center", width: "100rem" }}
        >
          <b>Paket {number} </b>
        </Typography>
        <Typography mb={"1rem"}>
          Sicherung und Analyse der Daten sowie ein abschließendes
          Beratungsgespräch
        </Typography>
        <Typography mb={"1rem"}>
          Anfragen werden innerhalb von maximal 2 Wochen bearbeitet
        </Typography>
        <Typography mb={"1rem"}>
          Technischer Service durch: First Level Support, Second Level Support
          und Third Level Support
        </Typography>
        <Typography mb={"1rem"}>
          Die App ist 24/7 verfügbar, der Service Wochentags 08:00 – 21:00 (MEZ)
          Samstags 08:00 – 14:00 (MEZ)
        </Typography>
        <Typography mb={"1rem"}>Kündigungsfrist: 3 Monate</Typography>
        <Typography variant="h5" mb={"2rem"} mt={"5rem"}>
          Laufzeit: {time} Monate
        </Typography>
        <Typography variant="h4" mb={"2rem"} textAlign="center">
          Preis: {price}€ pro Monat
        </Typography>
      </Grid>
    </Box>
  );
};

export default PricingCard;
