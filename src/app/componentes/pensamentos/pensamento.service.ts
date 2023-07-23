import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  //com esse root quer dizer que esse serviço poderá ser injetado em qualquer parte da aplicação
  providedIn: 'root'
})
export class PensamentoService {

  //injeção de dependência no Angular é feita através do construtor
  constructor(private http: HttpClient) { }

}
