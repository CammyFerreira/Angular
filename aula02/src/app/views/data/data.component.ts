import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  dataHora = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
//barra em pé é um pipe
