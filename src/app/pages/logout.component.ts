import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'logout',
    template: '',
  })
  
  export class LogoutComponent implements OnInit {
  
    constructor(private af: AngularFireAuth, private router: Router) {}
  
    ngOnInit() {
        this.af.auth.signOut();
        console.log('logged out');
        this.router.navigateByUrl('/social-login');
    }
  
  }