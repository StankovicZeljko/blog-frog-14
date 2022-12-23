import { Component } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { filter, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog-frog-14';

  loginResponse$: Observable<LoginResponse>;

  constructor(private oidcSecurityService: OidcSecurityService) {
    this.loginResponse$ = oidcSecurityService.checkAuth().pipe(
      filter((loginResponse) => !!loginResponse),
      tap((x) => console.log(x))
    );
  }

  login() {
    this.oidcSecurityService.authorize();
  }
  logout() {
    this.oidcSecurityService.logoff();
  }
}
