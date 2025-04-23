import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPage } from './about.page';  // Import AboutPage component

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)  // Lazy load AboutPageModule
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Use forChild because this module is lazy-loaded
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
