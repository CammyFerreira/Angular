import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {

  imgs = ['assets/lulu.jpg','assets/akita.jpg', 'assets/pitbull.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
