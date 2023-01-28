import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm; //


  tarefa: Tarefa;
  /* Variável que vai salvar os cadastros do tipo tarefa. essa variavel não poderá ser nula
  no inicio quando o metodo for chamado (veja ngOnInit)*/
  constructor(
    private tarefaService: TarefaService,
  	private router: Router) { }

  ngOnInit() {
  	this.tarefa = new Tarefa(); //instancia uma tarefa genérica para que o valor não seja nulo no inicio
  }


  // Abaixo metodo de cadastro que chama o metodo cadastrar() do tarefaService
  /*Se o formTarefa tiver algum erro de validaçao (logo formTarefa.form.valid=)
  O metodo não será chamado e não haverá cadastro*/

  cadastrar(): void {
    console.log (this.formTarefa)
    if (this.formTarefa.form.valid) {
  	  this.tarefaService.cadastrar(this.tarefa); // método cadastrar() é chamado do tarefa.service
  	  this.router.navigate(["/tarefas"]);       // passando como parametro variavel tarefa
    }
  }

}
