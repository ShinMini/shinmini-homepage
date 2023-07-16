import { getAnalytics, logEvent } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import app from './firebase';

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
logEvent(analytics, 'notification_received');

export { app, auth, provider, firestore, storage, analytics };
