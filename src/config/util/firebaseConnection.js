
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBjSAc5JP0i47GT4H8691-FKSANUUHAQsc",
  authDomain: "restaurante-71324.firebaseapp.com",
  projectId: "restaurante-71324",
  storageBucket: "restaurante-71324.appspot.com",
  messagingSenderId: "813976809049",
  appId: "1:813976809049:web:2345c1d9639c024cab0b48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

const db = getFirestore(app);
const storage = getStorage(app);


export {app, auth, db,storage};