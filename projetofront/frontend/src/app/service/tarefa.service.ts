import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../models/tarefa';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Tarefa[]>{
    const url = this.baseUrl + "/tarefas";
    return this.http.get<Tarefa[]>(url);
  }

  findById(id: any):Observable<Tarefa>{
    const url = this.baseUrl + "/tarefas/" + id;
    return this.http.get<Tarefa>(url);
  }

  delete(id: any):Observable<void>{
    const url = this.baseUrl + "/tarefas/" +id;
    return this.http.delete<void>(url)
  }

  update(tarefa: Tarefa):Observable<Tarefa>{
    const url = this.baseUrl + "/tarefas";
    return this.http.put<Tarefa>(url, tarefa);
  }

  create(tarefa: Tarefa):Observable<Tarefa>{
    const url = this.baseUrl + "/tarefas";
    return this.http.post<Tarefa>(url, tarefa);
  }

  messagem(mensagem: String):void {
    this.snack.open(`${mensagem}`, 'tabom',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }


}
