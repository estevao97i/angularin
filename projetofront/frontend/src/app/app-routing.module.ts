import { PessoaReadComponent } from './views/components/pessoa/pessoa-read/pessoa-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCreateComponent } from './views/components/pessoa/pessoa-create/pessoa-create.component';
import { PessoaUpdateComponent } from './views/components/pessoa/pessoa-update/pessoa-update.component';
import { PessoaDeleteComponent } from './views/components/pessoa/pessoa-delete/pessoa-delete.component';
import { TarefaReadComponent } from './views/components/tarefa/tarefa-read/tarefa-read.component';
import { TarefaCreateComponent } from './views/components/tarefa/tarefa-create/tarefa-create.component';
import { TarefaDeleteComponent } from './views/components/tarefa/tarefa-delete/tarefa-delete.component';
import { TarefaUpdateComponent } from './views/components/tarefa/tarefa-update/tarefa-update.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'pessoas',
    component: PessoaReadComponent
  },
  {
    path: 'pessoas/create',
    component: PessoaCreateComponent
  },
  {
    path: 'pessoas/update/:id',
    component: PessoaUpdateComponent
  },
  {
    path: 'pessoas/delete/:id',
    component: PessoaDeleteComponent
  },
  {
    path: 'tarefas',
    component: TarefaReadComponent
  },
  {
    path: 'tarefas/create',
    component: TarefaCreateComponent
  },
  {
    path: 'tarefas/delete/:id',
    component: TarefaDeleteComponent
  },
  {
    path: 'tarefas/update/:id',
    component: TarefaUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
