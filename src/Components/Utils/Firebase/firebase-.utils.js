import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA3I8cweVnjGxNGoBq-g8A2XllmRz5XHM",
    authDomain: "valid-clothing.firebaseapp.com",
    projectId: "valid-clothing",
    storageBucket: "valid-clothing.appspot.com",
    messagingSenderId: "315477263977",
    appId: "1:315477263977:web:60d9b8c4b5138705a184f8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const Provider = new GoogleAuthProvider();
Provider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, Provider);