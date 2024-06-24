import { Injectable } from '@angular/core';
import { Persona } from '../../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personas: Persona[] = [
    {
      nombre:'Cesar',
      edad: 27,
      apellido: 'Barrionuevo',
      domicilio: 'SSS'
    }
  ];

  constructor() { }

  obtenerPersonas(): Persona[]{
    return this.personas;
  }

}
