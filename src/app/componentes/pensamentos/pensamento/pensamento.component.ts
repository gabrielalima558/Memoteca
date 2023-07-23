import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //com o @Input eu digo que o pensamento vai receber as informações do componente pai
  //o Input eu tive que importar manualmente ali em cima no @angular/core
  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Gabi',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
