
import { Routes } from "@angular/router";
import { ListarTarefaComponent } from "./listar";
import { CadastrarComponent } from "./cadastrar";

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

  }

];
