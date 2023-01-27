import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogPageComponent } from './add-blog-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BlogService } from './services/blog.service';
import { AddBlogState } from './state/add-blog-state';


const routes: Routes = [
  {
    path: '',
    component: AddBlogPageComponent,
  },
];

@NgModule({
  declarations: [AddBlogPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [
    BlogService,
    AddBlogState
  ]
})
export class AddBlogPageModule {}
