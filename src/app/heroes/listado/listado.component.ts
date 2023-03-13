import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes : string[] = ['Spiderman', 'Ironman', 'Homero Simpson'];
  ultimoBorrado : string = '';

  borrarHeroe()
  {
    console.log("Borrando...");
    this.ultimoBorrado = this.heroes.shift() || "";
  }
}
