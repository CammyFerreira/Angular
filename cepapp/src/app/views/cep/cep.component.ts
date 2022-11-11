import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = '';
  endereco?: Endereco;


  constructor(private cepService: CepService) { }

  ngOnInit(): void {

  }

  consultarCep(){
    this.cepService.obterEndereco(this.cep).subscribe(endereco => {
      this.endereco = endereco;
    });

  }

}
