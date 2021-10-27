import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listar: any [];
  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
    this.listar = [];
   }

  get transferencias(){
    return this.listar;
  }

  all(){
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  add(addtransferencia: Transferencia){
    this.recursos(addtransferencia);

    return this.httpClient.post<Transferencia>(this.url , addtransferencia)
  }

  private recursos(transferencia: any){
    transferencia.data = new Date();
  }
}
