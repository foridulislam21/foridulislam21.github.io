import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private db: AngularFirestore) {}
  // tslint:disable-next-line: typedef
  getAboutList() {
    return this.db.collection('abouts').snapshotChanges();
  }
}
