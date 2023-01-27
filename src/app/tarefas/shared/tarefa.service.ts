import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /*Primeiro criar uma função que mostra as tarefas.
  A variavel tarefas recebe o valor do localStorage
 */
  listar(): Tarefa[] {
  	const tarefas = localStorage['tarefas'];
  	return tarefas ? JSON.parse(tarefas) : []; // operador ? : é um if else
  }

  /*Criar uma função que adiciona as tarefas.
  Primeiramente é preciso puxar a lista de todas as
  tarefas existentes para então concatenar a nova tarefa
 */
  cadastrar(tarefa:Tarefa): void{
    const tarefas = this.listar(); //obtem todas as tarefas já listadas
    tarefa.id = new Date().getTime(); // cria um numero único para cada id de cada tarefa
    tarefas.push(tarefa); // adiciona a nova tarefa ao final da lista com o metodo PUSH
    localStorage['tarefas'] = JSON.stringify(tarefas);
    /* Pega as tarefas do localStorage, converte para strings(stringfy) e
     e guarda novamente na variavel tarefas*/
  }
  buscarPorId(id:number): Tarefa{
    const tarefas: Tarefa[] = this.listar(); //obtem todas as tarefas já listadas
    return tarefas.find(tarefa => tarefa.id ===id);
    /*O comando utilitario find busca o id da tarefa que seja igual ao id
    que o user procura*/
  }

  /* Metodo para atualizar as tarefas
  Para fazer esse metodo será necessário conferir se
  o id da tarefa é o mesmo e então atualizar ele */
  atualizar(tarefa: Tarefa): void{
    const tarefas: Tarefa[] = this.listar(); //obtem todas as tarefas já listadas
    tarefas.forEach((obj, index, objs)=> { //
      if(tarefa.id == obj.id){ //verifica se o id da tarefa atualizando é o id de uma existente
        objs[index] = tarefa; // atribuui a tarefa atualizada a tarefa já existente
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas); // atualiza no localStorage
  }

    /* Metodo para remover a tarefa escolhida pelo id
    que o usuário decidir */
  remover(idR: number): void{
    let tarefas: Tarefa[] = this.listar(); //obtem todas as tarefas já listadas
    tarefas = tarefas.filter(tarefa => tarefa.id !== idR)
    /* Comando filter filtra todas as tarefas de acordo com a condição escolhida.
    Ele irá atribuir a variavel tarefas todas as tarefas cujo o id seja diferente
    do idR que o usuário vai digitar*/

    localStorage['tarefas'] = JSON.stringify(tarefas); // atualiza no localStorage
  }


  /*alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  } */

}
