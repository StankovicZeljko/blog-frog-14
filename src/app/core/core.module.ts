import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthConfigModule } from './auth/auth-config.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundPageComponent } from './static/page-not-found-page/page-not-found-page.component';
import { ErrorPageComponent } from './static/error-page/error-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [PageNotFoundPageComponent, ErrorPageComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule,
    AuthConfigModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [PageNotFoundPageComponent, ErrorPageComponent, SidebarComponent],
})
export class CoreModule {}
