import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-interp',
  templateUrl: './ex-interp.component.html',
  styleUrls: ['./ex-interp.component.css']
})
export class ExInterpComponent implements OnInit {

  propriedade = 'Teste';
  valor1 = 10;
  valorClasseCss = 'minha-classe';

  constructor() { }

  ngOnInit(): void {
  }

  obterNome(){
    return 'camis';
  }

  somar(n1: number, n2: number){
      return n1 + n2;
  }

}
