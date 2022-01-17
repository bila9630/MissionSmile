import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from "firebase/auth"

// set up firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyA3tGm05j4u_Q1fUYJFgcFtwH2FrBiwKz4",
    authDomain: "project-smile-684af.firebaseapp.com",
    projectId: "project-smile-684af",
    storageBucket: "project-smile-684af.appspot.com",
    messagingSenderId: "665363154601",
    appId: "1:665363154601:web:7ecba6646c58d6740c4bb8"
};

let firebaseApp

if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
}

export const app = firebaseApp
export const auth = getAuth(app)
