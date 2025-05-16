// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxh5bKLm_LOznIFyZNoLcCkjasjqL5P4o",
    authDomain: "ai-assitant-b8e5a.firebaseapp.com",
    projectId: "ai-assitant-b8e5a",
    storageBucket: "ai-assitant-b8e5a.firebasestorage.app",
    messagingSenderId: "376807456802",
    appId: "1:376807456802:web:e593c082d28c9a26420a7b",
    measurementId: "G-YVD30J9NJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const firestore = getFirestore(app);