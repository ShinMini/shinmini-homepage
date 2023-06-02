import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase/firebase';

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    console.log(auth.currentUser?.displayName);
    setCurrentUser(auth.currentUser);
  }, [auth]);

  return currentUser;
};
