import { Component } from '@angular/core';

@Component({//@ da significado para outro código, decorador
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//decorador aplicado aqui, define um componente
  title = 'My first Angular App';//propriedade ou atributo da classe
  frase = 'Meu primeiro app Angular!'

}
//export class - definir uma classe no typeScript
