import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listar: any [];

  constructor() {
    this.listar = [];
   }

  get transferencias(){
    return this.listar;
  }

  add(transferencia: any){
    this.recursos(transferencia);

    this.listar.push(transferencia)
  }

  private recursos(transferencia: any){
    transferencia.data = new Date();
  }
}
