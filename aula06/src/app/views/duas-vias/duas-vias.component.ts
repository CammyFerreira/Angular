import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duas-vias',
  templateUrl: './duas-vias.component.html',
  styleUrls: ['./duas-vias.component.css']
})
export class DuasViasComponent implements OnInit {

  nome = '';
  sobrenome = '';

  valor1 = 0;
  valor2 = 0;

  color = '';

  generoFilme = '';

  imagem = '';

  contatoTelefone = false;
  contatoEmail = false;

  classeHeroi = '';

  constructor() { }

  ngOnInit(): void {
  }

  limparNome(){
    this.nome = '';
  }

  obterNomeCompleto(){
    return (this.nome + ' ' + this.sobrenome).toUpperCase();
  }


}
