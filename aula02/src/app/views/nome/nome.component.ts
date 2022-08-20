import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.css']
})
export class NomeComponent implements OnInit {

  nome = 'Camila';

  constructor() {

  }//executa uma vez quando o componente é criado

  ngOnInit(): void {//toda vez que o componente aparecer ele executa

  }

}
//dentro de uma classe função não precisa da palavra function
