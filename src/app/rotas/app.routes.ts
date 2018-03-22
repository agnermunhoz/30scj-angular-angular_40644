import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContatoComponent } from '../contato/contato.component';
import { ErroComponent } from '../erro/erro.component';
export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "contatos", component: ContatoComponent },
    { path: "home", component: HomeComponent },
    { path: "**", component: ErroComponent }
]; 