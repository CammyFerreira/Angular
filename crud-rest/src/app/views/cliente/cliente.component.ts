import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  listaClientes: Cliente[] = [];
  cliente?: Cliente;
  estaEditando = false;

  constructor(private clientService: ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.clientService.listar().subscribe(clientes => {
      this.listaClientes = clientes;
    });
  }

  novo(){
    this.cliente = new Cliente();
    this.estaEditando = false;
  }

  cancelar(){
    this.cliente = undefined;
  }

  salvar(){
    if(!this.cliente){
      return;
    }

    if(!this.estaEditando){
      this.clientService.inserir(this.cliente).subscribe(cliente => {
      this.listar();
      this.cancelar();
      });

    }else{
      this.clientService.atualizar(this.cliente).subscribe(cliente => {
        this.listar();
        this.cancelar();
    });
  }
}

  deletar(id?: number){
    if(!id){
      return;
    }

    const resposta = confirm("Esse cliente será excluído. OK?")

    if(resposta){
      this.clientService.deletar(id).subscribe(() => {
        this.listar();
        this.cancelar();
      });
    }else{
      this.cliente = undefined;
    }
  }

  selecionar(cliente: Cliente){
    this.cliente = cliente;
    this.estaEditando = true;
  }
}
