import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ServerModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}