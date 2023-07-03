import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: RedirectComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
