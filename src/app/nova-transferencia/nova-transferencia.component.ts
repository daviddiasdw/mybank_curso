import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor() { }

  @Output() aoTransferir = new EventEmitter<any>();

  conta: number;
  valor: number;

 transferir(){
   console.log("OK")
   const emitir = { conta: this.conta , valor: this.valor}
   this.aoTransferir.emit(emitir);
 }

  ngOnInit(): void {
  }

}
