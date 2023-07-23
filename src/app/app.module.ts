import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //se não importar automaticamento baixe a extensão de auto import aqui do vs code
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
