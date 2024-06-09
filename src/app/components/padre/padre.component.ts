import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
    envioMensajeHijo: string = 'Hola Mundo';

    recibirMensaje(event: string): void {
        console.log(event);
    }
}
