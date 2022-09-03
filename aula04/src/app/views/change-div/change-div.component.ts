import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-div',
  templateUrl: './change-div.component.html',
  styleUrls: ['./change-div.component.css']
})
export class ChangeDivComponent implements OnInit {

  some2 = 'divClass';
  some = 'divClass';
  aparece = 'divClass2';

  constructor() { }

  ngOnInit(): void {
  }

  changeStateDiv(classeAba1: string, classeAba2: string, classeAba3: string){
    this.aparece = classeAba1;
    this.some = classeAba2;
    this.some2 = classeAba3;
  }

}
