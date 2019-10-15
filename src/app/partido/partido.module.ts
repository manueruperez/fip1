import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidoComponent } from './components/partido/partido.component';
import { PartidoDetailComponent } from './components/partido-detail/partido-detail.component';
import { PartidosComponent } from './components/partidos/partidos.component';

import { PartidosRoutingModule } from './partido-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        PartidoComponent,
        PartidoDetailComponent,
        PartidosComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        PartidosRoutingModule
    ]
})

export class PartidoModule {

}
