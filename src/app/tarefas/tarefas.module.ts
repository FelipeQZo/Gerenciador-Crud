import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { FormsModule } from '@angular/forms';
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar';
import { EditarComponent } from './editar';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive'


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
    CadastrarComponent,
    EditarComponent,
    TarefaConcluidaDirective
  ],

})
export class TarefasModule { }
