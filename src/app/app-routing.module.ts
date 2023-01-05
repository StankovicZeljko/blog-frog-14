import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/auth/authentication.guard';
import { ErrorPageComponent } from './core/static/error-page/error-page.component';
import { PageNotFoundPageComponent } from './core/static/page-not-found-page/page-not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    loadChildren: () => import('./features/blog-overview-page/blog-overview-page.module')
      .then(m => m.BlogOverviewPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./features/blog-detail-page/blog-detail-page.module')
    .then(m => m.BlogDetailPageModule)
  },
  {
    path: 'add-blog',
    loadChildren: () => import('./features/add-blog-page/add-blog-page.module').then(m => m.AddBlogPageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  { path: '**', component: PageNotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
