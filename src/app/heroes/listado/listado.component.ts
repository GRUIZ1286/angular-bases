import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Green Arrow', 'Batman', 'Flash', 'Superman', 'Aquaman']
  // heroesBorrados: string[] = []
  heroeBorrado?: string
  borrarUltimoHeroe() {
    // this.heroes.pop()
    // const heroeBorrado = this.heroes.shift()
    // if(heroeBorrado){
    //   this.heroesBorrados.push(heroeBorrado)
    // }
      // this.heroeBorrado = this.heroes.shift() || ''
    // console.log(heroeBorrado);
    this.heroeBorrado = this.heroes.pop()
  }
}
