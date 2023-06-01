export const EMULATOR = import.meta.env.VITE_USE_FIREBASE_EMULATOR;

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

export const staticConfig = {
  apiKey: 'AIzaSyCdDljQYZW69d9McrVboTuvUBcSevwFYMY',
  authDomain: 'react-crud-125f3.firebaseapp.com',
  projectId: 'react-crud-125f3',
  storageBucket: 'react-crud-125f3.appspot.com',
  messagingSenderId: '369367757700',
  appId: '1:369367757700:web:5046258c9b5a95f01963d1',
};
