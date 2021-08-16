import { Pessoa } from './../../../../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/service/pessoa.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  pessoa: Pessoa = {
    id: null,
    nome : '',
    idade : ''
  }

  nome = new FormControl('', [Validators.minLength(3)])
  idade = new FormControl('', [Validators.minLength(1)])

  constructor(private router: Router,
    private service: PessoaService) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['pessoas'])
  }

  cadastra():void{
    this.service.create(this.pessoa).subscribe((resposta) => {
      this.router.navigate(['pessoas'])
      this.service.message('cadastrou mais um habitante de colatina')
    })
  }

  errorValidNome() {
    if(this.nome.invalid){
      return 'O nome deve ter no minimo 3 digitos po';
    }
    return false;
  }

  errorValidIdade() {
    if(this.idade.invalid){
      return 'bota idade valida ae (1 ou 2 digitos)';
    }
    return false;
  }

}
