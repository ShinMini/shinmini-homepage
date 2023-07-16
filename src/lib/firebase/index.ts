import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from './constants';

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// export const log = (event: string, data?: any) => {
//   logEvent(analytics, event, data);
// };

export { app, auth, provider, firestore, storage, analytics };
