import { PessoaReadComponent } from './views/components/pessoa/pessoa-read/pessoa-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCreateComponent } from './views/components/pessoa/pessoa-create/pessoa-create.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
