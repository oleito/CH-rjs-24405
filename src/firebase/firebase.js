import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAKeCrUAK2y2o4J23uVCnfymoDpEQV-lTs",
    authDomain: "coder-aa71d.firebaseapp.com",
    projectId: "coder-aa71d",
    storageBucket: "coder-aa71d.appspot.com",
    messagingSenderId: "696267339807",
    appId: "1:696267339807:web:8586b6bfacf9366d5c3d2a"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}