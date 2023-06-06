/* eslint-disable @typescript-eslint/ban-ts-comment */
import auth from '@lib/firebase';

import { FirebaseError } from 'firebase/app';
import { signInWithPopup, GoogleAuthProvider, Auth, User } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export class GoogleAuth {
  // @ts-ignore
  private provider = new GoogleAuthProvider();
  // @ts-ignore
  private auth: Auth | null = null;
  // @ts-ignore
  private user: User | null = null;
  // @ts-ignore
  private token: string | null = null;

  constructor(auth: Auth) {
    this.auth = auth;
  }

  static get auth() {
    return this.auth;
  }

  static get provider() {
    return this.provider;
  }

  static set user(user: User | null) {
    this.user = user;
  }

  static get user() {
    return this.user;
  }

  static set token(token: string) {
    this.token = token;
  }

  static get token() {
    return this.token;
  }

  async signIn(callback: () => void) {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuth.provider.credentialFromResult(result);

      this.token = credential?.accessToken;
      this.user = result.user;
      callback();
    } catch (error) {
      this.printError(error as FirebaseError);
    }
    return { user: this.user, token: this.token };
  }

  async signOut(callback?: () => void) {
    await auth.signOut();

    this.token = '';
    this.user = null;

    callback && callback();
  }

  printError(error: FirebaseError) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`error code: ${errorCode}, error message: ${errorMessage}`);

      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(`email error: ${email}, credential error: ${credential}`);
    }
  }
}
