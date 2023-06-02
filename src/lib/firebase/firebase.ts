// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './constants';
import { useAuth } from './hooks';
// Your web app's Firebase configuration

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = useAuth(firebaseApp);
