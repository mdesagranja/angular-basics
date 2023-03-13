import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
<h1>{{title}}</h1>
<h3>La base es: <strong>{{base}}</strong></h3>

<button (click)="sumar(base);">+ {{base}}</button>
<span>{{numero}}</span>
<button (click)="sumar(-base);">- {{base}}</button>    
    `
})
export class ContadorComponent {
    public title : string = 'Contador App';
    public numero : number = 10;
    public base = 5;
  
    sumar(valor : number)
    {
      this.numero += valor;
    }  
}