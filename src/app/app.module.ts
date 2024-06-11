import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RecibeFormularioComponent } from './components/recibe-formulario/recibe-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    PadreComponent,
    HijoComponent,
    FormularioComponent,
    RecibeFormularioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
