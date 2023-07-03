import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { JourneyComponent } from './journey/journey.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: JourneyComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightRoutingModule {}
