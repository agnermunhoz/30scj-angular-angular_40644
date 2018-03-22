import { Injectable } from '@angular/core';
import { IContato } from './../interfaces/interface.contato'; 
@Injectable()
export class ContatosService {
    public getContatos(): IContato[] {
        return [{ cpf: "000.000.000-00", nome: "João da Silva", telefone: "(11) 99999-8888", email: "joao@dasilva.com.br" },
        { cpf: "111.111.111-11", nome: "Maria Moraes", telefone: "(11) 99999-8888", email: "maria@moraes.com.br" },
        { cpf: "222.222.222-22", nome: "Jose de Jesus", telefone: "(11) 99999-8888", email: "jose@dejesus.com.br" },
        { cpf: "333.333.333-33", nome: "Mario Moreira", telefone: "(11) 99999-8888", email: "mario@moreira.com.br" }
        ];
    }
} 