import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared';
import { Tarefa } from '../shared';
import { TarefaConcluidaDirective } from '../shared';

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

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault(); //evita de deixar a página recarregar para realizar a ação

    /* Abaixo será impresso uma mensagem de confirmação. O método confirm
    Retorna um valor booleano para a resposta desejada.  */
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
