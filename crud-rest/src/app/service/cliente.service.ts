import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3000/clientes');
  }

  inserir(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:3000/clientes', cliente);
  }

  //fazer editar e deletar
}
