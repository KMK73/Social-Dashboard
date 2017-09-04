import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    error: any;
    currentUser: firebase.User; 
    googleProvider = new firebase.auth.GoogleAuthProvider(); 

    constructor(public af: AngularFireAuth, private router: Router) {
        this.currentUser = this.af.auth.currentUser; 
        console.log('current', this.currentUser); 
    }


    loginFb() {

        return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(
                (success) => {
                    return success; 
                    }).catch(
                (err) => {
                    return err;
                }); 
    }

    loginWithGoogle() {

        return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(
            (success) => {
                return success; 
                }).catch(
            (err) => {
                return err;
            }); 
    }

}
