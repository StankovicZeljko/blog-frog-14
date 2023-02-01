import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewPageComponent } from './blog-overview-page.component';

import { RouterModule, Routes } from '@angular/router';
import { BlogOverviewCardModule } from '../../shared/blog-overview-card/blog-overview-card.module';
import { BlogService } from './services/blog.service';
import { BlogOverviewState } from './state/blog-overview-state';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { ResponsiveGridColumnsModule } from '../../shared/responsive-grid-columns/responsive-grid-columns.module';

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
    MatGridListModule,
    ResponsiveGridColumnsModule
  ],
  providers: [BlogService, BlogOverviewState],
})
export class BlogOverviewPageModule {}
