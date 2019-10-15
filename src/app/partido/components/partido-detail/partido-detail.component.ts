import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PartidosService } from '../../../core/service/partidos/partidos.service';
import { Partido } from '../../../core/models/partido.model';

@Component({
  selector: 'app-partido-detail',
  templateUrl: './partido-detail.component.html',
  styleUrls: ['./partido-detail.component.scss']
})
export class PartidoDetailComponent implements OnInit {
  partido: Partido;

  constructor(
    private route: ActivatedRoute,
    private partidosService: PartidosService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.partido = this.partidosService.getPartido(id);
    });
  }

}
