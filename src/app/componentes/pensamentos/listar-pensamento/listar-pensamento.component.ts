import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  //essa lista virá do backend
  listaPensamentos: Pensamento[] = [];

  //injetar o service de pensamento
  constructor(private service: PensamentoService) { }

  //ngOnInit faz parte do ciclo de vida do componente, nesse caso é chamado assim que o componente é iniciado
  ngOnInit(): void {
    //a lista daqui(this.listaPensamentos) vai receber a lista que vem do observable através do subscribe que notifica
    //sempre que recebe um valor
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
