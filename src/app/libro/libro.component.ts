import { Component } from '@angular/core';
import { Libro } from '../../interfaces/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {

  miLibro: Libro =  {
    nombre: 'El señor de los anillos',
    autor: 'J.R.R. Tolkien',
    genero: 'Fantasia',
    paginas: 1000,
    editorial: 'Minotauro',
    idioma: 'Español',
    fecha: '1954'
  };

  mensaje!:string;

  btnDesactivado = false;
  
  resultado=false;
  agregarLibro() {
    this.mensaje = 'Libro agregado...';
  }

  coleccion: Libro[] = [
    {
      nombre: 'El señor de los anillos',
      autor: 'J.R.R. Tolkien',
      genero: 'Fantasia',
      paginas: 1000,
      editorial: 'Minotauro',
      idioma: 'Español',
      fecha: '1954'
    },
    {
      nombre: 'El código Da Vinci',
      autor: 'Dan Brown',
      genero: 'Misterio',
      paginas: 500,
      editorial: 'Planeta',
      idioma: 'Español',
      fecha: '2003'
    },
    {
      nombre: 'La Odisea',
      autor: 'Homero',
      genero: 'Epico',
      paginas: 300,
      editorial: 'Gredos',
      idioma: 'Griego',
      fecha: '800 a.C.'
    }
  ];
  
}
