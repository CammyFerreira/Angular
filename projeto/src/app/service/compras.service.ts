import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  { Compras }   from '../model/compras';
import   { EMPTY }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Compras[]> {
    return this.http.get<Compras[]>("http://localhost:3000/compras");
  }

  inserir(compras: Compras): Observable<Compras> {
    return this.http.post<Compras>("http://localhost:3000/compras", compras);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/compras/${id}`);
  }
  
  atualizar(compras: Compras): Observable<Compras> {
    if(!compras.id) {
        return EMPTY;
    }

    return this.http.put<Compras>(`http://localhost:3000/compras/${compras.id}`, compras);
  }
}
