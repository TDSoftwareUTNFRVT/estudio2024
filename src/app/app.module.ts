import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
