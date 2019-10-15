import { Injectable } from '@angular/core';

import { Partido } from '../../models/partido.model';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  partidos: Partido[] = [
    {
      id: 1,
      title: 'partido 1',
      image1: 'assets/logos equipos/LOGOS-EQUIPOS/ajax.png',
      image2: 'assets/logos equipos/LOGOS-EQUIPOS/atalanta.png',
      liga: 'la que sea',
      estadio: 'el que sea',
      marcador: '2-0',
      description: 'Esta es la descripcion de este partido'
    },
    {
      id: 2,
      title: 'partido 2',
      image1: 'assets/logos equipos/LOGOS-EQUIPOS/atletico de madrid.png',
      image2: 'assets/logos equipos/LOGOS-EQUIPOS/BarcelonaFC.png',
      liga: 'la que sea',
      estadio: 'el que sea',
      marcador: '2-0',
      description: 'Esta es la descripcion de este partido'
    },
    {
      id: 3,
      title: 'partido 3',
      image1: 'assets/logos equipos/LOGOS-EQUIPOS/BayernMunchenFC.png',
      image2: 'assets/logos equipos/LOGOS-EQUIPOS/borussia dortmund.png',
      liga: 'la que sea',
      estadio: 'el que sea',
      marcador: '2-0',
      description: 'Esta es la descripcion de este partido'
    },
    {
      id: 4,
      title: 'partido 4',
      image1: 'assets/logos equipos/LOGOS-EQUIPOS/RealMadrid.png',
      image2: 'assets/logos equipos/LOGOS-EQUIPOS/ajax.png',
      liga: 'la que sea',
      estadio: 'el que sea',
      marcador: '2-0',
      description: 'Esta es la descripcion de este partido'
    },
    {
      id: 5,
      title: 'partido 5',
      image1: 'assets/logos equipos/LOGOS-EQUIPOS/ajax.png',
      image2: 'assets/logos equipos/LOGOS-EQUIPOS/ajax.png',
      liga: 'la que sea',
      estadio: 'el que sea',
      marcador: '2-0',
      description: 'Esta es la descripcion de este partido'
    },
    {
      id: 6,
      title: 'partido 6',
      image1: 'assets/logos equipos/LOGOS-EQUIPOS/ajax.png',
      image2: 'assets/logos equipos/LOGOS-EQUIPOS/ajax.png',
      liga: 'la que sea',
      estadio: 'el que sea',
      marcador: '2-0',
      description: 'Esta es la descripcion de este partido'
    }
  ];

  constructor() { }

  getAllPartidos() {
    return this.partidos;
  }

  getPartido(id: number) {
    // tslint:disable-next-line: triple-equals
    return this.partidos.find(item => id == item.id);
  }

}

