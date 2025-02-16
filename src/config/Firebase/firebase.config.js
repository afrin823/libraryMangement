import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDWtDmaAb9i_4Tap1apg8rG-gKxtkbP-Vw",
    authDomain: "laibary-5a6d0.firebaseapp.com",
    projectId: "laibary-5a6d0",
    storageBucket: "laibary-5a6d0.appspot.com", // Corrected the URL
    messagingSenderId: "707859665821",
    appId: "1:707859665821:web:ec75f1b9838e418da69574",
    measurementId: "G-SMQX59MCQ7"
};

const app = initializeApp(firebaseConfig);
const imageDb = getStorage(app); // Added missing import
const auth = getAuth(app);

export { auth, imageDb, createUserWithEmailAndPassword };
