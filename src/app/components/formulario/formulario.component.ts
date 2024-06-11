import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../../../interfaces/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output()  datosEnviados = new EventEmitter<Persona>;

  persona: Persona = {
    nombre:'',
    edad: 0,
    apellido: '',
    domicilio: ''
  }

  enviarDatos(){
    //console.log(this.persona);
    this.datosEnviados.emit(this.persona);
  }
}
