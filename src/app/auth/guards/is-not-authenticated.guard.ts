import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  const url = state.url;
  const router = inject(Router);
  localStorage.setItem('url',url);

  const authService = inject( AuthService );

  if( authService.AuthStatus() == AuthStatus.authenticated){
      router.navigateByUrl('/dashboard');
        return false };


 return true;
};
