import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
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

  atualizar(cliente: Cliente): Observable<Cliente>{
    if(!cliente.id){
      return EMPTY; //cancelou, retornar nada
    }
    return this.http.put<Cliente>(`http://localhost:3000/clientes/${cliente.id}`, cliente);
  }

  deletar(id: number): Observable<any>{
    return this.http.delete(`http://localhost:3000/clientes/${id}`);
  }

}
