import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBUR5ibSRnxF50cLoQXTnAaEnvvv-b1uY",
    authDomain: "clone-4ceeb.firebaseapp.com",
    projectId: "clone-4ceeb",
    storageBucket: "clone-4ceeb.appspot.com",
    messagingSenderId: "61033295385",
    appId: "1:61033295385:web:24462f06701ceea8a08488",
    measurementId: "G-SRNLRHHV66"
});

const auth = firebase.auth();

export { auth };