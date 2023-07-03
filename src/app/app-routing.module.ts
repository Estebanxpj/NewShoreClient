import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeTokenGuard } from './core/guards/authorizeToken.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'flights',
    canActivate: [AuthorizeTokenGuard],
    canLoad: [AuthorizeTokenGuard],
    loadChildren: () => import('./pages/flights/flights.module').then(m => m.FlightsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
