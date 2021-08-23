import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-tarefa-delete',
  templateUrl: './tarefa-delete.component.html',
  styleUrls: ['./tarefa-delete.component.css']
})
export class TarefaDeleteComponent implements OnInit {

  id_tarefa = '';

  tarefa: Tarefa = {
    
    id: null,
    titulo: '',
    dataInicio: '',
    dataFim: '',
    dataEfetiva: '',
    status: '',
    idPessoa: '',
    nomePessoa: '',
    comentarios: []
  }

  constructor(private router: Router,
    private route: ActivatedRoute,
    private tarefaservice: TarefaService) { }

  ngOnInit(): void {
    this.id_tarefa = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void{
    this.tarefaservice.findById(this.id_tarefa).subscribe((resposta => {
      this.tarefa = resposta;
    }))
  }

  deletarTarefa():void{
    this.tarefaservice.delete(this.id_tarefa).subscribe((resposta => {
      this.router.navigate(['tarefas'])
      this.tarefaservice.messagem('tarefa deletada :(')
    }))
  }

  cancel():void{
    this.router.navigate(['tarefas'])
  }




}
