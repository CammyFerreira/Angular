import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  maiusculo(palavra: string){
    return palavra.toUpperCase();
  }

}
