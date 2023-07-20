import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import type { FirebaseOptions } from 'firebase/app';

export const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// firebase analytics set up
logEvent(analytics, 'page_view', {
  page_title: 'ShinMini',
  page_location: 'https://shinmini.com',
  page_path: '/',
});

export { app, auth, provider, firestore, storage, analytics };
