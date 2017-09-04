import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { LoginService } from "app/service/login.service";

@Component({
  selector: 'social-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLogin {

  error: any;
  
  /**
   * In the constructor we're using dependency injection on AngularFire and the Router. 
   * Inside of it, we're checking when this app loads if a user is currently logged in. 
   * If so, we're sending them to the /members route
   */
  constructor(public authService: LoginService, private af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(authState => {
        if (authState) {
          this.router.navigate(['pages']);
        }
      });

  }
  
  loginFb() {

    this.authService.loginFb()
      .then(
          (success) => {
              console.log(success); 
              this.router.navigate(['pages']);
            }).catch(
          (err) => {
              this.error = err;
          });
  }

  loginWithGoogle() {
    
        this.authService.loginWithGoogle()
          .then(
              (success) => {
                  console.log(success); 
                  this.router.navigate(['pages']);
                }).catch(
              (err) => {
                  this.error = err;
              });
  }

}
