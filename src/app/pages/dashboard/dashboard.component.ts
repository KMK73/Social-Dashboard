import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
})
export class Dashboard {

  currentUser: firebase.User; 

  constructor(public af: AngularFireAuth, private router: Router) {
    
    // name: string; 

    this.af.authState.subscribe(auth => {
      if (auth) {
        console.log(auth);
        // this.name = auth.displayName;
        this.currentUser = auth; 
      }
    });
    
  }

  linkWithGoogle() {
    // Get reference to the currently signed-in user
    let prevUser = this.af.auth.currentUser;
    console.log(prevUser); 

    this.af.auth.currentUser.linkWithPopup(new firebase.auth.GoogleAuthProvider()).then(function(result) {
      // Accounts successfully linked.
      console.log(result);
      // show success alert 
    
    }).catch(function(error) {
      // Handle Errors here.
      // ...
      console.log(error); 
    });
  }

}
