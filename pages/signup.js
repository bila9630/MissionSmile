import React, { useState, useContext } from 'react'
import Grid from '@mui/material/Grid';
import { Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { AuthContext } from '../contexts/AuthContext';
import Image from 'next/image'


const Signup = () => {
    const { signup } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [authErrorMessage, setAuthErrormessage] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [companyNameError, setCompanyNameError] = useState(false)

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

        if (companyName === "") {
            setCompanyNameError(true)
        }

        // pass email and password to firebase
        if (email && password && companyName) {
            signup(email, password)
                .then((cred) => {
                    console.log("user created:", cred.user)
                    window.location.href = "/"
                })
                .catch(function (error) {
                    const message = error.message
                    setAuthErrormessage(message)
                })
        }

    }
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
                    <TextField
                        onChange={(e) => setCompanyName(e.target.value)}
                        label="Company"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        error={companyNameError}
                    />
                    <Box textAlign="center" mt={3}>
                        <Typography>
                            {authErrorMessage}
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Sign up
                        </Button>
                        <Box mt={3}>
                            <Link href="/login">
                                <a>Already have an account? Log in here</a>
                            </Link>
                        </Box>
                    </Box>
                </form>
            </Grid>
        </Grid>
    )
}

export default Signup
