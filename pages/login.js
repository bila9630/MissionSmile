import React, { useState, useContext } from 'react'
import Grid from '@mui/material/Grid';
import { Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { AuthContext } from '../contexts/AuthContext';
import Image from 'next/image'
import Head from 'next/head'

const Login = () => {
    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authErrorMessage, setAuthErrorMessage] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    // func get trigged when user submit form
    const handleSubmit = (e) => {
        e.preventDefault()
        setEmailError(false)
        setPasswordError(false)

        // check if input is empty. If it is, Textfield style will turn red
        if (email === "") {
            setEmailError(true)
        }

        if (password === "") {
            setPasswordError(true)
        }

        // pass email and password to firebase
        if (email && password) {
            login(email, password)
                .then((cred) => {
                    window.location.href = "/"
                })
                .catch(function (error) {
                    const message = error.message
                    setAuthErrorMessage(message)
                })
        }

    }
    return (
        <>
            <Head>
                <title>Login</title>
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
                <Image src="/logo.png" alt="logo" width="256" height="128" />
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
                            <Typography>
                                {authErrorMessage}
                            </Typography>
                            <Button
                                type="submit"
                                variant="contained"
                            >
                                Log in
                            </Button>
                            <Box mt={3}>
                                <Link href="/signup">
                                    <a>Dont have an account? Sign up here</a>
                                </Link>
                            </Box>
                        </Box>

                    </form>
                </Grid>
            </Grid>
        </>

    )
}

export default Login
