import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.css']
})
export class PessoaReadComponent implements AfterViewInit {

  pessoa: Pessoa[] = [];

  displayedColumns: string[] = ['id', 'nome', 'idade'];
  dataSource = new MatTableDataSource<Pessoa>(this.pessoa);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: PessoaService) { }


  ngAfterViewInit() {
    
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.pessoa = resposta;
      console.log(resposta)
      this.dataSource = new MatTableDataSource<Pessoa>(this.pessoa);
      this.dataSource.paginator = this.paginator;
    }
    )
  }
}

