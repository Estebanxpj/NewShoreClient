import { SearchInputComponent } from './search-input/search-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { BannerComponent } from './banner/banner.component';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';
import { CardComponent } from './card/card.component';
import { CurrencyPipe } from '../pipes/currency.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    ButtonComponent,
    SearchInputComponent,
    InputComponent,
    BannerComponent,
    AlertComponent,
    CardComponent,
    CurrencyPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    SearchInputComponent,
    InputComponent,
    BannerComponent,
    AlertComponent,
    CardComponent
  ]

})
export class CustomElementsModule { }
