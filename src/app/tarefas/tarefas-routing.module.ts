
import { Routes } from "@angular/router";

import { ListarTarefaComponent } from "./listar";
import { CadastrarComponent } from "./cadastrar";
import { EditarComponent } from "./editar";


export const TarefasRoutes: Routes = [
  {
    path:'tarefas/listar', //Caso a URL esteja tarefas/listar
    component: ListarTarefaComponent
  },
 /*Caso a URL esteja tarefas/listar o Angular deve
 levar para o ListarTarefaComponent logo o HTML do
 ListarTarefaComponent deverá ser exibido*/

  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
/*Caso a URL seja tarefas o Angula deve levar
para tarefas/listar, logo repete o primeiro path */
  {
    path: 'tarefas/cadastrar',
    component: CadastrarComponent

  },

  {
    path: 'tarefas/editar/:id', // O Id aqoi está relacionado com o tarefas.id da classe tarefa
    component: EditarComponent  // Ele será exibido dinamicamente dependendo da tarefa selecionada para edição
  }

];
