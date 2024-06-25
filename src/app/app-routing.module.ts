import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecibeFormularioComponent } from './components/recibe-formulario/recibe-formulario.component';
import { PadreComponent } from './components/padre/padre.component';
import { RickComponent } from './components/rick/rick.component';

const routes: Routes = [
  {
    path:'',
    component: RecibeFormularioComponent
  },
  {
    path:'padre',
    component: PadreComponent
  },
  {
    path:'rick',
    component: RickComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
