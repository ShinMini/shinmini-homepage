// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDflFvKeq09kuccPydAOyme1I6zBMhnIuI',
  authDomain: 'shinmini-homepage.firebaseapp.com',
  projectId: 'shinmini-homepage',
  storageBucket: 'shinmini-homepage.appspot.com',
  messagingSenderId: '808431700890',
  appId: '1:808431700890:web:c0b635ecf34436237a4823',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
