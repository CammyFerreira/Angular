import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex06',
  templateUrl: './ex06.component.html',
  styleUrls: ['./ex06.component.css']
})
export class Ex06Component implements OnInit {

  titulos = ['Brasil', 'Canadá', 'Inglaterra'];
  conteudos = ['eleições serão dia 02/10 neste domingo', 'inverno mais rigoroso dos últimos 10 anos', 'Betinha assumiu o trono aos 25 anos'];

  constructor() { }

  ngOnInit(): void {
  }

}
