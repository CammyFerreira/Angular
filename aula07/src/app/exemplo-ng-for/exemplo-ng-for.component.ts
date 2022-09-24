import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-for',
  templateUrl: './exemplo-ng-for.component.html',
  styleUrls: ['./exemplo-ng-for.component.css']
})
export class ExemploNgForComponent implements OnInit {

  animais = ['gato', 'cão', 'calopsita', 'pogona'];

  filmes = ['Titanic', 'A Orfã', 'Senhor dos Anéis'];
  notas = [9,8,10];

  constructor() { }

  ngOnInit(): void {
  }

}
