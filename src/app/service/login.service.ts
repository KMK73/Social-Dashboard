import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FirebaseService } from 'app/service/firebase-service.service';

@Injectable()
export class LoginService {
    error: any;
    currentUser: firebase.User; 
    googleProvider = new firebase.auth.GoogleAuthProvider(); 

    constructor(public af: AngularFireAuth, private router: Router, private firebaseService: FirebaseService) {
        this.currentUser = this.af.auth.currentUser; 
        console.log('current', this.currentUser); 
    }


    loginFb() {

        return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(
                (success) => {
                    debugger; 
                    console.log('success', success); 
                    
                    this.currentUser = success; 
                      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    let token = success.credential.accessToken;
                    console.log('token', token); 
                    console.log('uid', success.user.uid); 
                    
                    // write data to database 
                    this.firebaseService.writeFacebookUserData(success.user.uid, token); 

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
