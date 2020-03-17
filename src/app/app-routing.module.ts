import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'news/:id',
    loadChildren: () => import('./news-detail/news-detail.module').then(m => m.NewsDetailPageModule)
  },
  {
    path: 'klubi',
    loadChildren: () => import('./klubi/klubi.module').then(m => m.KlubiPageModule)
  },
  {
    path: 'ekipi',
    loadChildren: () => import('./ekipi/ekipi.module').then(m => m.EkipiPageModule)
  },
  {
    path: 'ekipi/:id',
    loadChildren: () => import('./ekipi-detail/ekipi-detail.module').then( m => m.EkipiDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
