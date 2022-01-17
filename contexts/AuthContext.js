import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../firebaseClient'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged
} from 'firebase/auth'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
                setTimeout(1)
            } else {
                setCurrentUser(null)
            }
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <>Loading...</>
    }


    const value = { currentUser, signup, login, logout }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
