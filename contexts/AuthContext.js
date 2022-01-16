import React, { createContext, useState, useEffect } from 'react'
import firebaseClient from '../firebaseClient'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState("AuthContext works baby!")

    function signup(email, password) {
        console.log("signup from authContext was triggered")
        const auth = getAuth()
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        const auth = getAuth()
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        firebaseClient()
    }, [])


    const value = { currentUser, signup, login }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
