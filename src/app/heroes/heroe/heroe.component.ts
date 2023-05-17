import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
    nombre: string = 'green arrow'
    edad: number = 35

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase()
    }

    descripcionHeroe(): string {
        return `${this.nombre} - ${this.edad}`
    }

    cambiarHeroe(): void {
        this.nombre = 'Batman'
    }

    cambiarEdad(): void {
        this.edad = 45
    }

    resetForm(): void {
        this.nombre = 'green arrow'
        this.edad = 35

        document.querySelectorAll('h1')!.forEach( element => {
            element.innerHTML = '<h1>Desde Angular</h1>'
        })
    }
}