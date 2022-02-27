import { Button, Card, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import WindowWidth from "../contexts/Bgcontext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authErrorMessage, setAuthErrorMessage] = useState("");
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
      login(email, password)
        .then((cred) => {
          window.location.href = "/";
        })
        .catch(function (error) {
          const message = error.message;
          setAuthErrorMessage(message);
        });
    }
  };
  return (
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
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <main>
        <Container>
          <Head>
            <title>Login</title>
          </Head>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                sx={{ paddingLeft: "1rem", paddingRight: "1rem" }}
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  width="256rem"
                  height="128rem"
                />
                <Grid item xs={3}>
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
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                      >
                        Log in
                      </Button>
                      <Box mt={3}>
                        <Button
                          type="button"
                          variant="contained"
                          color="primary"
                        >
                          <Link href="/signup">
                            <a>Don&apos;t have an account? Sign up here</a>
                          </Link>
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Container>
      </main>
    </Grid>
  );
};

export default Login;
