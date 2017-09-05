import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.html',
  // styles: [require('./login.scss')],
  styleUrls: ['./login.scss'],
  // template: require('./login.html'),
})

export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  // constructor(fb: FormBuilder, private profile: ProfileService, private router: Router) {
  //   this.form = fb.group({
  //     'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
  //     'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
  //   });

  //   this.email = this.form.controls['email'];
  //   this.password = this.form.controls['password'];

  //   this.profile.isLoggedIn().subscribe(result => this.router.navigate(['/']));
  // }

  // onSubmit(values: Object): void {
  //   this.submitted = true;
  //   if (this.form.valid) {
  //     this.profile
  //       .login(this.email.value, this.password.value)
  //       .subscribe(result => this.router.navigate(['/']));
  //     // your code goes here
  //     // console.log(values);
  //   }
  // }

  error: any;
  
  /**
   * In the constructor we're using dependency injection on AngularFire and the Router. 
   * Inside of it, we're checking when this app loads if a user is currently logged in. 
   * If so, we're sending them to the /members route
   */
  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(authState => {
        if (authState) {
          this.router.navigateByUrl('/dashboard');
        }
      });
  }
  
  loginFb() {
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(
            (success) => {
                this.router.navigate(['/dashboard']);
              }).catch(
            (err) => {
                this.error = err;
            });
  }
}
