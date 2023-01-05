import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map, Observable } from 'rxjs';
import { hasRole } from './jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private oidcSecurityService: OidcSecurityService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.oidcSecurityService.checkAuth().pipe(
      map((loginResponse) => {
        if (
          loginResponse.isAuthenticated &&
          hasRole('user', loginResponse.accessToken)
        ) {
          return true;
        } else {
          this.oidcSecurityService.authorize();
          return false;
        }
      })
    );
  }
}
