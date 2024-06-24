import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../interfaces/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-recibe-formulario',
  templateUrl: './recibe-formulario.component.html',
  styleUrls: ['./recibe-formulario.component.css']
})
export class RecibeFormularioComponent implements OnInit{
  personas: Persona[] = [];

  persona: Persona = {
    nombre:'',
    edad: 0,
    apellido: '',
    domicilio: ''
  };

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
    this.personas = this.personaService.obtenerPersonas();    
  }

  mostrarDatos(datos:Persona){
    this.persona = datos;
    console.log(this.persona);
  }
}
