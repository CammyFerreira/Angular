import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  paisClasseCss = 'meu-pais';
  jinx = 'assets/jinx.jpg';
  ahri = 'assets/ahri.jpg';
  lulu = 'assets/lulu.png';
  jinxClass = 'jinx';
  ahriClass = 'ahri';
  luluClass = 'lulu'


  constructor() { }

  ngOnInit(): void {
  }

  maiusculo(palavra: string){
    return palavra.toUpperCase();
  }

}
