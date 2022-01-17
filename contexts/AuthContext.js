import React, { createContext, useState, useEffect } from 'react'
import firebaseClient from '../firebaseClient'
import {
    createUserWithEmailAndPassword, getAuth,
    signInWithEmailAndPassword, onAuthStateChanged
} from 'firebase/auth'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        console.log("signup from authContext was triggered")
        const auth = getAuth()
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        const auth = getAuth()
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        const auth = getAuth()
        return auth.signOut()
    }

    useEffect(() => {
        firebaseClient()
        const auth = getAuth()
        const unsubAuth = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })

        return unsubAuth
    }, [])


    const value = { currentUser, signup, login, logout }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
