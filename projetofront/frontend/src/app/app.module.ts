import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { PessoaReadComponent } from './views/components/pessoa/pessoa-read/pessoa-read.component';
import { PessoaService } from './service/pessoa.service';
import { PessoaCreateComponent } from './views/components/pessoa/pessoa-create/pessoa-create.component';
import { PessoaUpdateComponent } from './views/components/pessoa/pessoa-update/pessoa-update.component';
import { PessoaDeleteComponent } from './views/components/pessoa/pessoa-delete/pessoa-delete.component';
import { TarefaReadComponent } from './views/components/tarefa/tarefa-read/tarefa-read.component';
import { TarefaCreateComponent } from './views/components/tarefa/tarefa-create/tarefa-create.component';
import { MatNativeDateModule } from '@angular/material/core';
import { TarefaDeleteComponent } from './views/components/tarefa/tarefa-delete/tarefa-delete.component';
import { TarefaUpdateComponent } from './views/components/tarefa/tarefa-update/tarefa-update.component';
import { ComentarioReadComponent } from './views/components/comentario/comentario-read/comentario-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PessoaReadComponent,
    PessoaCreateComponent,
    PessoaUpdateComponent,
    PessoaDeleteComponent,
    TarefaReadComponent,
    TarefaCreateComponent,
    TarefaDeleteComponent,
    TarefaUpdateComponent,
    ComentarioReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatNativeDateModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
