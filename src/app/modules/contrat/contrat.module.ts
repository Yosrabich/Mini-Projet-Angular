import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratListComponent } from './contrat-list/contrat-list.component';
import { ContratDetailComponent } from './contrat-detail/contrat-detail.component';
import { ContratFormComponent } from './contrat-form/contrat-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ContratListComponent,
    ContratDetailComponent,
    ContratFormComponent
  ],
    imports: [
        CommonModule,
        ContratRoutingModule,
        ReactiveFormsModule
    ]
})
export class ContratModule { }
