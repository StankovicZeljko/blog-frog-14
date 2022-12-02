import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewPageComponent } from './blog-overview-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: BlogOverviewPageComponent
}];

@NgModule({
  declarations: [
    BlogOverviewPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BlogOverviewPageComponent
  ]
})
export class BlogOverviewPageModule { }
