import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        PageNotFoundRoutingModule,
        SharedModule
    ]
})

export class PageNotFoundModule {}
