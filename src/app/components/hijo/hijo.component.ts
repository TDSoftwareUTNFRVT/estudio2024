import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() mensaje: string ='';

  @Output() mensajeHijo = new EventEmitter<string>();

  enviarMensaje(): void {
    this.mensajeHijo.emit('Hola Mundo');
  }
}
