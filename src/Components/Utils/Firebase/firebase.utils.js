import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithPopup, signInWithRedirect, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
import { doc, getDoc, setDoc, getFirestore, writeBatch, collection, query, getDocs, addDoc } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAA3I8cweVnjGxNGoBq-g8A2XllmRz5XHM",
  authDomain: "valid-clothing.firebaseapp.com",
  projectId: "valid-clothing",
  storageBucket: "valid-clothing.appspot.com",
  messagingSenderId: "315477263977",
  appId: "1:315477263977:web:60d9b8c4b5138705a184f8"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


const Provider = new GoogleAuthProvider();
Provider.setCustomParameters({
  prompt: 'select_account'
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, Provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, Provider);

export const db = getFirestore()

export const addCollectionsAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  })
  await batch.commit()
  console.log('done')
}

export const getCategories = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}


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

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callBack) => {
  onAuthStateChanged(auth, callBack)
}


//Methods to handle and or manage transaction history from database

const transactionRef = collection(db, 'transactions')



// Function to upload Flutterwave transaction data to Firestore
export const addNewTransactionHistory = async ({flutterwaveData}) => {
  try {

    const {
      amount,
      customer: { email, name },
      tx_ref,
      status,
      flw_ref,
    } = flutterwaveData;

    // Create an object with the extracted data
    const transactionData = {
      amount,
      email,
      name,
      created_at: new Date(), 
      transaction_id: flw_ref, 
      status,
      tx_ref,
    };

    // Add the transaction data to Firestore
    await addDoc(transactionRef, transactionData);

    console.log('Flutterwave transaction data uploaded to Firestore successfully');
  } catch (error) {
    console.error('Error uploading Flutterwave transaction data to Firestore:', error);
  }
};


// Function to retrieve transaction history for a specific user from Firestore
export const fetchTransactionHistory = async (userId) => {
  try {
    // Get a reference to the Firestore user document
    const userDocRef = doc(db, 'users', userId);

    // Create a reference to the 'transactions' subcollection
    const transactionCollection = collection(userDocRef, 'transactions');

    // Retrieve all documents from the 'transactions' subcollection
    const querySnapshot = await getDocs(transactionCollection);

    // Initialize an empty array to store the user's transactions
    const transactions = [];

    // Loop through the documents in the query snapshot
    querySnapshot.forEach((doc) => {
      // Get the data for each transaction
      const transactionData = doc.data();

      // Add the transaction data to the array
      transactions.push(transactionData);
    });

    // Return the array of transactions
    return transactions;
  } catch (error) {
    console.error('Error retrieving transaction history for user:', error);
    throw error; // Handle the error as needed in your component
  }
};

