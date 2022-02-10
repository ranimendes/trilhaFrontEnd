import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { TestesPipeComponent } from './components/testes-pipe/testes-pipe.component';
import { CodigoConvitePipe } from './pipes/codigo-convite.pipe';
import { CadastroCpfPipe } from './pipes/cadastro-cpf.pipe';
import { CadastroCnpjPipe } from './pipes/cadastro-cnpj.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ListaNumerosComponent,
    QuadradoComponent,
    CuboComponent,
    TestesPipeComponent,
    CodigoConvitePipe,
    CadastroCpfPipe,
    CadastroCnpjPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
