import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormClientComponent } from './form-client/form-client.component';
import { FormImovelComponent } from './form-imovel/form-imovel.component';
import { ClienteAprovadoComponent } from './cliente-aprovado/cliente-aprovado.component';
import { ClienteReprovadoComponent } from './cliente-reprovado/cliente-reprovado.component';

@NgModule({
  declarations: [
    TelaInicialComponent,
    FormClientComponent,
    FormImovelComponent,
    ClienteAprovadoComponent,
    ClienteReprovadoComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatNativeDateModule,
    MatOptionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class PagesModule {}
