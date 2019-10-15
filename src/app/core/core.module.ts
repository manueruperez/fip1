import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidosService } from './service/partidos/partidos.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PartidosService
  ]
})
export class CoreModule { }
