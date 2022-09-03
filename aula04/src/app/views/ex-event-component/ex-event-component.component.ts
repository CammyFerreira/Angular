import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-event-component',
  templateUrl: './ex-event-component.component.html',
  styleUrls: ['./ex-event-component.component.css']
})
export class ExEventComponentComponent implements OnInit {

  nome='Camis';

  constructor() { }

  ngOnInit(): void {
  }

  mostrarOla(){
    alert("Olá Mundo!")
  }

  mudarTexto(){
    this.nome = 'Camila';
  }

}
