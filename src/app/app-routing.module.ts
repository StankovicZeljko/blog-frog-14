import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
