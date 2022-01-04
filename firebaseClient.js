import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyA3tGm05j4u_Q1fUYJFgcFtwH2FrBiwKz4",
    authDomain: "project-smile-684af.firebaseapp.com",
    projectId: "project-smile-684af",
    storageBucket: "project-smile-684af.appspot.com",
    messagingSenderId: "665363154601",
    appId: "1:665363154601:web:7ecba6646c58d6740c4bb8"
};

export default function firebaseClient() {
    if (!firebaseConfig.apps.length) {
        initializeApp(firebaseConfig)
    }
}
