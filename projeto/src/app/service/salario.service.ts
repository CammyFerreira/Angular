import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Salario } from '../model/salario';

@Injectable({
  providedIn: 'root'
})
export class SalarioService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Salario[]> {
    return this.http.get<Salario[]>("http://localhost:3000/salario");
  }

  inserir(salario: Salario): Observable<Salario> {
    return this.http.post<Salario>("http://localhost:3000/salario", salario);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/salario/${id}`);
  }

  atualizar(salario: Salario): Observable<Salario> {
    if(!salario.id) {
        return EMPTY;
    }

    return this.http.put<Salario>(`http://localhost:3000/salario/${salario.id}`, salario);
  }
}
