import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent : () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'fav',
    // component: FavoritesComponent
    loadComponent : () => import('./pages/favorites/favorites.component').then(m => m.FavoritesComponent)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
