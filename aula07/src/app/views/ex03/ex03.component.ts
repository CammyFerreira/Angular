import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css']
})
export class Ex03Component implements OnInit {

  numero1 = 0;
  numero2 = 0;
  resultado = 0;

  constructor() { }

  ngOnInit(): void {
  }

  somar(){
    this.resultado = this.numero1 + this.numero2;
  }

  subtrair(){
    this.resultado = this.numero1 - this.numero2;
  }

  dividir(){
    this.resultado = this.numero1 / this.numero2;
  }

  multiplicar(){
    this.resultado = this.numero1 * this.numero2;
  }

}
