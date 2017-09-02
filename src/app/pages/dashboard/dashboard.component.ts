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

  constructor(public af: AngularFireAuth, private router: Router) {
    
    // name: string; 

    this.af.authState.subscribe(auth => {
      if (auth) {
        console.log(auth);
        // this.name = auth.displayName;
      }
    });
    
  }

  logout() {
    this.af.auth.signOut();
    console.log('logged out');
    debugger; 
    this.router.navigateByUrl('/social-login');
  }

}
