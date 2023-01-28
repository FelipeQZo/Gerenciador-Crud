import { Directive, ElementRef, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluidas]'
})
export class TarefaConcluidaDirective implements OnInit{

  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { }
   ngOnInit(): void {
    if (this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through"
    }
  }
   }


