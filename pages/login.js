import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsernameError(false)
        setPasswordError(false)

        if (username === "") {
            setUsernameError(true)
        }

        if (password === "") {
            setPasswordError(true)
        }

        if (username && password) {
            console.log(username, password)
            window.location.href = "/"
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
        >
            <Grid item xs={3}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                >
                    Project Smile
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        onChange={(e) => setUsername(e.target.value)}
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        error={usernameError}
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
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Login/Sign up
                        </Button>
                    </Box>

                </form>
            </Grid>

        </Grid>
    )
}

export default Login
