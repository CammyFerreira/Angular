import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component implements OnInit {

  paises = ['Brasil', 'Canadá', 'Irlanda', 'México']

  constructor() { }

  ngOnInit(): void {
  }

  alerta(pais: string){
    alert(pais);
  }

}
