import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {


  const url = state.url;
  const router = inject(Router);
  localStorage.setItem('url',url);

  const authService = inject(AuthService);

  if( authService.AuthStatus() === AuthStatus.authenticated ){ return true};
  if( authService.AuthStatus() === AuthStatus.checking ){ return false};

 router.navigateByUrl('/auth/login');
 return false;

};
