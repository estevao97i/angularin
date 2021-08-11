import { Pessoa } from './../../../../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/service/pessoa.service';

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

}
