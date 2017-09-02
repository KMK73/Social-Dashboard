import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    loggedIn: boolean;
    status: Observable<boolean>;
    private observer: Observer<boolean>;
    error: any;

    constructor(public af: AngularFireAuth, private router: Router) {
        // this.status = new Observable<boolean>(observer =>
        //     this.observer = observer,
        // ).share();
        this.af.authState.subscribe(authState => {
            if (authState) {
              this.router.navigateByUrl('/dashboard');
            }
          });
    }

    // changeState(newState: boolean) {
    //     if (this.observer !== undefined) this.observer.next(newState);
    // }

  
    loginFb() {
        this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(
                (success) => {
                    this.router.navigate(['/members']);
                    }).catch(
                (err) => {
                    this.error = err;
                });
    }
}
