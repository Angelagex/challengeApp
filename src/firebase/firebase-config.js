import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA1yeZ8s06-xkzNsmBtSVdbEKust3zFfjM",
    authDomain: "challengeapp-cec7d.firebaseapp.com",
    projectId: "challengeapp-cec7d",
    storageBucket: "challengeapp-cec7d.appspot.com", 
    messagingSenderId: "741654274267",
    appId: "1:741654274267:web:76af61ea1cd7a119d7acfe"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}