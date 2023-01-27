import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { LoginResponse } from 'angular-auth-oidc-client';
import { MatSidenav } from '@angular/material/sidenav';
import { hasRole } from '../auth/jwt';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  loginResponse$ = new ReplaySubject<LoginResponse>();
  initials$: Observable<string>;
  isAuthenticated: boolean = false;

  @Output('login') login$ = new EventEmitter();
  @Output('logoff') logoff$ = new EventEmitter();

  @Input() set loginResponse(value: LoginResponse | null) {
    if(value) {
      this.isAuthenticated = value.isAuthenticated;
      this.loginResponse$.next(value);
    }
  }

  @ViewChild('drawer', { static: false }) sidenav!: MatSidenav;

  showCreateButton$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.initials$ = this.loginResponse$.pipe(
      filter((response) => !!response),
      map((response) =>
        response?.userData?.preferred_username
          .split(/[._-]/)
          .map((token: string) => token.charAt(0))
          .join('')
      )
    );

    this.showCreateButton$ = this.loginResponse$.pipe(
      map((response) => hasRole('user', response?.accessToken))
    );
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
