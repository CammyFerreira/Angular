import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-image',
  templateUrl: './change-image.component.html',
  styleUrls: ['./change-image.component.css']
})
export class ChangeImageComponent implements OnInit {

  carro = 'assets/carro.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  changeImage(){
    if(this.carro == 'assets/carro.jpg'){
      this.carro = 'assets/robo.jpg';
    }else{
      this.carro = 'assets/carro.jpg';
    }
  }

}
