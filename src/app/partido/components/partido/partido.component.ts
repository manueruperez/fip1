import {Component, Input, Output, EventEmitter} from '@angular/core';

import { Partido } from '../../../core/models/partido.model';

@Component({
    selector: 'app-partido',
    templateUrl: './partido.component.html',
    styleUrls: ['./partido.component.scss']
})

export class PartidoComponent {
    @Input() partido: Partido;

    @Output() partidoClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    agregar() {
        console.log('añadir');
        this.partidoClicked.emit(this.partido.id);
    }
}
