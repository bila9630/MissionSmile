import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

const PricingCard = ({ number, time, price }) => {
    return (
        <Grid item xs={12} sm={6} md={4}
            sx={{ backgroundColor: "primary.background", border: 4, borderRadius: 10, borderColor: "primary.backgroundDark" }}
        >
            <Typography variant="h4" textAlign="center" my={"2rem"}>Paket {number} </Typography>
            <Typography mb={"1rem"}>Sicherung und Analyse der Daten sowie ein abschließendes Beratungsgespräch</Typography>
            <Typography mb={"1rem"}>Anfragen werden innerhalb von maximal 2 Wochen bearbeitet</Typography>
            <Typography mb={"1rem"}>Technischer Service durch: First Level Support, Second Level Support und Third Level Support</Typography>
            <Typography mb={"1rem"}>Die App ist 24/7 verfügbar, der Service Wochentags 08:00 – 21:00 (MEZ) Samstags 08:00 – 14:00 (MEZ)</Typography>
            <Typography mb={"2rem"}>Kündigungsfrist: 3 Monate</Typography>
            <Typography variant="h5" mb={"2rem"} >Laufzeit: {time} Monate</Typography>
            <Typography variant="h4" textAlign="center">Preis: {price}€ pro Monat</Typography>
        </Grid>
    )
}

export default PricingCard