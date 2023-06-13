import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './constants';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { GoogleAuthProvider } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth for using firebase features
const auth = getAuth(app);

const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

// export firebase optional feature object
const firebase = {
  app,
  auth,
  provider,
  firestore,
  storage,
  analytics,
};

logEvent(analytics, 'notification_received');

export { firebase };
