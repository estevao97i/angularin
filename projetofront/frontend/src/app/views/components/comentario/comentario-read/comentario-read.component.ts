import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-comentario-read',
  templateUrl: './comentario-read.component.html',
  styleUrls: ['./comentario-read.component.css']
})
export class ComentarioReadComponent implements OnInit {

  tarefasLista! : ''


  constructor(private service: TarefaService, router: Router,
    private route: ActivatedRoute) { }

    id_tarefa = ''

  ngOnInit(): void {
    this.id_tarefa = this.route.snapshot.paramMap.get('id')!;
    this.service.findById(this.id_tarefa).subscribe((res: any) => {
      this.tarefasLista = res;
    })
  }

  

}
