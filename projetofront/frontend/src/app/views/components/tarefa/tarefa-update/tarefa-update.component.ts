import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/service/tarefa.service';
import { Tarefa } from 'src/app/models/tarefa';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-tarefa-update',
  templateUrl: './tarefa-update.component.html',
  styleUrls: ['./tarefa-update.component.css']
})
export class TarefaUpdateComponent implements OnInit {

  idTarefa = ''

  tarefa: Tarefa = {
    id: null,
    titulo: '',
    dataInicio: '',
    dataFim: '',
    dataEfetiva: '',
    status: '',
    idPessoa: '',
    nomePessoa: '',
    comentario: []
  }

  
  constructor(private tarefaservice : TarefaService,
    private router: Router,
    private route: ActivatedRoute) { }
    
    ngOnInit(): void {
      this.idTarefa = this.route.snapshot.paramMap.get('id')!;
      this.findById();
    }
    
    titulo1 = new FormControl('', [Validators.minLength(5)]);
    dataInicial = new FormControl('', [Validators.minLength(2)]);
    horarioInicial = new FormControl('', [Validators.minLength(2)]);
    dataFinal = new FormControl('', [Validators.minLength(2)]);
    horarioFinal = new FormControl('', [Validators.minLength(2)]);
    dataEfetiva = new FormControl('', [Validators.minLength(2)]);
    status1 = new FormControl('', [Validators.minLength(3)]);


  atualizaTarefa():void{
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

  findById():void{
    this.tarefaservice.findById(this.idTarefa).subscribe((resposta) => {
      this.tarefa = resposta;
    })
    }

  cancel():void{
    this.router.navigate(['tarefas']);
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
