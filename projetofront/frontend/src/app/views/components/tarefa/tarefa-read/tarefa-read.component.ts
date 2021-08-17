import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-tarefa-read',
  templateUrl: './tarefa-read.component.html',
  styleUrls: ['./tarefa-read.component.css']
})
export class TarefaReadComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    this.findAllTarefas();
  }

  tarefa: Tarefa[] = [];

  displayedColumns: string[] = ['pessoa','id', 'titulo', 'dataInicio', 'dataFim', 'dataEfetiva', 'status' , 'action'];
  dataSource = new MatTableDataSource<Tarefa>(this.tarefa)

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: TarefaService,
    private router: Router) { }

    findAllTarefas():void{
      this.service.findAll().subscribe((resposta => {
        this.tarefa = resposta;
        console.log(resposta)
        this.dataSource = new MatTableDataSource<Tarefa>(this.tarefa)
        this.dataSource.paginator = this.paginator;
      }))
    }
    
    navigateToCreate():void{
      this.router.navigate(['tarefas/create'])
    }

}
