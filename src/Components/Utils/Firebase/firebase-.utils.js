import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore"


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
export const signInWithGooglePopup = () => signInWithPopup(auth, Provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, Provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const loginAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}