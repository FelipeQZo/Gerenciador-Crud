import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { FormsModule } from '@angular/forms';
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar'


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    TarefaService
  ],
  declarations: [
    ListarTarefaComponent,
    CadastrarComponent
  ],

})
export class TarefasModule { }
