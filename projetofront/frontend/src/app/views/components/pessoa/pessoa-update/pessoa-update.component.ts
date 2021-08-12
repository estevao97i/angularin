import { Pessoa } from './../../../../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from 'src/app/service/pessoa.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.css']
})
export class PessoaUpdateComponent implements OnInit {

  id_pessoa = ''

  pessoa: Pessoa = {
    id: null,
    nome : '',
    idade : ''
  }

  nome = new FormControl('', [Validators.minLength(3)])
  idade = new FormControl('', [Validators.minLength(1)])

  constructor(private router: Router,
    private service: PessoaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_pessoa = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  atualiza():void{
    this.service.update(this.pessoa).subscribe((resposta => {
      this.router.navigate(['pessoas'])
      this.service.message('Updeitou manin!')
    }))
  }

  findById(): void{
    this.service.findById(this.id_pessoa).subscribe((resposta) => {
      this.pessoa = resposta;
    })
  }

  cancel():void{
    this.router.navigate(['pessoas'])
  }


  cadastra():void{
    this.service.create(this.pessoa).subscribe(() => {
      this.router.navigate(['pessoas'])
      this.service.message('cadastrou mais um habitante de colatina')
    }, err =>{

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