import { HttpClient } from '@angular/common/http';
import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { Tarefa } from 'src/app/models/tarefa';
import { PessoaService } from 'src/app/service/pessoa.service';
import { TarefaService } from 'src/app/service/tarefa.service';
import * as moment from 'moment';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.css']
})
export class TarefaCreateComponent implements OnInit {

  pessoas: Pessoa[] = [];

  horarioInicio: String = '';
  milesimoInicio: String = '';
  horarioFim: String = '';
  milesimoFim: String = '';

  tarefa: Tarefa = {
    id: null,
    titulo: '',
    dataInicio: '',
    dataEfetiva: '',
    dataFim: '',
    status: '',
    idPessoa: '',
    nomePessoa: '',
    comentario: ''
  }

  constructor(private router: Router,
    private tarefaservice: TarefaService,
    private pessoaservice: PessoaService) { }

  ngOnInit(): void {
    this.listaPessoa();
  }

  titulo1 = new FormControl('', [Validators.minLength(5)]);
  dataInicial = new FormControl('', [Validators.minLength(8)]);
  horarioInicial = new FormControl('', [Validators.minLength(5)]);
  dataFinal = new FormControl('', [Validators.minLength(8)]);
  horarioFinal = new FormControl('', [Validators.minLength(5)]);
  dataEfetiva = new FormControl('', [Validators.minLength(8)]);
  status1 = new FormControl('', [Validators.minLength(5)]);


  salvaTarefa():void{
    let svDataInicio: moment.Moment = moment.utc(this.tarefa.dataInicio).local();
    // 2021-08-17T16:38:17.770+00:00
    this.tarefa.dataInicio = svDataInicio.format('YYYY-MM-DD');

    let svDataFim: moment.Moment = moment.utc(this.tarefa.dataFim).local();
    this.tarefa.dataFim = svDataFim.format('YYYY-MM-DD');


    this.tarefaservice.create(this.tarefa).subscribe((resposta => {
    console.log(resposta)
    this.router.navigate(['tarefas']);
    this.tarefaservice.messagem('Criada nova tarefa em Colatina');
    }))
  }

  cancel():void{
    this.router.navigate(['tarefas']);
  }

  listaPessoa():void{
    this.pessoaservice.findAll().subscribe((res => {
      this.pessoas = res;
    }))
  }

}
