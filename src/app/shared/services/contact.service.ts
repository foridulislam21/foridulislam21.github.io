import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private firestore: AngularFirestore) {}

  // tslint:disable-next-line: typedef
  PostMessage(input: any) {
    return this.firestore.collection('messages').add(input);
  }
}
