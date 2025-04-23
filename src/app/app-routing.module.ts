import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Define the routes for the app
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' // Redirect empty path to home
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) // Lazy load HomePageModule
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then(m => m.AboutPage) // Standalone AboutPage
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
