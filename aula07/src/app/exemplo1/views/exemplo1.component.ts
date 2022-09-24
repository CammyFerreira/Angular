import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo1',
  templateUrl: './exemplo1.component.html',
  styleUrls: ['./exemplo1.component.css']
})
export class Exemplo1Component implements OnInit {

  nome = '';

  constructor() { }

  ngOnInit(): void {
  }

}
