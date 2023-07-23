import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //com o @Input eu digo que o pensamento vai receber as informações do componente pai
  //o Input eu tive que importar manualmente ali em cima no @angular/core
  //esses valores são apenas inicializações
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Gabi',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
