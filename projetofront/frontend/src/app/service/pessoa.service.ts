import { HttpClient } from '@angular/common/http';
import { Pessoa } from './../models/pessoa';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Pessoa[]> {
    const url = this.baseUrl + "/pessoas";
    return this.http.get<Pessoa[]>(url);
  }

  create(pessoa: Pessoa):Observable<Pessoa> {
    const url = this.baseUrl + "/pessoas";
    return this.http.post<Pessoa>(url, pessoa);
  }

  message(mensagem: String):void {
    this.snack.open(`${mensagem}`, 'blz', {
      horizontalPosition: 'end',
      verticalPosition: 'top', 
      duration: 4000
    })
  }
}
