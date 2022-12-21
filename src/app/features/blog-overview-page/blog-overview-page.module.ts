import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewPageComponent } from './blog-overview-page.component';

import { RouterModule, Routes } from '@angular/router';
import { BlogOverviewCardModule } from '../../shared/blog-overview-card/blog-overview-card.module';
import { BlogService } from './services/blog.service';
import { BlogOverviewState } from './state/blog-overview-state';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: '',
    component: BlogOverviewPageComponent,
  },
];

@NgModule({
  declarations: [BlogOverviewPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlogOverviewCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [BlogService, BlogOverviewState],
})
export class BlogOverviewPageModule {}
