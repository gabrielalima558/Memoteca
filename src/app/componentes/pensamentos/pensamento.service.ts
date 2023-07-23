import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  //com esse root quer dizer que esse serviço poderá ser injetado em qualquer parte da aplicação
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos'
  //injeção de dependência no Angular é feita através do construtor
  constructor(private http: HttpClient) { }

  //importar o HttpClientModule no app.module.ts pra dar certo isso dentro do listar
  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

}
