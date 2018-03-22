import { Component } from '@angular/core';
import { IContato } from './../interfaces/interface.contato';
import { ContatosService } from '../services/contato.service';

@Component({
    moduleId: module.id,
    templateUrl: 'views/contato.component.html'
})
export class ContatoComponent {

    public contatoSelecionado: IContato;
    public selecionar(item: IContato): void {
        this.contatoSelecionado = item;
    }

    public listaContatos: IContato[];
    constructor(contatosService: ContatosService) {
        this.listaContatos = contatosService.getContatos();
    }

} 