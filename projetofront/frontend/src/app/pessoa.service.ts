import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/api/tarefas'

  constructor(private http: HttpClient) { }

    listarPessoa() {
      return this.http.get<[]>('${this.pessoasUrl}')
    }  
    
}


