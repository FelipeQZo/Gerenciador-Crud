import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared';
import { Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],

})
export class ListarTarefaComponent implements OnInit {

  // Para listar todas as é preciso armazenar as tarefas numa variável
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService){}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    /*O NgOnInIt aqui irá sempre executar primeiro a listagem de
    todas as tarefas existentes */
  }


  /* Essa função deve listar todas as tarefas da aplicação
  Ela está chamando a função listar do tarefaService
  Consulte o NgOnInIt*/
  listarTodos(): Tarefa[] {
    return this.tarefaService.listar();
  }



}
