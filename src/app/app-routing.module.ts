import { NgModule } from "@angular/core";
import {Routes,RouterModule } from '@angular/router'
import { TarefasRoutes } from "./tarefas";


export const routes: Routes = [
  {
    path:'',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefasRoutes

];

@NgModule ({
  imports : [ RouterModule.forRoot(routes)], // essa é a rota principal quando a aplicação é iniciada
  exports : [RouterModule]
})

export class AppRoutingModule{}
