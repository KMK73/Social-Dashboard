import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  currentUser: firebase.User; 

  constructor(private afDB: AngularFireDatabase) {

  }

   writeFacebookUserData(userId, token) {
    this.afDB.database.ref('users/' + userId).set({
      user_id: userId,
      facebookToken: token,
    });
  }

}
