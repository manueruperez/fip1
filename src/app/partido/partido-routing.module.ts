import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartidoDetailComponent } from './components/partido-detail/partido-detail.component';
import { PartidosComponent } from './components/partidos/partidos.component';


const routes: Routes = [
    {
        path: '',
        component: PartidosComponent
    },
    {
        path: ':id',
        component: PartidoDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class PartidosRoutingModule {}
