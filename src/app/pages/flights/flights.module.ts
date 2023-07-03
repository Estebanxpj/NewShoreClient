import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyComponent } from './journey/journey.component';
import { CustomElementsModule } from 'src/app/shared/custom-elements/custom-elements.module';
import { FlightRoutingModule } from './flight-routing.module';



@NgModule({
  declarations: [
    JourneyComponent
  ],
  imports: [
    CommonModule,
    CustomElementsModule,
    FlightRoutingModule,
  ]
})
export class FlightsModule { }
