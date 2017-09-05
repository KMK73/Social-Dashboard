import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private auth: AngularFireAuth, private router: Router) {}
    
    /**
   * canActivate decides if a designated route can be accessed, such as our /members component. 
   * It's checking authentication from an AngularFireAuth observable. 
   * If it's not authenticated (!authenticated), then they're denied and directed back to /login .
   */
  canActivate(): Observable<boolean> {
    console.log(this.auth.authState);
    return Observable.from(this.auth.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        console.log("Auth State", authenticated);
          if (!authenticated) {
            this.router.navigate(['/social-login']);
            // return false; 
          }else {
            return true; 
          }
      });
  }
}
