import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailPageComponent } from './blog-detail-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
  {
    path: ':id',
    component: BlogDetailPageComponent
  }
];

@NgModule({
  declarations: [
    BlogDetailPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatToolbarModule,
  ]
})
export class BlogDetailPageModule { }
