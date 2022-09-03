import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-text',
  templateUrl: './change-text.component.html',
  styleUrls: ['./change-text.component.css']
})
export class ChangeTextComponent implements OnInit {

  text = 'Olá, clique em um botão para mudar o texto';

  constructor() { }

  ngOnInit(): void {
  }

  changeText(text: string){
    this.text = text;
  }

}
