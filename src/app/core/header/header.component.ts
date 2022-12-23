import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { LoginResponse } from 'angular-auth-oidc-client';
import { map, Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  initials$: Observable<string>;
  loginResponse$ = new ReplaySubject<LoginResponse | null>();

  @Output('login') login$ = new EventEmitter();
  @Output('logoff') logoff$ = new EventEmitter();

  @Input() set loginResponse(value: LoginResponse | null) {
    this.loginResponse$.next(value);
  }

  constructor() {
    this.initials$ = this.loginResponse$.pipe(
      map((response) =>
        response?.userData?.preferred_username
          .split(/[._-]/)
          .map((token: string) => token.charAt(0))
          .join('')
      )
    );
  }
}
