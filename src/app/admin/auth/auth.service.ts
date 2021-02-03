import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar,
    private ngZone: NgZone
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }
  signUp(email, password) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendVerificationMail();
        this.setUserData(result.user);
      })
      .catch((error) => {
        this.snackBar.open(error.message, 'Ok', {
          duration: 5000,
        });
      });
  }
  async sendVerificationMail() {
    return (await this.afAuth.currentUser).sendEmailVerification().then(() => {
      this.router.navigateByUrl('verify-email-address');
    });
  }
  signIn(email, password) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('admin-panel');
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        this.snackBar.open(error.message, 'Ok', {
          duration: 5000,
        });
      });
  }
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  forgotPassword(passwordResetemail) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetemail)
      .then(() => {
        this.snackBar.open('Please check your mail inbox.', 'Ok', {
          duration: 5000,
        });
      })
      .catch((error) => {
        this.snackBar.open(error.message, 'Ok', {
          duration: 5000,
        });
      });
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }
  async googleAuth() {
    return await this.authLogin(this.googleAuth());
  }
  authLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('admin-panel');
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        this.snackBar.open(error.message, 'Ok', {
          duration: 5000,
        });
      });
  }
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('sign-in');
    });
  }
}
