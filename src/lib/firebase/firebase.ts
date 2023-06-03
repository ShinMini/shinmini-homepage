/* eslint-disable react-hooks/rules-of-hooks */

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './constants';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { useFirestore, useAuth, useStorage } from './hooks';
// Your web app's Firebase configuration

// Initialize Firebase
const firebaseAppInstance = initializeApp(firebaseConfig);

// Auth for using firebase features
export const auth = useAuth(firebaseAppInstance);

// Firebase custom features - optional
const firestore = useFirestore(firebaseAppInstance);
const storage = useStorage(firebaseAppInstance);
const analytics = getAnalytics(firebaseAppInstance);

// export firebase optional feature object
const firebase = {
  firebaseAppInstance,
  firestore,
  storage,
  analytics,
};

export { firebase };

// turn on the Firebase analytics option
logEvent(analytics, 'notification_received');
