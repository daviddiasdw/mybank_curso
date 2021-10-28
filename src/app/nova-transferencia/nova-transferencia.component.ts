import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  conta: number;
  valor: number;

  constructor(private service: TransferenciaService, private router: Router) { }

 transferir(){
   console.log("OK")
   const emitir: Transferencia = { conta: this.conta , valor: this.valor}
   this.service.add(emitir).subscribe((resultado) => {
     console.log(resultado)
     this.router.navigateByUrl('extrato')
   });
 }

  ngOnInit(): void {
  }

}
