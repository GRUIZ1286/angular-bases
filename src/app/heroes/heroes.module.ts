import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';

import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [
        HeroeComponent,
        ListadoComponent,
    ],
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }