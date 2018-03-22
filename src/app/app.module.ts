import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { appRoutes } from './rotas/app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SubLista } from './filters/sublista.filter'; 

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ErroComponent } from './erro/erro.component';
import { ContatosService } from './services/contato.service';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  declarations: [AppComponent,
    MenuComponent,
    HomeComponent,
    ContatoComponent,
    ErroComponent,
    SubLista],
  providers: [ContatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
