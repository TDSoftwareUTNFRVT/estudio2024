import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RecibeFormularioComponent } from './components/recibe-formulario/recibe-formulario.component';

import { HttpClientModule} from '@angular/common/http';
import { RickComponent } from './components/rick/rick.component';
@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    PadreComponent,
    HijoComponent,
    FormularioComponent,
    RecibeFormularioComponent,
    RickComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
