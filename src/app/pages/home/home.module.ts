import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectComponent } from './redirect/redirect.component';
import { CustomElementsModule } from 'src/app/shared/custom-elements/custom-elements.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    RedirectComponent
  ],
  imports: [
    CommonModule,
    CustomElementsModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
