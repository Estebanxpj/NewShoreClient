import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomElementsModule } from './shared/custom-elements/custom-elements.module';
import { RequestInterceptor } from './core/interceptors/requestInterceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { FlightsModule } from './pages/flights/flights.module';
import { HomeRoutingModule } from './pages/home/home-routing.module';
import { FlightRoutingModule } from './pages/flights/flight-routing.module';

@NgModule({
  declarations:[
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    CustomElementsModule,
    HomeModule,
    FlightsModule,
    HomeRoutingModule,
    FlightRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
