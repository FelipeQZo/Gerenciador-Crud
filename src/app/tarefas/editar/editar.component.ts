import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
  	private route: ActivatedRoute,
  	private router: Router)
    {}

  ngOnInit() {
    /* Na linha abaixo busca-se o parametro id da variavel tarefa
    usando o objeto snapshots.params do Route */
  	const id = +this.route.snapshot.params['id'];

    /*Agora que já tem o Id chama o metodo buscarPoriD do tarefaService
    usando o Id descorberto acima */
	  this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) { // garante que o formulário está válido
	    this.tarefaService.atualizar(this.tarefa); // chama o metodo atualizar passando como parâmetro a tarefa em questão
	    this.router.navigate(['/tarefas']);
    }
  }

}
