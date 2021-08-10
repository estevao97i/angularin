import { HttpClient } from '@angular/common/http';
import { Pessoa } from './../models/pessoa';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Pessoa[]> {
    const url = this.baseUrl + "/pessoas";
    return this.http.get<Pessoa[]>(url);
  }
}
