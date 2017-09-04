import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from 'app/guards/login.guard';
import { Dashboard } from 'app/pages/dashboard';
import { SocialLogin } from 'app/pages/social-login/social-login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' },
  // { path: '', component: SocialLogin },
  // { path: 'social-login', component: SocialLogin },
  // add AuthGuard to protect a route
  // { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
