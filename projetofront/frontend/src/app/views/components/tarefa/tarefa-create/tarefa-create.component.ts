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
  minutoInicio: String = '';
  horarioFim: String = '';
  minutoFim: String = '';

  tarefa: Tarefa = {
    id: null,
    titulo: '',
    dataInicio: '',
    dataEfetiva: '',
    dataFim: '',
    status: '',
    idPessoa: '',
    nomePessoa: '',
    comentarios: []
  }

  constructor(private router: Router,
    private tarefaservice: TarefaService,
    private pessoaservice: PessoaService) { }

  ngOnInit(): void {
    this.listaPessoa();
  }

  titulo1 = new FormControl('', [Validators.minLength(5)]);
  dataInicial = new FormControl('', [Validators.minLength(2)]);
  horarioInicial = new FormControl('', [Validators.minLength(2)]);
  dataFinal = new FormControl('', [Validators.minLength(2)]);
  horarioFinal = new FormControl('', [Validators.minLength(2)]);
  dataEfetiva = new FormControl('', [Validators.minLength(2)]);
  status1 = new FormControl('', [Validators.minLength(3)]);


  salvaTarefa():void{
    let svDataInicio: moment.Moment = moment.utc(this.tarefa.dataInicio).local();
    this.tarefa.dataInicio = svDataInicio.format('DD-MM-YYYY') + ' ' + this.horarioInicial;

    let svDataFim: moment.Moment = moment.utc(this.tarefa.dataFim).local();
    this.tarefa.dataFim = svDataFim.format('DD-MM-YYYY') + ' ' + this.horarioFinal;

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

  errorValidTitulo() {
    if (this.titulo1.invalid) {
      return 'O titulo deve ter entre 5 e 20 caracteres!';
    }
    return false;
  }

  errorValidDataInicial() {
    if (this.dataInicial.invalid) {
      return 'Data invalida';
    }
    return false;
  }

  errorValidHorarioInicial() {
    if (this.horarioInicial.invalid) {
      return 'Horario invalido';
    }
    return false;
  }

  errorValidDataFinal() {
    if (this.dataFinal.invalid) {
      return 'Data invalida';
    }
    return false;
  }

  errorValidHorarioFinal() {
    if (this.horarioFinal.invalid) {
      return 'Horario invalido';
    }
    return false;
  }

}
