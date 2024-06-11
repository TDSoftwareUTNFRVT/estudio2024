import { Component } from '@angular/core';
import { Persona } from '../../../interfaces/persona';

@Component({
  selector: 'app-recibe-formulario',
  templateUrl: './recibe-formulario.component.html',
  styleUrls: ['./recibe-formulario.component.css']
})
export class RecibeFormularioComponent {

  persona: Persona = {
    nombre:'',
    edad: 0,
    apellido: '',
    domicilio: ''
  };

  mostrarDatos(datos:Persona){
    this.persona = datos;
    console.log(this.persona);
  }
}
