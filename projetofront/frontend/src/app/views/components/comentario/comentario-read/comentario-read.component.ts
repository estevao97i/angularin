import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';

@Component({
  selector: 'app-comentario-read',
  templateUrl: './comentario-read.component.html',
  styleUrls: ['./comentario-read.component.css']
})
export class ComentarioReadComponent implements OnInit {

  comentario: Tarefa[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
