import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.css']
})
export class TarefaCreateComponent implements OnInit {

  tarefa: Tarefa = {
    id: null,
    titulo: '',
    dataInicio: '',
    dataEfetiva: '',
    dataFim: '',
    status: '',
    nomePessoa: '',
    comentario: ''
  }

  constructor(private router: Router,
    private service: TarefaService) { }

  ngOnInit(): void {
  }

  salvaTarefa():void{
    this.service.create(this.tarefa).subscribe((resposta => {
    this.router.navigate(['tarefas'])
    this.service.messagem('Criada nova tarefa em Colatina')
    }))
  }

  cancel():void{
    this.router.navigate(['tarefas'])
  }

}
