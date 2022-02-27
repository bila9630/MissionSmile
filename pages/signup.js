import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import { Typography, TextField, Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuthContext } from "../contexts/AuthContext";
import Image from "next/image";
import Head from "next/head";
import WindowWidth from "../contexts/Bgcontext";

const Signup = () => {
  const { signup } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authErrorMessage, setAuthErrormessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //set backgroundimage
  const imageUrl =
    WindowWidth >= 650
      ? "./background-yellow-mobile.jpg"
      : "./background-yellow.jpg";

  // func get trigged when user submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    // check if input is empty. If it is, Textfield style will turn red
    if (email === "") {
      setEmailError(true);
    }

    if (password === "") {
      setPasswordError(true);
    }

    // pass email and password to firebase
    if (email && password) {
      signup(email, password)
        .then((cred) => {
          window.location.href = "/";
        })
        .catch(function (error) {
          const message = error.message;
          setAuthErrormessage(message);
        });
    }
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <main>
        <Head>
          <title>Sign up</title>
        </Head>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Card
            sx={{
              bgcolor: "light",
              maxWidth: "32rem",
              pb: "3rem",
              pt: "3rem",
              mt: "3rem",
              borderRadius: 8,
              border: "0.4rem solid",
              borderColor: "primary.main",
            }}
          >
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              component={motion.div}
              sx={{ paddingLeft: "1rem", paddingRight: "1rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Image src="/logo.png" alt="logo" width="256" height="128" />
              <item xs={3}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    error={emailError}
                  />
                  <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    error={passwordError}
                  />
                  <Box textAlign="center" mt={3}>
                    <Typography>{authErrorMessage}</Typography>
                    <Button type="submit" variant="contained">
                      Sign up
                    </Button>
                    <Box mt={3}>
                      <Link href="/login">
                        <a>Already have an account? Log in here</a>
                      </Link>
                    </Box>
                  </Box>
                </form>
              </item>
            </Grid>
          </Card>
        </Grid>
      </main>
    </Grid>
  );
};

export default Signup;
