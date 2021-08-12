import { PessoaReadComponent } from './views/components/pessoa/pessoa-read/pessoa-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCreateComponent } from './views/components/pessoa/pessoa-create/pessoa-create.component';
import { PessoaUpdateComponent } from './views/components/pessoa/pessoa-update/pessoa-update.component';
import { PessoaDeleteComponent } from './views/components/pessoa/pessoa-delete/pessoa-delete.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
