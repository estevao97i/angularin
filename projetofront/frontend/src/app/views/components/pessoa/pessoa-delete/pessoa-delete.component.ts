import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-delete',
  templateUrl: './pessoa-delete.component.html',
  styleUrls: ['./pessoa-delete.component.css']
})
export class PessoaDeleteComponent implements OnInit {

  id_pessoa = ''

  pessoa: Pessoa = {
    id: null,
    nome : '',
    idade : ''
  }

  constructor(private router: Router,
    private service: PessoaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_pessoa = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void{
    this.service.findById(this.id_pessoa).subscribe((resposta) => {
      this.pessoa = resposta;
    })
  }

  deletar():void{
    this.service.delete(this.id_pessoa).subscribe(resposta => {
      this.router.navigate(['pessoas'])
      this.service.message('liberdade cantou!')
    })
  }
  

  cancel():void{
    this.router.navigate(['pessoas'])
  }

}