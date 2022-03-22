import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { FormClientComponent } from './form-client/form-client.component';
import { FormImovelComponent } from './form-imovel/form-imovel.component';
import { ClienteAprovadoComponent } from './cliente-aprovado/cliente-aprovado.component';
import { ClienteReprovadoComponent } from './cliente-reprovado/cliente-reprovado.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'form-client', component: FormClientComponent },
  { path: 'form-imovel', component: FormImovelComponent },
  { path: 'cliente-aprovado', component: ClienteAprovadoComponent },
  { path: 'cliente-reprovado', component: ClienteReprovadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
