import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {


  valor1 = 0;
  valor2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

  multiplica(){
    return this.valor1 * this.valor2;
  }

}
