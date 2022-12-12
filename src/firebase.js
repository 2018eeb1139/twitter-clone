import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwtbAMzfQHfsk6VpmBN0800_k5MMNmdkk",
    authDomain: "twitter-clone-5aa9e.firebaseapp.com",
    projectId: "twitter-clone-5aa9e",
    storageBucket: "twitter-clone-5aa9e.appspot.com",
    messagingSenderId: "1019713114109",
    appId: "1:1019713114109:web:de1f82513c5805b376d394",
    measurementId: "G-M3JQ7W2QV3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;